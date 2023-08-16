import React from 'react';
import { Link } from 'react-router-dom';

const SimilarPost = ({ post }) => {
  return (
    <div className='flex flex-col mb-4'>
      <div className=''>
        <img
          src={post.image}
          alt='Blog Header'
          className='w-full h-auto rounded-md shadow-md'
        />
      </div>
      <div className=''>
        <h3 className='text-lg font-bold py-4'>{post.title}</h3>
        <Link
          to={`/blog/${post.id}`}
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded text-sm'
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SimilarPost;
