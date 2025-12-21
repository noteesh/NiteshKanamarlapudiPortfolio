'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import Footer from '@/components/Footer';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiDocker, SiGit,
  SiTensorflow, SiPytorch, SiScikitlearn, SiAmazon, SiKotlin,
  SiC, SiCplusplus, SiHtml5, SiSpringboot,
  SiExpress, SiPrisma, SiRedux, SiSocketdotio
} from 'react-icons/si';
import { FaCode, FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Java', icon: FaCode, color: 'text-red-500' },
      { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500' },
      { name: 'C', icon: SiC, color: 'text-blue-600' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
      { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
      { name: 'R', icon: FaCode, color: 'text-blue-500' },
      { name: 'HTML/CSS', icon: SiHtml5, color: 'text-orange-500' },
    ],
  },
  {
    title: 'Frontend Frameworks & Libraries',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'React Native', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Backend Frameworks & Libraries',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
      { name: 'Prisma', icon: SiPrisma, color: 'text-gray-300' },
      { name: 'WebSockets', icon: SiSocketdotio, color: 'text-blue-400' },
    ],
  },
  {
    title: 'ML/AI Frameworks',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
      { name: 'Keras', icon: FaCode, color: 'text-red-400' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'AWS', icon: SiAmazon, color: 'text-orange-400' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Git/GitHub', icon: SiGit, color: 'text-orange-600' },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text pb-2">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16">
            Technologies I work with to build amazing products
          </p>
        </SectionWrapper>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <SectionWrapper key={category.title} delay={categoryIndex * 0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">{category.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all flex flex-col items-center justify-center"
                      >
                        <Icon size={48} className={`${skill.color} mb-3`} />
                        <span className="text-gray-300 text-center font-medium">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Additional Skills */}
        <SectionWrapper delay={0.6}>
          <div className="mt-16 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Jenkins', 'CI/CD', 'REST APIs', 'Linux', 'Bash', 'Expo CLI'].map((tool) => (
                    <span key={tool} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">ML/Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {['LangChain', 'Pandas', 'XGBoost', 'CUDA', 'Pinecone', 'Supabase', 'DVC'].map((tool) => (
                    <span key={tool} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Contact Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionWrapper delay={0.7}>
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
