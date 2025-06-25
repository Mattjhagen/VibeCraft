import { Code, Database, Server, Palette } from 'lucide-react';

const TechStack = () => {
  const techItems = [
    { name: "OpenAI GPT API", category: "AI" },
    { name: "Supabase Auth & DB", category: "Backend" },
    { name: "Express + GitHub Pages", category: "Frontend" },
    { name: "Render", category: "Hosting" },
    { name: "HTML/CSS/JS", category: "Core" },
    { name: "Terminal-inspired UI", category: "Design" }
  ];

  return (
    <section className="py-24 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            🛠️ Tech Stack
          </h2>
          <p className="text-xl text-gray-300">
            Built with cutting-edge technologies for maximum performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
