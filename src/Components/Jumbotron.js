import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';
const Example = props => {
  return (
    <div>
      <Jumbotron className="Jumbotron">
        <h1 className="display-3">Santren Koding</h1>
        <p className="lead">Intensive Coding Bootcamp for Yatim & Dhuafa</p>

        <p className="lead">
          <Button color="success">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
