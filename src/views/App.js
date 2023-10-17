
import ContactCard from "../components/ContactCard";
import { CallBook } from "../Data/CallBook";
import React, { useEffect, useState } from "react";


const App = () => {
  const [contacts, setContacts] = useState(CallBook);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <div className="container">

      <div className="heading">
          <h2 className="title">Harshvardhan's</h2>
          <h3 className="phoneBook">Phone Book</h3>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            className="inputSearch"
            placeholder="search here"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            
          />
        </div>


        <div className="c">
          {contacts.map((contacts, index) => {
            const { randomClass, name, mobile } = contacts;
            return (
              <ContactCard
                key={index}
                name={name}
                mobile={mobile}
                randomClass={randomClass}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
