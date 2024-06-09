
import './App.css';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { theme } from './theme';
import JobDetails from './pages/JobDetails';
import EditJobFrom from './pages/EditJobForm';

const App = ()=>{
  return(
    <>
    <ThemeProvider theme={theme}> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:id' element={<JobDetails/>}></Route>
            <Route path='/update/:id' element={<EditJobFrom/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
