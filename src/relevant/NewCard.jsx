import { use } from "react";
import "../App.css";
import PropTypes from "prop-types";
import Template from "../ignore/Template";

export const NewCard = ({ type, shouldIfetch }) => {
  let ds = {
    activity: "None",
    participants: "0",
    price: "0",
    accessibility: "0",
  };

  if (shouldIfetch) {
    ds = use(
      fetch(`http://www.boredapi.com/api/activity?type=${type}`).then(
        (response) => response.json()
      )
    );
  }

  return <Template dataSource={ds} />;
};

export default NewCard;

NewCard.propTypes = {
  type: PropTypes.string.isRequired,
  shouldIfetch: PropTypes.bool.isRequired,
};
