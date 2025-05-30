// Custom preview server script using ES modules
import { createServer } from 'http';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { parse } from 'url';

// Get current directory name (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try multiple ports starting from this one
const startPort = 3001;
const maxPortAttempts = 10;

function startServer(port) {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Default to index.html for root path
    if (pathname === '/') {
      pathname = '/index.html';
    }
    
    // Resolve the file path
    const filePath = path.join(__dirname, 'dist', pathname);
    
    // Determine content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentTypeMap = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
    };
    const contentType = contentTypeMap[ext] || 'application/octet-stream';
    
    // Serve the file
    createReadStream(filePath)
      .on('error', () => {
        // If file not found, serve index.html (for SPA routing)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        createReadStream(path.join(__dirname, 'dist', 'index.html')).pipe(res);
      })
      .on('open', () => {
        res.writeHead(200, { 'Content-Type': contentType });
      })
      .pipe(res);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      if (port - startPort < maxPortAttempts) {
        startServer(port + 1);
      } else {
        console.error('No available ports found after multiple attempts.');
      }
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`Preview server running at http://localhost:${port}`);
  });
}

// Start trying ports
startServer(startPort);
