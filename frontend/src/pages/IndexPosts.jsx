import React from "react";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const IndexPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPosts(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <div className="flex items-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="ポケモン名を入力"
            />
            <button className="px-4 text-white bg-purple-600 border-l rounded ">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex flex-wrap justify-center">
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard key={post.id} post={post.attributes} id={post.id} />
          ))}
      </div>
    </>
  );
};

export default IndexPosts;
