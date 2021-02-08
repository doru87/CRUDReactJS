import React, { useEffect, useState } from "react";
import { TopNavbarContextProvider } from "./TopNavbarContext";

export default function TopNavbar(props) {
  const [dateMeniuNavigatie, setDateMeniuNavigatie] = useState([]);
  const [dateMeniuSideBar, setdateMeniuSideBar] = useState([]);
  const [currentThemeId, setCurrentThemeId] = useState([]);

  useEffect(() => {
    setDateMeniuNavigatie(props.dataTopNavBar);
    setdateMeniuSideBar(props.dataSideBar);

    const top_menu_colorthemes = document.querySelectorAll(".top_menu ul li a");
    const currentThemeCodeColor = JSON.parse(
      localStorage.getItem("currentThemeCodeColor")
    );

    top_menu_colorthemes.forEach((theme) => {
      const currentTheme = JSON.parse(localStorage.getItem("currentThemeId"));
      setCurrentThemeId(currentTheme);

      if (theme.classList.contains("blue") && currentThemeId == "activeblue") {
        theme.setAttribute("id", currentThemeId);
      } else if (
        theme.classList.contains("red") &&
        currentThemeId == "activered"
      ) {
        theme.setAttribute("id", currentThemeId);
      } else if (
        theme.classList.contains("green") &&
        currentThemeId == "activegreen"
      ) {
        theme.setAttribute("id", currentThemeId);
      }

      document.querySelector(
        ".sidebar"
      ).style.backgroundColor = currentThemeCodeColor;
    });
  }, [dateMeniuNavigatie, dateMeniuSideBar, currentThemeId]);

  const SelectColor = (id) => {
    setDateMeniuNavigatie(
      dateMeniuNavigatie.map((data) => {
        if (data.id == id) {
          data.state = `active${data.colorname}`;
          localStorage.setItem("currentThemeId", JSON.stringify(data.state));
          localStorage.setItem(
            "currentThemeCodeColor",
            JSON.stringify(data.color)
          );
          return data.state, localStorage;
        } else {
          return (data.state = "");
        }
      })
    );
  };

  const ChangeTheme = (id) => {
    setDateMeniuNavigatie(
      dateMeniuNavigatie.map((data) => {
        if (data.id == id) {
          document.querySelector(".sidebar").style.backgroundColor = data.color;
          document.querySelector(".mainmenu .active").style.backgroundColor =
            data.color;
          window.location.reload();
        }
      })
    );
  };
  return (
    <>
      <TopNavbarContextProvider
        value={{ dateMeniuNavigatie, dateMeniuSideBar }}
      >
        {props.children}
      </TopNavbarContextProvider>

      <div>
        <div className="top_navbar">
          <div className="top_menu">
            <ul>
              {dateMeniuNavigatie.map((date) => {
                return (
                  <li
                    onClick={() => {
                      ChangeTheme(date.id);
                      SelectColor(date.id);
                    }}
                    key={date.id}
                  >
                    <a href="#" className={date.colorname} id={date.state}></a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
