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
            We're not just a fashion brand. We're a movement.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Our Story */}
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
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Own Your Print</h2>
              <p className="text-lg text-gray-700">
                At ShePrints, we believe every girl and woman deserves to express her unique story — not just through words, but through what she wears. Fashion is personal, and we're here to give you the pen to write your style.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <p className="text-gray-700 italic">
                "Why is it so hard to find clothes with our choice of prints, our emotions, and our identity?"
              </p>
              <p className="mt-4 text-gray-700">
                We heard from countless girls who said:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-700">"I want a quote that motivates me."</li>
                <li className="text-gray-700">"I love anime, but I don't get good quality prints."</li>
                <li className="text-gray-700">"Why can't I just wear what I design?"</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-700">
              That's when we knew — the world doesn't need another fashion brand.
              It needs a canvas for self-expression.
            </p>
          </motion.div>
        </div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Palette className="h-6 w-6 text-purple-500" />
                What We Do
              </h3>
              <p className="text-gray-700">
                We give you the power to design your own clothes — choose the print, colors, emotions, quotes, or art — and we'll bring your imagination to life. Whether it's a kurti, lehenga, hoodie, or one-piece, your style will be made with your vibe, your story, and your print.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-purple-500" />
                Why We Exist
              </h3>
              <p className="text-gray-700">
                Because you are your own fashion artist. And it's time the world wore your vision.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-500" />
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower every girl to wear what she truly feels — by blending creativity, emotion, and comfort into every stitch.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowRight className="h-6 w-6 text-purple-500" />
                Who We Serve
              </h3>
              <p className="text-gray-700">
                Young women, students, creators, artists, dreamers — anyone who wants to stop following trends and start creating them.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-purple-900 text-white rounded-2xl p-8 mb-24"
        >
          <h2 className="text-3xl font-bold mb-6">What's Next</h2>
          <p className="text-xl text-purple-100 mb-8">
            We're building a platform where fashion becomes interactive — where every girl can say:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-xl font-medium">"I designed this."</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-xl font-medium">"I own this."</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-xl font-medium">"This is me."</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-purple-100">
              Join us in creating a world where fashion is not bought, but made by you.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
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
      </div>
    </div>
  );
};

export default AboutPage;