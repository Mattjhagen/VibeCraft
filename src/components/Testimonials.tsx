import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            💬 Sneak Peek
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-100 mb-8 italic">
                "I uploaded my resume and had a working site in less than a minute. Absolutely wild."
              </blockquote>
              <cite className="text-purple-300 font-semibold">– Early Tester</cite>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">
            🌎 Why VibeCode Matters
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Too many no-code tools are clunky, expensive, or gatekeep access behind "pro" features.
            VibeCode flips the script:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Free to try",
              "AI-native", 
              "Viral by design",
              "Community-first"
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <span className="text-purple-300 font-semibold">✅ {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
