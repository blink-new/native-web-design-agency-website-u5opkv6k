import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ShoppingBag, Code } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Client logos
  const clients = [
    { name: 'Acme Co', logo: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?w=600' },
    { name: 'Globe Bank', logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600' },
    { name: 'Organic Foods', logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=600' },
    { name: 'Tech Partners', logo: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600' },
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'Bloom Floral Studio',
      image: 'https://images.unsplash.com/photo-1558905511-25d6800b5dc3?w=800',
      category: 'E-commerce',
    },
    {
      id: 2,
      title: 'Atlas Fitness App',
      image: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800',
      category: 'Mobile App',
    },
    {
      id: 3,
      title: 'Savant Financial',
      image: 'https://images.unsplash.com/photo-1553484771-689577a88a45?w=800',
      category: 'Web Design',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "Native Web Design brought our vision to life with their creativity and technical expertise. Our new website has significantly increased our online sales.",
      author: "Jane Cooper",
      position: "CEO, Bloom Floral Studio",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
    },
    {
      id: 2,
      text: "Working with Native Web Design was a seamless experience. They delivered our project on time and within budget, exceeding all our expectations.",
      author: "David Mitchell",
      position: "Founder, Atlas Fitness",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Crafting Beautiful, Purpose-Driven Websites
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
              We design and develop stunning websites that help your business grow, engage customers, and drive results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Creating Digital Experiences That Drive Results
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              Native Web Design is a full-service web design agency specializing in creating custom websites 
              for small businesses, startups, and entrepreneurs. We combine stunning design with strategic thinking 
              to build websites that not only look beautiful but also achieve your business goals.
            </p>
            <Button asChild variant="ghost" className="font-medium group">
              <Link to="/about" className="flex items-center">
                Learn more about us
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-xl font-serif font-medium text-secondary-500">Trusted by businesses of all sizes</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-12 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Services</h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              We offer a comprehensive range of web design and development services tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="mb-4 text-primary-500">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Custom Web Design</h3>
              <p className="text-secondary-700 mb-4">
                Bespoke website designs crafted to reflect your brand identity and meet your specific goals.
              </p>
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary-500 group">
                <Link to="/services" className="flex items-center">
                  Learn more
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>
            
            <Card className="p-6 border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="mb-4 text-primary-500">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Website Redesign</h3>
              <p className="text-secondary-700 mb-4">
                Transform your existing website with a fresh, modern look and improved functionality.
              </p>
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary-500 group">
                <Link to="/services" className="flex items-center">
                  Learn more
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>
            
            <Card className="p-6 border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="mb-4 text-primary-500">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">E-commerce Websites</h3>
              <p className="text-secondary-700 mb-4">
                Powerful online stores that drive sales with seamless shopping experiences.
              </p>
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary-500 group">
                <Link to="/services" className="flex items-center">
                  Learn more
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Featured Projects</h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Explore some of our recent work and see how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg bg-white shadow-md">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-primary-300 font-medium mb-1">{project.category}</span>
                  <h3 className="text-xl font-serif text-white mb-2">{project.title}</h3>
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white w-fit">
                    <Link to={`/portfolio/${project.id}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/portfolio" className="flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 border border-secondary-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-lg">{testimonial.author}</h4>
                    <p className="text-secondary-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-secondary-700 italic">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let's work together to create a beautiful, purpose-driven website that helps your business succeed online.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-500">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;