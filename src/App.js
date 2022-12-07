import "./App.css";
import Navbar from "./component/Navbar";
import Textbar from "./component/Textbar";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Navbar title="BRANDOSE" About="About" />
      <Textbar />
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: `set title here`,
  About: `About text here`,
};
