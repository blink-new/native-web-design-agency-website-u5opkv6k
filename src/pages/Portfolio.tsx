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
  images: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
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
      challenge: 'Creating a visually stunning site that balanced aesthetics with functionality, allowing customers to easily browse and purchase arrangements.',
      solution: 'We designed a clean, elegant e-commerce platform that highlights the beauty of their floral arrangements while providing a seamless shopping experience.',
      features: [
        'Custom e-commerce platform',
        'Event booking system',
        'Product gallery with zoom functionality',
        'Mobile responsive design',
        'Integrated payment processing'
      ],
      images: [
        'https://images.unsplash.com/photo-1558905511-25d6800b5dc3?w=800',
        'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800'
      ],
      testimonial: {
        text: "Native Web Design captured the essence of our brand perfectly. The website is not only beautiful but also functional, leading to a significant increase in online orders.",
        author: "Emma Richards",
        position: "Owner, Bloom Floral Studio"
      }
    },
    {
      id: 2,
      title: 'Atlas Fitness App',
      category: 'Mobile App',
      clientType: 'Fitness Company',
      clientAudience: 'Fitness enthusiasts and personal trainers',
      overview: 'Atlas Fitness needed a mobile app that would allow users to track workouts, set goals, and connect with trainers.',
      challenge: 'Creating an intuitive, feature-rich fitness app that would stand out in a crowded market and provide real value to users.',
      solution: 'We developed a sleek, user-friendly mobile app with comprehensive fitness tracking features and social capabilities.',
      features: [
        'Workout tracking and analytics',
        'Goal setting and progress monitoring',
        'Trainer-client communication platform',
        'Exercise library with video demonstrations',
        'Integration with wearable devices'
      ],
      images: [
        'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800',
        'https://images.unsplash.com/photo-1575998393243-f37b770a9395?w=800'
      ],
      testimonial: {
        text: "Working with Native Web Design was an incredible experience. They understood our vision and translated it into a beautiful, functional app that our users love.",
        author: "David Mitchell",
        position: "Founder, Atlas Fitness"
      }
    },
    {
      id: 3,
      title: 'Savant Financial',
      category: 'Web Design',
      clientType: 'Financial Advisory Firm',
      clientAudience: 'High net worth individuals and corporate clients',
      overview: 'Savant Financial needed a professional website that conveyed trust, expertise, and accessibility to potential clients.',
      challenge: 'Creating a sophisticated yet approachable digital presence for a financial services firm in a highly competitive market.',
      solution: 'We designed a clean, professional website with clear service descriptions, team profiles, and easy contact options.',
      features: [
        'Professional, trust-building design',
        'Service comparison tools',
        'Team member profiles',
        'Client testimonials',
        'Secure contact forms'
      ],
      images: [
        'https://images.unsplash.com/photo-1553484771-689577a88a45?w=800',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
      ]
    },
    {
      id: 4,
      title: 'Evergreen Landscaping',
      category: ['Web Design', 'Branding'],
      clientType: 'Landscaping Company',
      clientAudience: 'Homeowners and commercial property managers',
      overview: 'Evergreen Landscaping needed a complete brand refresh and a new website to showcase their services and portfolio.',
      challenge: 'Creating a cohesive brand identity and website that communicated their expertise and quality craftsmanship.',
      solution: 'We developed a fresh brand identity and a visually rich website that showcases their work and makes it easy for clients to request services.',
      features: [
        'Brand identity design',
        'Project portfolio with filtering',
        'Service quote calculator',
        'Before/after project comparisons',
        'Testimonial carousel'
      ],
      images: [
        'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800',
        'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800'
      ],
      testimonial: {
        text: "Our new website has completely transformed our business. The number of quality leads we receive has doubled, and clients frequently mention how impressed they are with our online presence.",
        author: "Michael Green",
        position: "Owner, Evergreen Landscaping"
      }
    },
    {
      id: 5,
      title: 'Artisan Bakery',
      category: ['E-commerce', 'Branding'],
      clientType: 'Specialty Bakery',
      clientAudience: 'Food enthusiasts and gift shoppers',
      overview: 'Artisan Bakery needed an e-commerce site to sell their specialty baked goods and gift boxes nationwide.',
      challenge: 'Creating a mouth-watering online experience that would drive sales and handle custom orders.',
      solution: 'We designed a deliciously visual e-commerce site with custom order capabilities and a subscription service for recurring deliveries.',
      features: [
        'Custom e-commerce platform',
        'Subscription service functionality',
        'Gift ordering system',
        'Visual product builder',
        'Delivery scheduling'
      ],
      images: [
        'https://images.unsplash.com/photo-1591688515527-f7b20bd05902?w=800',
        'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800'
      ]
    },
    {
      id: 6,
      title: 'Horizon Travel',
      category: ['Web Design', 'E-commerce'],
      clientType: 'Luxury Travel Agency',
      clientAudience: 'Adventure travelers and luxury vacation seekers',
      overview: 'Horizon Travel needed a website that inspired wanderlust while providing practical booking capabilities for their curated travel experiences.',
      challenge: 'Creating an immersive, aspirational site that balanced beautiful inspiration with functional booking tools.',
      solution: 'We designed an immersive website with stunning visuals and an intuitive booking system for their custom travel packages.',
      features: [
        'Immersive destination galleries',
        'Interactive travel package builder',
        'Availability calendar integration',
        'Secure payment processing',
        'Trip planning tools'
      ],
      images: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
        'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800'
      ],
      testimonial: {
        text: "The website Native Web Design created for us perfectly captures the essence of luxury travel. It's not only beautiful but has significantly improved our booking conversion rate.",
        author: "Sophia Torres",
        position: "Director, Horizon Travel"
      }
    },
    {
      id: 7,
      title: 'Pixel Perfect Photography',
      category: 'Web Design',
      clientType: 'Photography Studio',
      clientAudience: 'Potential clients seeking professional photography services',
      overview: 'Pixel Perfect Photography needed a portfolio website that would showcase their work while attracting new clients.',
      challenge: 'Creating a website that displayed their photography beautifully while being fast and responsive.',
      solution: 'We designed an elegant, gallery-focused website with optimized image loading and easy contact options.',
      features: [
        'Optimized image galleries',
        'Service booking system',
        'Portfolio categorization',
        'Client proofing area',
        'Instagram integration'
      ],
      images: [
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
        'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800'
      ]
    },
    {
      id: 8,
      title: 'Urban Cycle Shop',
      category: 'E-commerce',
      clientType: 'Bicycle Retailer',
      clientAudience: 'Urban cyclists and commuters',
      overview: 'Urban Cycle Shop needed an e-commerce platform to sell bicycles, accessories, and schedule maintenance services.',
      challenge: 'Creating an e-commerce system that could handle complex product configurations and service bookings.',
      solution: 'We built a comprehensive e-commerce platform with product customization tools and an integrated service booking system.',
      features: [
        'Bicycle customization tool',
        'Maintenance scheduling system',
        'Inventory management',
        'Size and fit calculator',
        'Community event calendar'
      ],
      images: [
        'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800',
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800'
      ]
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
                    src={project.images[0]}
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

      {/* Project Detail Section (Will be rendered on a separate page) */}

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