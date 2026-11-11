'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaAws, FaTrophy } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiPytorch, SiAmazon, SiDocker } from 'react-icons/si';
import SectionWrapper from '@/components/SectionWrapper';
import Footer from '@/components/Footer';
import { experiences, projects, researchProjects, trophyColor } from '@/lib/content';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Nitesh Kanamarlapudi
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
              Infrastructure & AI Systems Engineer · Incoming @ Palantir · NC State CS &apos;27
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              I build distributed systems and AI systems: networking infrastructure at AWS, authentication at
              Bank of America, and award-winning multi-agent systems at hackathons.
            </p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center space-x-6 mb-8"
            >
              <a
                href="https://github.com/noteesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/noteesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:niteshkanamarlapudi@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={28} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                View Projects
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Experience</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              {experiences.slice(0, 4).map((exp) => (
                <motion.div
                  key={exp.company}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="text-blue-400 text-sm font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-gray-400 mb-4">{exp.company}</p>
                  <p className="text-gray-300 text-sm">{[exp.team, exp.focus].filter(Boolean).join(' · ')}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/experience"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                View All Experience
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {projects.slice(0, 4).map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{project.date}</p>
                  {project.awards.length > 0 && (
                    <div className="flex flex-col gap-1 mb-3">
                      {project.awards.map((award) => (
                        <span key={award.label} className="inline-flex items-center text-sm font-semibold text-gray-200">
                          <FaTrophy className={`mr-2 flex-shrink-0 ${trophyColor[award.place]}`} />
                          {award.label}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                See All Projects
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-12 text-center">Top Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiPython size={48} className="text-blue-400 mb-3" />
                <span className="text-gray-300 font-medium">Python</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiJavascript size={48} className="text-yellow-400 mb-3" />
                <span className="text-gray-300 font-medium">JavaScript/TS</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiReact size={48} className="text-cyan-400 mb-3" />
                <span className="text-gray-300 font-medium">React/Next.js</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiTensorflow size={48} className="text-orange-400 mb-3" />
                <span className="text-gray-300 font-medium">TensorFlow</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiPytorch size={48} className="text-red-400 mb-3" />
                <span className="text-gray-300 font-medium">PyTorch</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiAmazon size={48} className="text-orange-300 mb-3" />
                <span className="text-gray-300 font-medium">AWS</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <SiDocker size={48} className="text-blue-500 mb-3" />
                <span className="text-gray-300 font-medium">Docker</span>
              </motion.div>
            </div>
            <div className="text-center">
              <Link
                href="/skills"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                View All Skills
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Featured Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              {/* AWS Certification */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-400 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <FaAws size={48} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">AWS Certified Cloud Practitioner</h3>
                <p className="text-gray-400 mb-3">Amazon Web Services</p>
                <p className="text-gray-300 text-sm mb-4">
                  Foundational understanding of AWS Cloud, services, and terminology
                </p>
                <a
                  href="https://www.credly.com/badges/06806059-3c07-4008-8998-c4dc26413abf/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
                >
                  View Credential
                  <FaArrowRight className="ml-2" />
                </a>
              </motion.div>

              {/* WorldQuant Certification */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-400 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/images/worldquant-logo.png"
                      alt="WorldQuant University"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Applied Data Science Lab Certification</h3>
                <p className="text-gray-400 mb-3">WorldQuant University</p>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced data science and machine learning techniques applied to real-world problems
                </p>
                <a
                  href="https://www.credly.com/badges/41814e62-a7e7-4502-b5e5-e7b1bbec8a98/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
                >
                  View Credential
                  <FaArrowRight className="ml-2" />
                </a>
              </motion.div>
            </div>
            <div className="text-center">
              <Link
                href="/certifications"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                View All Certifications
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Research</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {researchProjects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-400 font-semibold mb-1 text-sm">{project.lab}</p>
                  <p className="text-gray-400 mb-3 text-sm">{project.period}</p>
                  <p className="text-gray-300 text-sm mb-3">{project.summary}</p>
                  {project.mentor && (
                    <p className="text-gray-400 text-xs italic">Mentor: {project.mentor}</p>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/research"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                View All Research
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-400 mb-8">
              Whether it&apos;s a role, a project, or just a conversation about distributed systems and AI,
              my inbox is always open and I&apos;m happy to chat.
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

      <Footer />
    </div>
  );
}
