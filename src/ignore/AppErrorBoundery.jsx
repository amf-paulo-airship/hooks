import React from "react";
import PropTypes from "prop-types";

class AppErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: "red" }}>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
