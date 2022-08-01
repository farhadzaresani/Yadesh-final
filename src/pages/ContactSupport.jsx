import React from "react";
import CallSupportFormComp from "../components/contactsupport/Form";
import CallSupportInfoComp from "../components/contactsupport/Info";

const ContactSupportPage = () => {
  return (
    <div className='flex gap-16 px-20'>
      <CallSupportInfoComp />
      <CallSupportFormComp />
    </div>
  );
};

export default ContactSupportPage;
