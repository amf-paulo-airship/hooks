import PropTypes from "prop-types";
import "../App.css";

const Template = ({ dataSource }) => (
  <div className="card">
    <h2>{dataSource.activity}</h2>
    <h4>Participants: {dataSource.participants}</h4>
    <h4>Price: {dataSource.price}</h4>
    <h6>Accessibility: {dataSource.accessibility * 100}% </h6>
  </div>
);

export default Template;

Template.propTypes = {
  dataSource: PropTypes.any,
};
