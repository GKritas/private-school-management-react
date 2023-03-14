
import CourseList from './components/CourseList';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Header from './components/Header';
import StudentList from './components/StudentList';
import TrainerList from './components/TrainerList';
import AssignmentList from './components/AssignmentList';
import AddCourseForm from './components/AddCourse';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Login/>}/>
            <Route path='/menu' element={<Header/>}/>
            <Route path='/courses' element={<CourseList/>}/>
            <Route path='/add-course' element={<AddCourseForm/>}/>
            <Route path='/students' element={<StudentList/>}/>
            <Route path='/trainers' element={<TrainerList/>}/>
            <Route path='/assignments' element={<AssignmentList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
