import React from "react";
import { getPosts } from "../_services/notions";

const blogHome = () => {
  const posts = getPosts();
  return <div>blogHome</div>;
};

export default blogHome;
