"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Send, CheckCircle, AlertCircle, Quote, Clock } from 'lucide-react';

export function IdeaSectionHeader() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    idea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.idea.trim()) {
      newErrors.idea = 'Idea is required';
    } else if (formData.idea.trim().length < 50) {
      newErrors.idea = 'Idea must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setSubmitStatus('');

    if (!validateForm()) {
      setSubmitStatus('validation_error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ email: '', name: '', idea: '' });
      setErrors({});
    }, 1500);
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'success':
        return {
          type: 'success',
          icon: CheckCircle,
          message: 'Thank you for sharing your idea! We will review it and reach out shortly.'
        };
      case 'validation_error':
        return {
          type: 'error',
          icon: AlertCircle,
          message: 'Please check the form and correct any errors before submitting.'
        };
      default:
        return {
          type: 'error',
          icon: AlertCircle,
          message: 'Something went wrong. Please try again later.'
        };
    }
  };

  const statusInfo = submitStatus ? getStatusMessage() : null;

  return (
    <div className="w-full bg-black relative z-10 text-white font-sans">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{ fontFamily: 'ClashDisplay, sans-serif', wordSpacing: '0.4em' }}
          className="mt-8 bg-gradient-to-br from-white to-neutral-400 py-4 bg-clip-text text-center text-5xl tracking-[0.15em] text-transparent md:text-8xl"
        >
          BUILD YOUR IDEA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-neutral-400 max-w-xl mt-4 text-xl"
        >
          Turn your idea into reality with the right guidance and support.
        </motion.p>
      </LampContainer>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-32 lg:-mt-64 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Value Prop Section (Adapted from Quote side) */}
          <div className="lg:basis-2/5 w-full">
            <div className="bg-neutral-900/30 p-12 border border-neutral-800 lg:sticky lg:top-8">
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 w-16 h-16 opacity-10 text-white" />
                <blockquote
                  style={{ fontFamily: 'SpaceGrotesk, sans-serif' }}
                  className="text-2xl md:text-3xl leading-relaxed mb-8 text-white font-light"
                >
                  People who are crazy enough to think they can change the world are the ones who do.
                  <footer className="text-lg text-neutral-400 mt-4 font-normal">— Steve Jobs</footer>
                </blockquote>
                <hr className="border-neutral-700 mb-6" />
                <div
                  style={{ fontFamily: 'ClashDisplay, sans-serif' }}
                  className="space-y-5 text-neutral-300 text-lg leading-relaxed"
                >
                  <p>
                    Got an idea but don’t know where to start?
                  </p>


                  <div className="text-2xl text-white font-medium pt-6 ">
                    We help you build, refine, and launch it. Your idea  stays yours. 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:basis-3/5 w-full">
            <div className="bg-black border border-neutral-800 p-12">
              <div className="space-y-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-white uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent px-6 py-4 border text-white placeholder-neutral-600 focus:outline-none transition-colors duration-200 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-white'
                        }`}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-white uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent px-6 py-4 border text-white placeholder-neutral-600 focus:outline-none transition-colors duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-white'
                        }`}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Idea Textarea */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-white uppercase tracking-wider">
                    Your Startup Idea *
                  </label>
                  <div className="relative">
                    <textarea
                      name="idea"
                      value={formData.idea}
                      onChange={handleInputChange}
                      rows={8}
                      className={`w-full bg-transparent px-6 py-4 border text-white placeholder-neutral-600 focus:outline-none transition-colors duration-200 resize-none ${errors.idea ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-white'
                        }`}
                      placeholder="What problem are you solving? Who is it for? Do you have a prototype? (minimum 50 characters)"
                      disabled={isSubmitting}
                    />
                    <div className={`absolute bottom-4 right-6 text-sm ${formData.idea.length > 5000 ? 'text-red-500' : 'text-neutral-500'
                      }`}>
                      {formData.idea.length} / 5000 chars
                      {formData.idea.length < 50 && formData.idea.length > 0 && (
                        <span className="text-red-500 ml-2">
                          ({50 - formData.idea.length} more needed)
                        </span>
                      )}
                    </div>
                  </div>
                  {errors.idea && (
                    <p className="text-red-500 text-sm">{errors.idea}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-5 px-8 font-bold text-xl uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-black text-white active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-6 w-6 border-b-2 border-current mr-3 rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3" />
                      Get Help Building This
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {statusInfo && (
                  <div className={`border p-6 ${statusInfo.type === 'success' ? 'bg-green-950/30 border-green-800' : 'bg-red-950/30 border-red-800'
                    }`}>
                    <div className={`flex items-start ${statusInfo.type === 'success' ? 'text-green-400' : 'text-red-400'
                      }`}>
                      <statusInfo.icon className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span>{statusInfo.message}</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}