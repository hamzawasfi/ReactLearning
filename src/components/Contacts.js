import React from "react";
import Contact from "./Contact";

function Contacts() {
  return (
    <React.Fragment>
      <Contact
        contact={{
          name: "john smith",
          imgUrl: "https://placekitten.com/300/200",
          phone: "(02)01014119485",
          email: "johnsmith@email.com",
        }}
      />
      <Contact
        contact={{
          name: "hamza wasfi",
          imgUrl: "https://placekitten.com/200/200",
          phone: "(02)01014120977",
          email: "hamzawasfi@email.com",
        }}
      />
      <Contact
        contact={{
          name: "reim amir",
          imgUrl: "https://placekitten.com/250/200",
          phone: "(02)01054119485",
          email: "reim amir@email.com",
        }}
      />
    </React.Fragment>
  );
}

export default Contacts;
