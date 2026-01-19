
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
import { Service, Product, ServiceCategory, NavItem, PortfolioProject, ServiceDetailData, ProductDetailData, PortfolioDetailData } from './types';

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
    title: 'Home Automation',
    subtitle: 'Seamlessly integrate every aspect of your home.',
    image: '/assets/images/hero_luxury.png',
    features: [
      { title: 'Smart Lighting', description: 'Adaptive lighting that follows your rhythm.', image: '/assets/images/img_c5686d098957.jpg' },
      { title: 'Climate Control', description: 'Perfect temperature in every room, always.', image: '/assets/images/img_4fac6e45ff2c.jpg' },
      { title: 'Smart Security', description: '24/7 monitoring and intelligent alerts.', image: '/assets/images/img_6ea09ac655b8.jpg' },
      { title: 'Automated Shades', description: 'Natural light management at a touch.', image: '/assets/images/img_189f03a432d8.jpg' },
      { title: 'Access Control', description: 'Secure keyless entry for your family.', image: '/assets/images/img_f09fdf964e08.jpg' },
      { title: 'Energy Monitoring', description: 'Optimize your consumption in real-time.', image: '/assets/images/img_9e2738cde5d6.jpg' }
    ]
  },
  {
    id: 'home-theater',
    title: 'Home Theater',
    subtitle: 'Experience the movies like never before, right at home.',
    image: '/assets/images/img_e3ab2c634130.jpg',
    features: [
      { title: '4K Laser Projectors', description: 'Crystal clear imagery on massive screens.', image: '/assets/images/img_13246fc0455c.jpg' },
      { title: 'Dolby Atmos Audio', description: 'Immersive 3D sound that moves around you.', image: '/assets/images/img_2557a3195bef.jpg' },
      { title: 'Acoustic Treatment', description: 'Studio-grade sound isolation and clarity.', image: '/assets/images/img_36f27919b1a6.jpg' },
      { title: 'Cinema Seating', description: 'Ergonomic luxury recliners for hours of comfort.', image: '/assets/images/img_fa71d290854e.jpg' },
      { title: 'Star Ceiling', description: 'Fiber optic acoustic panels for ambiance.', image: '/assets/images/img_f5138919e7de.jpg' },
      { title: 'Media Server', description: 'Your entire movie library at a click.', image: '/assets/images/img_a5de3b6534df.jpg' }
    ]
  },
  {
    id: 'living-av',
    title: 'Living Room AV',
    subtitle: 'Premium audio and visual solutions for your living space.',
    image: '/assets/images/img_fa71d290854e.jpg',
    features: [
      { title: 'Hidden Displays', description: 'TVs that disappear when not in use.', image: '/assets/images/img_8e77d06750fb.jpg' },
      { title: 'Hi-Fi Audio', description: 'Audiophile-grade sound systems.', image: '/assets/images/img_f31156d2f7f2.jpg' },
      { title: 'Media Streaming', description: 'All your content in one place.', image: '/assets/images/img_a5de3b6534df.jpg' },
      { title: 'Gaming Integration', description: 'Low latency setups for the win.', image: '/assets/images/img_e47e52bd26ca.jpg' },
      { title: 'Soundbars', description: 'Sleek audio that packs a punch.', image: '/assets/images/img_a0e0726f56eb.jpg' },
      { title: 'Voice Control', description: 'Hands-free media management.', image: '/assets/images/img_6ea09ac655b8.jpg' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Automation',
    subtitle: 'Intelligent solutions for modern businesses and offices.',
    image: '/assets/images/img_d8c80cf3670c.jpg',
    features: [
      { title: 'Smart Conference', description: 'One-touch video calls and presentations.', image: '/assets/images/img_a151a9e5ca5f.jpg' },
      { title: 'Access Control', description: 'Secure entry management for employees.', image: '/assets/images/img_1d0bb6fa0e4e.jpg' },
      { title: 'Smart HVAC', description: 'Automated climate control for large spaces.', image: '/assets/images/img_118bcb0b1c73.jpg' },
      { title: 'Energy Management', description: 'Optimize consumption and reduce costs.', image: '/assets/images/img_9e2738cde5d6.jpg' },
      { title: 'Sound Masking', description: 'Privacy solutions for open offices.', image: '/assets/images/img_064aab9f12a0.jpg' },
      { title: 'Digital Signage', description: 'Dynamic displays for communication.', image: '/assets/images/img_fa71d290854e.jpg' }
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
    image: '/assets/images/img_4fbf3280f66f.jpg', // Modern Smart Home Living Room
  },
  {
    id: 'climate-control',
    title: 'Climate & Air',
    description: 'Maintain perfect air quality and temperature automatically.',
    category: ServiceCategory.HOME_AUTOMATION,
    icon: Wind,
    features: ['Air Purification', 'Humidity Control', 'Smart Scheduling'],
    image: '/assets/images/img_4c6f3a399a90.jpg', // Modern thermostat/climate control
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Immersive audio and visual experiences in every room.',
    category: ServiceCategory.HOME_THEATER,
    icon: Speaker,
    features: ['Multi-room Audio', '4K Projection', 'Hidden Speakers'],
    image: '/assets/images/img_ba74e2faf90a.jpg', // Home Theater Entertainment
  },
  {
    id: 'security',
    title: 'Smart Security',
    description: 'Advanced surveillance and access control for peace of mind.',
    category: ServiceCategory.EXTERIOR,
    icon: ShieldCheck,
    features: ['Face Recognition', 'Smart Locks', 'Remote Monitoring'],
    image: '/assets/images/img_28aefd490497.jpg', // Security System/Camera
  },
  {
    id: 'garden',
    title: 'Garden & Pool',
    description: 'Automated irrigation and pool management systems.',
    category: ServiceCategory.EXTERIOR,
    icon: Droplets,
    features: ['Soil Sensors', 'Pool Heating', 'Outdoor Lighting'],
    image: '/assets/images/img_8dc67dd6b1b8.jpg', // Luxury Pool and Garden
  },
  {
    id: 'commercial-auto',
    title: 'Commercial',
    description: 'Complete automation for boardrooms and office buildings.',
    category: ServiceCategory.COMMERCIAL,
    icon: Building,
    features: ['Video Conferencing', 'Lighting Schedules', 'Access Control'],
    image: '/assets/images/img_7bff115f22ef.jpg', // Modern Office/Boardroom
  }
];

// Detailed data for Service Detail Pages
export const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'smart-living': {
    id: 'smart-living',
    title: 'Smart Living',
    subtitle: 'A Home That Thinks for You',
    heroImage: '/assets/images/img_d8c80cf3670c.jpg',
    introTitle: 'Orchestrate your entire home environment with a single touch.',
    introText: 'Smart Living elevates your daily routine by unifying lighting, shades, climate, and entertainment into a single, intuitive system. Whether you are waking up to a gentle sunrise scene or securing your home for the night, Ritzy ensures that your environment adapts to your needs effortlessly.',
    features: [
      {
        title: 'Lighting Control',
        description: 'Create the perfect ambiance for any occasion with dimmable, color-tunable lighting scenes that can be recalled instantly.',
        image: '/assets/images/img_32e31e6414cb.jpg'
      },
      {
        title: 'Automated Shading',
        description: 'Protect your interiors and manage natural light with motorized shades that adjust automatically to the sun\'s position.',
        image: '/assets/images/img_2557a3195bef.jpg'
      },
      {
        title: 'Voice Integration',
        description: 'Hands-free control for when your hands are full. Simply ask your home to turn on the lights, play music, or set the temperature.',
        image: '/assets/images/img_3f750d916f33.jpg'
      }
    ]
  },
  'climate-control': {
    id: 'climate-control',
    title: 'Climate & Air',
    subtitle: 'Perfect Comfort, Every Season',
    heroImage: '/assets/images/img_a14ac4473455.jpg',
    introTitle: 'Breathe easier with intelligent environmental control.',
    introText: 'Maintain the ideal temperature and humidity levels in every room of your house. Our smart climate systems learn your preferences and adjust automatically to ensure comfort while maximizing energy efficiency.',
    features: [
      {
        title: 'Smart Thermostats',
        description: 'Precision temperature control that learns your schedule and adjusts to occupancy.',
        image: '/assets/images/img_d965decc0ea3.jpg'
      },
      {
        title: 'Air Quality Monitoring',
        description: 'Sensors detect pollutants and allergens, automatically activating filtration systems to keep your air fresh.',
        image: '/assets/images/img_a5de3b6534df.jpg'
      },
      {
        title: 'Humidity Control',
        description: 'Protect your artwork, wood floors, and personal health by maintaining optimal humidity levels year-round.',
        image: '/assets/images/img_a5de3b6534df.jpg'
      }
    ]
  },
  'entertainment': {
    id: 'entertainment',
    title: 'Entertainment',
    subtitle: 'Immersive Audio & Video',
    heroImage: '/assets/images/img_adde05ea073a.jpg',
    introTitle: 'Cinema-quality experiences in the comfort of your home.',
    introText: 'From dedicated home theaters to whole-home audio distribution, we deliver crystal-clear sound and stunning visuals. Enjoy your favorite movies, music, and sports with technology that rivals the best commercial venues.',
    features: [
      {
        title: 'Whole-Home Audio',
        description: 'Stream music to every room in the house, with discreet architectural speakers that blend into your decor.',
        image: '/assets/images/img_e5b1739b3b0d.jpg'
      },
      {
        title: 'Dedicated Home Cinema',
        description: 'Experience movies as the director intended with 4K laser projection, Dolby Atmos sound, and custom acoustical treatment.',
        image: '/assets/images/img_6ea09ac655b8.jpg'
      },
      {
        title: 'Media Distribution',
        description: 'Centralize your video sources and watch anything on any TV in the house, instantly.',
        image: '/assets/images/img_94f838ae12ef.jpg'
      }
    ]
  },
  'security': {
    id: 'security',
    title: 'Smart Security',
    subtitle: 'Peace of Mind, redefined',
    heroImage: '/assets/images/img_5bdefbaf2ff4.jpg',
    introTitle: 'Advanced protection for your family and property.',
    introText: 'Our integrated security solutions go beyond simple alarms. We combine high-definition surveillance, smart access control, and automated deterrents to create a robust safety shield around your home.',
    features: [
      {
        title: 'Intelligent Surveillance',
        description: 'AI-powered cameras distinguish between people, pets, and vehicles, sending you only the alerts that matter.',
        image: '/assets/images/img_36f27919b1a6.jpg'
      },
      {
        title: 'Smart Locks & Access',
        description: 'Manage entry for family, guests, and service providers remotely. Receive notifications whenever a door is unlocked.',
        image: '/assets/images/img_e5b1739b3b0d.jpg'
      },
      {
        title: 'Perimeter Defense',
        description: 'Automated lighting and motion sensors create a deterrent barrier before an intruder even reaches your home.',
        image: '/assets/images/img_0a460184bffc.jpg'
      }
    ]
  },
  'garden': {
    id: 'garden',
    title: 'Garden & Pool',
    subtitle: 'Your Outdoor Oasis, Automated',
    heroImage: '/assets/images/img_6ea09ac655b8.jpg',
    introTitle: 'Extend your smart living experience to the outdoors.',
    introText: 'Create the perfect outdoor retreat with automated pool controls, landscape lighting, and weather-based irrigation. Whether you are hosting a summer party or relaxing by the fire pit, control it all from your phone.',
    features: [
      {
        title: 'Pool & Spa Control',
        description: 'Set water temperature, activate jets, and control lighting for your pool and spa, ensuring it is ready when you are.',
        image: '/assets/images/img_bdfa633757c2.jpg'
      },
      {
        title: 'Landscape Lighting',
        description: 'Enhance curb appeal and safety with automated path lights and spotlights that turn on at sunset.',
        image: '/assets/images/img_9e2738cde5d6.jpg'
      },
      {
        title: 'Smart Irrigation',
        description: 'Save water and keep your lawn lush with sprinkler systems that adjust based on local weather forecasts.',
        image: '/assets/images/img_384dc7ab8faf.jpg'
      }
    ]
  },
  'commercial-auto': {
    id: 'commercial-auto',
    title: 'Commercial',
    subtitle: 'Intelligent Business Solutions',
    heroImage: '/assets/images/img_6fd9cbaeece2.jpg',
    introTitle: 'Efficiency, collaboration, and control for the modern workplace.',
    introText: 'Streamline operations and enhance productivity with our commercial automation systems. From impressive boardrooms to energy-efficient building management, we provide the tools you need to run a smarter business.',
    features: [
      {
        title: 'Video Conferencing',
        description: 'Start meetings instantly with one-touch systems that integrate video, audio, and room control.',
        image: '/assets/images/img_4c6f3a399a90.jpg'
      },
      {
        title: 'Building Management',
        description: 'Centralized control of HVAC, lighting, and shading to optimize energy usage and reduce operational costs.',
        image: '/assets/images/img_10bc5fc12434.jpg'
      },
      {
        title: 'Access Control',
        description: 'Secure your premises with scalable access solutions for employees and visitors, fully integrated with your security system.',
        image: '/assets/images/img_94f838ae12ef.jpg'
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
    image: '/assets/images/img_81fd2ba95647.jpg' // Curtains
  },
  {
    id: 'tyba',
    name: 'Tyba',
    category: 'Home Automation',
    description: 'Refined architectural keypads and touch interfaces for modern interiors.',
    image: '/assets/images/img_af29e76905cd.jpg' // Minimal switch
  },
  {
    id: 'one-touch',
    name: 'One Touch',
    category: 'Home Automation',
    description: 'Simplifying smart home control with intuitive single-touch panels.',
    image: '/assets/images/img_e942ea4e9e81.jpg' // Tablet control
  },
  {
    id: 'blacknova',
    name: 'Blacknova',
    category: 'Home Automation',
    description: 'Luxury design keypads merging Italian aesthetics with advanced technology.',
    image: '/assets/images/img_2557a3195bef.jpg' // Stylish wall
  },
  {
    id: 'burglar-alarm',
    name: 'Burglar Alarm',
    category: 'Home Automation',
    description: 'Robust intrusion detection systems to secure your property 24/7.',
    image: '/assets/images/img_067c62cf8d68.jpg' // Alarm panel
  },
  {
    id: 'cctv',
    name: 'CCTV',
    category: 'Home Automation',
    description: 'High-definition surveillance cameras with remote viewing capabilities.',
    image: '/assets/images/img_e35337d12fd1.jpg' // Camera
  },
  {
    id: 'door-intercom',
    name: 'Door Intercom',
    category: 'Home Automation',
    description: 'Smart video intercoms for secure and convenient visitor access.',
    image: '/assets/images/img_2ee3ccb01fa2.jpg' // Door entry
  },
  {
    id: 'digital-lock',
    name: 'Digital Lock',
    category: 'Home Automation',
    description: 'Keyless entry solutions offering biometric and code access.',
    image: '/assets/images/img_d965decc0ea3.jpg' // Smart lock
  },

  // --- Home Theater ---
  {
    id: 'ascendo',
    name: 'Ascendo',
    category: 'Home Theater',
    description: 'World-class immersive audio systems for the ultimate cinema experience.',
    image: '/assets/images/img_b87e882cda5c.jpg' // Speaker
  },
  {
    id: 'speakercraft-ht',
    name: 'Speakercraft',
    category: 'Home Theater',
    description: 'Premium architectural speakers designed for performance and aesthetics.',
    image: '/assets/images/img_13246fc0455c.jpg' // Speaker detail
  },
  {
    id: 'projectors',
    name: 'Projectors',
    category: 'Home Theater',
    description: '4K and 8K laser projection for true-to-life big screen visuals.',
    image: '/assets/images/img_44e6dd24e97f.jpg' // Projector room
  },
  {
    id: 'acoustic-screen',
    name: 'Acoustic Screen',
    category: 'Home Theater',
    description: 'Acoustically transparent screens that let sound pass through flawlessly.',
    image: '/assets/images/img_fe31fbb9b30b.jpg' // Cinema screen
  },

  // --- Living Room Home Theater ---
  {
    id: 'xcase',
    name: 'Xcase',
    category: 'Living Room AV',
    description: 'High-fidelity speakers optimized for living room acoustics.',
    image: '/assets/images/img_5bdefbaf2ff4.jpg' // Living room speaker
  },
  {
    id: 'speakercraft-lr',
    name: 'Speakercraft',
    category: 'Living Room AV',
    description: 'Discreet audio solutions that blend into your living space.',
    image: '/assets/images/img_b85538f0571d.jpg' // Speaker
  },
  {
    id: 'lr-projector',
    name: 'Projectors',
    category: 'Living Room AV',
    description: 'Ultra-short throw projectors for massive images in smaller spaces.',
    image: '/assets/images/img_a0e0726f56eb.jpg' // UST Projector
  },
  {
    id: 'screen-flat-tv',
    name: 'Screen / Flat TV',
    category: 'Living Room AV',
    description: 'State-of-the-art flat panels and motorized screens.',
    image: '/assets/images/img_6b20535b7422.jpg' // TV
  },

  // --- Multi Room AV Distribution (Mapped to Commercial/Automation per hierarchy items) ---
  {
    id: 'parking',
    name: 'Parking',
    category: 'Automation',
    description: 'Automated parking management and garage control systems.',
    image: '/assets/images/img_097596f052a5.jpg' // Garage
  },
  {
    id: 'hvac',
    name: 'HVAC',
    category: 'Automation',
    description: 'Smart climate control for energy efficiency and comfort.',
    image: '/assets/images/img_adde05ea073a.jpg' // Thermostat
  },
  {
    id: 'av-conference',
    name: 'AV Conference (office)',
    category: 'Commercial',
    description: 'Professional audio-video conferencing solutions for modern offices.',
    image: '/assets/images/img_e5b1739b3b0d.jpg' // Conference
  },

  // --- Fenestrations ---
  {
    id: 'windows-fen',
    name: 'Windows',
    category: 'Fenestrations',
    description: 'Automated glazing and smart window systems.',
    image: '/assets/images/img_9c98b9341570.jpg' // Glass window
  },

  // --- Security ---
  {
    id: 'windows-sec',
    name: 'Windows',
    category: 'Security',
    description: 'Reinforced security windows with integrated sensors.',
    image: '/assets/images/img_1d0bb6fa0e4e.jpg' // Secure glass
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
    heroImage: '/assets/images/img_e942ea4e9e81.jpg',
    description: 'Experience the perfect blend of natural and artificial light. Our integrated solutions allow you to orchestrate the mood of your home with precision.',
    quote: 'Lighting is the jewelry of the home. It transforms spaces and elevates the everyday experience.',
    highlights: [
      { title: 'Scene Control', description: 'Recall your favorite settings instantly.', icon: Zap },
      { title: 'Schedule Automation', description: 'Curtains that wake you up with the sun.', icon: Sun },
      { title: 'Energy Saving', description: 'Optimize usage and reduce costs.', icon: Battery }
    ],
    variantsTitle: 'Discover the Collection',
    variants: [
      { name: 'Motorized Shades', price: 'Custom', image: '/assets/images/img_189f03a432d8.jpg' },
      { name: 'Smart Dimmers', price: 'From $120', image: '/assets/images/img_e0a474816ce7.jpg' },
      { name: 'RGBW Bulbs', price: 'From $45', image: '/assets/images/img_6b20535b7422.jpg' }
    ],
    bannerTitle: 'Set the Scene',
    bannerSubtitle: 'From vibrant parties to cozy movie nights.',
    bannerImage: '/assets/images/img_b85538f0571d.jpg',
    featureGrid: [
      { title: 'Designed for Elegance', description: 'Hardware that complements your interior design.', image: '/assets/images/img_f8bfb4229396.jpg' },
      { title: 'Effortless Control', description: 'Manage everything from your phone or voice.', image: '/assets/images/img_816262825d0e.jpg' }
    ],
    faqs: [
      { question: 'Can I retrofit this into an existing home?', answer: 'Yes, we offer wireless solutions perfect for retrofits.' },
      { question: 'Is it compatible with Alexa?', answer: 'Absolutely, along with Google Home and Apple HomeKit.' },
      { question: 'Do the curtains work manually?', answer: 'Yes, they feature touch-and-go technology.' }
    ],
    closingTitle: 'Illuminate Your Life',
    closingImage: '/assets/images/img_0a460184bffc.jpg'
  },
  // Fallback / Generic data for other products to prevent crashes
  'default': {
    id: 'default',
    name: 'Premium Product',
    tagline: 'Excellence in Automation',
    rating: 5.0,
    reviews: 100,
    heroImage: '/assets/images/img_816262825d0e.jpg',
    description: 'This is a premium product designed to enhance your living space with state-of-the-art technology and elegant design.',
    quote: 'Innovation that seamlessly blends into your lifestyle.',
    highlights: [
      { title: 'Premium Quality', description: 'Built with the finest materials.', icon: ShieldCheck },
      { title: 'Smart Connectivity', description: 'Always connected, always ready.', icon: Wifi },
      { title: 'Easy Integration', description: 'Works with your existing ecosystem.', icon: Zap }
    ],
    variantsTitle: 'Available Models',
    variants: [
      { name: 'Standard Model', price: 'Inquire', image: '/assets/images/img_f09fdf964e08.jpg' },
      { name: 'Pro Model', price: 'Inquire', image: '/assets/images/img_f09fdf964e08.jpg' }
    ],
    bannerTitle: 'Experience the Future',
    bannerSubtitle: 'Technology redefined.',
    bannerImage: '/assets/images/img_189f03a432d8.jpg',
    featureGrid: [
      { title: 'Precision Engineering', description: 'Crafted for performance.', image: '/assets/images/img_e5b1739b3b0d.jpg' },
      { title: 'Intuitive Design', description: 'Easy to use for everyone.', image: '/assets/images/img_e5b1739b3b0d.jpg' }
    ],
    faqs: [
      { question: 'Is professional installation required?', answer: 'We recommend professional installation for optimal performance.' },
      { question: 'What is the warranty?', answer: 'All our products come with a standard 2-year manufacturer warranty.' }
    ],
    closingTitle: 'Upgrade Today',
    closingImage: '/assets/images/img_189f03a432d8.jpg'
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
    image: '/assets/images/img_fc40a000c7ae.jpg' // Modern Exterior
  },
  {
    id: 'london-velodrome',
    title: 'London Velodrome',
    client: 'UK Sport',
    categories: ['Commercial', 'Lighting'],
    year: '2012',
    image: '/assets/images/img_a8927807bd8b.jpg' // Architectural interior
  },
  {
    id: 'manchester-airport',
    title: 'Manchester Airport',
    client: 'MAG',
    categories: ['Infrastructure', 'Security'],
    year: '2018',
    image: '/assets/images/img_1eae1ef3e1da.jpg' // Modern facade
  },
  {
    id: 'skyline-residence',
    title: 'Skyline Residence',
    client: 'Private Client',
    categories: ['Residential', 'Automation'],
    year: '2021',
    image: '/assets/images/img_1d0bb6fa0e4e.jpg' // Luxury home
  },
  {
    id: 'tech-hub',
    title: 'Tech Hub HQ',
    client: 'Innovate Corp',
    categories: ['Commercial', 'AV'],
    year: '2022',
    image: '/assets/images/img_e69bc16af8ca.jpg' // Modern office
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


export const PORTFOLIO_DETAILS: Record<string, PortfolioDetailData> = {
  'the-cube': {
    id: 'the-cube',
    title: 'The Cube',
    subtitle: 'Harborview Office',
    heroImage: '/assets/images/img_a8927807bd8b.jpg',
    overlayStats: [
      { label: 'Volume', value: '4200 m3' },
      { label: 'Year', value: '2016' },
      { label: 'Size', value: '1200 m2' }
    ],
    descriptionTitle: 'Design Meets Urban Functionality',
    description: 'The Cube represents a fusion of modern aesthetic and practical functionality, located in the heart of the bustling business district. This project showcases our commitment to creating impactful commercial spaces. The large glass facades allow natural light to illuminate the office throughout the day, while the interior layout promotes open communication.',
    details: [
      { label: 'Location', value: 'London, UK' },
      { label: 'Duration', value: '14 Months' },
      { label: 'Size', value: '1200 m2' },
      { label: 'Year', value: '2016' },
      { label: 'Category', value: 'Commercial' }
    ],
    gallery: [
      '/assets/images/img_f1fbeb3f0e50.jpg',
      '/assets/images/img_03aeedc2754c.jpg',
      '/assets/images/img_eb2f3a0caa61.jpg',
      '/assets/images/img_3c0478faeddc.jpg'
    ]
  },
  'london-velodrome': {
    id: 'london-velodrome',
    title: 'London Velodrome',
    subtitle: 'Olympic Legacy',
    heroImage: '/assets/images/img_f40680bbf23e.jpg',
    overlayStats: [
      { label: 'Capacity', value: '6,000' },
      { label: 'Year', value: '2012' },
      { label: 'Awards', value: 'RIBA Stirling' }
    ],
    descriptionTitle: 'Engineering Speed and Light',
    description: 'A landmark project for the 2012 Olympics, featuring sophisticated lighting control systems that adapt to intense competition needs and energy-saving modes. The integrated systems provide perfect visibility for athletes while enhancing the spectator experience.',
    details: [
      { label: 'Location', value: 'London, UK' },
      { label: 'Duration', value: '24 Months' },
      { label: 'Client', value: 'UK Sport' },
      { label: 'Year', value: '2012' },
      { label: 'Category', value: 'Infrastructure' }
    ],
    gallery: [
      '/assets/images/img_8cd5de336830.jpg',
      '/assets/images/img_1a082a240bab.jpg',
      '/assets/images/img_4fac6e45ff2c.jpg',
      '/assets/images/img_40bb03c039e7.jpg'
    ]
  },
  'manchester-airport': {
    id: 'manchester-airport',
    title: 'Manchester Airport',
    subtitle: 'Terminal 2 Extension',
    heroImage: '/assets/images/img_3f750d916f33.jpg',
    overlayStats: [
      { label: 'Footfall', value: '25M/Year' },
      { label: 'Year', value: '2018' },
      { label: 'Systems', value: 'Advanced CCTV' }
    ],
    descriptionTitle: 'Securing the Gateway',
    description: 'A comprehensive security and automation overhaul for the new terminal extension. We implemented a unified management system integrating access control, surveillance, and automated HVAC to handle thousands of passengers daily with ease.',
    details: [
      { label: 'Location', value: 'Manchester, UK' },
      { label: 'Duration', value: '36 Months' },
      { label: 'Size', value: '80,000 m2' },
      { label: 'Year', value: '2018' },
      { label: 'Category', value: 'Security' }
    ],
    gallery: [
      '/assets/images/img_f5138919e7de.jpg',
      '/assets/images/img_384dc7ab8faf.jpg',
      '/assets/images/img_694131f2ab1b.jpg',
      '/assets/images/img_a0e0726f56eb.jpg'
    ]
  },
  'skyline-residence': {
    id: 'skyline-residence',
    title: 'Skyline Residence',
    subtitle: 'Private Penthouse',
    heroImage: '/assets/images/img_13246fc0455c.jpg',
    overlayStats: [
      { label: 'Rooms', value: '8' },
      { label: 'Year', value: '2021' },
      { label: 'Tech', value: 'Full Home Auto' }
    ],
    descriptionTitle: 'Luxury Above the Clouds',
    description: 'Complete home automation for an ultra-luxury penthouse. Every aspect of the environment is controlled via voice or touch, from the automated shades that reveal the city view to the integrated multi-room audio system.',
    details: [
      { label: 'Location', value: 'New York, USA' },
      { label: 'Duration', value: '8 Months' },
      { label: 'Client', value: 'Private' },
      { label: 'Year', value: '2021' },
      { label: 'Category', value: 'Residential' }
    ],
    gallery: [
      '/assets/images/img_f765768aa902.jpg',
      '/assets/images/img_a5de3b6534df.jpg',
      '/assets/images/img_1a082a240bab.jpg',
      '/assets/images/img_d0d6bf63ff61.jpg'
    ]
  },
  'tech-hub': {
    id: 'tech-hub',
    title: 'Tech Hub HQ',
    subtitle: 'Innovation Center',
    heroImage: '/assets/images/img_81fd2ba95647.jpg',
    overlayStats: [
      { label: 'Desks', value: '500+' },
      { label: 'Year', value: '2022' },
      { label: 'AV Zones', value: '40+' }
    ],
    descriptionTitle: 'The Future of Work',
    description: 'State-of-the-art AV distribution and video conferencing for a leading tech company. The solution ensures seamless collaboration across multiple floors, with intuitive control panels in every meeting room.',
    details: [
      { label: 'Location', value: 'San Francisco, USA' },
      { label: 'Duration', value: '12 Months' },
      { label: 'Size', value: '5000 m2' },
      { label: 'Year', value: '2022' },
      { label: 'Category', value: 'Commercial' }
    ],
    gallery: [
      '/assets/images/img_6ff69ae204b0.jpg',
      '/assets/images/img_fc40a000c7ae.jpg',
      '/assets/images/img_135ce27bc9be.jpg',
      '/assets/images/img_b0cf37cbfe4e.jpg'
    ]
  }
};
