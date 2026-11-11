'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import Footer from '@/components/Footer';
import { experiences, type Experience } from '@/lib/content';

function ExperienceLogo({ exp }: { exp: Experience }) {
  if (exp.iconImage) {
    return (
      <div className="mr-5 mt-1 flex-shrink-0 w-12 h-12 relative">
        <Image src={exp.iconImage} alt={exp.company} fill className="object-contain" />
      </div>
    );
  }
  if (exp.icon) {
    const Icon = exp.icon;
    return <Icon size={48} className={`${exp.iconColor ?? 'text-white'} mr-5 mt-1 flex-shrink-0`} aria-label={exp.company} />;
  }
  return null;
}

export default function Experience() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Experience
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16">
            My professional journey in software engineering and machine learning
          </p>
        </SectionWrapper>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex items-start">
                  <ExperienceLogo exp={exp} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{exp.role}</h2>
                        <h3 className="text-xl text-blue-400 font-semibold">{exp.company}</h3>
                      </div>
                      <div className="text-gray-400 mt-2 md:mt-0">{exp.period}</div>
                    </div>
                    {(exp.team || exp.focus) && (
                      <p className="text-gray-300 mt-4">
                        {[exp.team, exp.focus].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
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
