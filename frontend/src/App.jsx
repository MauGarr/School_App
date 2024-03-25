import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { StudentPage } from './pages/StudentPage';
import { StudentFormPage } from './pages/StudentFormPage';
import { Toaster } from 'react-hot-toast';
import { Navigation } from './components/Navigation';
import SearchByGrade from './components/SearchByGrade';


function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="/students" />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/students/:id" element={<StudentFormPage />} />
            <Route path="/students/crear-alumno" element={<StudentFormPage />} />
            <Route path='/students/consultar-alumno/' element={<SearchByGrade />} />
          </Routes>
          <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;