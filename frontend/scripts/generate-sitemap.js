#!/usr/bin/env node

/**
 * Sitemap Generator for NooR Restaurant
 * Generates sitemap.xml for SEO purposes
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://noor73.netlify.app';
const outputPath = path.join(__dirname, '../public/sitemap.xml');

// Define all routes with their priority and change frequency
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/menu', priority: 0.9, changefreq: 'weekly' },
  { path: '/reservations', priority: 0.9, changefreq: 'daily' },
  { path: '/checkout', priority: 0.8, changefreq: 'daily' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' }
];

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log(`✓ Sitemap generated successfully at ${outputPath}`);
  } catch (error) {
    console.error('✗ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
writeSitemap();
