import React from "react";

type Params = {
  params: { id: string };
};

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function PostPage({ params }: Params) {
  const post = await getPost(params.id);

  return (
    <div className="p-6 bg-white rounded shadow max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
