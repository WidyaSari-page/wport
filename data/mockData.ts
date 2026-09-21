// src/data/mockData.ts
import { Code2, Cpu, Award, Music, Mail, ExternalLink, LucideIcon, Camera, Briefcase, Code, Globe, Lock } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  images: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  icon: LucideIcon;
  color: string;
  image: string;
  isComingSoon?: boolean;
  description?: string;
}

export const projectsData: Project[] = [
  { id: 1, title: 'Cloud Web Deployment & System Administration', category: 'System Administration', description: 'Deployed and configured a virtual server (VPS / EC2) on Ubuntu 24.04 LTS. Implemented Nginx and Apache, domain pointing, and HTTPS/SSL security.', tech: ['Ubuntu', 'Nginx', 'Apache', 'SSL'], images: ['/project-1.jpg'] },
  { id: 2, title: 'Wishlist & Library App Deployment', category: 'Docker & DevOps', description: 'Built containers using Docker Compose multi-container (Frontend, Python Backend, PostgreSQL, Redis). Managed Volumes and Bind Mounts.', tech: ['Docker', 'Python', 'PostgreSQL', 'Redis'], images: ['/project-2.jpg'] },
  { id: 3, title: 'Cloud Publishing & AWS Integration', category: 'Cloud Computing', description: 'Built, tagged, and pushed custom Docker images to Docker Hub. Deployed microservices on AWS EC2 with Security Groups and health checks.', tech: ['AWS EC2', 'Docker Hub', 'Microservices'], images: ['/project-3.jpg'] },
  { id: 4, title: 'Network Security & Penetration Testing', category: 'Cyber Security', description: 'Simulated network security testing and penetration testing using Kali Linux. Evaluated system vulnerabilities on Ubuntu/Debian with Metasploit.', tech: ['Kali Linux', 'Metasploit', 'Security'], images: ['/project-4.jpg'] },
  { id: 5, title: 'Build Survey Form', category: 'Web Development', description: 'Interactive survey form with strict input validation and responsive data storage.', tech: ['HTML', 'CSS', 'JS'], images: ['/project-5.jpg'] },
  { id: 6, title: 'Build a Page of Playing Cards', category: 'Frontend', description: 'Playing card layout using CSS Grid and Flexbox with smooth hover animations.', tech: ['HTML', 'CSS'], images: ['/project-6.jpg'] },
  { id: 7, title: 'Build a Book Inventory App', category: 'Web App', description: 'Book inventory management app with CRUD features and real-time search.', tech: ['React', 'Tailwind'], images: ['/project-7.jpg'] },
  { id: 8, title: 'Build Technical Documentation Page', category: 'Web Development', description: 'Responsive technical documentation page with a self-scrolling sidebar navigation.', tech: ['HTML', 'CSS'], images: ['/project-8.jpg'] },
  { id: 9, title: 'Build a Product Landing Page', category: 'UI/UX', description: 'Modern product landing page focused on conversion, featuring pricing and testimonials.', tech: ['Next.js', 'Tailwind'], images: ['/project-9.jpg'] },
  { id: 10, title: 'Build a Markdown to HTML Converter', category: 'Utility Tool', description: 'Real-time Markdown to HTML converter with live preview.', tech: ['JS', 'Regex'], images: ['/project-10.jpg'] },
  { id: 11, title: 'Build a Drum Machine', category: 'Audio', description: 'Virtual drum machine playable via keyboard or mouse click.', tech: ['React', 'Web Audio API'], images: ['/project-11.jpg'] },
  { id: 12, title: 'Build a Voting System', category: 'Web App', description: 'Voting system with real-time result visualization.', tech: ['React', 'Chart.js'], images: ['/project-12.jpg'] },
  { id: 13, title: 'Build a Bank Account Management Program', category: 'Software', description: 'Bank account simulation program for deposits, withdrawals, and transfers.', tech: ['Python', 'OOP'], images: ['/project-13.jpg'] },
  { id: 14, title: 'Build a Weather App', category: 'API', description: 'Real-time weather app with a 5-day forecast from a public API.', tech: ['React', 'API'], images: ['/project-14.jpg'] },
  { id: 15, title: 'Build a Currency Converter', category: 'API', description: 'Real-time currency converter with the latest exchange rates from an API.', tech: ['JS', 'API'], images: ['/project-15.jpg'] },
  { id: 16, title: 'Build a Tic Tac Toe Game', category: 'Game', description: 'Tic Tac Toe game with win-check logic and player vs computer mode.', tech: ['React', 'Minimax'], images: ['/project-16.jpg'] },
  { id: 17, title: 'Design a Photography Exhibit', category: 'UI/UX', description: 'Immersive photography gallery design with masonry layout and parallax effects.', tech: ['HTML', 'CSS'], images: ['/project-17.jpg'] },
  { id: 18, title: 'Build a Flashcard Quiz App', category: 'EdTech', description: 'Flashcard quiz app with 3D flip animations.', tech: ['React', 'Framer Motion'], images: ['/project-18.jpg'] },
  { id: 19, title: 'Personal Portfolio Website', category: 'Web Development', description: 'Personal portfolio website built with Next.js and Tailwind CSS.', tech: ['Next.js', 'Tailwind'], images: ['/project-19.jpg'] },
  { id: 20, title: 'Coming Soon', category: 'TBA', description: 'Next project is currently in development.', tech: ['TBA'], images: ['/project-20.jpg'] },
];

