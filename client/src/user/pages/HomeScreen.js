import React from 'react';
import Layout from '../Layout/Layout';
import CodingProjects from '../componensts/CodingProjects';
import Category from '../componensts/Category';
import YoutubeChannel from '../componensts/YoutubeChannel';
import Blog from '../componensts/Blog';

const HomeScreen = () => {
  return (
    <Layout>
      <div className='container mx-auto px-16'>
        <div className='flex flex-wrap mt-8'>
          <div className='w-full lg:w-4/5 lg:pr-8 px-12'>
            <CodingProjects />
          </div>
          <div className='w-full px-12'>
            <div className='flex justify-between'>
              <div className='w-full pr-16'><Blog/></div>
              <div className='sticky top-0 pt-12'>
              <Category />
              <YoutubeChannel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
