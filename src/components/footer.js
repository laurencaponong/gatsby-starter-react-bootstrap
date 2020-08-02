import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => (
  <Container className="text-center mt-5 mb-5">
    <Row>
      <Col>
        <footer>
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <br />
          Bootstrapped by <a href="https://www.laurencaponong.com">Lauren Caponong</a>
        </footer>
      </Col>
    </Row>
  </Container>
)

export default Footer
