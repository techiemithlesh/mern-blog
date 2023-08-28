import React, {useState} from 'react'
import AdminLayout from '../Layout/AdminLayout'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddProject = () => {
    const navigate = useNavigate();

    const [isPublished, setIsPublished] = useState(false);
    const [content, setContent] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        keywords: '',
        metaDescription: '',
        demoLink: '',
        liveLink: '',
        projectCategory: '',
        shortDescription: '',
    });


  

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };


    const handlePublishToggle = () => {
        setIsPublished(!isPublished);
    }

   const apiEndpoint = 'http://localhost:5000/api/projects';
    
   
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
      
        // For the 'keywords' field, split the input by commas and store as an array
        if (name === 'keywords') {
          setFormData({
            ...formData,
            [name]: value.split(',').map((keyword) => keyword.trim()),
          });
        } else {
          setFormData({
            ...formData,
            [name]: name === 'image' ? files[0] : value,
          });
        }

        
      };
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const projectData = new FormData();
            projectData.append('title', formData.title);
            projectData.append('image', formData.image);
            projectData.append('keywords', formData.keywords);
            projectData.append('metaDescription', formData.metaDescription);
            projectData.append('demoLink', formData.demoLink);
            projectData.append('liveLink', formData.liveLink);
            projectData.append('projectCategory', formData.projectCategory);
            projectData.append('shortDescription', formData.shortDescription);
            projectData.append('description', content);
            projectData.append('status', isPublished ? 'publish' : 'draft');

            try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                body: projectData,
            });

            if (response.ok) {
                toast.success("Project Added Successfully !", {
                    position: 'top-right'
                });

                navigate('/admin/projects')

            } else {
                console.error('Error adding project');
                toast.error("Project Not added !", {
                    position: 'top-right'
                })
            }

            } catch (error) {
                console.error('Error:', error);
            }

    }

    return (
        <AdminLayout>
            <form onSubmit={handleSubmit} encType='multipart/formdata'>
            <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label>Title</label>
                        <input type='text' className='w-full p-2' name='title' 
                        placeholder='Enter Title'
                        value={formData.title}
                        onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label>Image</label>
                        <input type='file' className='w-full p-2' name='image'
                        onChange={handleInputChange}/>
                    </div>

                    <div>
                    <label>Keywords</label>
                    <textarea
                        className='w-full p-2'
                        placeholder='Enter Keywords (comma-separated)'
                        name='keywords'
                        value={formData.keywords}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    </div>

                    <div>
                        <label>Meta Description</label>
                        <textarea className='w-full p-2' name='metaDescription'
                        placeholder='Enter Meta Description'
                        value={formData.metaDescription}
                        onChange={handleInputChange} required>

                        </textarea>
                    </div>
                    <div>
                        <label>Demo Url</label>
                        <input type='url' className='w-full p-2' name='demoLink' placeholder='Enter Url'
                        value={formData.demoLink}
                        onChange={handleInputChange} required/>
                    </div>


                    <div>
                        <label>Live Url</label>
                        <input type='url' className='w-full p-2' name='liveLink' 
                        placeholder='Enter Url'
                        value={formData.liveLink}
                        onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Category</label>
                        <input type='text' className='w-full p-2' name='projectCategory' 
                        placeholder='Enter name'
                        value={formData.projectCategory}
                        onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Short Description</label>
                        <textarea className='w-full p-2' name='shortDescription' 
                        placeholder='Enter Short Description'
                        value={formData.shortDescription} 
                        onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                        modules={{
                        toolbar: [
                            [{ header: '1' }, { header: '2' }, { font: [] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['link', 'image', 'video'],
                            ['code-block'],
                        ],
                        }}
                    />
                </div>
            </div>
            <div className='flex my-3'>
                <div className=''>
                    <label>Publish Status</label>
                    <div className="flex items-center">
                        <input type="checkbox" id="publishToggle" name="status"
                            checked={isPublished}
                            onChange={handlePublishToggle}
                            className="mr-2"/>
                        <label htmlFor="publishToggle" className="text-gray-700">
                            {
                            isPublished ? 'Publish' : 'Draft'
                        } </label>
                    </div>
                </div>
                <div>
                    <button className='ml-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Add Project</button>
                </div>
            </div>
            </form>
        </AdminLayout>
    )
}

export default AddProject
