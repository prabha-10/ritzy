
import { 
  Home, 
  Tv, 
  ShieldCheck, 
  Lightbulb, 
  Speaker, 
  Wind,
  Droplets,
  Building,
  Zap,
  Wifi,
  Battery,
  Mic,
  Smartphone,
  Sun
} from 'lucide-react';
import { Service, Product, ServiceCategory, NavItem, PortfolioProject, ServiceDetailData, ProductDetailData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    id: 'home-automation',
    title: 'Whole Home Automation',
    subtitle: 'Seamlessly integrate every aspect of your home.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80',
    features: [
      { title: 'Smart Lighting', description: 'Adaptive lighting that follows your rhythm.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600' },
      { title: 'Climate Control', description: 'Perfect temperature in every room, always.', image: 'https://images.unsplash.com/photo-1616594039964-408e4044adf6?auto=format&fit=crop&w=600' },
      { title: 'Smart Security', description: '24/7 monitoring and intelligent alerts.', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=600' },
      { title: 'Automated Shades', description: 'Natural light management at a touch.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600' },
      { title: 'Access Control', description: 'Secure keyless entry for your family.', image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=600' },
      { title: 'Energy Monitoring', description: 'Optimize your consumption in real-time.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600' }
    ]
  },
  {
    id: 'home-theater',
    title: 'Cinematic Home Theater',
    subtitle: 'Experience the movies like never before, right at home.',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=2000&q=80',
    features: [
      { title: '4K Laser Projectors', description: 'Crystal clear imagery on massive screens.', image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b13?auto=format&fit=crop&w=600' },
      { title: 'Dolby Atmos Audio', description: 'Immersive 3D sound that moves around you.', image: 'https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&w=600' },
      { title: 'Acoustic Treatment', description: 'Studio-grade sound isolation and clarity.', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600' },
      { title: 'Cinema Seating', description: 'Ergonomic luxury recliners for hours of comfort.', image: 'https://images.unsplash.com/photo-1517604931442-71053e3e2f28?auto=format&fit=crop&w=600' },
      { title: 'Star Ceiling', description: 'Fiber optic acoustic panels for ambiance.', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600' },
      { title: 'Media Server', description: 'Your entire movie library at a click.', image: 'https://images.unsplash.com/photo-1522869635100-1f4906a1f92d?auto=format&fit=crop&w=600' }
    ]
  },
  {
    id: 'living-av',
    title: 'Living Room AV',
    subtitle: 'Premium audio and visual solutions for your living space.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=2000&q=80',
    features: [
      { title: 'Hidden Displays', description: 'TVs that disappear when not in use.', image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600' },
      { title: 'Hi-Fi Audio', description: 'Audiophile-grade sound systems.', image: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?auto=format&fit=crop&w=600' },
      { title: 'Media Streaming', description: 'All your content in one place.', image: 'https://images.unsplash.com/photo-1522869635100-1f4906a1f92d?auto=format&fit=crop&w=600' },
      { title: 'Gaming Integration', description: 'Low latency setups for the win.', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600' },
      { title: 'Soundbars', description: 'Sleek audio that packs a punch.', image: 'https://images.unsplash.com/photo-1574675909226-313161776793?auto=format&fit=crop&w=600' },
      { title: 'Voice Control', description: 'Hands-free media management.', image: 'https://images.unsplash.com/photo-1589440615431-1963a7c50269?auto=format&fit=crop&w=600' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Automation',
    subtitle: 'Intelligent solutions for modern businesses and offices.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    features: [
        { title: 'Smart Conference', description: 'One-touch video calls and presentations.', image: 'https://images.unsplash.com/photo-1517502884422-41e1f09d88bc?auto=format&fit=crop&w=600' },
        { title: 'Access Control', description: 'Secure entry management for employees.', image: 'https://images.unsplash.com/photo-1618090584176-715c7f0a910e?auto=format&fit=crop&w=600' },
        { title: 'Smart HVAC', description: 'Automated climate control for large spaces.', image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=600' },
        { title: 'Energy Management', description: 'Optimize consumption and reduce costs.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600' },
        { title: 'Sound Masking', description: 'Privacy solutions for open offices.', image: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?auto=format&fit=crop&w=600' },
        { title: 'Digital Signage', description: 'Dynamic displays for communication.', image: 'https://images.unsplash.com/photo-1517604931442-71053e3e2f28?auto=format&fit=crop&w=600' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'smart-living',
    title: 'Smart Living',
    description: 'Seamlessly integrate control over lighting, climate, and entertainment.',
    category: ServiceCategory.HOME_AUTOMATION,
    icon: Home,
    features: ['Voice Control', 'Automated Scenes', 'Energy Monitoring'],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&w=800&q=80', // Modern Luxury Living Room
  },
  {
    id: 'climate-control',
    title: 'Climate & Air',
    description: 'Maintain perfect air quality and temperature automatically.',
    category: ServiceCategory.HOME_AUTOMATION,
    icon: Wind,
    features: ['Air Purification', 'Humidity Control', 'Smart Scheduling'],
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80', // Clean Interior / AC
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Immersive audio and visual experiences in every room.',
    category: ServiceCategory.HOME_THEATER,
    icon: Speaker,
    features: ['Multi-room Audio', '4K Projection', 'Hidden Speakers'],
    image: 'https://images.unsplash.com/photo-1593784697956-14d51b3789dc?auto=format&fit=crop&w=800&q=80', // Home Cinema
  },
  {
    id: 'security',
    title: 'Smart Security',
    description: 'Advanced surveillance and access control for peace of mind.',
    category: ServiceCategory.EXTERIOR,
    icon: ShieldCheck,
    features: ['Face Recognition', 'Smart Locks', 'Remote Monitoring'],
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=800&q=80', // Security Camera
  },
  {
    id: 'garden',
    title: 'Garden & Pool',
    description: 'Automated irrigation and pool management systems.',
    category: ServiceCategory.EXTERIOR,
    icon: Droplets,
    features: ['Soil Sensors', 'Pool Heating', 'Outdoor Lighting'],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', // Luxury Pool
  },
  {
    id: 'commercial-auto',
    title: 'Commercial',
    description: 'Complete automation for boardrooms and office buildings.',
    category: ServiceCategory.COMMERCIAL,
    icon: Building,
    features: ['Video Conferencing', 'Lighting Schedules', 'Access Control'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80', // Corporate Boardroom
  }
];

// Detailed data for Service Detail Pages
export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'smart-living': {
    id: 'smart-living',
    title: 'Smart Living',
    subtitle: 'A Home That Thinks for You',
    heroImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&w=2000&q=80',
    introTitle: 'Orchestrate your entire home environment with a single touch.',
    introText: 'Smart Living elevates your daily routine by unifying lighting, shades, climate, and entertainment into a single, intuitive system. Whether you are waking up to a gentle sunrise scene or securing your home for the night, Ritzy ensures that your environment adapts to your needs effortlessly.',
    features: [
      {
        title: 'Lighting Control',
        description: 'Create the perfect ambiance for any occasion with dimmable, color-tunable lighting scenes that can be recalled instantly.',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800'
      },
      {
        title: 'Automated Shading',
        description: 'Protect your interiors and manage natural light with motorized shades that adjust automatically to the sun\'s position.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800'
      },
      {
        title: 'Voice Integration',
        description: 'Hands-free control for when your hands are full. Simply ask your home to turn on the lights, play music, or set the temperature.',
        image: 'https://images.unsplash.com/photo-1589440615431-1963a7c50269?auto=format&fit=crop&w=800'
      }
    ]
  },
  'climate-control': {
    id: 'climate-control',
    title: 'Climate & Air',
    subtitle: 'Perfect Comfort, Every Season',
    heroImage: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=2000&q=80',
    introTitle: 'Breathe easier with intelligent environmental control.',
    introText: 'Maintain the ideal temperature and humidity levels in every room of your house. Our smart climate systems learn your preferences and adjust automatically to ensure comfort while maximizing energy efficiency.',
    features: [
      {
        title: 'Smart Thermostats',
        description: 'Precision temperature control that learns your schedule and adjusts to occupancy.',
        image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800'
      },
      {
        title: 'Air Quality Monitoring',
        description: 'Sensors detect pollutants and allergens, automatically activating filtration systems to keep your air fresh.',
        image: 'https://images.unsplash.com/photo-1616594039964-408e4044adf6?auto=format&fit=crop&w=800'
      },
      {
        title: 'Humidity Control',
        description: 'Protect your artwork, wood floors, and personal health by maintaining optimal humidity levels year-round.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800'
      }
    ]
  },
  'entertainment': {
    id: 'entertainment',
    title: 'Entertainment',
    subtitle: 'Immersive Audio & Video',
    heroImage: 'https://images.unsplash.com/photo-1593784697956-14d51b3789dc?auto=format&fit=crop&w=2000&q=80',
    introTitle: 'Cinema-quality experiences in the comfort of your home.',
    introText: 'From dedicated home theaters to whole-home audio distribution, we deliver crystal-clear sound and stunning visuals. Enjoy your favorite movies, music, and sports with technology that rivals the best commercial venues.',
    features: [
      {
        title: 'Whole-Home Audio',
        description: 'Stream music to every room in the house, with discreet architectural speakers that blend into your decor.',
        image: 'https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&w=800'
      },
      {
        title: 'Dedicated Home Cinema',
        description: 'Experience movies as the director intended with 4K laser projection, Dolby Atmos sound, and custom acoustical treatment.',
        image: 'https://images.unsplash.com/photo-1517604931442-71053e3e2f28?auto=format&fit=crop&w=800'
      },
      {
        title: 'Media Distribution',
        description: 'Centralize your video sources and watch anything on any TV in the house, instantly.',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800'
      }
    ]
  },
  'security': {
    id: 'security',
    title: 'Smart Security',
    subtitle: 'Peace of Mind, redefined',
    heroImage: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=2000&q=80',
    introTitle: 'Advanced protection for your family and property.',
    introText: 'Our integrated security solutions go beyond simple alarms. We combine high-definition surveillance, smart access control, and automated deterrents to create a robust safety shield around your home.',
    features: [
      {
        title: 'Intelligent Surveillance',
        description: 'AI-powered cameras distinguish between people, pets, and vehicles, sending you only the alerts that matter.',
        image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=800'
      },
      {
        title: 'Smart Locks & Access',
        description: 'Manage entry for family, guests, and service providers remotely. Receive notifications whenever a door is unlocked.',
        image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=800'
      },
      {
        title: 'Perimeter Defense',
        description: 'Automated lighting and motion sensors create a deterrent barrier before an intruder even reaches your home.',
        image: 'https://images.unsplash.com/photo-1563310805-5f58f5720032?auto=format&fit=crop&w=800'
      }
    ]
  },
  'garden': {
    id: 'garden',
    title: 'Garden & Pool',
    subtitle: 'Your Outdoor Oasis, Automated',
    heroImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=80',
    introTitle: 'Extend your smart living experience to the outdoors.',
    introText: 'Create the perfect outdoor retreat with automated pool controls, landscape lighting, and weather-based irrigation. Whether you are hosting a summer party or relaxing by the fire pit, control it all from your phone.',
    features: [
      {
        title: 'Pool & Spa Control',
        description: 'Set water temperature, activate jets, and control lighting for your pool and spa, ensuring it is ready when you are.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800'
      },
      {
        title: 'Landscape Lighting',
        description: 'Enhance curb appeal and safety with automated path lights and spotlights that turn on at sunset.',
        image: 'https://images.unsplash.com/photo-1558468836-6640df250c54?auto=format&fit=crop&w=800'
      },
      {
        title: 'Smart Irrigation',
        description: 'Save water and keep your lawn lush with sprinkler systems that adjust based on local weather forecasts.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800'
      }
    ]
  },
  'commercial-auto': {
    id: 'commercial-auto',
    title: 'Commercial',
    subtitle: 'Intelligent Business Solutions',
    heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80',
    introTitle: 'Efficiency, collaboration, and control for the modern workplace.',
    introText: 'Streamline operations and enhance productivity with our commercial automation systems. From impressive boardrooms to energy-efficient building management, we provide the tools you need to run a smarter business.',
    features: [
      {
        title: 'Video Conferencing',
        description: 'Start meetings instantly with one-touch systems that integrate video, audio, and room control.',
        image: 'https://images.unsplash.com/photo-1517502884422-41e1f09d88bc?auto=format&fit=crop&w=800'
      },
      {
        title: 'Building Management',
        description: 'Centralized control of HVAC, lighting, and shading to optimize energy usage and reduce operational costs.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800'
      },
      {
        title: 'Access Control',
        description: 'Secure your premises with scalable access solutions for employees and visitors, fully integrated with your security system.',
        image: 'https://images.unsplash.com/photo-1618090584176-715c7f0a910e?auto=format&fit=crop&w=800'
      }
    ]
  }
};

export const PRODUCTS: Product[] = [
  // --- Home Automation ---
  {
    id: 'lightings-curtains',
    name: 'Lightings & Curtains',
    category: 'Home Automation',
    description: 'Integrated control for automated lighting scenes and motorized window treatments.',
    image: 'https://images.unsplash.com/photo-1505691938895-1cd58d3f1330?auto=format&fit=crop&w=800&q=80' // Curtains
  },
  {
    id: 'tyba',
    name: 'Tyba',
    category: 'Home Automation',
    description: 'Refined architectural keypads and touch interfaces for modern interiors.',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80' // Minimal switch
  },
  {
    id: 'one-touch',
    name: 'One Touch',
    category: 'Home Automation',
    description: 'Simplifying smart home control with intuitive single-touch panels.',
    image: 'https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&w=800&q=80' // Tablet control
  },
  {
    id: 'blacknova',
    name: 'Blacknova',
    category: 'Home Automation',
    description: 'Luxury design keypads merging Italian aesthetics with advanced technology.',
    image: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&w=800&q=80' // Stylish wall
  },
  {
    id: 'burglar-alarm',
    name: 'Burglar Alarm',
    category: 'Home Automation',
    description: 'Robust intrusion detection systems to secure your property 24/7.',
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&w=800&q=80' // Alarm panel
  },
  {
    id: 'cctv',
    name: 'CCTV',
    category: 'Home Automation',
    description: 'High-definition surveillance cameras with remote viewing capabilities.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=800&q=80' // Camera
  },
  {
    id: 'door-intercom',
    name: 'Door Intercom',
    category: 'Home Automation',
    description: 'Smart video intercoms for secure and convenient visitor access.',
    image: 'https://images.unsplash.com/photo-1529338296731-c4280a44fc48?auto=format&fit=crop&w=800&q=80' // Door entry
  },
  {
    id: 'digital-lock',
    name: 'Digital Lock',
    category: 'Home Automation',
    description: 'Keyless entry solutions offering biometric and code access.',
    image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=800&q=80' // Smart lock
  },

  // --- Home Theater ---
  {
    id: 'ascendo',
    name: 'Ascendo',
    category: 'Home Theater',
    description: 'World-class immersive audio systems for the ultimate cinema experience.',
    image: 'https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&w=800&q=80' // Speaker
  },
  {
    id: 'speakercraft-ht',
    name: 'Speakercraft',
    category: 'Home Theater',
    description: 'Premium architectural speakers designed for performance and aesthetics.',
    image: 'https://images.unsplash.com/photo-1589440615431-1963a7c50269?auto=format&fit=crop&w=800&q=80' // Speaker detail
  },
  {
    id: 'projectors',
    name: 'Projectors',
    category: 'Home Theater',
    description: '4K and 8K laser projection for true-to-life big screen visuals.',
    image: 'https://images.unsplash.com/photo-1517604931442-71053e3e2f28?auto=format&fit=crop&w=800&q=80' // Projector room
  },
  {
    id: 'acoustic-screen',
    name: 'Acoustic Screen',
    category: 'Home Theater',
    description: 'Acoustically transparent screens that let sound pass through flawlessly.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80' // Cinema screen
  },

  // --- Living Room Home Theater ---
  {
    id: 'xcase',
    name: 'Xcase',
    category: 'Living Room AV',
    description: 'High-fidelity speakers optimized for living room acoustics.',
    image: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?auto=format&fit=crop&w=800&q=80' // Living room speaker
  },
  {
    id: 'speakercraft-lr',
    name: 'Speakercraft',
    category: 'Living Room AV',
    description: 'Discreet audio solutions that blend into your living space.',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80' // Speaker
  },
  {
    id: 'lr-projector',
    name: 'Projectors',
    category: 'Living Room AV',
    description: 'Ultra-short throw projectors for massive images in smaller spaces.',
    image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b13?auto=format&fit=crop&w=800&q=80' // UST Projector
  },
  {
    id: 'screen-flat-tv',
    name: 'Screen / Flat TV',
    category: 'Living Room AV',
    description: 'State-of-the-art flat panels and motorized screens.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80' // TV
  },

  // --- Multi Room AV Distribution (Mapped to Commercial/Automation per hierarchy items) ---
  {
    id: 'parking',
    name: 'Parking',
    category: 'Automation',
    description: 'Automated parking management and garage control systems.',
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=800&q=80' // Garage
  },
  {
    id: 'hvac',
    name: 'HVAC',
    category: 'Automation',
    description: 'Smart climate control for energy efficiency and comfort.',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80' // Thermostat
  },
  {
    id: 'av-conference',
    name: 'AV Conference (office)',
    category: 'Commercial',
    description: 'Professional audio-video conferencing solutions for modern offices.',
    image: 'https://images.unsplash.com/photo-1517502884422-41e1f09d88bc?auto=format&fit=crop&w=800&q=80' // Conference
  },

  // --- Fenestrations ---
  {
    id: 'windows-fen',
    name: 'Windows',
    category: 'Fenestrations',
    description: 'Automated glazing and smart window systems.',
    image: 'https://images.unsplash.com/photo-1503708928676-1ec796b242b6?auto=format&fit=crop&w=800&q=80' // Glass window
  },

  // --- Security ---
  {
    id: 'windows-sec',
    name: 'Windows',
    category: 'Security',
    description: 'Reinforced security windows with integrated sensors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' // Secure glass
  }
];

// Product Detail Data
export const PRODUCT_DETAILS: Record<string, ProductDetailData> = {
  'lightings-curtains': {
    id: 'lightings-curtains',
    name: 'Lightings & Curtains',
    tagline: 'Intelligent Ambiance',
    rating: 4.9,
    reviews: 320,
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
    description: 'Experience the perfect blend of natural and artificial light. Our integrated solutions allow you to orchestrate the mood of your home with precision.',
    quote: 'Lighting is the jewelry of the home. It transforms spaces and elevates the everyday experience.',
    highlights: [
      { title: 'Scene Control', description: 'Recall your favorite settings instantly.', icon: Zap },
      { title: 'Schedule Automation', description: 'Curtains that wake you up with the sun.', icon: Sun },
      { title: 'Energy Saving', description: 'Optimize usage and reduce costs.', icon: Battery }
    ],
    variantsTitle: 'Discover the Collection',
    variants: [
      { name: 'Motorized Shades', price: 'Custom', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600' },
      { name: 'Smart Dimmers', price: 'From $120', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600' },
      { name: 'RGBW Bulbs', price: 'From $45', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600' }
    ],
    bannerTitle: 'Set the Scene',
    bannerSubtitle: 'From vibrant parties to cozy movie nights.',
    bannerImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200',
    featureGrid: [
      { title: 'Designed for Elegance', description: 'Hardware that complements your interior design.', image: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&w=800' },
      { title: 'Effortless Control', description: 'Manage everything from your phone or voice.', image: 'https://images.unsplash.com/photo-1534349762913-96c2255976bf?auto=format&fit=crop&w=800' }
    ],
    faqs: [
      { question: 'Can I retrofit this into an existing home?', answer: 'Yes, we offer wireless solutions perfect for retrofits.' },
      { question: 'Is it compatible with Alexa?', answer: 'Absolutely, along with Google Home and Apple HomeKit.' },
      { question: 'Do the curtains work manually?', answer: 'Yes, they feature touch-and-go technology.' }
    ],
    closingTitle: 'Illuminate Your Life',
    closingImage: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200'
  },
  // Fallback / Generic data for other products to prevent crashes
  'default': {
    id: 'default',
    name: 'Premium Product',
    tagline: 'Excellence in Automation',
    rating: 5.0,
    reviews: 100,
    heroImage: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=2000&q=80',
    description: 'This is a premium product designed to enhance your living space with state-of-the-art technology and elegant design.',
    quote: 'Innovation that seamlessly blends into your lifestyle.',
    highlights: [
      { title: 'Premium Quality', description: 'Built with the finest materials.', icon: ShieldCheck },
      { title: 'Smart Connectivity', description: 'Always connected, always ready.', icon: Wifi },
      { title: 'Easy Integration', description: 'Works with your existing ecosystem.', icon: Zap }
    ],
    variantsTitle: 'Available Models',
    variants: [
      { name: 'Standard Model', price: 'Inquire', image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=600' },
      { name: 'Pro Model', price: 'Inquire', image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=600' }
    ],
    bannerTitle: 'Experience the Future',
    bannerSubtitle: 'Technology redefined.',
    bannerImage: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=1200',
    featureGrid: [
      { title: 'Precision Engineering', description: 'Crafted for performance.', image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=800' },
      { title: 'Intuitive Design', description: 'Easy to use for everyone.', image: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=800' }
    ],
    faqs: [
      { question: 'Is professional installation required?', answer: 'We recommend professional installation for optimal performance.' },
      { question: 'What is the warranty?', answer: 'All our products come with a standard 2-year manufacturer warranty.' }
    ],
    closingTitle: 'Upgrade Today',
    closingImage: 'https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=1200'
  }
};

export const BRANDS = [
  "Tyba", "Blacknova", "Ascendo", "Speakercraft", "Xcase", "Crestron", "Control4", "Savant", "Lutron"
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'the-cube',
    title: 'The Cube',
    client: 'Hang Trinh',
    categories: ['Engineering', 'Residential'],
    year: '2016',
    image: 'https://images.unsplash.com/photo-1600596542815-60c37cabc63e?auto=format&fit=crop&w=800&q=80' // Modern Exterior
  },
  {
    id: 'london-velodrome',
    title: 'London Velodrome',
    client: 'UK Sport',
    categories: ['Commercial', 'Lighting'],
    year: '2012',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' // Architectural interior
  },
  {
    id: 'manchester-airport',
    title: 'Manchester Airport',
    client: 'MAG',
    categories: ['Infrastructure', 'Security'],
    year: '2018',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' // Modern facade
  },
  {
    id: 'skyline-residence',
    title: 'Skyline Residence',
    client: 'Private Client',
    categories: ['Residential', 'Automation'],
    year: '2021',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' // Luxury home
  },
  {
    id: 'tech-hub',
    title: 'Tech Hub HQ',
    client: 'Innovate Corp',
    categories: ['Commercial', 'AV'],
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80' // Modern office
  }
];

export const FAQ_CATEGORIES = [
  {
    id: 'general',
    label: 'General Questions',
    questions: [
      { id: 'q1', question: 'What is full home automation?', answer: 'Full home automation connects all your home\'s subsystems—lighting, climate, security, and entertainment—into a single, intelligent platform that you can control from anywhere.' },
      { id: 'q2', question: 'Can I upgrade my existing home?', answer: 'Absolutely. We offer wireless solutions (like Lutron and Z-Wave) that can be retrofitted into existing homes without the need for extensive rewiring or drywall damage.' },
      { id: 'q3', question: 'Is it compatible with Apple HomeKit/Google Home?', answer: 'Yes, our systems are designed to integrate seamlessly with major voice assistants and platforms including Apple HomeKit, Google Assistant, and Amazon Alexa.' },
    ]
  },
  {
    id: 'installation',
    label: 'Installation Process',
    questions: [
      { id: 'q4', question: 'How long does a typical project take?', answer: 'Timelines vary based on scope. A single media room takes 2-3 days, while a whole-home integration for a new build runs concurrent with construction, typically 2-8 weeks of active work.' },
      { id: 'q5', question: 'Do I need to move out during installation?', answer: 'For retrofits, no. Our team works room-by-room to minimize disruption. We pride ourselves on our "white glove" service, leaving your home cleaner than we found it.' },
    ]
  },
  {
    id: 'support',
    label: 'Support & Maintenance',
    questions: [
      { id: 'q6', question: 'What happens if the internet goes down?', answer: 'Your system is designed with local processing. Key functions like lighting, climate control, and local security integration will continue to operate normally without an internet connection.' },
      { id: 'q7', question: 'Do you offer post-installation support?', answer: 'Yes, we offer 24/7 remote monitoring and support packages. Our team is automatically alerted to system anomalies often before you even notice them.' },
    ]
  },
  {
    id: 'cost',
    label: 'Pricing & Value',
    questions: [
      { id: 'q8', question: 'How much does a smart home cost?', answer: 'Costs scale with the size of the property and complexity. Basic control systems start around $5k, while comprehensive luxury automation for large estates can range from $50k to $500k+.' },
      { id: 'q9', question: 'Do these systems save money?', answer: 'Yes, intelligent climate and lighting control can reduce energy bills by up to 30% annually, often paying for the environmental control portion of the system over time.' },
    ]
  }
];
