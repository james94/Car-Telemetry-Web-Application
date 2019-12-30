import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href="https://www.cloudera.com/">Cloudera</a>
              </li>
              <li>
                <a href="https://www.cloudera.com/about.html">About Us</a>
              </li>
              <li>
                <a href="https://blog.cloudera.com">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()} Cloudera. Inc. All rights 
            reserved. Coded by{" "}
            <a
              href="https://www.linkedin.com/in/jamesmedel"
              target="_blank"
              rel="noopener noreferrer"
            >
              James Medel
            </a>.
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
