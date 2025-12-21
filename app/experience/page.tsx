'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import Footer from '@/components/Footer';

const experiences = [
  {
    company: 'Bank of America',
    role: 'Software Engineering Intern',
    period: 'June 2026',
    description: [
      'Incoming Summer 2026 Software Engineering Intern',
    ],
  },
  {
    company: 'WorldQuant',
    role: 'Machine Learning Engineer',
    period: 'July 2024 – September 2024',
    description: [
      'Performed exploratory data analysis (EDA) on multi-dimensional datasets (8,000+ observations), uncovering patterns to inform feature engineering and model development.',
      'Improved model performance by 50% through implementation and tuning of supervised and unsupervised ML algorithms (XGBoost, random forests, GARCH, k-means), evaluated via RMSE and AUC-ROC.',
      'Built end-to-end ML pipelines for data preprocessing, feature selection, model training, and hyperparameter tuning using grid search and Bayesian optimization, ensuring scalability, reproducibility, and CI/CD readiness with Git and DVC. Developed scalable data ingestion workflows to transform 25,000+ records from RESTful APIs into PostgreSQL schemas for ML use.',
    ],
  },
];

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

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{exp.role}</h2>
                    <h3 className="text-xl text-blue-400 font-semibold">{exp.company}</h3>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">{exp.period}</div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
