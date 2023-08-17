import React from 'react'
import AdminLayout from '../Layout/AdminLayout'

const AddProject = () => {
  return (
    <AdminLayout>
        <div className='container px-4'>
            <div className='flex flex-col'>
                <label>Title</label>
                <input type='text' className='p-2' name='title' placeholder='Enter Project title'/>
            </div>
            <div className='flex flex-col'>
                <label>Short description</label>
                <input type='text' className='p-2' name='shortDescription' placeholder='Enter short description'/>
            </div>
            <div className='flex flex-col'>
                <label>Image</label>
                <input type='file' className='p-2' name='image'/>
            </div>
        </div>
    </AdminLayout>
  )
}

export default AddProject