import React from 'react';
import AdminLayout from '../Layout/AdminLayout';

const ProjectAll = () => {
  const projects = [
    {
      _id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      image: 'project1.jpg',
      technologies: 'Tech 1, Tech 2',
    },
    {
      _id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      image: 'project2.jpg',
      technologies: 'Tech 3, Tech 4',
    },
    // Add more dummy project data as needed
  ];

  const handleDelete = (projectId) => {
    console.log(`Deleted Project with ID: ${projectId}`);
    // Perform the actual delete operation using API calls or other logic
  };

  return (
    <AdminLayout title="Admin-All Projects">
      <div className="w-full max-w-4xl mx-auto my-4 bg-white shadow flex justify-center items-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td className="border px-4 py-2">{project.title}</td>
                <td className="border px-4 py-2">{project.description}</td>
                <td className="border px-4 py-2">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_API_URL}/images/${project.image}`}
                    width="45px"
                    alt={project.title}
                  />
                </td>
                <td className="border px-4 py-2">{project.technologies}</td>
                <td className="border px-4 py-2 flex justify-between mx-auto">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 mx-1 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      // Navigate to edit page
                      window.location.href = `/admin/projects/edit/${project._id}`;
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 mx-1 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ProjectAll;
