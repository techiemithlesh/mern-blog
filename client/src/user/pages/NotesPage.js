import React from 'react'
import Layout from '../Layout/Layout'
import NoteCard from '../componensts/NoteCard'


const NotesPage = () => {
  return (
    <Layout>
        <div className='px-16 py-12'>
        <NoteCard/>
        </div>
    </Layout>
  )
}

export default NotesPage;