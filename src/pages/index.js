import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron className="text-center">
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <Container>
      <Row>
        <Col>
          <h1>Hi people</h1>
          <p>
            Welcome to your new Gatsby site with{" "}
            <a href="https://react-bootstrap.github.io/">react-bootstrap</a>.
          </p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
