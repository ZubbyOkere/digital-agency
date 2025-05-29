// utils/services.ts
export interface WorkflowStep {
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Discovery and Onboarding",
    description:
      "We kick off by understanding your business, goals, and audience through in-depth discussions. For website, mobile app, or e-commerce projects, we define requirements, scope, and timelines, gathering assets like brand guidelines and logos. We conduct market and competitor research to ensure your web solution or app stands out. For SEO, digital marketing, or social media, we align strategies with your brand. You’ll share your vision, provide assets, and approve the scope to set the foundation.",
  },
  {
    title: "Strategy and Planning",
    description:
      "We craft a tailored plan for your project. For websites and mobile apps, including e-commerce platforms, we create wireframes, sitemaps, and prototypes to map out user experience and functionality. For SEO, we perform keyword research and audits. For digital marketing, we select channels and design ad concepts. For social media, we develop content calendars. Detailed milestones and timelines are set, and you’ll review and approve the strategy to ensure alignment with your goals.",
  },
  {
    title: "Design and Development",
    description:
      "Our dev team brings your vision to life. We design responsive, user-friendly websites and mobile apps, including robust e-commerce solutions, using industry standard technologies. SEO optimizations enhance site visibility, while digital marketing creatives and social media posts are developed. We rigorously test all deliverables for performance and quality. This phase focuses on technical execution, with regular updates provided to keep you informed.",
  },
  {
    title: "Review and Feedback",
    description:
      "We present initial deliverables for your input. For websites, mobile apps, or e-commerce platforms, you’ll review designs or beta versions. SEO reports show early ranking progress, while digital marketing campaigns and social media content are shared for feedback. Through demos or dashboards, we collect your revisions to refine the project. Your active feedback ensures the final product aligns perfectly with your vision.",
  },
  {
    title: "Launch and Implementation",
    description:
      "With your approval, we launch your project. Websites and mobile apps, including e-commerce stores, are deployed on secure hosting with full functionality tested. SEO tools like Google Analytics are set up, digital marketing campaigns go live, and social media schedules are activated. We ensure a seamless launch with final checks. Your role is to approve the launch, and we handle the rest to bring your project to market.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "Post-launch, we optimize for success. We monitor website and app performance, minor fixes and enhancing user experience. For e-commerce, we track conversions and suggest improvements. SEO rankings and traffic are analyzed for ongoing gains, while digital marketing and social media campaigns are refined for better ROI. Regular reports keep you informed, and we collaborate on updates to drive long-term results.",
  },
];
