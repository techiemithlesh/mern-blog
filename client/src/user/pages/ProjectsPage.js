import React from 'react';
import CodingProjects from '../componensts/CodingProjects';
import Layout from '../Layout/Layout';


const ProjectsPage = () => {
  return (
    <Layout>
    <div className="container mx-auto py-8 px-8 sm:px-6 lg:px-8">
      <CodingProjects />
    </div>
    </Layout>
  );
};

export default ProjectsPage;
