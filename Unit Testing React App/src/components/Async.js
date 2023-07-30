import React, { useEffect, useState } from "react";

export default function Async() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((respose) => respose.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
