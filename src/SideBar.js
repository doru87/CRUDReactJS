import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TopNavbarContext from "./TopNavbarContext";

export default function SideBar() {
  const [dateMeniu, setDateMeniu] = useState([]);
  const [dateMeniuNav, setdateMeniuNav] = useState([]);

  const { dateMeniuNavigatie } = useContext(TopNavbarContext);
  const { dateMeniuSideBar } = useContext(TopNavbarContext);

  useEffect(() => {
    setDateMeniu(dateMeniuSideBar);
    setdateMeniuNav(dateMeniuNavigatie);
  }, [dateMeniu, dateMeniuNav]);

  const SelectMenu = (id) => {
    setDateMeniu(
      dateMeniu.map((date) => {
        if (date.id === id) {
          return (date.state = "active");
        } else if (date.id !== id) {
          return (date.state = "inactive");
        }
      })
    );
  };

  return (
    <div>
      <div className="sidebar">
        <ul className="mainmenu">
          {dateMeniu.map((date) => {
            return (
              <Link to={date.name} key={date.id}>
                <li className={date.state} onClick={() => SelectMenu(date.id)}>
                  <span className="icon">
                    <i className="fas fa-book"></i>
                  </span>
                  <span className="title">{date.name}</span>
                  <ul className="submenu">
                    <Link to={date.submenu}>
                      <li>
                        <a href="">{date.submenu}</a>
                      </li>
                    </Link>
                  </ul>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
