import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  skills: string[];
}

interface ResumeProcessorProps {
  file: File;
  onProcessed: (data: ResumeData, html: string) => void;
}

const ResumeProcessor = ({ file, onProcessed }: ResumeProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const processResume = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate resume processing
      const resumeData = await simulateResumeExtraction(file);
      const portfolioHTML = generatePortfolioHTML(resumeData);
      
      onProcessed(resumeData, portfolioHTML);
      
      toast({
        title: "Resume Processed!",
        description: "Your portfolio site has been generated from your resume.",
      });
    } catch (error) {
      toast({
        title: "Processing Error",
        description: "Failed to process resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const simulateResumeExtraction = async (resumeFile: File): Promise<ResumeData> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return mock data (in real app, this would use OCR/AI to extract from PDF/DOC)
    return {
      name: "John Developer",
      email: "john@example.com",
      phone: "(555) 123-4567",
      summary: "Experienced software developer with 5+ years in web development, specializing in React and Node.js.",
      experience: [
        {
          title: "Senior Frontend Developer",
          company: "Tech Corp",
          duration: "2021 - Present",
          description: "Led development of customer-facing web applications using React and TypeScript."
        },
        {
          title: "Full Stack Developer",
          company: "StartupXYZ",
          duration: "2019 - 2021",
          description: "Built scalable web applications and APIs using Node.js and MongoDB."
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University of Technology",
          year: "2019"
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", "Docker"]
    };
  };

  const generatePortfolioHTML = (data: ResumeData): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8fafc;
        }
        .container { max-width: 900px; margin: 0 auto; padding: 20px; }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 40px;
            border-radius: 20px;
            margin-bottom: 40px;
            text-align: center;
        }
        .header h1 { font-size: 3em; margin-bottom: 10px; }
        .header p { font-size: 1.2em; opacity: 0.9; }
        .contact { margin-top: 20px; }
        .contact span { margin: 0 15px; }
        .section {
            background: white;
            padding: 40px;
            margin-bottom: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .section h2 {
            color: #4c51bf;
            font-size: 1.8em;
            margin-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .experience-item, .education-item {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        .experience-item:last-child, .education-item:last-child { border-bottom: none; }
        .job-title { font-size: 1.3em; font-weight: bold; color: #2d3748; }
        .company { color: #4c51bf; font-weight: 600; }
        .duration { color: #718096; font-style: italic; }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        .skill {
            background: #667eea;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
        }
        @media (max-width: 768px) {
            .container { padding: 10px; }
            .header { padding: 40px 20px; }
            .header h1 { font-size: 2em; }
            .section { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${data.name}</h1>
            <p>${data.summary}</p>
            <div class="contact">
                <span>📧 ${data.email}</span>
                <span>📱 ${data.phone}</span>
            </div>
        </div>

        <div class="section">
            <h2>💼 Experience</h2>
            ${data.experience.map(exp => `
                <div class="experience-item">
                    <div class="job-title">${exp.title}</div>
                    <div class="company">${exp.company}</div>
                    <div class="duration">${exp.duration}</div>
                    <p style="margin-top: 10px;">${exp.description}</p>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2>🎓 Education</h2>
            ${data.education.map(edu => `
                <div class="education-item">
                    <div class="job-title">${edu.degree}</div>
                    <div class="company">${edu.school}</div>
                    <div class="duration">${edu.year}</div>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2>🚀 Skills</h2>
            <div class="skills">
                ${data.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px; color: #718096;">
            <p>Generated by <strong>VibeCode</strong> - AI-Powered Website Generator</p>
        </div>
    </div>
</body>
</html>`;
  };

  return {
    processResume,
    isProcessing
  };
};

export default ResumeProcessor;
