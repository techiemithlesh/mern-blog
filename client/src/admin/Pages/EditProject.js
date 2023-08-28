import React from 'react'
import AdminLayout from '../Layout/AdminLayout'
import { useParams } from 'react-router-dom'

const EditProject = () => {
    const {id} = useParams();
  return (
    <AdminLayout>
         <h2>Edit Project with ID: {id}</h2>
    </AdminLayout>
  )
}

export default EditProject