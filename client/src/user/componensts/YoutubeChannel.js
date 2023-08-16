import React from 'react';

const YoutubeChannel = () => {
  return (
    <div className='my-4'>
      <h2 className='font-bold text-lg mb-4'>Code Karo</h2>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          className='rounded-lg'
          title='Traversy Media'
          src='https://www.youtube.com/embed/PtQiiknWUcI'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeChannel;
