import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isDataFt, setDataft] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClicked, setBtnClicked] = useState(false);

  const loadUserData = async () => {
    setBtnClicked(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const reslt = await response.json();
    setUsers(reslt.data);
    setInterval(() => {
      setDataft(true);
    }, 2500);
  };
  return (
    <>
      <navbar className="nav-bar">
        <ul className="nav-list">
          <li>
            <a className="title" href="index.html">
              LetsGrow More
            </a>
          </li>
          <button onClick={loadUserData} class="btn">
            Click Here
          </button>
        </ul>
      </navbar>
      {isBtnClicked ? (
        isDataFt ? (
          <div className="box">
            {users.map(({ id, first_name, last_name, avatar, email }) => {
              return (
                <>
                  <div className="card" key={id}>
                    <img src={avatar} alt="avatar" className="avatar" />
                    <div className="card-des">
                      <h2>
                        {" "}
                        {first_name} {last_name}{" "}
                      </h2>
                      <p> {email} </p>
                      <a className="btn-contact" href={"mailto:" + email}></a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="loader"></div>
        )
      ) : (
        <section className="base">
          <div className="cot">
          </div>
        </section>
      )}
    </>
  );
};

export default App;
