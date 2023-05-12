import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../App.css";
import Loading from "../ignore/Loading";
import Error from "../ignore/Error";
import Template from "../ignore/Template";

export const Card = ({ type }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [ds, setDs] = useState(undefined);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    setDs(undefined);

    fetch(`http://www.boredapi.com/api/activity?type=${type}`)
      .then((response) => response.json())
      .then((data) => setDs(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [type]);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return <Template dataSource={ds} />;
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Card;
