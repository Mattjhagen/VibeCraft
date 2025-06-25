import { Sparkles, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              VibeCode
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center space-x-2">
              <span>👉 Join the waitlist</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center space-x-2">
              <span>👉 Read the blog</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center space-x-2">
              <span>👉 Follow development</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            Built with 💻 and 🚐 by PacMac Labs
          </p>
          <p className="text-sm text-gray-500">
            © PacMac Mobile LLC
          </p>
          
          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-white mb-2">What's Changed</h4>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• Add files via upload by @Mattjhagen in #2</p>
              <p>• V1 by @Mattjhagen in #3</p>
              <p>• New Contributors: @Mattjhagen made their first contribution in #2</p>
            </div>
            <a href="https://github.com/Mattjhagen/packieVibe/commits/v1-beta" className="text-purple-300 hover:text-purple-200 text-sm mt-2 inline-block">
              Full Changelog →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
