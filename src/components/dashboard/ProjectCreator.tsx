import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Wand2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProjectCreatorProps {
  onCreateProject: (project: any) => void;
  onCancel: () => void;
}

const ProjectCreator = ({ onCreateProject, onCancel }: ProjectCreatorProps) => {
  const [projectType, setProjectType] = useState<'resume' | 'prompt'>('resume');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      if (!projectName) {
        setProjectName(`${uploadedFile.name.split('.')[0]} Portfolio`);
      }
    }
  };

  const handleGenerate = async () => {
    if (!projectName || (projectType === 'resume' && !file) || (projectType === 'prompt' && !description)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);

    try {
      // Simulate AI generation process
      await new Promise(resolve => setTimeout(resolve, 3000));

      const project = {
        name: projectName,
        type: projectType,
        description: projectType === 'resume' ? `Portfolio generated from ${file?.name}` : description,
        url: `https://${projectName.toLowerCase().replace(/\s+/g, '-')}.vibecode.app`,
      };

      onCreateProject(project);

      toast({
        title: "Project Created!",
        description: "Your site is being generated and will be ready shortly.",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Create New Project</CardTitle>
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <Button
            variant={projectType === 'resume' ? 'default' : 'outline'}
            onClick={() => setProjectType('resume')}
            className="flex-1"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Resume
          </Button>
          <Button
            variant={projectType === 'prompt' ? 'default' : 'outline'}
            onClick={() => setProjectType('prompt')}
            className="flex-1"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Describe App
          </Button>
        </div>

        <div>
          <Label htmlFor="projectName" className="text-gray-300">Project Name</Label>
          <Input
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="My Awesome Project"
            className="bg-gray-700 border-gray-600 text-white"
          />
        </div>

        {projectType === 'resume' ? (
          <div>
            <Label htmlFor="resume" className="text-gray-300">Upload Resume (PDF, DOC, DOCX)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="bg-gray-700 border-gray-600 text-white file:text-white"
            />
            {file && (
              <p className="text-sm text-gray-400 mt-2">
                Selected: {file.name}
              </p>
            )}
          </div>
        ) : (
          <div>
            <Label htmlFor="description" className="text-gray-300">Describe Your App</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="I want to build a todo app with dark mode, user authentication, and real-time sync..."
              className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
            />
          </div>
        )}

        <Button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          {generating ? 'Generating Your Site...' : 'Generate Site'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCreator;
