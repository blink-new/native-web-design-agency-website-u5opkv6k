import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Bloom Floral Studio',
      category: 'E-commerce',
      clientType: 'Floral Design Studio',
      clientAudience: 'Event planners, wedding couples, and flower enthusiasts',
      overview: 'Bloom Floral Studio needed an e-commerce website that showcased their beautiful arrangements while making it easy for customers to place orders for events or delivery.',
      challenge: "The client was struggling with an outdated website that didn't reflect the elegance of their brand. Their manual ordering process was time-consuming and error-prone.",
      solution: 'We designed a clean, elegant e-commerce platform with a dual focus: a streamlined shopping experience for everyday flower purchases and an inspirational portfolio section for event planning.',
      features: [
        'Custom e-commerce platform with inventory management',
        'Event booking system with calendar integration',
        'Product gallery with zoom functionality and 360° views',
        'Mobile responsive design optimized for all devices',
        'Integrated payment processing with multiple options',
        'Customer account area with order history and favorites'
      ],
      technologies: [
        'React.js',
        'Node.js',
        'MongoDB',
        'Stripe Payment Integration',
        'AWS S3 for image storage',
        'SendGrid for email notifications'
      ],
      results: [
        '138% increase in online orders within the first three months',
        '42% reduction in administrative work related to order processing',
        '67% increase in average order value through suggested add-ons',
        'Featured in Local Business Monthly as a digital transformation success story'
      ],
      images: [
        'https://images.unsplash.com/photo-1558905511-25d6800b5dc3?w=800',
        'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800',
        'https://images.unsplash.com/photo-1571986928058-bdf10f29cb49?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1558905511-25d6800b5dc3?w=800',
      testimonial: {
        text: "Native Web Design captured the essence of our brand perfectly. The website is not only beautiful but also functional, leading to a significant increase in online orders.",
        author: "Emma Richards",
        position: "Owner, Bloom Floral Studio",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
      },
      deliverables: [
        'Custom e-commerce website with CMS',
        'Mobile responsive design',
        'Brand style guide',
        'Training session for staff',
        'SEO optimization',
        '3 months of priority support'
      ],
      timeline: '8 weeks',
      year: 2023
    },
    {
      id: 2,
      title: 'Atlas Fitness App',
      category: 'Mobile App',
      clientType: 'Fitness Company',
      clientAudience: 'Fitness enthusiasts and personal trainers',
      overview: 'Atlas Fitness needed a mobile app that would allow users to track workouts, set goals, and connect with trainers for a personalized fitness experience.',
      challenge: 'Atlas Fitness was losing clients to larger fitness chains with dedicated mobile apps. They needed a solution that would differentiate them in the market.',
      solution: 'We developed a comprehensive fitness app that not only tracks workouts but creates a community around the Atlas Fitness brand. The app includes personalized workout plans and progress tracking.',
      features: [
        'Workout tracking with custom exercise library',
        'Goal setting with milestone celebrations',
        'Trainer-client messaging and video consultation',
        'Exercise library with HD video demonstrations',
        'Integration with popular wearable devices',
        'Nutrition tracking and meal planning',
        'Community challenges and leaderboards'
      ],
      technologies: [
        'React Native',
        'Firebase',
        'Redux',
        'Node.js backend',
        'MongoDB',
        'WebRTC for video calls',
        'Apple HealthKit & Google Fit integration'
      ],
      results: [
        '94% client retention rate compared to 65% pre-app',
        'Over 15,000 downloads in the first six months',
        '4.8/5 average rating across app stores',
        '76% of users engage with the app at least 3 times per week',
        'Featured in "Best Fitness Apps of 2023" by FitTech Magazine'
      ],
      images: [
        'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800',
        'https://images.unsplash.com/photo-1575998393243-f37b770a9395?w=800',
        'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800',
      testimonial: {
        text: "Working with Native Web Design was an incredible experience. They understood our vision and translated it into a beautiful, functional app that our users love.",
        author: "David Mitchell",
        position: "Founder, Atlas Fitness",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
      },
      deliverables: [
        'Native mobile app for iOS and Android',
        'Custom admin dashboard',
        'API documentation',
        'App Store and Play Store listings',
        'Marketing materials',
        '6 months of technical support and updates'
      ],
      timeline: '16 weeks',
      year: 2023
    },
    {
      id: 3,
      title: 'Savant Financial',
      category: 'Web Design',
      clientType: 'Financial Advisory Firm',
      clientAudience: 'High net worth individuals and corporate clients',
      overview: 'Savant Financial needed a professional website that conveyed trust, expertise, and accessibility to potential clients while simplifying complex financial concepts.',
      challenge: 'Savant Financial was struggling to convert leads into clients because their website appeared outdated and failed to communicate their unique approach to financial planning.',
      solution: 'We created a sophisticated yet welcoming website that uses clear visual metaphors to explain complex financial concepts. The site features interactive calculators and personalized client portals.',
      features: [
        'Professional, trust-building design with subtle animations',
        'Interactive financial planning tools and calculators',
        'Secure client portal integration',
        'Team member profiles with expertise highlighting',
        'Case studies showcasing client success stories',
        'Blog with financial insights and market analysis',
        'Compliance-friendly content management system'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Prismic CMS',
        'Chart.js for financial visualizations',
        'AWS hosting with enhanced security',
        'HubSpot CRM integration',
        'SSL encryption and data protection features'
      ],
      results: [
        '156% increase in qualified leads from the website',
        '32% improvement in average time spent on site',
        '28% increase in client acquisition within 6 months',
        'Reduced client onboarding time by 40% through portal features',
        'Won "Best Financial Services Website" at the Regional Business Web Awards'
      ],
      images: [
        'https://images.unsplash.com/photo-1553484771-689577a88a45?w=800',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1553484771-689577a88a45?w=800',
      testimonial: {
        text: "Native Web Design took the time to understand the nuances of our industry and the specific needs of our clientele. They created a website that perfectly balances professionalism with approachability.",
        author: "Jennifer Harding",
        position: "Managing Partner, Savant Financial",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150"
      },
      deliverables: [
        'Responsive website with custom CMS',
        'Secure client portal integration',
        'Interactive financial tools',
        'Content strategy documentation',
        'SEO optimization',
        'GDPR and financial compliance review'
      ],
      timeline: '10 weeks',
      year: 2022
    },
    {
      id: 4,
      title: 'Evergreen Landscaping',
      category: ['Web Design', 'Branding'],
      clientType: 'Landscaping Company',
      clientAudience: 'Homeowners and commercial property managers',
      overview: 'Evergreen Landscaping needed a complete brand refresh and a new website to showcase their services and portfolio of landscape design projects.',
      challenge: "After 15 years in business, Evergreen Landscaping's brand had become outdated and inconsistent across their materials. Their website was difficult to navigate, especially on mobile devices.",
      solution: 'We conducted a comprehensive brand refresh, creating a new visual identity that reflected their commitment to sustainable landscaping. The website redesign focused on showcasing their impressive portfolio.',
      features: [
        'Complete brand identity redesign (logo, color palette, typography)',
        'Responsive website with virtual landscape planner tool',
        'Interactive before/after project comparisons',
        'Service estimator calculator',
        'Seasonal maintenance reminder system',
        'Integrated blog with gardening tips and landscape inspiration',
        'Customer testimonial video integration'
      ],
      technologies: [
        'WordPress with custom theme',
        'Advanced Custom Fields',
        'GSAP for smooth animations',
        'Mapbox integration for service area visualization',
        'WebGL for interactive elements',
        'Instagram API for social feed integration',
        'Schema markup for local SEO'
      ],
      results: [
        '186% increase in quote requests within 3 months of launch',
        '42% increase in average project value',
        '64% reduction in bounce rate on mobile devices',
        'Featured in "Landscape Design Today" magazine',
        'Secured 3 major commercial contracts due to improved portfolio presentation'
      ],
      images: [
        'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800',
        'https://images.unsplash.com/photo-1599686302719-0d15889a0977?w=800',
        'https://images.unsplash.com/photo-1551509134-eb5c69d3b571?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800',
      testimonial: {
        text: "Our new website and brand identity have completely transformed our business. The number of quality leads we receive has doubled, and clients frequently mention how impressed they are with our online presence.",
        author: "Michael Green",
        position: "Owner, Evergreen Landscaping",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
      },
      deliverables: [
        'Brand identity package (logo, business cards, vehicle graphics)',
        'Style guide and brand standards document',
        'Responsive website with CMS',
        'Photo shoot coordination',
        'Print materials (brochures, proposal templates)',
        'Social media profile updates',
        'Staff training on CMS usage'
      ],
      timeline: '12 weeks',
      year: 2022
    },
    {
      id: 5,
      title: 'Artisan Bakery',
      category: ['E-commerce', 'Branding'],
      clientType: 'Specialty Bakery',
      clientAudience: 'Food enthusiasts and gift shoppers',
      overview: 'Artisan Bakery needed an e-commerce site to sell their specialty baked goods and gift boxes nationwide, expanding beyond their local customer base.',
      challenge: 'Artisan Bakery had a loyal local following but was limited by their physical location. They needed to scale their business through online sales while ensuring their products arrived fresh and intact.',
      solution: 'We created a mouthwatering e-commerce experience that highlighted the artisanal quality of their products with rich storytelling and beautiful photography. The site includes an intelligent inventory management system.',
      features: [
        'Storytelling-focused product pages with production process videos',
        'Gift customization tools with real-time preview',
        'Subscription service with flexible delivery scheduling',
        'Production capacity management system',
        'Intelligent shipping calculator with weather considerations',
        'Recipe blog with ingredient cross-selling',
        'Baker profiles highlighting craftsmanship'
      ],
      technologies: [
        'Shopify Plus with custom theme',
        'React for interactive elements',
        'Klaviyo for email marketing',
        'Custom inventory management integration',
        'ShipStation integration with custom logic',
        'Yotpo for reviews and loyalty program',
        'Google Analytics enhanced e-commerce'
      ],
      results: [
        '327% revenue growth in the first year of online sales',
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
        text: "Working with Native Web Design transformed our small local bakery into a nationwide brand. Their e-commerce expertise helped us solve complex challenges around shipping perishable products.",
        author: "Clara Martinez",
        position: "Founder & Head Baker, Artisan Bakery",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
      },
      deliverables: [
        'Custom Shopify e-commerce store',
        'Brand refinement (logo enhancement, packaging design)',
        'Product photography art direction',
        'Email marketing templates and automation setup',
        'Inventory and fulfillment system integration',
        'Staff training and documentation',
        'Ongoing conversion rate optimization'
      ],
      timeline: '10 weeks',
      year: 2023
    },
    {
      id: 6,
      title: 'Horizon Travel',
      category: ['Web Design', 'E-commerce'],
      clientType: 'Luxury Travel Agency',
      clientAudience: 'Adventure travelers and luxury vacation seekers',
      overview: 'Horizon Travel needed a website that inspired wanderlust while providing practical booking capabilities for their curated travel experiences.',
      challenge: 'Horizon Travel was struggling to convert their impressive offline service into an equally premium online experience. Their existing website failed to capture the excitement and exclusivity of their custom travel packages.',
      solution: 'We created an immersive digital platform that combines stunning destination photography with seamless booking functionality. The site takes users on a visual journey through each destination while making trip planning intuitive.',
      features: [
        'Cinematic destination showcases with fullscreen video backgrounds',
        'Interactive trip planner with drag-and-drop itinerary building',
        'Real-time availability and pricing engine',
        'Personalized travel recommendation engine',
        'Virtual reality destination previews',
        'Travel journal feature for past clients to share experiences',
        'Multi-currency support with dynamic conversion'
      ],
      technologies: [
        'Next.js for frontend',
        'Sanity.io for content management',
        'GraphQL API for data fetching',
        'Three.js for immersive 3D elements',
        'Stripe for secure payments',
        'Twilio for SMS notifications',
        'Custom booking engine with third-party API integrations'
      ],
      results: [
        '215% increase in online bookings within the first quarter',
        '42% increase in average trip value',
        '68% of clients now complete their entire booking process online',
        'Reduced administrative work by 35 hours per week',
        'Won "Best Travel Website" at the International Tourism Digital Awards',
        'Featured as a case study at a major web design conference'
      ],
      images: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
        'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      testimonial: {
        text: "The website Native Web Design created for us perfectly captures the essence of luxury travel. It's not only beautiful but has significantly improved our booking conversion rate and operational efficiency.",
        author: "Sophia Torres",
        position: "Director, Horizon Travel",
        avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150"
      },
      deliverables: [
        'Custom website with integrated booking platform',
        'Content strategy for destination pages',
        'Custom photography direction and editing',
        'Booking engine integration with CRM',
        'Email marketing templates for follow-up sequences',
        'Training program for travel agents',
        'Comprehensive analytics dashboard'
      ],
      timeline: '14 weeks',
      year: 2022
    },
    {
      id: 7,
      title: 'Pixel Perfect Photography',
      category: 'Web Design',
      clientType: 'Photography Studio',
      clientAudience: 'Potential clients seeking professional photography services',
      overview: 'Pixel Perfect Photography needed a portfolio website that would showcase their work while attracting new clients and streamlining their booking process.',
      challenge: 'As a high-end photography studio, Pixel Perfect needed a website that loaded their extensive portfolio quickly without sacrificing image quality. They also needed to streamline their booking and client communication process.',
      solution: 'We designed a visually stunning portfolio site with advanced image optimization techniques that maintain quality while ensuring fast loading times. The integrated booking system and client portal have automated much of their administrative work.',
      features: [
        'Progressive image loading with blur-up technique',
        'Category-based portfolio with intuitive filtering',
        'Integrated booking system with deposit payments',
        'Client portal for image delivery and approvals',
        'Photography package comparison tool',
        'Location scouting map integration',
        'Before/after editing showcases'
      ],
      technologies: [
        'Gatsby.js for performance',
        'Cloudinary for advanced image processing',
        'Netlify for hosting',
        'GraphQL for data management',
        'Stripe for payment processing',
        'Custom lightbox with touch gestures',
        'Intersection Observer for lazy loading'
      ],
      results: [
        '86% faster page load times compared to previous site',
        '43% increase in contact form submissions',
        'Administrative time reduced from 15 hours to 3 hours per week',
        'Portfolio images now rank in Google Image Search for key terms',
        'Featured in Professional Photographer Magazine',
        '32% increase in average client spending'
      ],
      images: [
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
        'https://images.unsplash.com/photo-1554048612-b6a2a5aee158?w=800',
        'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
      testimonial: {
        text: "Native Web Design understood exactly what a photography business needs in a website. The image optimization is impressive - my work loads quickly but looks stunning. The booking system has transformed my business operations.",
        author: "Alex Morgan",
        position: "Lead Photographer, Pixel Perfect Photography",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150"
      },
      deliverables: [
        'Custom portfolio website with CMS',
        'Booking system integration',
        'Client portal for image delivery',
        'SEO optimization for photography keywords',
        'Social media integration strategy',
        'Analytics dashboard with custom events',
        'Image optimization workflow documentation'
      ],
      timeline: '8 weeks',
      year: 2021
    },
    {
      id: 8,
      title: 'Urban Cycle Shop',
      category: 'E-commerce',
      clientType: 'Bicycle Retailer',
      clientAudience: 'Urban cyclists and commuters',
      overview: 'Urban Cycle Shop needed an e-commerce platform to sell bicycles, accessories, and schedule maintenance services, creating a complete digital ecosystem for urban cyclists.',
      challenge: 'Urban Cycle Shop faced intense competition from large online retailers and needed a way to differentiate themselves through expertise and service. They had a complex inventory of customizable products and services.',
      solution: 'We created a custom e-commerce platform that combines product sales with service booking, featuring an innovative bicycle customization tool that allows customers to build their perfect urban bike. The integration between products and services creates multiple touchpoints with customers.',
      features: [
        'Interactive bicycle builder with real-time visualization',
        'Maintenance history tracking for registered bikes',
        'Service scheduling with technician selection',
        'Parts compatibility checker',
        'Cycling route sharing community',
        'Urban cycling safety guide with product recommendations',
        'Bike fitting appointment booking'
      ],
      technologies: [
        'WooCommerce with custom extensions',
        'Three.js for 3D bicycle configuration',
        'Custom product configurator',
        'Advanced inventory management',
        'Appointment scheduling system',
        'PWA features for mobile users',
        'Strava API integration'
      ],
      results: [
        '245% increase in e-commerce revenue in first year',
        '68% of online customers also book in-store services',
        '37% higher average order value with product configurator',
        'Service department scheduling efficiency improved by 56%',
        'Featured in Cycling Today magazine',
        'Expanded to two new locations based on online success'
      ],
      images: [
        'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800',
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800',
        'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800'
      ],
      thumbnailImage: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800',
      testimonial: {
        text: "The team at Native Web Design didn't just build us an online store - they created a digital hub for urban cyclists that perfectly represents our brand values and expertise. The bicycle configurator has been a game-changer for our business.",
        author: "James Wilson",
        position: "Owner, Urban Cycle Shop",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
      },
      deliverables: [
        'Custom e-commerce platform',
        'Product configurator tool',
        'Service booking system',
        'Inventory management system',
        'Staff training program',
        'Digital marketing launch strategy',
        'Maintenance documentation'
      ],
      timeline: '16 weeks',
      year: 2021
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeFilter) 
          : project.category === activeFilter
      );

  // Available categories for filtering
  const categories: ProjectCategory[] = ['All', 'Web Design', 'E-commerce', 'Branding', 'Mobile App'];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8">
              Explore our recent projects and see how we've helped businesses achieve their goals through beautiful, strategic web design.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 bg-white border-b border-secondary-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center mr-2 text-secondary-700">
              <Filter size={16} className="mr-2" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.thumbnailImage || project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
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
                  <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-700 mb-4 line-clamp-2">
                    {project.overview}
                  </p>
                  <div className="flex items-center text-primary-500 font-medium group-hover:underline">
                    View Project
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
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

export default Portfolio;