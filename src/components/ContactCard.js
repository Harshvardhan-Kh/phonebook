import React from "react";

const ContactCard = ({ randomClass, name, mobile }) => {
  return (
    <>
      <div className={randomClass}>
        <p>{name} :-</p>
        <p>{mobile}</p>
      </div>
    </>
  );
};

export default ContactCard;
