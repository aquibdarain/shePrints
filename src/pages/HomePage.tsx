import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="container mx-auto px-4 z-10 py-20">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to <span className="text-purple-400">ShePrints</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Empowering women through fashion and self-expression. Join us in creating a more vibrant and inclusive fashion community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://forms.gle/YqYmdUX2fXWugjeb8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center transition-colors"
              >
                Take Our Survey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                to="/about" 
                className="bg-white/20 hover:bg-white/30 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At ShePrints, we believe in empowering women through fashion and creativity. Our platform is designed to celebrate individuality and self-expression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Us Understand You Better
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Share your thoughts and preferences to help us create a better fashion experience for everyone.
            </p>
            <a 
              href="https://forms.gle/YqYmdUX2fXWugjeb8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-4 px-10 bg-white text-purple-900 rounded-full font-medium text-lg transition-colors hover:bg-purple-100"
            >
              Take Our Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;