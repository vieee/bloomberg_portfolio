export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface SkillEntry {
  category: string;
  skills: string[];
}

export interface ContactEntry {
  label: string;
  value: string;
}

export function parseExperience(text: string): ExperienceEntry[] {
  const lines = text.split('\n');
  const entries: ExperienceEntry[] = [];
  let currentEntry: ExperienceEntry | null = null;

  for (const line of lines) {
    if (!line.trim()) continue;
    if (line.includes('|')) {
      if (currentEntry) entries.push(currentEntry);
      const parts = line.split('|').map(s => s.trim());
      currentEntry = {
        company: parts[0] || '',
        title: parts[1]?.split(',')[0] || '',
        location: parts[1]?.split(',')[1]?.trim() || '',
        date: parts[2] || '',
        bullets: [],
      };
    } else if (currentEntry && line.startsWith('-')) {
      currentEntry.bullets.push(line.substring(1).trim());
    } else if (currentEntry) {
      // Append to the last bullet if it's a continuing sentence
      if (currentEntry.bullets.length > 0) {
        currentEntry.bullets[currentEntry.bullets.length - 1] += ' ' + line.trim();
      }
    }
  }
  if (currentEntry) entries.push(currentEntry);
  return entries;
}

export function parseSkills(text: string): SkillEntry[] {
  const lines = text.split('\n');
  const entries: SkillEntry[] = [];
  for (const line of lines) {
    if (line.includes(':')) {
      const [category, skills] = line.split(':');
      entries.push({
        category: category.replace('- ', '').trim(),
        skills: skills.split(',').map(s => s.trim())
      });
    }
  }
  return entries;
}

export function parseList(text: string): string[] {
  return text.split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('-'))
    .map(l => l.substring(1).trim());
}

export function parseContacts(text: string): ContactEntry[] {
  const lines = text.split('\n');
  const entries: ContactEntry[] = [];
  for (const line of lines) {
    if (line.includes(':')) {
      const [label, ...valueParts] = line.split(':');
      entries.push({
        label: label.replace('- ', '').trim(),
        value: valueParts.join(':').trim()
      });
    }
  }
  return entries;
}
