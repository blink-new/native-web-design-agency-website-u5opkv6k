import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ProjectCategory, projects } from '../lib/portfolio-data';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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