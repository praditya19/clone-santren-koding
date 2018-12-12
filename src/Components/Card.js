import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardDeck, Row, Col } from 'reactstrap';
import './Card.css';

class Cards extends Component {
  render() {
    return (
      <div className="Rata">
        <CardDeck>
          <Card style={{ width: 300, height: 550 }}>
            <CardImg top width="100%" src={this.props.gambar} />
            <CardBody>
              <h1>{this.props.title}</h1>
              <p class="card-text">{this.props.text}</p>
              <Row>
                <Col xs="6">by Santren Koding</Col>
                <Col className="kanan" xs="6">
                  Kuota Terbatas
                </Col>
              </Row>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Cards;
