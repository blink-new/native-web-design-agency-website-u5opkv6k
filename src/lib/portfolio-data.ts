// Define types for projects
export type ProjectCategory = 'All' | 'Web Design' | 'E-commerce' | 'Branding' | 'Mobile App';

export type Project = {
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

// Portfolio project data
export const projects: Project[] = [
  {
    id: 1,
    title: 'Rosemary Artisan Bakery',
    category: 'E-commerce',
    clientType: 'Artisan Bakery & Café',
    clientAudience: 'Food enthusiasts, local community, and corporate catering clients',
    overview: 'Rosemary Artisan Bakery needed a website that showcased their handcrafted products while allowing customers to place pre-orders for pickup and local delivery.',
    challenge: "Rosemary was experiencing rapid growth but was struggling with their ordering process. They were manually handling all orders via phone and Instagram, resulting in order errors and missed opportunities. Their beautiful products weren't being showcased effectively online, and they needed a solution that would maintain their artisanal brand while scaling their operations.",
    solution: 'We designed a visually rich e-commerce platform that highlighted their artisanal process and product quality. The site features stunning photography, an intuitive ordering system, and a custom order management system that integrated with their kitchen workflow. We balanced aesthetic appeal with functional simplicity to create a seamless customer experience.',
    features: [
      'Custom e-commerce system with real-time inventory management',
      'Order scheduling system for advance bakery preparation',
      'Product gallery with professional food photography',
      'Mobile-first design for on-the-go ordering',
      'Local delivery zone mapping with tiered pricing',
      'Customer account area with order history and favorites',
      'Event catering request system with custom quote generation'
    ],
    technologies: [
      'React.js with framer-motion animations',
      'Node.js and Express backend',
      'MongoDB with custom bakery management system',
      'Stripe payment processing with subscription options',
      'AWS S3 for image management and optimization',
      'SendGrid for order confirmations and marketing'
    ],
    results: [
      '156% increase in online pre-orders within first month post-launch',
      '48% reduction in staff time spent on order management',
      '37% increase in average order value through cross-selling features',
      'Featured in "Local Food Magazine" as innovative small business',
      'Successfully expanded catering business by 72% within six months',
      'Reduced order errors by 94% through automated system'
    ],
    images: [
      'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800',
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800',
      'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800',
    testimonial: {
      text: "Working with Native Web Design transformed our business completely. Before their help, we were drowning in paper orders and spreadsheets. Now we have a beautiful website that not only showcases our products exactly how we want but also streamlines our entire ordering process. Our customers love the easy ordering experience, and we've been able to grow without adding administrative staff. The team really understood our aesthetic and business needs.",
      author: "Sofia Mendez",
      position: "Owner & Head Baker, Rosemary Artisan Bakery",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
    },
    deliverables: [
      'Responsive e-commerce website with order management system',
      'Custom admin dashboard for inventory and order processing',
      'Brand photography direction and coordination',
      'Staff training program for digital order fulfillment',
      'Local SEO optimization and Google Business integration',
      '6 months of priority support and site refinement'
    ],
    timeline: '8 weeks',
    year: 2023
  },
  {
    id: 2,
    title: 'Vertex Fitness Platform',
    category: 'Mobile App',
    clientType: 'Boutique Fitness Studio Network',
    clientAudience: 'Fitness enthusiasts, personal training clients, and health-conscious professionals',
    overview: 'Vertex Fitness needed a comprehensive mobile app to unify their five-location studio network, enhance member experience, and create a digital community around their unique training methodology.',
    challenge: 'Vertex Fitness was facing increased competition from national chains and digital fitness platforms. Despite having a loyal client base and unique training approach, they struggled with member retention between studio visits and lacked the digital tools to expand their brand presence. Each location was operating independently, creating inconsistent experiences across their network.',
    solution: 'We developed an integrated fitness platform that unified their brand across all locations while extending the training experience beyond physical visits. The app combines workout tracking, nutrition guidance, class bookings, and social features that reinforce the Vertex methodology and community. The solution also included an admin dashboard for performance monitoring across all locations.',
    features: [
      'Custom workout programs based on fitness goals and history',
      'Live and on-demand video classes with Vertex trainers',
      'Performance tracking with visual progress analytics',
      'In-app messaging with trainers for accountability',
      'Location-based class booking with waitlist functionality',
      'Nutrition tracking integrated with workout programming',
      'Community challenges with achievement rewards',
      'Apple Watch and fitness tracker integration'
    ],
    technologies: [
      'React Native with custom animation library',
      'Firebase for real-time data synchronization',
      'GraphQL API for efficient data fetching',
      'WebRTC for live trainer sessions',
      'Node.js backend with microservices architecture',
      'MongoDB with sharding for scaling',
      'Machine learning for workout recommendations',
      'Amplitude for user behavior analytics'
    ],
    results: [
      '92% member retention rate (up from 67% pre-launch)',
      '21,000+ downloads with 78% active monthly users',
      '4.8/5 average rating across App Store and Google Play',
      '84% of members engage with the app between studio visits',
      'Successful launch of two additional locations based on digital demand data',
      'Featured in "Fitness Innovation" magazine cover story',
      '43% increase in referral-based memberships through app sharing'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800',
      'https://images.unsplash.com/photo-1544216717-3bbf52512659?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    testimonial: {
      text: "Native Web Design created exactly what we needed - not just an app, but a complete digital extension of our brand and training philosophy. Their team took the time to understand our unique approach to fitness and translated it into an engaging digital experience. The app has completely changed how we interact with our members between visits, and the data we've gathered has been invaluable for improving our programming and expanding our business. Our trainers and members love it equally.",
      author: "Marcus Reeves",
      position: "Founder & Head Coach, Vertex Fitness",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150"
    },
    deliverables: [
      'Native mobile apps for iOS and Android platforms',
      'Multi-location admin dashboard for business analytics',
      'Trainer portal for content creation and client management',
      'Technical documentation and training materials',
      'Marketing launch strategy with promotional assets',
      '12 months of ongoing development and feature expansion'
    ],
    timeline: '16 weeks',
    year: 2023
  },
  {
    id: 3,
    title: 'Meridian Capital Advisors',
    category: 'Web Design',
    clientType: 'Independent Financial Advisory Firm',
    clientAudience: 'High-net-worth individuals, business owners, and pre-retirees',
    overview: 'Meridian Capital Advisors needed a website that established trust, communicated their fiduciary approach to wealth management, and generated qualified leads for their advisory team.',
    challenge: 'Meridian had established a respected advisory practice but was struggling to differentiate from larger financial institutions online. Their previous website looked outdated and generic, undermining their professional reputation and failing to convert visitors into consultations. They needed to convey complex financial concepts while making their expertise accessible to potential clients.',
    solution: 'We created a sophisticated yet approachable digital presence that highlighted their client-centered approach and transparent fee structure. The site architecture guides visitors through an educational journey about their unique investment philosophy, with interactive tools that demonstrate value before the first meeting. The design balances professionalism with warmth to reflect their personal client relationships.',
    features: [
      'Custom financial planning assessment tool',
      'Interactive retirement calculator with scenario modeling',
      'Educational resource library with filtered navigation',
      'Client portal with secure document exchange',
      'Advisor matching system based on financial needs',
      'Video testimonials from diverse client segments',
      'Regulatory-compliant content management system',
      'Webinar registration and event management'
    ],
    technologies: [
      'Next.js for optimal performance and SEO',
      'TypeScript for robust type safety',
      'Tailwind CSS for custom design system',
      'D3.js for interactive financial visualizations',
      'Contentful CMS with compliance workflows',
      'Salesforce integration for lead management',
      'AWS infrastructure with enhanced security',
      'Automated compliance documentation'
    ],
    results: [
      '163% increase in qualified consultation requests',
      '47% improvement in time spent on key service pages',
      '31% growth in assets under management within first year',
      '92% of new clients mentioned website as factor in selection',
      'Successfully passed SEC marketing rules audit',
      'Won "Best Financial Website" at Regional Business Awards',
      'Featured in Financial Planning magazine as digital innovation example'
    ],
    images: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800',
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    testimonial: {
      text: "The Native Web Design team demonstrated a remarkable understanding of the financial advisory space and the unique challenges we face. They created a website that perfectly communicates our value proposition while navigating the complex regulatory environment we operate in. The interactive tools have been particularly effective at helping prospects understand our approach before we meet. Since launching, we've seen a significant increase in both the quantity and quality of leads. The website has become an essential part of our client acquisition strategy.",
      author: "Jonathan Harmon, CFP®",
      position: "Managing Partner, Meridian Capital Advisors",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    deliverables: [
      'Responsive website with financial assessment tools',
      'Secure client portal integration',
      'Brand messaging refinement and content strategy',
      'SEO implementation targeting high-value keywords',
      'Custom iconography and illustration system',
      'Team photography direction',
      'Compliance documentation for regulatory review',
      'Google Analytics dashboard with conversion tracking'
    ],
    timeline: '12 weeks',
    year: 2022
  },
  {
    id: 4,
    title: 'Serene Wellness Center',
    category: 'Web Design',
    clientType: 'Integrative Health Practice',
    clientAudience: 'Individuals seeking holistic healthcare, stress management, and preventative wellness services',
    overview: 'Serene Wellness Center needed a website that would communicate their integrated approach to health, simplify the appointment booking process, and educate potential clients about their diverse treatment options.',
    challenge: 'Serene was expanding their services but struggling with a digital presence that didn\'t effectively explain their holistic approach. Potential clients were confused about treatment options and hesitant to book due to uncertainty. Their existing website was clinically focused and uninviting, failing to convey the warm, supportive experience the center provides.',
    solution: 'We designed a welcoming, informative digital experience that guides visitors through Serene\'s unique wellness philosophy. The site uses calming visuals, clear service explanations, and intuitive user flows to help visitors understand treatment options and benefits. We implemented a frictionless booking system that improved conversion rates while reducing administrative workload.',
    features: [
      'Interactive wellness assessment with personalized recommendations',
      'Practitioner matching based on health needs and preferences',
      'Treatment comparison tool with benefits explanation',
      'Video introduction series for each modality',
      'Real-time online booking with insurance verification',
      'Secure client portal for health history and communication',
      'Educational blog with condition-specific resource collections',
      'Virtual consultation option with seamless scheduling'
    ],
    technologies: [
      'Vue.js with Nuxt for optimal performance',
      'HIPAA-compliant data handling throughout',
      'Advanced appointment scheduling system',
      'Insurance eligibility verification API',
      'Custom animation library for interactive elements',
      'Algolia search for resource discovery',
      'Personalized content recommendations engine',
      'Optimized mobile experience for on-the-go booking'
    ],
    results: [
      '142% increase in online appointment bookings',
      '68% reduction in scheduling phone calls',
      '41% of clients now book outside of business hours',
      'Successfully onboarded 4 new practitioners',
      '37% increase in cross-modality treatment plans',
      'Featured in "Holistic Health Today" as digital innovation example',
      '89% of new clients report website clarity as booking factor'
    ],
    images: [
      'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800',
    testimonial: {
      text: "Native Web Design truly understood our vision of making holistic healthcare approachable and understandable. They transformed our online presence into a welcoming digital space that educates visitors and makes the wellness journey less intimidating. The booking system has been transformative for our operations, and we regularly receive compliments on how easy the website is to navigate. Most importantly, we're reaching people who might never have considered holistic care options before.",
      author: "Dr. Amara Chen",
      position: "Medical Director, Serene Wellness Center",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150"
    },
    deliverables: [
      'Responsive website with educational content library',
      'HIPAA-compliant booking and client communication system',
      'Service comparison tools and interactive elements',
      'Practitioner profiles with video introductions',
      'Content strategy for wellness education',
      'SEO implementation for condition-specific searches',
      'Analytics setup with conversion tracking',
      'Staff training for digital client management'
    ],
    timeline: '10 weeks',
    year: 2023
  },
  {
    id: 5,
    title: 'GreenHaven Sustainable Living',
    category: ['Web Design', 'E-commerce'],
    clientType: 'Eco-Friendly Home Goods Retailer',
    clientAudience: 'Environmentally conscious consumers, homeowners interested in sustainable living',
    overview: 'GreenHaven needed an e-commerce platform that would showcase their curated collection of sustainable home products while educating consumers about environmental impact and ethical sourcing.',
    challenge: 'GreenHaven was struggling to communicate the value of their premium eco-friendly products online. Customers were price-comparing with conventional alternatives without understanding the quality differences, sustainability benefits, or long-term value. Their existing website failed to tell the story behind their products or build an emotional connection with their conscious consumer target audience.',
    solution: 'We developed an immersive e-commerce experience that balanced education with conversion optimization. Each product includes sustainability metrics, origin stories, and impact information alongside traditional e-commerce features. The site architecture creates a journey that reinforces the brand\'s values while making sustainable shopping effortless.',
    features: [
      'Environmental impact dashboard showing customer contribution',
      'Product filtering by eco-certification and ethical standards',
      'Interactive material guides explaining sustainable alternatives',
      'Producer stories connecting customers to artisans and sources',
      'Carbon-neutral shipping calculator and options',
      'Bundle recommendations for complete sustainable solutions',
      'Subscription options for frequently replaced products',
      'Community forum for sharing sustainable living tips'
    ],
    technologies: [
      'Shopify Plus with custom theme development',
      'React components for interactive elements',
      'Custom sustainability metrics calculation system',
      'Advanced product filtering and discovery engine',
      'Contentful for managing educational content',
      'Integration with ethical supply chain verification APIs',
      'Customer impact tracking and visualization system',
      'Optimized image delivery for energy efficiency'
    ],
    results: [
      '127% increase in conversion rate for premium products',
      '43% higher average order value compared to previous site',
      '68% reduction in price-based objections (via customer service data)',
      'Successfully expanded product line by 35 new items',
      '52% increase in repeat purchase rate',
      'Featured in "Sustainable Business Quarterly" magazine',
      'Won "Best E-commerce Experience" at Green Business Awards'
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800',
      'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    testimonial: {
      text: "The website Native Web Design created has completely transformed how we communicate our value proposition. They understood that selling sustainable products isn't just about features - it's about impact, education, and emotional connection. The way they've integrated sustainability metrics and producer stories into the shopping experience has significantly reduced price objections and increased customer engagement. Our customers now understand exactly what makes our products special, and we've seen a remarkable increase in both conversion rates and customer loyalty.",
      author: "Olivia Parks",
      position: "Founder & CEO, GreenHaven Sustainable Living",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150"
    },
    deliverables: [
      'Custom Shopify Plus e-commerce platform',
      'Educational content strategy and creation',
      'Product photography direction and styling',
      'Sustainability metrics tracking system',
      'Email marketing sequences for customer education',
      'Social media content strategy and templates',
      'Staff training for content management',
      'SEO implementation for ethical shopping terms'
    ],
    timeline: '14 weeks',
    year: 2022
  },
  {
    id: 6,
    title: 'Harmonia Music Academy',
    category: 'Web Design',
    clientType: 'Music Education Institution',
    clientAudience: 'Music students of all ages, parents, and professional musicians seeking advanced training',
    overview: 'Harmonia Music Academy needed a digital platform to showcase their comprehensive music education programs, facilitate student enrollment, and provide resources for existing students.',
    challenge: 'Harmonia was a respected music institution with 40+ years of history but was losing potential students to more digitally savvy competitors. Their enrollment process was entirely paper-based, their curriculum information was scattered, and they had no way to showcase student achievements or faculty expertise online. They needed to modernize while honoring their traditional approach to music education.',
    solution: 'We created a sophisticated yet approachable website that balances artistic expression with clear information architecture. The platform showcases faculty credentials, student performances, and program details while simplifying the enrollment process. Custom audio and video integration allows visitors to experience the academy\'s teaching quality directly.',
    features: [
      'Faculty profiles with audio samples and performance videos',
      'Interactive program explorer with curriculum details',
      'Student showcase with recital recordings',
      'Digital enrollment system with instrument selection',
      'Practice resource library for current students',
      'Event calendar with recital and masterclass registration',
      'Virtual tour of facilities and classrooms',
      'Parent portal for student progress tracking'
    ],
    technologies: [
      'React with Next.js for optimal performance',
      'Custom audio player with visualization',
      'Advanced video embedding and optimization',
      'Stripe integration for tuition payment',
      'Custom CMS for faculty and event management',
      'Progressive web app features for mobile students',
      'Automated email sequences for prospective students',
      'Google Calendar integration for lesson scheduling'
    ],
    results: [
      '189% increase in online enrollment applications',
      '64% reduction in administrative processing time',
      'Successfully launched 3 new program offerings',
      '41% increase in student retention rate',
      'Expanded student base from local to regional through online options',
      'Featured in "Music Education Today" magazine',
      'Received "Digital Innovation in Arts Education" award'
    ],
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
      'https://images.unsplash.com/photo-1621784562807-14b644a535bd?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    testimonial: {
      text: "Native Web Design understood our unique challenge - creating a modern digital experience that respects our classical traditions. They took the time to understand the nuances of music education and created a platform that truly represents our approach and quality. The website has transformed our enrollment process and given our faculty a platform to showcase their expertise. Most importantly, it's helped us reach a new generation of students while maintaining our core values. The positive response from both new and existing families has been overwhelming.",
      author: "Professor James Chen",
      position: "Director, Harmonia Music Academy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    deliverables: [
      'Responsive website with multimedia integration',
      'Digital enrollment system with payment processing',
      'Faculty and student profile management system',
      'Content strategy for educational resources',
      'SEO implementation for music education terms',
      'Analytics dashboard with enrollment tracking',
      'Staff training for content management',
      'Marketing materials for digital promotion'
    ],
    timeline: '12 weeks',
    year: 2023
  },
  {
    id: 7,
    title: 'Horizon Adventure Tours',
    category: ['Web Design', 'Branding'],
    clientType: 'Adventure Travel Company',
    clientAudience: 'Active travelers, outdoor enthusiasts, and experience-seeking tourists',
    overview: 'Horizon Adventure Tours needed a comprehensive rebrand and website that would showcase their unique expedition offerings and streamline their booking process for multi-day adventure trips.',
    challenge: 'Horizon had built a solid reputation for exceptional adventure experiences but their digital presence failed to capture the excitement of their tours or effectively convert interest into bookings. Their trip information was disorganized, booking was complicated, and their visual identity didn\'t reflect the premium nature of their experiences. They were losing potential customers in a competitive market.',
    solution: 'We developed a comprehensive brand identity and immersive website that captures the thrill of adventure travel while providing clear information and simple booking processes. The design uses dynamic imagery, interactive maps, and engaging storytelling to inspire visitors while guiding them through detailed trip information and seamless reservation flows.',
    features: [
      'Interactive destination maps with tour route visualization',
      'Dynamic trip finder with difficulty and experience filters',
      'Immersive photo and video galleries for each expedition',
      'Day-by-day itinerary breakdowns with visual timelines',
      'Real-time availability calendar and booking system',
      'Guide profiles with expertise and certification details',
      'Equipment lists with preparation guidelines',
      'Customer review integration with trip-specific feedback'
    ],
    technologies: [
      'React with advanced animation libraries',
      'MapBox integration for custom route displays',
      'Dynamic content loading for performance optimization',
      'Custom booking engine with inventory management',
      'Stripe for secure payment processing',
      'Responsive design with offline capability for remote areas',
      'Weather API integration for condition updates',
      'Progressive image loading for bandwidth optimization'
    ],
    results: [
      '156% increase in online bookings year-over-year',
      '47% reduction in booking abandonment rate',
      '68% of customers now complete bookings in a single session',
      'Successfully launched 5 new expedition offerings',
      '32% increase in average booking value',
      'Featured in "Adventure Travel Magazine" as digital innovator',
      'Expanded into 2 new international markets'
    ],
    images: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
      'https://images.unsplash.com/photo-1527631780234-56c9c3a71bfa?w=800',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    testimonial: {
      text: "Native Web Design captured the essence of adventure travel in our digital presence in a way we couldn't have imagined. They transformed our basic website into an immersive platform that actually excites potential travelers and makes them feel the thrill of our expeditions before they even book. The streamlined booking process has dramatically improved our conversion rates, and the detailed trip information has reduced pre-booking questions by more than half. Most importantly, the site perfectly reflects our brand promise and the premium nature of our experiences.",
      author: "Alex Rivera",
      position: "Founder & Lead Guide, Horizon Adventure Tours",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
    },
    deliverables: [
      'Complete brand identity system with logo and guidelines',
      'Responsive website with booking platform integration',
      'Custom trip visualization and mapping system',
      'Photo and video direction for expedition content',
      'Content strategy for trip descriptions and marketing',
      'SEO implementation for adventure travel terms',
      'Social media template system for consistent promotion',
      'Staff training for content and booking management'
    ],
    timeline: '16 weeks',
    year: 2022
  },
  {
    id: 8,
    title: 'Nova Tech Innovations',
    category: ['Web Design', 'Branding'],
    clientType: 'B2B Technology Startup',
    clientAudience: 'Enterprise IT decision-makers, CIOs, and technology procurement teams',
    overview: 'Nova Tech Innovations needed a sophisticated digital presence to establish credibility in the competitive enterprise AI market and generate qualified leads for their sales team.',
    challenge: 'As a startup entering the enterprise AI space, Nova Tech struggled to differentiate from established competitors and communicate their unique value proposition. Their existing landing page looked generic, lacked technical depth, and failed to build trust with sophisticated B2B buyers. Without an established reputation, their digital presence needed to work harder to establish credibility and generate interest.',
    solution: 'We created a premium digital experience that positions Nova Tech as a serious enterprise player through sophisticated design, technical depth, and strategic content architecture. The site balances innovation with reliability through a carefully crafted messaging hierarchy and visual language. The platform includes gated technical resources and personalized content paths for different stakeholder personas.',
    features: [
      'Interactive product demonstration with customizable scenarios',
      'Technical documentation library with searchable resources',
      'ROI calculator with industry-specific parameters',
      'Persona-based content journeys for different stakeholders',
      'Case study showcase with detailed implementation stories',
      'Whitepaper and research report repository',
      'Webinar and event registration system',
      'Multi-step lead qualification and nurturing process'
    ],
    technologies: [
      'React with TypeScript for robust architecture',
      'NextJS for performance optimization',
      'Custom animation system for product demos',
      'HubSpot integration for advanced lead tracking',
      'Personalization engine based on industry and role',
      'Technical documentation system with versioning',
      'Interactive data visualization components',
      'Progressive loading for optimal performance'
    ],
    results: [
      '187% increase in qualified lead generation',
      '42% improvement in time spent on technical documentation',
      '$4.2M in new pipeline opportunities within first quarter',
      'Successfully secured meetings with 5 Fortune 500 companies',
      '68% of sales opportunities now reference website materials',
      'Featured in "Enterprise Tech Today" as "Startup to Watch"',
      'Received "Best B2B Website Design" industry award'
    ],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    testimonial: {
      text: "Our website has become our most valuable sales asset thanks to Native Web Design. They understood the complex challenge of establishing credibility in the enterprise space as a startup. The strategic approach to messaging, technical depth, and professional design has transformed our market perception. Prospects now come to sales calls pre-educated and genuinely interested in our solution rather than questioning our legitimacy. The lead generation capabilities have exceeded our expectations and directly contributed to our successful Series A funding round.",
      author: "Eliana Patel",
      position: "CEO & Co-founder, Nova Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150"
    },
    deliverables: [
      'Responsive B2B website with lead generation focus',
      'Brand identity system with messaging framework',
      'Technical documentation architecture and design',
      'Content strategy for thought leadership positioning',
      'SEO implementation for technical decision-makers',
      'Marketing automation integration and workflows',
      'Analytics dashboard with attribution modeling',
      'Sales enablement materials and training'
    ],
    timeline: '14 weeks',
    year: 2023
  }
];