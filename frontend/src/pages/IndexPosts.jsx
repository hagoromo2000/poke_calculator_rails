import React from "react";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const IndexPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPosts(res.data.data);
      setFilteredPosts(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  const handleSearch = () => {
    console.log(searchTerm);
    const keywords = searchTerm.split(/\s+/);

    const filteringPosts = posts.filter((post) => {
      return keywords.every((keyword) => {
        return (
          post.attributes.pokemon
            .toLowerCase()
            .includes(keyword.toLowerCase()) ||
          post.attributes.title.toLowerCase().includes(keyword.toLowerCase()) ||
          post.attributes.item.toLowerCase().includes(keyword.toLowerCase()) ||
          post.attributes.move1.toLowerCase().includes(keyword.toLowerCase()) ||
          post.attributes.move2.toLowerCase().includes(keyword.toLowerCase()) ||
          post.attributes.move3.toLowerCase().includes(keyword.toLowerCase()) ||
          post.attributes.move4.toLowerCase().includes(keyword.toLowerCase())
        );
      });
    });
    setFilteredPosts(filteringPosts);
  };

  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <div className="flex items-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className=" block w-96 px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="ポケモン、わざ、もちものなどを入力"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="px-4 text-white bg-purple-600 border-l rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex flex-wrap justify-center">
        {filteredPosts.length > 0 &&
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post.attributes} id={post.id} />
          ))}
      </div>
    </>
  );
};

export default IndexPosts;
