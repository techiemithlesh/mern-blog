import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../Layout/Layout';

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
    },
    {
        id: 4,
        title: 'Blog Post 4',
        content: 'This is the content of blog post 4.',
        image: 'https://via.placeholder.com/300x200'
    }, 
    {
        id: 5,
        title: 'Blog Post 5',
        content: 'This is the content of blog post 2.',
        image: 'https://via.placeholder.com/300x200'
    }, 
    {
        id: 6,
        title: 'Blog Post 6',
        content: 'This is the content of blog post 3.',
        image: 'https://via.placeholder.com/300x200'
    }
];

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    const totalPages = Math.ceil(blogData.length / postsPerPage);

    return (
        <Layout title='CodingKaro- Blog' 
        description='Check out our latest blog posts for interesting insights and perspectives on the tech industry.'>
            <div className='mt-8 mr-6 px-16'>
                <h2 className='text-xl font-bold mb-4'>Latest Blog Posts</h2>
                <div className='flex flex-wrap -mx-2'>
                    {
                    blogData.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((blog) => (
                        <div className='w-1/3 px-2 mb-4'
                            key={
                                blog.id
                        }>
                            <div className='p-4 rounded-md shadow-md'>
                                <img src={blog.image} alt='Blog Header' className='w-full h-auto mb-4 rounded-md shadow-md'/>
                                <h3 className='text-lg font-bold mb-2'>
                                    {
                                    blog.title
                                }</h3>
                                <p className='mb-4'>
                                    {
                                    blog.content
                                }</p>
                                <Link to={
                                        `/blog/${
                                            blog.id
                                        }`
                                    }
                                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))
                } </div>
                <div className='text-right my-2'>
                    <button onClick={
                            () => setCurrentPage(currentPage - 1)
                        }
                        disabled={
                            currentPage === 1
                        }
                        className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2'>
                        Prev
                    </button>
                    <button onClick={
                            () => setCurrentPage(currentPage + 1)
                        }
                        disabled={
                            currentPage === Math.ceil(blogData.length / postsPerPage)
                        }
                        className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                        Next
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage;
