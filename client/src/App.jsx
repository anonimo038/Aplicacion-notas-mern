import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<h1>Home page</h1>}></Route>
        <Route path='/login' element = {<h1>Login</h1>}></Route>
        <Route path='/register' element = {<h1>Register</h1>}></Route>
        <Route path='/task' element = {<h1>Task</h1>}></Route>
        <Route path='/add-task' element = {<h1>new Task</h1>}></Route>
        <Route path='/tasks/:id' element = {<h1>update Task</h1>}></Route>
        <Route path='/profile' element = {<h1>Profile</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App