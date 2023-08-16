import React from 'react';
import Layout from '../Layout/Layout';


const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-12 mx-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
        Welcome to CodeKaro.com, the one-stop destination for software engineers! Our website is designed to provide a comprehensive resource for all things related to programming and software development.
        </p>
        <p className="mb-4">
        At CodeKaro.com, you'll find a wide range of tutorials, articles, and code snippets covering a variety of programming languages and frameworks. Whether you're a beginner or an experienced developer, our site has something to help you improve your skills and stay up-to-date with the latest trends in the industry.
        </p>
        <p>
        We also offer a community forum where you can connect with other software engineers to ask questions, share knowledge, and collaborate on projects. With CodeKaro.com, you can take your coding skills to the next level and stay ahead of the curve in the fast-paced world of software development.
        </p>
      </div>
    </Layout>
  );
};

export default About;
