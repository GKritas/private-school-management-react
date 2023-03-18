
import CourseList from './components/courseList/CourseList';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Header from './components/header/Header';
import StudentList from './components/StudentList';
import TrainerList from './components/TrainerList';
import AssignmentList from './components/AssignmentList';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Header/>}/>
            <Route path='/courses' element={<CourseList/>}/>
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
