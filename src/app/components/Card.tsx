"use client";
import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  body: string;
  onClick?: () => void;
};

export default function Card({ title, body, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer bg-white shadow-md rounded-xl p-4 border hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
        {title}
      </h3>
      <p className="text-gray-600 mt-2 text-sm line-clamp-2">{body}</p>
    </motion.div>
  );
}
