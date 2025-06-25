import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MessageSquare, Rocket } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          🧪 Join the Pre-Release
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          We're inviting early users to test new features, share feedback, and help us go viral.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: "Test new features", description: "Be the first to try cutting-edge functionality" },
            { icon: MessageSquare, title: "Share feedback", description: "Help shape the product with your insights" },
            { icon: Rocket, title: "Help us go viral", description: "Join our community of early adopters" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-12 border border-gray-700">
          <h3 className="text-3xl font-bold mb-4 text-white">
            🔗 Let's Build the Future Together
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Want your resume to become a site? Want your idea to become an app?
            <br />
            <span className="text-purple-300 font-semibold">You're already halfway there.</span>
          </p>
          
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 mb-8">
            <h4 className="text-2xl font-bold text-red-300 mb-2">
              🌟 Pre-release Access Ends Soon!
            </h4>
            <p className="text-gray-300">Reserve your spot now</p>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            👉 Sign Up for Early Access
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
