
import './App.css';
import HomeScreen from './user/pages/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import  Contact  from './user/pages/Contact';
import './custom.css'
import BlogDetails from './user/pages/BlogDetails';
import BlogPage from './user/pages/BlogPage';
import ProjectsPage from './user/pages/ProjectsPage';
import NotesPage from './user/pages/NotesPage';
import About from './user/pages/About';
import AdminDashboard from './admin/Pages/AdminDashboard';


function App() {
  return (
  <>
  <Router>
  <Routes>
    <Route path ='/' element={<HomeScreen/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog/:id' element={<BlogDetails/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    <Route path='/projects' element={<ProjectsPage/>}/>
    <Route path='/notes' element={<NotesPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
  </Routes>
  </Router>
  </>
  );
}

export default App;