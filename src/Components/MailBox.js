import React, { useState,useEffect } from 'react'
import {IoArrowBack} from 'react-icons/io5';
// import {BiArchiveIn} from 'react-icons/bi';
// import {RiSpamLine} from 'react-icons/ri';
// import {RiDeleteBin6Line} from 'react-icons/ri';
// import {HiOutlineMail} from 'react-icons/hi';
// import {BsChatLeftText} from 'react-icons/bs';
// import {MdScheduleSend} from 'react-icons/md';
// import {AiOutlineClockCircle} from 'react-icons/ai';
import {useNavigate, useParams } from 'react-router-dom';
import avtar from '../avtar.png'

let initialValue={
  name:"",
  subject:"",
  mail:""
}

function MailBox() {
  const navigate=useNavigate();
  const {name}= useParams();
  console.log(name);

  const[mails,setMails]=useState(initialValue);

  const getdata=()=>{
    fetch('https://gmailclon.herokuapp.com/gmail_data/'+name)
    .then((responce)=>responce.json())
    .then((data)=>{setMails(data[0]);
      console.log(data)});
    };
    useEffect(()=>{
      getdata();
    },[])

  return (
    <div className='main-mailbox'>
   <div className='mailbox-top-icons'>
          <div className='sidebar-menu-buttonss'>
            <IoArrowBack className='sider-menu-iconn' onClick={()=>{navigate('/')}}/>
            <span className='tooltip-texts'>Back</span>
          </div>
            {/* <li className='sidebar-menu-buttonss'>
            <BiArchiveIn className='sider-menu-iconn'/>
            <span className='tooltip-texts'>Archive</span>
          </li>
          <li className='sidebar-menu-buttonss'>
            <RiSpamLine className='sider-menu-iconn'/>
            <span className='tooltip-texts'>Report Spam</span>
          </li>
          <li className='sidebar-menu-buttonss'>
            <RiDeleteBin6Line className='sider-menu-iconn'/>
            <span className='tooltip-texts'>Bin</span>
          </li>
          <li className='sidebar-menu-buttonss'>
            <HiOutlineMail className='sider-menu-iconn'/>
            <span className='tooltip-texts'>Mark as unread</span>
          </li>
          <li className='sidebar-menu-buttonss'>
            <BsChatLeftText className='sider-menu-icon'/>
            <span className='tooltip-texts'>Chats</span>
          </li>
          <li className='sidebar-menu-buttonss'>
            <MdScheduleSend className='sider-menu-iconn'/>
            <span className='tooltip-texts'>Scheduled</span>
          </li>
          <li className='sidebar-menu-buttonss'>
            <AiOutlineClockCircle className='sider-menu-iconn'/>
            <span className='tooltip-texts'>Snoozed</span>
          </li>
       */}

   </div>
   <div>
   <label className='mailbox-subject'>{mails.subject}</label></div>
   <div className='mailbox-img-name'>
    <img src={avtar} alt='pro pic' className='avtarpics'/>
      <label className='mailbox-name'>{mails.name}</label></div>
      <div>
        <label className='mailbox-mail'>{mails.mail}</label></div>
    </div>
  )
}

export default MailBox