'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaArrowRight } from 'react-icons/fa';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Reflectra: AI Digital Wellness Mirror',
    date: 'November 2025',
    award: null,
    description: 'An AI-powered digital wellness platform that transforms browser activity into actionable insights through semantic intent classification, retrieval-augmented generation (RAG), and vector embeddings.',
    highlights: [
      'Built a Chrome Extension (Manifest V3) with an ExpressJS + Supabase backend and an AI semantic pipeline using LangChain + GPT-4o-mini, boosting contextual classification accuracy by ~40% compared to baseline models',
      'Implemented a RAG system with Pinecone Vector DB, OpenAI Vector Embeddings API, and an interactive React dashboard enabling <1s reflection chat latency',
      'Delivered a fully functional end-to-end prototype within 48 hours, visualizing digital balance metrics',
    ],
    technologies: ['React', 'ExpressJS', 'Pinecone', 'OpenAI', 'Vector Embeddings', 'LangChain', 'GPT-4o-mini', 'Supabase', 'Chrome Extension API'],
    github: null,
    demo: null,
  },
  {
    title: 'Live Tournament & Court Management App',
    date: 'November 2024 – January 2025',
    award: null,
    description: 'A comprehensive real-time tournament management platform enabling live bracket tracking, court queue management, and real-time score streaming for competitive events.',
    highlights: [
      'Built and deployed a live-tournament bracket feature containerized with Docker and hosted on AWS, enabling 100 teams and 500+ concurrent users to stream real-time scores via Node.js and Prisma, boosting engagement by 35%',
      'Developed a court-queue dashboard with a custom TypeScript algorithm surfacing live PostgreSQL data, reducing congestion by ~25%',
      'Led GitHub PR reviews and Expo CLI testing to enhance UI quality and speed up release cycles',
    ],
    technologies: ['React Native', 'Docker', 'Node.js', 'AWS', 'Prisma', 'PostgreSQL', 'TypeScript', 'Expo CLI'],
    github: null,
    demo: null,
  },
  {
    title: 'Full-Stack E-commerce Platform',
    date: 'September 2025',
    award: null,
    description: 'A complete e-commerce solution featuring a dynamic admin panel, real-time user store, and comprehensive authentication system designed for scalability and performance.',
    highlights: [
      'Built a full-stack e-commerce platform with React, Redux, Node.js, and MongoDB, featuring a dynamic admin panel and real-time user store with JWT authentication and WebSockets for secure, responsive interactions',
      'Developed scalable Express APIs supporting 1,000+ concurrent users with low-latency data retrieval, ensuring efficient stock management',
      'Implemented high-availability backend architecture for seamless transactions and optimal user experience',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'JWT', 'WebSockets'],
    github: null,
    demo: null,
  },
  {
    title: 'Facial Emotion Recognition System',
    date: 'June 2025 – Present',
    award: null,
    description: 'A production-grade real-time facial emotion recognition model using computer vision and deep learning, deployed for an app with 20,000+ active users.',
    highlights: [
      'Developed a real-time facial emotion recognition model using OpenCV and a Vision Transformer, achieving ~88% accuracy to enhance mood-aware features',
      'Built and deployed a multi-output neural network in TensorFlow/Keras, improving accuracy by 88.9% and reducing inference costs by ~40%',
      'Implemented Firebase-based data preprocessing pipeline with CI/CD automation using Git and Jenkins',
    ],
    technologies: ['OpenCV', 'Vision Transformer', 'TensorFlow', 'Keras', 'Firebase', 'Python', 'CI/CD', 'Jenkins'],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text pb-2">
            Projects
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16">
            A showcase of my work in machine learning, full-stack development, and beyond
          </p>
        </SectionWrapper>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition-all"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{project.date}</span>
                  </div>
                  {project.award && (
                    <div className="flex items-center text-purple-400 mb-3">
                      <FaTrophy className="mr-2" />
                      <span className="font-semibold">{project.award}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-lg">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex">
                        <span className="text-purple-400 mr-3 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>

        {/* Contact Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionWrapper delay={0.5}>
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-400 mb-8">
                Please reach out to learn more about me!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Get in Touch
                <FaArrowRight className="ml-2" />
              </Link>
            </SectionWrapper>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
