'use client';
import React from "react";
import { motion } from "framer-motion";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/sharedComponets/Loading";
import Error from "./components/sharedComponets/Error";


const StatCard = ({ title, value }: { title: string; value: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
  >
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
  </motion.div>
);

export default function DashboardPage() {
  // Fetch Users
  const { data: users, loading: loadingUsers, error: errorUsers } = useFetch<any[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  // Fetch Posts
  const { data: posts, loading: loadingPosts, error: errorPosts } = useFetch<any[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const loading = loadingUsers || loadingPosts;
  const error = errorUsers || errorPosts;
  if (loading) return <Loading/>;
    if (error) return <Error/>

  const stats = !loading && !error
    ? [
        { title: "Total Users", value: users?.length || 0 },
        { title: "Total Posts", value: posts?.length || 0 },
      ]
    : [];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-green-50 rounded-lg shadow p-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-green-800">
          Welcome to ZettaDashboard!
        </h1>
        <p className="text-gray-600 mt-2">
          Here’s a quick overview of your system.
        </p>
      </motion.div>

      {/* Loading/Error */}
      {loading && <p>Loading stats...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Stats Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
      )}

      {/* Animated Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-green-600 text-white p-6 rounded-lg shadow text-center"
      >
        <h2 className="text-xl md:text-2xl font-semibold">
          Keep up the great work! 🚀
        </h2>
        <p className="mt-1 text-sm md:text-base">Your dashboard is ready for insights.</p>
      </motion.div>
    </div>
  );
}
