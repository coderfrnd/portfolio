import React, { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaUser, FaPaperPlane, FaGithub, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const MobileContact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_c0kxmqt',
        'template_bz9jbqn',
        form.current,
        'I2pGB8KnThzIifaOL'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 sm:p-8"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
      </motion.div>

      <div className="w-full space-y-6">
        {/* Contact Information Section */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 
                       hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 
                       transition-all duration-300 group">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h3>
            
            <div className="space-y-3">
              <motion.a
                href="mailto:abhishek20ei02@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-700/30 hover:bg-blue-500/10 
                         text-gray-300 hover:text-blue-400 transition-all duration-300 group/item"
              >
                <div className="p-2 rounded-lg bg-gray-700/50 group-hover/item:bg-blue-500/20 
                              transition-colors duration-300">
                  <FaEnvelope className="text-blue-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Email</span>
                  <span className="text-sm font-medium">abhishek20ei02@gmail.com</span>
                </div>
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1mZsHN4UPdKNd-cJCjZ610SlC4ZR4gnFj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-700/30 hover:bg-blue-500/10 
                         text-gray-300 hover:text-blue-400 transition-all duration-300 group/item"
              >
                <div className="p-2 rounded-lg bg-gray-700/50 group-hover/item:bg-blue-500/20 
                              transition-colors duration-300">
                  <FaFileDownload className="text-blue-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Resume</span>
                  <span className="text-sm font-medium">Download my resume</span>
                </div>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/abhishek-20ei02/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-700/30 hover:bg-blue-500/10 
                         text-gray-300 hover:text-blue-400 transition-all duration-300 group/item"
              >
                <div className="p-2 rounded-lg bg-gray-700/50 group-hover/item:bg-blue-500/20 
                              transition-colors duration-300">
                  <FaLinkedin className="text-blue-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">LinkedIn</span>
                  <span className="text-sm font-medium">linkedin.com/in/abhishek-20ei02</span>
                </div>
              </motion.a>
              
              <motion.a
                href="https://github.com/coderfrnd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-700/30 hover:bg-blue-500/10 
                         text-gray-300 hover:text-blue-400 transition-all duration-300 group/item"
              >
                <div className="p-2 rounded-lg bg-gray-700/50 group-hover/item:bg-blue-500/20 
                              transition-colors duration-300">
                  <FaGithub className="text-blue-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">GitHub</span>
                  <span className="text-sm font-medium">github.com/coderfrnd</span>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 
                   hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 
                   transition-all duration-300 group"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Send Message
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </h3>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <motion.div variants={itemVariants} className="group/input">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 
                                 group-hover/input:text-blue-500 transition-colors duration-300" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full pl-10 pr-4 py-2 bg-gray-700/50 border rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                            group-hover/input:border-blue-500/50 transition-colors duration-300
                            ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="group/input">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 
                                     group-hover/input:text-blue-500 transition-colors duration-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full pl-10 pr-4 py-2 bg-gray-700/50 border rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                            group-hover/input:border-blue-500/50 transition-colors duration-300
                            ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="group/input">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className={`w-full px-4 py-2 bg-gray-700/50 border rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                          group-hover/input:border-blue-500/50 transition-colors duration-300
                          ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
              ></textarea>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group flex items-center justify-center gap-2 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 
                       transition-all duration-300 disabled:opacity-50"
            >
              <FaPaperPlane className={`${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center text-sm"
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center text-sm"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default MobileContact; 