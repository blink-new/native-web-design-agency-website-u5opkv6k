import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '7 Web Design Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these cutting-edge web design trends that are shaping the digital landscape this year.',
      content: `
        <p>The web design landscape is constantly evolving, with new trends emerging each year. In 2024, we're seeing a shift towards more immersive, accessible, and performance-focused designs.</p>
        
        <h2>1. Immersive Scrolling Experiences</h2>
        <p>Parallax scrolling has evolved into more complex, story-driven experiences that guide users through content in an engaging way.</p>
        
        <h2>2. Dark Mode as Standard</h2>
        <p>Dark mode is no longer just an alternative option—it's becoming the default for many sites, with toggles allowing users to switch to light mode if preferred.</p>
        
        <h2>3. Micro-interactions and Animation</h2>
        <p>Subtle animations and micro-interactions continue to enhance user experience, providing feedback and guiding users through interfaces.</p>
        
        <h2>4. Voice User Interfaces</h2>
        <p>With the rise of voice assistants, websites are increasingly incorporating voice commands and audio feedback.</p>
        
        <h2>5. 3D Elements</h2>
        <p>Three-dimensional graphics and illustrations are becoming more common, adding depth and visual interest to web experiences.</p>
        
        <h2>6. Accessibility-First Design</h2>
        <p>Designers are prioritizing accessibility from the start, ensuring websites are usable by people with a wide range of abilities.</p>
        
        <h2>7. Performance Optimization</h2>
        <p>With Core Web Vitals affecting SEO, performance optimization is a top priority, leading to leaner, faster-loading websites.</p>
        
        <p>By incorporating these trends thoughtfully, businesses can create modern, effective websites that connect with their audience and stay ahead of competitors.</p>
      `,
      author: 'Alex Johnson',
      date: 'June 15, 2024',
      readTime: '6 min read',
      category: 'Web Design Trends',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      slug: 'web-design-trends-2024'
    },
    {
      id: 2,
      title: 'How to Create a Website That Converts Visitors into Customers',
      excerpt: 'Learn the key elements of conversion-focused web design and how to implement them to increase your site\'s effectiveness.',
      content: `
        <p>A beautiful website is only effective if it converts visitors into customers. Here's how to create a website that not only looks great but also drives business results.</p>
        
        <h2>Clear Value Proposition</h2>
        <p>Your website should immediately communicate what you offer and why visitors should choose you over competitors. Place your value proposition prominently on your homepage and ensure it's clear and compelling.</p>
        
        <h2>Strategic Call-to-Actions</h2>
        <p>Every page should have a purpose and guide visitors toward a specific action. Use prominent, well-designed buttons with clear, action-oriented text.</p>
        
        <h2>Simplified Navigation</h2>
        <p>Make it easy for visitors to find what they're looking for. Use clear, logical navigation structures and include search functionality for larger sites.</p>
        
        <h2>Trust Signals</h2>
        <p>Incorporate elements that build trust, such as testimonials, case studies, client logos, security badges, and guarantees.</p>
        
        <h2>Mobile Optimization</h2>
        <p>With more than half of web traffic coming from mobile devices, ensure your site provides an excellent experience on smartphones and tablets.</p>
        
        <h2>Fast Loading Speed</h2>
        <p>Every second counts when it comes to conversion rates. Optimize images, use browser caching, and consider a content delivery network to improve loading times.</p>
        
        <h2>Clear Contact Information</h2>
        <p>Make it easy for potential customers to reach you by displaying your contact information prominently and including multiple contact methods.</p>
        
        <p>By focusing on these elements, you can create a website that not only attracts visitors but also converts them into loyal customers.</p>
      `,
      author: 'Sarah Parker',
      date: 'May 22, 2024',
      readTime: '8 min read',
      category: 'Small Business',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
      slug: 'website-conversion-strategies'
    },
    {
      id: 3,
      title: 'Case Study: How We Increased Organic Traffic by 200% for a Local Business',
      excerpt: 'Discover the strategy and tactics we used to dramatically increase organic traffic and leads for a local service business.',
      content: `
        <p>In this case study, we'll share how we helped Evergreen Landscaping, a local landscaping company, increase their organic traffic by 200% and double their inbound leads within six months.</p>
        
        <h2>The Challenge</h2>
        <p>Evergreen Landscaping had a dated website with poor mobile performance and minimal content. They were getting very little organic traffic and most of their leads came from referrals.</p>
        
        <h2>Our Approach</h2>
        <p>We developed a comprehensive strategy that included:</p>
        
        <h3>1. Technical SEO Improvements</h3>
        <p>We rebuilt the website with a focus on performance, ensuring fast loading times and an excellent mobile experience. We also implemented proper schema markup and improved the site's structure.</p>
        
        <h3>2. Content Strategy</h3>
        <p>We created service-specific landing pages targeting relevant keywords and developed a blog focusing on seasonal landscaping topics, DIY garden tips, and local landscaping considerations.</p>
        
        <h3>3. Local SEO Focus</h3>
        <p>We optimized their Google Business Profile, built local citations, and created location-specific content targeting surrounding neighborhoods.</p>
        
        <h3>4. Visual Content Enhancement</h3>
        <p>We showcased their work through professional photography and before/after project comparisons, creating a compelling portfolio.</p>
        
        <h2>The Results</h2>
        <p>Within six months of implementing our strategy:</p>
        <ul>
          <li>Organic traffic increased by 200%</li>
          <li>Inbound leads doubled</li>
          <li>Conversion rate improved from 1.5% to 3.8%</li>
          <li>The website ranked on the first page for 15 high-value local service keywords</li>
        </ul>
        
        <p>This case study demonstrates how a strategic approach to web design and SEO can transform a local business's online presence and lead generation capabilities.</p>
      `,
      author: 'Michael Chen',
      date: 'April 10, 2024',
      readTime: '10 min read',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=800',
      slug: 'local-business-seo-case-study'
    }
  ];

  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8">
              Insights, guides, and stories about web design, business growth, and digital trends.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border border-secondary-100 hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-serif font-medium mb-2 hover:text-primary-500 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-secondary-700 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary-500">
                        {post.category}
                      </span>
                      <Button asChild variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary-500 group">
                        <Link to={`/blog/${post.slug}`} className="flex items-center">
                          Read more
                          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif font-medium mb-2">No results found</h3>
              <p className="text-secondary-700 mb-6">
                We couldn't find any posts matching your search. Try different keywords or browse all our articles.
              </p>
              <Button onClick={() => setSearchTerm('')}>
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              Get the latest web design tips, business strategies, and industry news delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-secondary-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;