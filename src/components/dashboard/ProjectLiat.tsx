import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Settings, Trash2, Eye } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  type: 'resume' | 'prompt';
  url: string;
  status: 'building' | 'deployed' | 'error';
  createdAt: string;
  description?: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'bg-green-500';
      case 'building': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'deployed': return 'Live';
      case 'building': return 'Building';
      case 'error': return 'Error';
      default: return 'Unknown';
    }
  };

  if (projects.length === 0) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">No projects yet</h3>
          <p className="text-gray-400 mb-6">
            Create your first project by uploading a resume or describing an app idea
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-white">{project.name}</CardTitle>
                <p className="text-gray-400 text-sm mt-1">
                  Created {project.createdAt} • {project.type === 'resume' ? 'Resume Site' : 'Custom App'}
                </p>
                {project.description && (
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                )}
              </div>
              <Badge variant="outline" className={`${getStatusColor(project.status)} text-white border-none`}>
                {getStatusText(project.status)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">{project.url}</span>
              </div>
              <div className="flex items-center space-x-2">
                {project.status === 'deployed' && (
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                )}
                {project.status === 'deployed' && (
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
