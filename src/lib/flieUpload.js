import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function saveFile(file, storePath) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), `public/${storePath}`);
  
  // Ensure directory exists
  await mkdir(uploadDir, { recursive: true });

  const uniqueName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  const filePath = path.join(uploadDir, uniqueName);

  await writeFile(filePath, buffer);
  return `/${storePath}/${uniqueName}`; 
}