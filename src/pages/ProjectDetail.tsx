import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Project, projects } from '../lib/portfolio-data';

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