import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Target, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Creative Director',
      bio: 'With over 15 years of experience in web design and branding, Alex leads our creative team with a passion for innovative design solutions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
    },
    {
      name: 'Sarah Parker',
      role: 'Lead Developer',
      bio: 'Sarah is a full-stack developer who specializes in creating clean, efficient code. She ensures our websites are not only beautiful but also performant.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
    },
    {
      name: 'Michael Chen',
      role: 'UX/UI Designer',
      bio: 'Michael brings a user-centered approach to every project, focusing on creating intuitive and engaging user experiences that drive results.',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      bio: 'Emily keeps our projects on track and ensures clear communication between our team and clients throughout the entire design process.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400'
    }
  ];

  // Values
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Passion',
      description: 'We love what we do and bring enthusiasm to every project we take on.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'We work closely with our clients, treating each project as a partnership.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Purpose',
      description: 'Every design decision we make is intentional and goal-oriented.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, never settling for "good enough".'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Timeliness',
      description: 'We respect deadlines and deliver our projects on time, every time.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              About Native Web Design
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8">
              We're a team of passionate designers and developers dedicated to creating beautiful, functional websites.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800" 
                alt="Our team at work"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                At Native Web Design, our mission is to empower small businesses and entrepreneurs with beautiful, 
                purpose-driven websites that effectively communicate their unique value and help them achieve their business goals.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                We believe that great design is not just about aesthetics, but about creating meaningful experiences 
                that connect businesses with their audience and drive real results.
              </p>
              <p className="text-lg text-secondary-700">
                Our approach combines creative design with strategic thinking to deliver websites that look great, 
                perform well, and help our clients succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              These principles guide everything we do and define how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{value.title}</h3>
                <p className="text-secondary-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-6 text-lg text-secondary-700">
              <p>
                Native Web Design was founded in 2015 by Alex Johnson, a seasoned web designer with a vision to create a 
                design agency that truly understood the needs of small businesses and entrepreneurs.
              </p>
              <p>
                After years of working at larger agencies where clients were often treated as transactions rather than 
                partners, Alex wanted to build something different—an agency that would work closely with clients to 
                understand their unique challenges and create tailored solutions that drive real results.
              </p>
              <p>
                Starting with just two team members in a small studio, Native Web Design has grown into a full-service 
                web design agency with a team of talented designers, developers, and strategists. Despite our growth, 
                we've maintained our commitment to personalized service and collaborative partnerships with our clients.
              </p>
              <p>
                Today, we're proud to have helped hundreds of businesses establish and grow their online presence with 
                websites that are not only beautiful but also strategic and effective. Our approach combines creativity 
                with purpose, ensuring that every website we build helps our clients achieve their specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              We're a tight-knit team of designers, developers, and strategists who are passionate about creating 
              exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-secondary-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-1">{member.name}</h3>
                  <p className="text-primary-500 mb-3">{member.role}</p>
                  <p className="text-secondary-700 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Ready to start your project? We'd love to hear about your business and how we can help you achieve your goals.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-500">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;