export const certificationsData: Certification[] = [
  { id: 1, title: 'Network Fundamental', issuer: 'Aguna Course', icon: Globe, color: 'text-blue-500', description: 'Fundamentals of computer networks, topologies, and protocols.', image: '/cert-1.png' },
  { id: 2, title: 'Linux Fundamental', issuer: 'Aguna Course', icon: Cpu, color: 'text-blue-500', description: 'Basic Linux commands, file management, and users.', image: '/cert-2.png' },
  { id: 3, title: 'Virtual Machine Fundamental', issuer: 'Aguna Course', icon: Code2, color: 'text-blue-500', description: 'Virtualization concepts and VM installation.', image: '/cert-3.png' },
  { id: 4, title: 'Network Simulation PNETLab', issuer: 'Aguna Course', icon: Award, color: 'text-blue-500', description: 'Network simulation using PNETLab.', image: '/cert-4.png' },
  { id: 5, title: 'HTML, CSS, JavaScript', issuer: 'FreeCodeCamp', icon: Code, color: 'text-blue-500', description: 'Fundamentals of frontend web development.', image: '/cert-5.png' },
  { id: 6, title: 'Bootcamp MTCNA', issuer: 'MikroTik', icon: Globe, color: 'text-blue-500', description: 'MikroTik Certified Network Associate.', image: '/cert-6.png' },
  { id: 7, title: 'Python for Everybody', issuer: 'Coursera', icon: Code2, color: 'text-blue-500', description: 'Python programming fundamentals.', image: '/cert-7.png' },
  { id: 8, title: 'Web Security Fundamentals', issuer: 'Cybrary', icon: Lock, color: 'text-blue-500', description: 'Web application security basics.', image: '/cert-8.png' },
  { id: 9, title: 'Coming Soon', issuer: 'TBA', icon: Lock, color: 'text-gray-500', isComingSoon: true, image: '/cert-9.png' },
  { id: 10, title: 'Coming Soon', issuer: 'TBA', icon: Lock, color: 'text-gray-500', isComingSoon: true, image: '/cert-10.png' },
  { id: 11, title: 'Coming Soon', issuer: 'TBA', icon: Lock, color: 'text-gray-500', isComingSoon: true, image: '/cert-11.png' },
  { id: 12, title: 'Coming Soon', issuer: 'TBA', icon: Lock, color: 'text-gray-500', isComingSoon: true, image:'/cert-12.png' }
];

export const tracks = [
  { 
    id: 1, 
    title: 'Cold Water', 
    artist: 'Justin Bieber', 
    duration: '3:05', 
    cover: '/album-1.jpg',
    src: 'https://contoh-link-audio.com/cold-water.mp3' // <-- Link langsung ke file audio
  },
  { 
    id: 2, 
    title: 'Swim', 
    artist: 'Chase Atlantic', 
    duration: '4:03', 
    cover: '/album-2.jpg',
    src: 'https://contoh-link-audio.com/swim.mp3'
  },
  { 
    id: 3, 
    title: 'Training Season', 
    artist: 'Dua Lipa', 
    duration: '3:29', 
    cover: '/album-3.jpg',
    src: 'https://contoh-link-audio.com/training-season.mp3'
  }
];

export const socialLinks = [
  { name: 'Instagram', icon: Camera, url: 'http://example.com', color: 'hover:border-blue-500/50 hover:text-blue-500' },
  { name: 'LinkedIn', icon: Briefcase, url: 'https://www.linkedin.com/in/widya-sari-20b100421/', color: 'hover:border-blue-500/50 hover:text-blue-500' },
  { name: 'GitHub', icon: Code, url: 'https://github.com/WidyaSari-page', color: 'hover:border-blue-500/50 hover:text-blue-500' },
  { name: 'Email', icon: Mail, url: 'mailto:reallywidya10425@gmail.com', color: 'hover:border-blue-500/50 hover:text-blue-500' }
];
