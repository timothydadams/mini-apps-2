import React from 'react';
import ReactDom from 'react-dom';

import {Grid, Row, Col} from './styles/Grid.jsx';
import RenderPins from './components/renderPins.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 1],
      ],
      roundScore: 0,
      totalScore: 0,
    };
  }

  render() {
    const { board } = this.state;
    // <DrawPins pins={board} />
    return (
      <Grid>
        <Row>
          <Col size={1}>
            <Row>
              <RenderPins pins={board} />
            </Row>
            <Row>
              Buttons here
            </Row>
          </Col>
          <Col size={3}>
            Scorecard here
          </Col>
        </Row>
      </Grid>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
