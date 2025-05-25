import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Code, ShoppingBag, Smartphone, Paintbrush, Settings, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Services = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main services
  const services = [
    {
      id: 1,
      icon: <Monitor className="h-8 w-8" />,
      title: 'Custom Web Design',
      description: 'Bespoke website designs tailored to your brand identity, business goals, and target audience.',
      features: [
        'Custom visual design',
        'User experience strategy',
        'Responsive design for all devices',
        'Brand integration',
        'SEO best practices'
      ],
      cta: 'Start a Custom Web Design Project'
    },
    {
      id: 2,
      icon: <Code className="h-8 w-8" />,
      title: 'Website Redesign',
      description: 'Transform your existing website with a fresh, modern look and improved functionality.',
      features: [
        'Design audit and strategy',
        'Modern user interface design',
        'Performance optimization',
        'Content restructuring',
        'Improved conversion paths'
      ],
      cta: 'Redesign Your Website'
    },
    {
      id: 3,
      icon: <ShoppingBag className="h-8 w-8" />,
      title: 'E-commerce Websites',
      description: 'Powerful online stores that drive sales with seamless shopping experiences.',
      features: [
        'Custom e-commerce design',
        'Product catalog management',
        'Secure payment processing',
        'Inventory management',
        'Mobile shopping experience'
      ],
      cta: 'Build Your Online Store'
    },
    {
      id: 4,
      icon: <Smartphone className="h-8 w-8" />,
      title: 'UX/UI Design',
      description: 'Intuitive user interfaces and seamless experiences that keep users engaged.',
      features: [
        'User research and testing',
        'Information architecture',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability optimization'
      ],
      cta: 'Improve Your User Experience'
    },
    {
      id: 5,
      icon: <Paintbrush className="h-8 w-8" />,
      title: 'Brand Identity',
      description: 'Cohesive visual identity systems that communicate your brand values and connect with your audience.',
      features: [
        'Logo design',
        'Color palette development',
        'Typography selection',
        'Brand guidelines',
        'Visual asset creation'
      ],
      cta: 'Develop Your Brand Identity'
    },
    {
      id: 6,
      icon: <Settings className="h-8 w-8" />,
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally.',
      features: [
        'Regular updates and backups',
        'Security monitoring',
        'Performance optimization',
        'Content updates',
        'Technical support'
      ],
      cta: 'Get Website Maintenance'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8">
              We offer comprehensive web design and development services tailored to help your business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary-100 text-primary-500 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-medium mb-3">{service.title}</h2>
                  <p className="text-lg text-secondary-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact" state={{ service: service.title }}>
                      {service.cta}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed efficiently and meets your expectations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2" />
              
              {/* Process Steps */}
              <div className="space-y-16 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Discovery</h3>
                    <p className="text-secondary-700">
                      We start by understanding your business, goals, target audience, and project requirements.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-medium">1</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" 
                      alt="Discovery phase" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-serif font-medium mb-2">Strategy & Planning</h3>
                    <p className="text-secondary-700">
                      We develop a comprehensive strategy for your website, including sitemap, wireframes, and content plan.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="hidden md:block absolute right-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center transform translate-x-1/2">
                      <span className="font-medium">2</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600" 
                      alt="Strategy phase" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Design</h3>
                    <p className="text-secondary-700">
                      We create beautiful, user-friendly designs that align with your brand and business objectives.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-medium">3</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600" 
                      alt="Design phase" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-serif font-medium mb-2">Development</h3>
                    <p className="text-secondary-700">
                      We build your website using modern technologies, ensuring it's responsive, fast, and user-friendly.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="hidden md:block absolute right-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center transform translate-x-1/2">
                      <span className="font-medium">4</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600" 
                      alt="Development phase" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Testing & Launch</h3>
                    <p className="text-secondary-700">
                      We thoroughly test your website and make it live, ensuring a smooth launch and optimal performance.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-medium">5</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=600" 
                      alt="Launch phase" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2">How long does it take to complete a website?</h3>
                <p className="text-secondary-700">
                  The timeline varies depending on the complexity of the project. A basic website typically takes 4-6 weeks, 
                  while more complex projects like e-commerce sites may take 8-12 weeks. We'll provide a specific timeline 
                  during our initial consultation.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2">What information do you need to get started?</h3>
                <p className="text-secondary-700">
                  To get started, we'll need information about your business, target audience, design preferences, content needs, 
                  and specific functionality requirements. We'll guide you through this process with our detailed project questionnaire.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2">Do you provide content for the website?</h3>
                <p className="text-secondary-700">
                  While we can provide guidance on content strategy and structure, most clients provide their own content. 
                  If you need assistance with content creation, we can connect you with our network of professional copywriters.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2">Will my website be mobile-friendly?</h3>
                <p className="text-secondary-700">
                  Absolutely! All our websites are built with responsive design, ensuring they look and function beautifully 
                  on all devices, from desktops to tablets and smartphones.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2">Do you provide website maintenance?</h3>
                <p className="text-secondary-700">
                  Yes, we offer ongoing maintenance plans to keep your website secure, up-to-date, and performing optimally. 
                  Our maintenance services include regular updates, backups, security monitoring, and technical support.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-500">
              <Link to="/contact">
                Request a Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;