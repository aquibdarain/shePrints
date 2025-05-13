import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Palette, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-purple-600">ShePrints</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ShePrints was born from a vision to empower women through fashion and self-expression.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fashion designer working" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="mr-3 h-8 w-8 text-pink-500" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At ShePrints, we're dedicated to creating a platform that celebrates women's creativity 
              and personal style. We believe that fashion should be inclusive, expressive, and empowering.
            </p>
            <p className="text-lg text-gray-700">
              Through our platform, we aim to build a community where women can share their unique 
              perspectives and inspire each other through fashion.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-50 rounded-2xl p-8 md:p-12 mb-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out through any of these channels:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
              <p className="text-gray-600 mb-6">
                Have questions or feedback? Fill out our contact form and we'll get back to you soon.
              </p>
              <a
                href="https://forms.gle/PKaw68rhpW7BFAfD6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Take Our Survey</h3>
              <p className="text-gray-600 mb-6">
                Help us understand your needs better by participating in our quick survey.
              </p>
              <a
                href="https://forms.gle/YqYmdUX2fXWugjeb8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Survey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Direct Contact */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Direct Contact</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:almasruffea4@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
              almasruffea4@gmail.com
            </a>
            <a
              href="tel:+919370805845"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Phone className="h-6 w-6" />
              +91 937 080 5845
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;