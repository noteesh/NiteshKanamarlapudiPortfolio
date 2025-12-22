'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import { FaAws, FaGraduationCap, FaExternalLinkAlt, FaArrowRight, FaAward } from 'react-icons/fa';
import Footer from '@/components/Footer';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: FaAws,
    color: 'text-orange-400',
    description: 'Foundational understanding of AWS Cloud, services, and terminology',
    link: 'https://www.credly.com/badges/06806059-3c07-4008-8998-c4dc26413abf/linked_in_profile',
  },
  {
    title: 'WorldQuant University Applied Data Science Lab Certification',
    issuer: 'WorldQuant University',
    iconImage: '/images/worldquant-logo.png',
    description: 'Applied data science methodologies and machine learning techniques',
    link: 'https://www.credly.com/badges/41814e62-a7e7-4502-b5e5-e7b1bbec8a98/linked_in_profile',
  },
  {
    title: 'Microsoft Excel Level 3: Purple Belt',
    issuer: 'McGraw Hill',
    iconImage: '/images/McGraw Hill-logo.svg',
    description: 'Advanced Excel skills including data analysis and automation',
    link: 'https://certificates.simnetonline.com/0953cb78-6bc5-4f07-8cfa-e2db7848a690#acc.wec6jTR7',
  },
];

const relevantCoursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'ML & Data Analysis',
  'Generative AI for Computer Systems',
  'Natural Language Processing',
  'Fundamentals of LLMs',
  'C Programming & Computer Architecture',
  'Linear Algebra',
  'Discrete Mathematics',
  'Statistics & Probability',
];

const organizations = [
  {
    name: 'Embedded Machine Learning Club',
    description: 'Building ML models for edge devices and embedded systems',
  },
  {
    name: 'NCSU Game2Learn Research Lab',
    description: 'Research lab focused on educational game development',
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Certifications & Education
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16">
            Professional certifications, academic achievements, and continuous learning
          </p>
        </SectionWrapper>

        {/* Certifications */}
        <SectionWrapper delay={0.1}>
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            <FaAward className="mr-3 text-blue-400" />
            Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start flex-1">
                      {cert.iconImage ? (
                        <div className="mr-4 mt-1 flex-shrink-0 w-12 h-12 relative">
                          <Image
                            src={cert.iconImage}
                            alt={cert.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : Icon ? (
                        <Icon size={48} className={`${cert.color} mr-4 mt-1 flex-shrink-0`} />
                      ) : null}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{cert.title}</h3>
                        <p className="text-blue-400 font-semibold mb-2">{cert.issuer}</p>
                        <p className="text-gray-300">{cert.description}</p>
                      </div>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 flex-shrink-0 text-blue-400 hover:text-blue-300 transition-colors"
                        aria-label="View certification"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Education */}
        <SectionWrapper delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 mt-16 text-white flex items-center">
            <FaGraduationCap className="mr-3 text-blue-400" />
            Education
          </h2>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                North Carolina State University
              </h3>
              <p className="text-blue-400 font-semibold mb-1">
                B.S. Computer Science (AI Concentration)
              </p>
              <p className="text-gray-400 mb-2">Minor in Statistics & Business Administration</p>
              <p className="text-gray-400 mb-2">Dean's List</p>
              <p className="text-gray-300">Expected May 2027</p>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Relevant Coursework */}
        <SectionWrapper delay={0.3}>
          <h2 className="text-3xl font-bold mb-8 mt-16 text-white">Relevant Coursework</h2>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-4">
              {relevantCoursework.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center"
                >
                  <span className="text-blue-400 mr-3">✓</span>
                  <span className="text-gray-300">{course}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Organizations */}
        <SectionWrapper delay={0.4}>
          <h2 className="text-3xl font-bold mb-8 mt-16 text-white">Campus Involvement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{org.name}</h3>
                <p className="text-gray-400 text-sm">{org.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

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
