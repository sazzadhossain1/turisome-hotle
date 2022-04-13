import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './conponents/Home/Home';
import Login from './conponents/Login/Login';
import Header from './conponents/Header/Header';
import SingUp from './conponents/SingUp/SingUp';
import SingleRoom from './conponents/SingleRoom/SingleRoom';
import DoubleRoom from './conponents/DoubleRoom/DoubleRoom';
import FamilyRoom from './conponents/FamilyRoom/FamilyRoom';
function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/singUp' element={<SingUp></SingUp>}></Route>
        <Route path='singleRoom' element={<SingleRoom></SingleRoom>}></Route>

        <Route path="/doubleRoom" element={<DoubleRoom></DoubleRoom>}></Route>
        <Route path='familyRoom' element={<FamilyRoom></FamilyRoom>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
