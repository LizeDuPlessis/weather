import React from "react";
import PropTypes from "prop-types";
import logo from "./assets/logo.jpg";

function Header({ title }) {
  return (
    <>
      <header>
        <img src={logo} alt="weather logo" />
        {title}
        <img src={logo} alt="weather logo" />
      </header>
    </>
  );
}

export default Header;

Header.defaultProps = {
  title: "Weather Forecast",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
