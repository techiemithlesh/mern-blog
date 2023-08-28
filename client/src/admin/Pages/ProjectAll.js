import React, { useEffect, useState } from 'react';
import AdminLayout from '../Layout/AdminLayout';

const ProjectAll = () => {
 const [projects, setProjects] = useState([]);

  const handleDelete = (projectId) => {
    console.log(`Deleted Project with ID: ${projectId}`);
    
  };
  
  useEffect(() => {
    const apiEndpoint = 'http://localhost:5000/api/projects';

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProjects(data);
        } else {
          console.log("Error Retrieving data");
        }
      } catch (error) {
        console.error('Error:', error);
      }
      

    }

    fetchData();

  }, []);


  return (
    <AdminLayout title="Admin-All Projects">
      <div className="w-full max-w-4xl mx-auto my-4 bg-white shadow flex justify-center items-center">
        <table className="table-auto">
          <thead>
            <tr>
            <th className="px-4 py-2">SN</th>
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
                <td className="border px-4 py-2">{project._id}</td>
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
