import { Brain, Zap, Globe, Share2, DollarSign, Cloud } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Build web apps from simple prompts using GPT technology"
    },
    {
      icon: Zap,
      title: "Resume to Website",
      description: "Turn resumes into hosted About Me pages instantly"
    },
    {
      icon: Globe,
      title: "Free Subdomains",
      description: "Free subdomains & optional domain/email upgrades"
    },
    {
      icon: Share2,
      title: "PWA Support",
      description: "Shareable, installable Progressive Web App support"
    },
    {
      icon: DollarSign,
      title: "Built-in Monetization",
      description: "Built-in affiliate/referral links for revenue"
    },
    {
      icon: Cloud,
      title: "Zero Setup Deploy",
      description: "Fully serverless — deploy with zero configuration"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            🧠 What is VibeCode?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            VibeCode is a GPT-powered app and website generator. Just describe what you want — 
            or upload your resume — and VibeCode instantly builds and hosts a personal site or functional app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
