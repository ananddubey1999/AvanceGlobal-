import React from 'react'
import ContactUs from '../Contacts/Contact-Msg/ContactUs'
import Footer from '../Componants/footer/footer'
import Navbar from '../Componants/Navbar/Navbar';
import Main from '../Contacts/Main/Main';
function ContactsUs() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default ContactsUs
