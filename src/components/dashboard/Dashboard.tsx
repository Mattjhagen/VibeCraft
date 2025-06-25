import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, FileText, Globe, Settings, LogOut } from 'lucide-react';
import ProjectCreator from './ProjectCreator';
import ProjectList from './ProjectList';

const Dashboard = () => {
  const [showCreator, setShowCreator] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'My Portfolio',
      type: 'resume',
      url: 'https://myportfolio.vibecode.app',
      status: 'deployed',
      createdAt: '2024-01-15'
    }
  ]);

  const handleCreateProject = (project: any) => {
    const newProject = {
      ...project,
      id: Date.now().toString(),
      status: 'building',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProjects([newProject, ...projects]);
    setShowCreator(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            VibeCode Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Your Projects</h2>
            <Button
              onClick={() => setShowCreator(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>

          {showCreator && (
            <ProjectCreator
              onCreateProject={handleCreateProject}
              onCancel={() => setShowCreator(false)}
            />
          )}

          <ProjectList projects={projects} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <FileText className="w-5 h-5 mr-2" />
                Resume to Site
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Upload your resume and get a professional portfolio site instantly
              </p>
              <Button variant="outline" className="w-full">
                Upload Resume
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Globe className="w-5 h-5 mr-2" />
                Custom Domain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Connect your own domain to your VibeCode projects
              </p>
              <Button variant="outline" className="w-full">
                Add Domain
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Settings className="w-5 h-5 mr-2" />
                AI Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Configure AI generation preferences and templates
              </p>
              <Button variant="outline" className="w-full">
                Configure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
