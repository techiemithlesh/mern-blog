import React from 'react';

const CodingProject = ({ name, description, imageUrl, technologies, demoUrl, sourceUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-48 w-full object-cover" src={imageUrl} alt={`${name} screenshot`} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="mr-2 mb-2 px-2 py-1 rounded bg-gray-100 text-gray-600 text-sm">{tech}</span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={demoUrl} target='_blank' rel='norefferer' className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Live Demo</a>
          <a href={sourceUrl} target='_blank' rel='norefferer' className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default CodingProject;
