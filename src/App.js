 import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import ShowStudents from './Dashboard/Student/ShowStudents';
import StudentLogin from './Dashboard/Student/StudentLogin';
import StudentRegistaion from './Dashboard/Student/StudentRegistaion';
import TeacherLogin from './Dashboard/Teacher/TeacherLogin';
import TeacherRegistation from './Dashboard/Teacher/TeacherRegistation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Dashboard/>}>
        <Route index element={<TeacherLogin/>} ></Route>
        <Route path='teacherRegistation' element={<TeacherRegistation/>} ></Route>
        <Route path='studentLogin' element={<StudentLogin/>} ></Route>
        <Route path='stuentRegistation' element={<StudentRegistaion/>} ></Route>
        <Route path='showStudents' element={<ShowStudents/>} ></Route>
      </Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
