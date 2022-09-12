import { useState} from 'react';
import Tabss from './Tabss';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Compose from './Compose';
import {Route, Routes} from 'react-router-dom';
import MailBox from './MailBox';

function Home() {

  const [open,setOpen]=useState(true);
  const [show,setShow]=useState(false);

  return (
    <>
    <Navbar setOpen={setOpen}/>
    <div className='flexitem'>
    <SideBar open={open} setShow={setShow}/>
    <Routes>
             <Route path='/' element={<Tabss/>}/>
             <Route path='/mailbox/:name' element={<MailBox/>}/>
    </Routes>
    <Compose show={show} setShow={setShow}/>
    </div>
    </>
  );
}

export default Home;