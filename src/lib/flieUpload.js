import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function saveFile(file, storePath) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 1. SYSTEM DISK PATH (Where the file is actually saved)
  const basePath = process.env.FILE_UPLOAD_PATH || process.cwd();
  const uploadDir = path.join(basePath, `${process.env.NODE_FILE_PATH == "dev" ? 'public/' : ''}${storePath}`);
  
  await mkdir(uploadDir, { recursive: true });

  const uniqueName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  const filePath = path.join(uploadDir, uniqueName);

  await writeFile(filePath, buffer);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ctefassam.com';

  return `${baseUrl}/${process.env.URL_PREFIX || ''}${storePath}/${uniqueName}`;
}