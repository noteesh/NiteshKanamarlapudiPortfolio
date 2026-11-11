'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaArrowRight, FaPenNib } from 'react-icons/fa';
import Footer from '@/components/Footer';
import { projects, trophyColor } from '@/lib/content';

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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <span className="text-gray-400 text-sm md:text-right md:ml-4 md:mt-2 md:max-w-xs">{project.date}</span>
                  </div>
                  {project.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.awards.map((award) => (
                        <span
                          key={award.label}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-700/60 text-gray-200 border border-gray-600"
                        >
                          <FaTrophy className={`mr-2 ${trophyColor[award.place]}`} />
                          {award.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-lg">{project.description}</p>

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
                <div className="flex flex-wrap gap-4">
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
                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View on Devpost
                    </a>
                  )}
                  {project.blog && (
                    <a
                      href={project.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <FaPenNib className="mr-2" />
                      Read the Blog Post
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
