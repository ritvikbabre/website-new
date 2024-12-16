import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the output folder
const nojekyllPath = join(__dirname, 'out', '.nojekyll');

// Create the .nojekyll file
writeFileSync(nojekyllPath, '');
console.log('.nojekyll file created successfully.');
