import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../assets/blogPosts";
import ReactMarkdown from "react-markdown";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="p-10">Blog post not found.</div>;

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{post.date}</p>
        <img
          src={post.image}
          alt={post.title}
          className="rounded-lg shadow-md mb-8"
        />
        <div className="prose prose-blue max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
