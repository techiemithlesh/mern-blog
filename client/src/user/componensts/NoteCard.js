import React from 'react';

const NoteCard = () => {

  const notes = [
    {
      id: 1,
      heading: 'Python Notes',
      para: 'Download Notes Here',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
      fileName: 'python_notes.pdf', // Replace with the actual filename of the Python notes file
    },
    // Add entries for other notes
  ];

  const handleNoteDownload = (fileName) => {
    // Create a temporary anchor element to initiate the download
    const link = document.createElement('a');
    link.href = `/download/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='grid gap-4 lg:grid-cols-4 my-8'>
      {notes.map((item) => (
        <div className='w-full rounded-lg shadow-md bg-white lg:max-w-sm relative text-center' key={item.id}>
          <div className='notes_img_container'>
            <img className='object-cover w-full h-48' src={item.imageUrl} alt='image' />
          </div>
          <div className='p-4'>
            <h4 className='text-xl font-semibold text-blue-600'>{item.heading}</h4>
            <p className='mb-2 leading-normal'>{item.para}</p>
            <button
              className='px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow my-4'
              onClick={() => handleNoteDownload(item.fileName)}
            >
              Download Notes &nbsp;<i className='fas fa-download'></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
