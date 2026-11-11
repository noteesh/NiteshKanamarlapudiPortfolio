'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaFlask, FaClipboardCheck, FaGithub } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import Footer from '@/components/Footer';
import { researchProjects } from '@/lib/content';

const researchLicenses = [
  {
    title: 'CITI Conflicts of Interest',
    issuer: 'CITI Program',
    description: 'Research ethics and conflicts of interest management',
  },
  {
    title: 'CITI Human Subject Research',
    issuer: 'CITI Program',
    description: 'Ethical principles and regulations for human subjects research',
  },
  {
    title: 'CITI Responsible Conduct of Research',
    issuer: 'CITI Program',
    description: 'Research integrity and responsible research practices',
  },
  {
    title: 'CITI Social, Behavioral and Educational Research Good Clinical Practices',
    issuer: 'CITI Program',
    description: 'Good clinical practices for social and behavioral research',
  },
];

export default function Research() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Research
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16">
            Undergraduate research projects and academic contributions
          </p>
        </SectionWrapper>

        {/* Research Projects */}
        <SectionWrapper delay={0.1}>
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            <FaFlask className="mr-3 text-blue-400" />
            Research Projects
          </h2>
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 font-semibold">{project.lab}</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">{project.period}</div>
                </div>
                {project.mentor && (
                  <p className="text-gray-400 mb-3 italic">Mentor: {project.mentor}</p>
                )}
                <ul className="space-y-3">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Research Licenses */}
        <SectionWrapper delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 mt-16 text-white flex items-center">
            <FaClipboardCheck className="mr-3 text-blue-400" />
            Research Licenses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchLicenses.map((license, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{license.title}</h3>
                <p className="text-blue-400 font-semibold mb-2 text-sm">{license.issuer}</p>
                <p className="text-gray-400 text-sm">{license.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Contact Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionWrapper delay={0.3}>
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