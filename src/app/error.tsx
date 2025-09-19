'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Error() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[60vh] bg-red-50 rounded-lg shadow p-10 space-y-6"
    >
      {/* Icon */}
      <AlertCircle className="text-red-600 w-16 h-16" />

      {/* Title */}
      <h1 className="text-3xl font-bold text-red-700">Oops! Something went wrong.</h1>

      {/* Description */}
      <p className="text-red-600 text-center max-w-md">
        We couldn't fetch the data. Please check your connection or try again later.
      </p>

      {/* Retry Button */}
      <button
        onClick={() => window.location.reload()}
        className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
      >
        Retry
      </button>
    </motion.div>
  );
}
