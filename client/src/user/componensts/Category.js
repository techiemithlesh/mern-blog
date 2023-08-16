import React from 'react';

const Category = () => {
  const categories = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Node.js' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'CSS' },
    { id: 5, name: 'HTML' }
  ];

  return (
    <div className='mb-8'>
      <h2 className='text-lg font-bold mb-4'>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} className='text-gray-700 mb-2'>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
