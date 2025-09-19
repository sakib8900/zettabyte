"use client";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Card";
import Loading from "../components/sharedComponets/Loading";
import Error from "../components/sharedComponets/Error";


type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsPage() {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <Loading/>;
  if (error) return <Error/>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
            onClick={() => (window.location.href = `/posts/${post.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
