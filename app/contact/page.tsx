'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, you'd integrate with a service like FormSpree, EmailJS, or your own API
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 text-center mb-4">
            Let's connect and discuss opportunities
          </p>
          <p className="text-lg text-blue-400 text-center mb-16 font-semibold">
            Currently open to internship opportunities
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SectionWrapper delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:niteshkanamarlapudi@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <FaEnvelope className="text-blue-400 text-2xl mr-4" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">niteshkanamarlapudi@gmail.com</div>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+19848883850"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <FaPhone className="text-blue-400 text-2xl mr-4" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-medium">+1 (984) 888-3850</div>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <FaMapMarkerAlt className="text-blue-400 text-2xl mr-4" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">Apex, NC</div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/noteesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/noteesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <FaLinkedin className="text-white text-2xl" />
                  </motion.a>
                  <motion.a
                    href="mailto:niteshkanamarlapudi@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <FaEnvelope className="text-white text-2xl" />
                  </motion.a>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Contact Form */}
          <SectionWrapper delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Send Message
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    Something went wrong. Please try again or contact me directly via email.
                  </motion.div>
                )}
              </form>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
