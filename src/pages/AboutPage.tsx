import React from 'react';
import { ArrowRight, Heart, Sparkles, Palette, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import shopping4 from '../assets/shopping4.jpeg';
import shopping5 from '../assets/shopping5.jpg';
import shopping3 from '../assets/shopping3.jpeg';


const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] mb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">Own Your Print</h1>
            <p className="text-xl text-purple-100">
              We're not just a fashion brand. We're a movement.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fashion designer working" 
              className="rounded-lg shadow-lg object-cover w-full aspect-4/3"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
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

        {/* What We Do Section with Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Fashion design process"
                className="rounded-lg shadow-md w-full aspect-square object-cover"
              />
              <img 
  src={shopping4}
  alt="Custom clothing"
  className="rounded-lg shadow-md w-full aspect-square object-cover"
/>

<img 
  src={shopping5}
  alt="Fashion creativity"
  className="rounded-lg shadow-md w-full aspect-square object-cover"
/>

<img 
  src={shopping3}
  alt="Fashion design"
  className="rounded-lg shadow-md w-full aspect-square object-cover"
/>

            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Palette className="h-6 w-6 text-purple-500" />
                  What We Do
                </h3>
                <p className="text-gray-700">
                  We give you the power to design your own clothes — choose the print, colors, emotions, quotes, or art — and we'll bring your imagination to life. Whether it's a kurti, lehenga, hoodie, or one-piece, your style will be made with your vibe, your story, and your print.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-purple-500" />
                  Why We Exist
                </h3>
                <p className="text-gray-700">
                  Because you are your own fashion artist. And it's time the world wore your vision.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-purple-500" />
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To empower every girl to wear what she truly feels — by blending creativity, emotion, and comfort into every stitch.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-2xl p-12 mb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
            <p className="text-xl text-purple-100 mb-8">
              Young women, students, creators, artists, dreamers — anyone who wants to stop following trends and start creating them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl font-medium">"I designed this."</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl font-medium">"I own this."</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-xl font-medium">"This is me."</p>
              </div>
            </div>
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