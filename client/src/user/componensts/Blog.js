import React from 'react';
import { Link } from 'react-router-dom';


const blogData = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'This is the content of blog post 1.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the content of blog post 2.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    title: 'Blog Post 3',
    content: 'This is the content of blog post 3.',
    image: 'https://via.placeholder.com/300x200'
  }
];

const Blog = () => {
  return (
    <div className='mt-8 mr-6'>
     
      <h2 className='text-xl font-bold mb-4'>Latest Blog Posts</h2>
      {blogData.map((blog) => (
        <div className='mb-4 p-4 rounded-md shadow-md' key={blog.id}>
             <img src={blog.image} alt={blog.title} className='w-full h-auto mb-4 rounded-md shadow-md' />
          <h3 className='text-lg font-bold mb-2'>{blog.title}</h3>
          <p className='mb-4'>{blog.content}</p>
          <Link
            to={`/blog/${blog.id}`}
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
