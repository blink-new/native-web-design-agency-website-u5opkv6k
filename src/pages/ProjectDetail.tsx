import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

// Import the Project type from Portfolio page
type ProjectCategory = 'All' | 'Web Design' | 'E-commerce' | 'Branding' | 'Mobile App';

type Project = {
  id: number;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  clientType: string;
  clientAudience: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: string[];
  images: string[];
  thumbnailImage?: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
    avatar?: string;
  };
  deliverables: string[];
  timeline: string;
  year: number;
};

// Sample project data - this should match the data in Portfolio.tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Bloom Floral Studio',
    category: 'E-commerce',
    clientType: 'Floral Design Studio',
    clientAudience: 'Event planners, wedding couples, and flower enthusiasts',
    overview: 'Bloom Floral Studio needed an e-commerce website that showcased their beautiful arrangements while making it easy for customers to place orders for events or delivery.',
    challenge: "Bloom Floral Studio had built a reputation for exquisite arrangements but was losing potential customers due to their outdated website and inefficient ordering process. They were manually handling all orders via phone and email, causing missed opportunities and administrative errors.",
    solution: 'We created an elegant, conversion-focused e-commerce platform that reflected their artistic brand while implementing a powerful inventory management system. Our solution included seamless event booking functionality and a visual-forward product showcase that delighted their customers.',
    features: [
      'Custom e-commerce platform with seasonal inventory management',
      'Event booking system with calendar integration and deposit handling',
      'Product gallery with professional photography and 360° views',
      'Mobile responsive design optimized for on-the-go browsing',
      'Integrated payment processing with installment options for large events',
      'Customer account area with order history, favorites, and upcoming event details'
    ],
    technologies: [
      'React.js with custom animations',
      'Node.js and Express backend',
      'MongoDB with custom CMS',
      'Stripe Payment Integration with recurring billing',
      'AWS S3 for image optimization and storage',
      'SendGrid for transactional and marketing emails'
    ],
    results: [
      '138% increase in online orders within the first quarter post-launch',
      '42% reduction in administrative work through automated order processing',
      '67% increase in average order value through strategic upselling features',
      'Featured in Local Business Monthly as a "Digital Transformation Success Story"',
      'Successfully handled a 250% increase in Valentine\'s Day orders compared to previous year'
    ],
    images: [
      'https://images.unsplash.com/photo-1558905511-25d6800b5dc3?w=800',
      'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800',
      'https://images.unsplash.com/photo-1571986928058-bdf10f29cb49?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1558905511-25d6800b5dc3?w=800',
    testimonial: {
      text: "Working with Native Web Design completely transformed our business. They didn't just build us a website; they created a digital experience that perfectly captures the beauty and elegance of our floral designs. Our customers constantly compliment how easy it is to order, and our staff loves the streamlined backend. Sales have increased beyond our expectations.",
      author: "Emma Richards",
      position: "Founder & Creative Director, Bloom Floral Studio",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    deliverables: [
      'Custom e-commerce platform with admin dashboard',
      'Mobile-first responsive design',
      'Brand style guide and visual identity refinement',
      'Staff training program and documentation',
      'SEO optimization and local search strategy',
      '6 months of priority support and maintenance'
    ],
    timeline: '10 weeks',
    year: 2023
  },
  {
    id: 2,
    title: 'Atlas Fitness App',
    category: 'Mobile App',
    clientType: 'Boutique Fitness Studio Chain',
    clientAudience: 'Fitness enthusiasts, personal training clients, and health-conscious professionals',
    overview: 'Atlas Fitness needed a premium mobile app to enhance their in-person training experience, retain members during the pandemic, and create a digital community around their brand.',
    challenge: 'Atlas Fitness was losing members to national chains with sophisticated digital offerings. With three physical locations, they needed a solution that would strengthen client relationships, provide value between in-person sessions, and create a competitive advantage in their market.',
    solution: 'We developed a comprehensive fitness ecosystem that bridges the physical and digital experience. The app includes personalized workout programs, progress tracking with visual analytics, trainer messaging, and community features that reinforce the Atlas Fitness brand identity and methodology.',
    features: [
      'Personalized workout libraries with HD video demonstrations',
      'Advanced progress tracking with body composition analytics',
      'Trainer-client messaging with video consultation scheduling',
      'Nutrition tracking integrated with popular meal planning services',
      'Class booking with waitlist notifications and location preference',
      'Community challenges with achievement badges and rewards',
      'Apple Watch and Garmin integration for workout tracking'
    ],
    technologies: [
      'React Native for cross-platform consistency',
      'Firebase for real-time data synchronization',
      'Redux for state management',
      'Node.js backend with GraphQL API',
      'MongoDB with sharding for performance',
      'WebRTC for secure video consultations',
      'Apple HealthKit & Google Fit integrations'
    ],
    results: [
      '94% member retention during pandemic (industry average was 63%)',
      'Over 18,000 downloads with 82% active monthly users',
      '4.8/5 average rating across iOS and Android platforms',
      '76% of users engage with the app at least 4 times weekly',
      'Featured in "Top 10 Fitness Apps of 2023" by Health & Fitness Magazine',
      'Successful expansion to two additional locations based on digital engagement metrics'
    ],
    images: [
      'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800',
      'https://images.unsplash.com/photo-1575998393243-f37b770a9395?w=800',
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800',
    testimonial: {
      text: "Native Web Design didn't just understand our technical requirements—they understood our business and our clients. The app they created has become central to our brand experience. Our trainers love the ability to stay connected with clients between sessions, and our members constantly tell us how the app keeps them motivated and accountable. It's helped us not just survive but thrive during challenging times for the fitness industry.",
      author: "David Mitchell",
      position: "Founder & CEO, Atlas Fitness",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    deliverables: [
      'Native mobile apps for iOS and Android',
      'Comprehensive admin dashboard for staff',
      'API documentation and integration guides',
      'App Store and Play Store optimization',
      'Marketing assets and launch campaign support',
      '12 months of technical support and feature updates'
    ],
    timeline: '16 weeks',
    year: 2023
  },
  {
    id: 3,
    title: 'Savant Financial',
    category: 'Web Design',
    clientType: 'Wealth Management Firm',
    clientAudience: 'High-net-worth individuals, business owners, and corporate executives',
    overview: 'Savant Financial needed a sophisticated digital presence that would establish trust, simplify complex financial concepts, and streamline client acquisition for their growing firm.',
    challenge: 'Despite managing over $500M in assets, Savant Financial was struggling with an outdated website that failed to convey their expertise and unique investment philosophy. Their digital presence was undermining in-person impressions and hindering growth.',
    solution: 'We created a premium digital experience focused on clarity and confidence. The site employs thoughtful information architecture to guide prospects through Savant\'s approach, with interactive tools that demonstrate value before the first meeting and a secure client portal for existing customers.',
    features: [
      'Sophisticated design system with subtle animations and micro-interactions',
      'Interactive financial calculators and retirement planning tools',
      'Secure client portal with portfolio visualization',
      'Team member profiles highlighting credentials and specialties',
      'Case studies segmented by client archetypes',
      'Financial insights blog with compliance-friendly CMS',
      'Webinar registration and resource library'
    ],
    technologies: [
      'Next.js for performance and SEO',
      'TypeScript for type safety',
      'Prismic CMS with custom workflows',
      'Chart.js for dynamic financial visualizations',
      'AWS infrastructure with enhanced security protocols',
      'HubSpot CRM integration for lead nurturing',
      'SOC 2 compliant data handling'
    ],
    results: [
      '156% increase in qualified consultation requests',
      '32% improvement in time spent on key service pages',
      '28% increase in AUM within 6 months of launch',
      'Reduced client onboarding time by 40% through portal automation',
      'Won "Best Financial Services Website" at the Regional Business Web Awards',
      'Successfully passed SEC marketing compliance review with zero issues'
    ],
    images: [
      'https://images.unsplash.com/photo-1553484771-689577a88a45?w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1553484771-689577a88a45?w=800',
    testimonial: {
      text: "Native Web Design was exceptional from start to finish. They took the time to understand the complexities of our industry and the specific needs of our clientele. The result is a website that perfectly balances sophistication with accessibility. Our team is proud to share it with prospects, and we've seen a significant increase in both the quantity and quality of leads since launch.",
      author: "Jennifer Harding, CFA",
      position: "Managing Partner, Savant Financial",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150"
    },
    deliverables: [
      'Responsive website with custom financial tools',
      'Secure client portal integration',
      'Content strategy and SEO implementation',
      'Custom icon system and illustration library',
      'Compliance documentation for regulators',
      'Team photography direction',
      'Ongoing performance optimization'
    ],
    timeline: '12 weeks',
    year: 2022
  },
  {
    id: 4,
    title: 'Evergreen Landscaping',
    category: ['Web Design', 'Branding'],
    clientType: 'Sustainable Landscaping Company',
    clientAudience: 'Eco-conscious homeowners and commercial property managers',
    overview: 'Evergreen Landscaping needed a complete brand refresh and website redesign to reposition themselves as leaders in sustainable outdoor design and attract premium clients.',
    challenge: "After 15 years in business, Evergreen's visual identity had become fragmented and dated. Their website failed to showcase their award-winning projects effectively, and they were being perceived as a basic lawn maintenance service rather than the high-end sustainable landscape design firm they had evolved into.",
    solution: 'We executed a comprehensive rebranding that emphasized their sustainable practices and artistic approach to landscaping. The website redesign focused on visual storytelling with impressive before/after comparisons and clearly articulated their environmentally-friendly methodologies.',
    features: [
      'Complete brand identity system (logo, typography, color palette, patterns)',
      'Responsive website with interactive project gallery',
      'Before/after project comparison tool with interactive slider',
      'Sustainable practices educational content hub',
      'Service estimator with qualification questionnaire',
      'Seasonal maintenance guide with automated reminders',
      'Project planning visualization tool'
    ],
    technologies: [
      'WordPress with headless configuration',
      'Advanced Custom Fields for content management',
      'GSAP for scroll-triggered animations',
      'Mapbox for service area visualization',
      'WebGL for 3D landscape previews',
      'Custom photography post-processing pipeline',
      'Schema markup for local SEO optimization'
    ],
    results: [
      '186% increase in qualified leads within first quarter',
      '42% increase in average project value',
      '64% reduction in bounce rate on mobile devices',
      'Featured in "Sustainable Homes & Gardens" magazine',
      'Secured three major municipal contracts worth $1.2M',
      'Won "Best Green Business Website" at industry awards'
    ],
    images: [
      'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800',
      'https://images.unsplash.com/photo-1599686302719-0d15889a0977?w=800',
      'https://images.unsplash.com/photo-1551509134-eb5c69d3b571?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800',
    testimonial: {
      text: "The rebranding and website Native Web Design created for us has completely transformed how potential clients perceive our company. We're now attracting exactly the type of high-end clients we want to work with, and they're coming to us already understanding our sustainable approach. The before/after comparison tool has been particularly effective at demonstrating the value of our services.",
      author: "Michael Green",
      position: "Founder & Lead Designer, Evergreen Landscaping",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    deliverables: [
      'Brand identity system with usage guidelines',
      'Responsive website with custom project showcase',
      'Print collateral (business cards, brochures, proposal templates)',
      'Vehicle and uniform graphics',
      'Custom photography of completed projects',
      'Social media profile redesign',
      'Content creation strategy and editorial calendar'
    ],
    timeline: '14 weeks',
    year: 2022
  },
  {
    id: 5,
    title: 'Artisan Bakery',
    category: ['E-commerce', 'Branding'],
    clientType: 'Specialty Sourdough Bakery',
    clientAudience: 'Food enthusiasts, gift shoppers, and corporate clients',
    overview: 'Artisan Bakery needed to expand beyond their local storefront with an e-commerce platform that could handle nationwide shipping of their award-winning sourdough bread and specialty baked goods.',
    challenge: 'Despite winning national awards, Artisan Bakery was limited by their physical location. They needed to scale their business through e-commerce while preserving their artisanal brand story and solving complex logistical challenges around shipping perishable products.',
    solution: 'We created a storytelling-focused e-commerce experience that brings customers into the world of traditional breadmaking. The site features beautiful product photography, baker profiles, and a sophisticated inventory management system that balances production capacity with demand forecasting.',
    features: [
      'Immersive product pages with breadmaking process videos',
      'Custom gift box builder with real-time preview',
      'Subscription service with flexible delivery schedules',
      'Intelligent shipping algorithm accounting for climate zones',
      'Production capacity management tied to order volume',
      'Corporate gifting portal with bulk ordering',
      'Recipe blog with ingredient cross-selling'
    ],
    technologies: [
      'Shopify Plus with headless frontend',
      'React for interactive elements',
      'Klaviyo for personalized marketing automation',
      'Custom inventory management system',
      'Climate-aware shipping logic with ShipStation',
      'Yotpo for reviews and loyalty program',
      'Enhanced Google Analytics with purchase funnel tracking'
    ],
    results: [
      '327% revenue growth in first year of e-commerce operations',
      '43% of customers become repeat buyers within 60 days',
      '28% of revenue now comes from subscription boxes',
      'Featured in Food & Wine magazine\'s "Best Online Bakeries"',
      'Expanded production facility to meet online demand',
      'Successfully managed 400% holiday season surge without fulfillment issues'
    ],
    images: [
      'https://images.unsplash.com/photo-1591688515527-f7b20bd05902?w=800',
      'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800',
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1591688515527-f7b20bd05902?w=800',
    testimonial: {
      text: "Native Web Design didn't just build us a web store—they helped us reimagine our entire business model. Their team took the time to understand our production constraints and the unique challenges of shipping perishable products. The solutions they implemented have allowed us to reach customers nationwide without compromising on quality or overwhelming our production capacity. The storytelling approach to our product pages has been particularly effective at conveying the care that goes into our baking process.",
      author: "Clara Martinez",
      position: "Founder & Head Baker, Artisan Bakery",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
    },
    deliverables: [
      'Custom Shopify e-commerce platform',
      'Brand refinement and packaging design system',
      'Product photography art direction',
      'Shipping strategy and logistics consultation',
      'Inventory and production forecasting system',
      'Staff training and fulfillment workflow documentation',
      'Email marketing strategy and automation setup'
    ],
    timeline: '12 weeks',
    year: 2023
  },
  {
    id: 6,
    title: 'Horizon Travel',
    category: ['Web Design', 'E-commerce'],
    clientType: 'Luxury Adventure Travel Agency',
    clientAudience: 'High-income professionals seeking unique travel experiences',
    overview: 'Horizon Travel needed a digital platform that could capture the excitement of their curated adventure experiences while streamlining the complex booking process for their luxury expeditions.',
    challenge: 'Horizon Travel offered exceptional in-person service but struggled to translate their high-touch experience to digital channels. Their existing website failed to convey the exclusivity of their offerings or handle the complex customization options for their trips.',
    solution: 'We created an immersive digital platform that combines cinematic destination showcases with an intuitive booking system. Using rich media and interactive elements, the site inspires wanderlust while making complex trip planning feel effortless and exciting.',
    features: [
      'Immersive destination pages with fullscreen video backgrounds',
      'Interactive trip planner with drag-and-drop itinerary building',
      'Dynamic pricing engine handling seasonal variations and custom add-ons',
      'Personalized recommendation system based on travel history and preferences',
      'Virtual reality destination previews with 360° experiences',
      'Client travel journal with private photo sharing',
      'Multi-currency support with transparent conversion'
    ],
    technologies: [
      'Next.js for performance-optimized frontend',
      'Sanity.io for structured content management',
      'GraphQL API for flexible data fetching',
      'Three.js for immersive 3D destination models',
      'Custom booking engine with complex pricing logic',
      'Stripe for secure payments and installment plans',
      'AWS CloudFront for global content delivery'
    ],
    results: [
      '215% increase in online bookings within first quarter',
      '42% increase in average trip value through upselling features',
      '68% of clients now complete their entire booking process online',
      'Reduced administrative work by 35 hours per week',
      'Won "Best Luxury Travel Website" at International Tourism Digital Awards',
      'Featured as a UX case study at a major design conference'
    ],
    images: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
    testimonial: {
      text: "Native Web Design has transformed our business by creating a digital experience that actually captures the magic of our travel offerings. The immersive destination pages and intuitive booking process have dramatically increased our online conversions. Even our most technology-averse travel advisors now proudly direct clients to the website, knowing it will enhance rather than diminish the personal service we're known for.",
      author: "Sophia Torres",
      position: "Managing Director, Horizon Travel",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150"
    },
    deliverables: [
      'Custom website with integrated booking platform',
      'Destination content strategy and production',
      'Custom photography art direction',
      'Video production guidelines for destinations',
      'CRM integration and data migration',
      'Staff training program for booking management',
      'Marketing automation setup for follow-up sequences'
    ],
    timeline: '16 weeks',
    year: 2022
  },
  {
    id: 7,
    title: 'Pixel Perfect Photography',
    category: 'Web Design',
    clientType: 'High-End Photography Studio',
    clientAudience: 'Couples planning weddings, families, and commercial clients',
    overview: 'Pixel Perfect Photography needed a portfolio website that would showcase their award-winning work while streamlining their client booking and image delivery workflow.',
    challenge: 'As their reputation grew, Pixel Perfect was spending too much time on administrative tasks rather than photography. Their previous website loaded slowly, particularly for their international clients, and their booking process involved multiple platforms causing confusion and missed opportunities.',
    solution: 'We designed a visually-focused platform that uses advanced image optimization techniques to deliver stunning visuals without sacrificing performance. The integrated booking system and client portal have automated their workflow from initial inquiry through to final image delivery.',
    features: [
      'Progressive image loading with blur-up effect for instant engagement',
      'Category-based portfolio with intuitive filtering and favoriting',
      'Integrated booking system with automatic contract generation',
      'Secure client galleries with download options and sharing controls',
      'Photography package comparison tool with add-on selection',
      'Location scouting map with previous shoot examples',
      'Before/after editing showcase with interactive slider'
    ],
    technologies: [
      'Gatsby.js for image optimization and performance',
      'Cloudinary for advanced image transformations',
      'Netlify for global CDN deployment',
      'GraphQL for efficient data querying',
      'Stripe for payment processing and invoicing',
      'Custom lightbox with touch gestures and keyboard controls',
      'Intersection Observer for seamless lazy loading'
    ],
    results: [
      '86% faster page load times compared to previous site',
      '43% increase in contact form submissions from ideal clients',
      'Administrative time reduced from 15 hours to 3 hours per week',
      'Portfolio images now rank in Google Image Search for key terms',
      'Featured in Professional Photographer Magazine as a digital case study',
      '32% increase in average client spending through strategic package presentation'
    ],
    images: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
      'https://images.unsplash.com/photo-1554048612-b6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
    testimonial: {
      text: "Native Web Design truly understands the needs of a photography business. They created a website that not only showcases my work beautifully but also handles everything from booking to delivery seamlessly. My clients are impressed with the experience, and I've reclaimed hours each week that I can now spend behind the camera instead of managing administrative tasks. The image optimization is particularly impressive—my portfolio loads instantly without compromising quality.",
      author: "Alex Morgan",
      position: "Owner & Lead Photographer, Pixel Perfect Photography",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150"
    },
    deliverables: [
      'Custom portfolio website with client management system',
      'Booking workflow automation',
      'Client gallery system with access controls',
      'SEO strategy focused on local photography keywords',
      'Social media integration for portfolio sharing',
      'Analytics dashboard with custom event tracking',
      'Image optimization workflow documentation'
    ],
    timeline: '10 weeks',
    year: 2021
  },
  {
    id: 8,
    title: 'Urban Cycle Shop',
    category: 'E-commerce',
    clientType: 'Premium Bicycle Retailer & Service Center',
    clientAudience: 'Urban commuters, cycling enthusiasts, and eco-conscious consumers',
    overview: 'Urban Cycle Shop needed a unified digital platform to sell custom bicycles, accessories, and schedule maintenance services while building community among urban cyclists.',
    challenge: 'Urban Cycle Shop faced intense competition from both large online retailers and local shops. They needed to leverage their expertise and service quality online, while handling the complexity of customizable products and integrating their service department into the digital experience.',
    solution: 'We created a comprehensive e-commerce ecosystem that connects their product inventory with their service capabilities. The centerpiece is a custom bicycle configurator that makes the complex process of building a custom bike engaging and accessible, creating an experience impossible to replicate at mass-market competitors.',
    features: [
      'Interactive bicycle configurator with real-time 3D visualization',
      'Bicycle passport system tracking ownership and maintenance history',
      'Service scheduling with technician selection and status updates',
      'Parts compatibility verification system',
      'Urban route mapping and sharing community',
      'Cycling educational content with contextual product recommendations',
      'Workshop events and class registration'
    ],
    technologies: [
      'WooCommerce with extensive customizations',
      'Three.js for 3D bicycle configuration visualization',
      'Custom product rules engine for compatibility',
      'Advanced inventory management with supplier integration',
      'Progressive Web App features for mobile experience',
      'Service management system with custom workflows',
      'Strava API integration for community features'
    ],
    results: [
      '245% increase in e-commerce revenue within first year',
      '68% of online customers engage with in-store services',
      '37% higher average order value with product configurator vs. standard shopping',
      'Service department scheduling efficiency improved by 56%',
      'Featured in Cycling Today magazine as digital innovation leader',
      'Expanded to two new locations based on online success',
      'Built community of over 5,000 active urban cyclists'
    ],
    images: [
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800',
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800',
    testimonial: {
      text: "Native Web Design didn't just build us an online store—they created a digital hub that embodies everything our brand stands for. The bicycle configurator has transformed how customers engage with us, allowing us to showcase our expertise and craftsmanship in a way that mass-market retailers simply can't match. The integration between our product and service offerings has created a seamless experience that keeps customers coming back throughout their cycling journey.",
      author: "James Wilson",
      position: "Founder & Master Technician, Urban Cycle Shop",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
    },
    deliverables: [
      'Custom e-commerce platform with 3D configurator',
      'Service management system',
      'Inventory and supplier integration',
      'Community features and user accounts',
      'Staff training and operational documentation',
      'Digital marketing launch strategy',
      'Performance optimization and conversion tracking'
    ],
    timeline: '18 weeks',
    year: 2021
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the project based on the ID parameter
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const foundProject = projects.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
      } else {
        // If project not found, navigate to the portfolio page
        navigate('/portfolio');
      }
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-12 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-6 w-64 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-6" 
              onClick={() => navigate('/portfolio')}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.isArray(project.category) ? (
                project.category.map((cat) => (
                  <Badge key={cat} variant="outline" className="bg-secondary-50">
                    {cat}
                  </Badge>
                ))
              ) : (
                <Badge variant="outline" className="bg-secondary-50">
                  {project.category}
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-4">
              {project.title}
            </h1>
            
            <div className="flex items-center text-secondary-700 mb-6">
              <div className="flex items-center mr-6">
                <Calendar size={16} className="mr-2" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{project.timeline}</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-secondary-700 max-w-3xl">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Project Images Showcase */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main image */}
          <div className="rounded-lg overflow-hidden mb-4 shadow-lg">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - View ${currentImageIndex + 1}`} 
              className="w-full object-cover h-[60vh]"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <button 
                key={index} 
                className={`rounded-lg overflow-hidden ${currentImageIndex === index ? 'ring-4 ring-primary-500' : 'opacity-70 hover:opacity-100'} transition-all`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${project.title} thumbnail ${index + 1}`} 
                  className="w-full h-24 md:h-32 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Project Information */}
            <div className="lg:col-span-2 space-y-12">
              {/* Client & Project Overview */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-medium">Project Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-secondary-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-2">Client</h3>
                    <p className="text-secondary-700 mb-1">{project.clientType}</p>
                    <p className="text-secondary-500 text-sm">Target audience: {project.clientAudience}</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-2">Project Scope</h3>
                    <p className="text-secondary-700 mb-1">{project.timeline} timeline</p>
                    <p className="text-secondary-500 text-sm">Completed in {project.year}</p>
                  </div>
                </div>
                
                {/* Challenge and Solution */}
                <div>
                  <h3 className="text-xl font-medium mb-3">The Challenge</h3>
                  <p className="text-secondary-700 mb-6">{project.challenge}</p>
                  
                  <h3 className="text-xl font-medium mb-3">Our Solution</h3>
                  <p className="text-secondary-700">{project.solution}</p>
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 rounded-full bg-primary-100 p-1 text-primary-600">
                        <Check size={14} />
                      </div>
                      <p className="text-secondary-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Results */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Results</h2>
                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-3 rounded-full bg-primary-100 p-1 text-primary-600">
                          <Check size={14} />
                        </div>
                        <p className="text-secondary-700">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-secondary-50 rounded-lg p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                    {project.testimonial.avatar && (
                      <img 
                        src={project.testimonial.avatar} 
                        alt={project.testimonial.author} 
                        className="w-16 h-16 rounded-full object-cover mr-4 mb-4 sm:mb-0"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-medium">{project.testimonial.author}</h3>
                      <p className="text-secondary-500">{project.testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-secondary-700 italic">"{project.testimonial.text}"</p>
                </div>
              )}
            </div>
            
            {/* Right Column - Project Details */}
            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-medium mb-4">Technologies Used</h3>
                <div className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center py-2 border-b border-secondary-100">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                      <span className="text-secondary-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-medium mb-4">Deliverables</h3>
                <div className="space-y-2">
                  {project.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center py-2 border-b border-secondary-100">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                      <span className="text-secondary-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-primary-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-medium mb-3">Need a similar project?</h3>
                <p className="text-secondary-700 mb-4">Let's discuss how we can help your business succeed online with a custom web solution.</p>
                <Button asChild className="w-full">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects - Next Project */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-medium">Explore More Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/portfolio/${relatedProject.id}`}
                  className="group block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedProject.thumbnailImage || relatedProject.images[0]}
                      alt={relatedProject.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Array.isArray(relatedProject.category) ? (
                        relatedProject.category.map((cat) => (
                          <Badge key={cat} variant="outline" className="bg-secondary-50">
                            {cat}
                          </Badge>
                        ))
                      ) : (
                        <Badge variant="outline" className="bg-secondary-50">
                          {relatedProject.category}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary-500 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center text-primary-500 font-medium group-hover:underline">
                      View Project
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Ready to start your own success story? Get in touch to discuss how we can help your business grow online.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-500">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;