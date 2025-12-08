import os
import re
import urllib.request
import hashlib
import random

# Configuration
EXTENSIONS = {'.tsx', '.ts', '.jsx', '.js'}
IMAGE_DIR = 'public/assets/images'
URL_REGEX = r'https://images\.unsplash\.com/[^\'"\s`)]+'

# Helper to get existing images
def get_existing_images():
    if not os.path.exists(IMAGE_DIR):
        return []
    return [os.path.join('/assets/images', f) for f in os.listdir(IMAGE_DIR) if f.endswith('.jpg')]

# Helper to download
def download_image(url, folder, existing_images):
    try:
        hash_obj = hashlib.md5(url.encode())
        file_hash = hash_obj.hexdigest()[:12]
        filename = f"img_{file_hash}.jpg"
        filepath = os.path.join(folder, filename)
        
        # Check if exists
        if not os.path.exists(filepath):
            print(f"Downloading {url}...")
            opener = urllib.request.build_opener()
            opener.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)')]
            urllib.request.install_opener(opener)
            urllib.request.urlretrieve(url, filepath)
        
        return f"/assets/images/{filename}"
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        # Return a random existing image as fallback if available
        if existing_images:
            fallback = random.choice(existing_images)
            print(f"Using fallback {fallback}")
            return fallback
        return url

# Main Scan
def scan_and_replace():
    if not os.path.exists(IMAGE_DIR):
        os.makedirs(IMAGE_DIR)
    
    # Pre-populate existing images for fallback
    existing_images = get_existing_images()

    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in ['node_modules', 'dist', 'public', '.git', '.gemini']]
        
        for file in files:
            if any(file.endswith(ext) for ext in EXTENSIONS):
                path = os.path.join(root, file)
                if 'migrate_assets' in path: continue
                
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    urls = set(re.findall(URL_REGEX, content))
                    if not urls: continue
                    
                    new_content = content
                    modified = False
                    
                    # Refresh existing images list occasionally or just pass reference
                    current_pool = get_existing_images() or existing_images
                    
                    for url in urls:
                        local_path = download_image(url, IMAGE_DIR, current_pool)
                        if local_path != url:
                            new_content = new_content.replace(url, local_path)
                            modified = True
                    
                    if modified:
                        print(f"Updating {path}...")
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                except Exception as e:
                    print(f"Error processing {path}: {e}")

if __name__ == "__main__":
    scan_and_replace()
