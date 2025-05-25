// Scroll to top on component mount
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ShoppingBag, Code, MousePointer, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';

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
      title: 'Rosemary Artisan Bakery',
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800',
      category: 'E-commerce',
    },
    {
      id: 2,
      title: 'Vertex Fitness Platform',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      category: 'Mobile App',
    },
    {
      id: 3,
      title: 'Meridian Capital Advisors',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      category: 'Web Design',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "Working with Native Web Design transformed our business completely. Before their help, we were drowning in paper orders and spreadsheets. Now we have a beautiful website that not only showcases our products exactly how we want but also streamlines our entire ordering process.",
      author: "Sofia Mendez",
      position: "Owner & Head Baker, Rosemary Artisan Bakery",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
    },
    {
      id: 2,
      text: "Native Web Design created exactly what we needed - not just an app, but a complete digital extension of our brand and training philosophy. Their team took the time to understand our unique approach to fitness and translated it into an engaging digital experience.",
      author: "Marcus Reeves",
      position: "Founder & Head Coach, Vertex Fitness",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150"
    }
  ];

  // Benefits
  const benefits = [
    { 
      icon: <MousePointer size={24} />, 
      title: "User-Centered Design", 
      description: "We create websites that prioritize the needs and expectations of your users."
    },
    { 
      icon: <CheckCircle size={24} />, 
      title: "Quality Assurance", 
      description: "Every project undergoes rigorous testing to ensure flawless performance across all devices."
    },
    { 
      icon: <Code size={24} />, 
      title: "Clean Code", 
      description: "Our development follows best practices for maintainable, scalable and secure websites."
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=1600')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="heading-xl mb-6"
              variants={fadeIn}
            >
              Crafting Beautiful, Purpose-Driven Websites
            </motion.h1>
            <motion.p 
              className="body-lg mb-8 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              We design and develop stunning websites that help your business grow, engage customers, and drive results.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <Button asChild size="lg" className="text-base hover-lift">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base hover-lift">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract shape decorations */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full opacity-30 -ml-20 -mb-20"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full opacity-40 -mr-40"></div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-lg mb-6">
              Creating Digital Experiences That Drive Results
            </h2>
            <p className="body-lg mb-8">
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
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - New */}
      <section className="py-16 bg-white border-t border-secondary-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-secondary-50 rounded-lg hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{benefit.title}</h3>
                <p className="text-secondary-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-medium text-secondary-500">Trusted by businesses of all sizes</h3>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                className="flex justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-12 object-contain" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="body-lg max-w-2xl mx-auto">
              We offer a comprehensive range of web design and development services tailored to your unique needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 border border-secondary-100 hover:shadow-md transition-shadow h-full">
                <div className="mb-4 text-primary-500">
                  <Monitor size={28} />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Custom Web Design</h3>
                <p className="text-secondary-700 mb-4">
                  Bespoke website designs crafted to reflect your brand identity and meet your specific goals.
                </p>
                <Button asChild variant="link" className="p-0 h-auto font-medium text-primary-500 group mt-auto">
                  <Link to="/services" className="flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 border border-secondary-100 hover:shadow-md transition-shadow h-full">
                <div className="mb-4 text-primary-500">
                  <Code size={28} />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Website Redesign</h3>
                <p className="text-secondary-700 mb-4">
                  Transform your existing website with a fresh, modern look and improved functionality.
                </p>
                <Button asChild variant="link" className="p-0 h-auto font-medium text-primary-500 group mt-auto">
                  <Link to="/services" className="flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 border border-secondary-100 hover:shadow-md transition-shadow h-full">
                <div className="mb-4 text-primary-500">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">E-commerce Websites</h3>
                <p className="text-secondary-700 mb-4">
                  Powerful online stores that drive sales with seamless shopping experiences.
                </p>
                <Button asChild variant="link" className="p-0 h-auto font-medium text-primary-500 group mt-auto">
                  <Link to="/services" className="flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="hover-lift">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Explore some of our recent work and see how we've helped businesses achieve their goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="hover-lift">
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
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border border-secondary-100 hover:shadow-md transition-shadow h-full">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/10 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let's work together to create a beautiful, purpose-driven website that helps your business succeed online.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-500 hover-lift">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;