import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";

const HomeContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return <HomePage posts={posts} />;
};

export default HomeContainer;