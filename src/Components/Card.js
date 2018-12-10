import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardDeck, Row, Col
  } from 'reactstrap';
import './Card.css'

class Cards extends Component {
  render() {
    return (
      <div className="Rata">
      <CardDeck>
        <Card>
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" />
        <CardBody>
           <h1>Kajian Koding #3</h1>
          <p class="card-text">ReactJS dan Firebase Auth/Hosting</p>
          <Row>
            <Col xs="6">by Santren Koding</Col>
            <Col className="kanan" xs="6">Kuota Terbatas</Col>
        </Row>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" />
        <CardBody>
          <h1>Kajian Koding #3</h1>
          <p class="card-text">ReactJS dan Firebase Auth/Hosting</p> 
          <Row>
            <Col xs="6">by Santren Koding</Col>
            <Col className="kanan" xs="6">Kuota Terbatas</Col>
        </Row>
        </CardBody>
      </Card>

       <Card>
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" />
        <CardBody>
           <h1>Kajian Koding #%#3</h1>
          <p class="card-text">ReactJS dan Firebase Auth/Hosting</p> 
          <Row>
            <Col xs="6">by Santren Koding</Col>
            <Col className="kanan" xs="6">Kuota Terbatas</Col>
        </Row>
        </CardBody>
      </Card>
      </CardDeck>

      </div>
    )
  }
}

export default Cards
