import {useState} from 'react';
import Tabss from './Tabss';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Compose from './Compose';
import {Route, Routes, Navigate } from 'react-router-dom';
import MailBox from './MailBox';
import Authentication from './Authentication';


function Home() {
  const [open,setOpen]=useState(true);
  const [show,setShow]=useState(false);

  return (
    <>
    <Navbar setOpen={setOpen}/>

    <div className='flexitem'>

    <SideBar open={open}
    setShow={setShow}/>

    <Routes>
             <Route path='/login' element={<Authentication/>}/>
             <Route path='/' element={<Tabss/>}/>
             <Route path='/mailbox/:name' element={<MailBox/>}/>
             
    </Routes>

    <Compose show={show}
    setShow={setShow}/>
    
    </div>
    </>
  );
}

export default Home;
// export function ProtectedRoute(props) {
//   const user = localStorage.getItem("user");

//   if (!user) {
//    return <Navigate to="/login" />;
//   } else {
//    return <Route {...props} />;
//   }
// }