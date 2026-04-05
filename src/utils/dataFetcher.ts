import fs from 'fs';
import path from 'path';

// Define the absolute path or relative path to the data
const RESOURCES_DIR = path.join(process.cwd(), '.gemini', 'resources');

export async function fetchMarkdownData(filename: string): Promise<string> {
  try {
    const filePath = path.join(RESOURCES_DIR, filename);
    const content = await fs.promises.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return `Error loading data for ${filename}`;
  }
}

export async function fetchAllData() {
  const [
    achievements,
    contacts,
    education,
    experience,
    research,
    skills,
  ] = await Promise.all([
    fetchMarkdownData('ACHIEVEMENTS.md'),
    fetchMarkdownData('CONTACTS.md'),
    fetchMarkdownData('EDUCATION.md'),
    fetchMarkdownData('EXPERIENCE.md'),
    fetchMarkdownData('RESEARCH_WORK.md'),
    fetchMarkdownData('SKILLS.md'),
  ]);

  return {
    achievements,
    contacts,
    education,
    experience,
    research,
    skills,
  };
}
