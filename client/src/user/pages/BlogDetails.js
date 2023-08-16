import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import SimilarPost from '../componensts/SimilarPost';

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
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Blog Post 4',
    content: 'This is the content of blog post 4.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    title: 'Blog Post 2',
    content: 'This is the content of blog post 2.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    title: 'Blog Post 3',
    content: 'This is the content of blog post 3.',
    image: 'https://via.placeholder.com/300x200',
  }
];

const BlogDetails = ({ match }) => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  // find other blog posts
  const otherBlogs = blogData.filter((otherBlog) => otherBlog.id !== blog.id);

  return (
    <Layout>
      <div className='px-16'>
        <div className='mt-8 mr-6'>
          <div className='flex justify-between'>
            <div className='mb-4 p-4 rounded-md w-4/5 mx-12'>
              <img
                src={blog.image}
                alt='Blog Header'
                className='w-full h-auto mb-4 rounded-md shadow-md'
              />
              <h3 className='text-lg font-bold mb-2'>{blog.title}</h3>
              <p className='mb-4'>{blog.content}</p>
            </div>
            <div className='mb-4 p-4 rounded-md shadow-md'>
              <h2 className='text-xl font-bold mb-4'>Similar Posts</h2>
              {otherBlogs &&
                otherBlogs.map((post) => (
                  <SimilarPost post={post} key={post.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
