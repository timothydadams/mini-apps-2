import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../styles/Grid.jsx';
import { Pin, Empty } from '../styles/Pins.jsx';

const PinGrid = styled(Grid)`
  heigth: 200;
  width: 200;
`;

const RenderPins = (props) => {
  return (
    <PinGrid>
      {props.pins.map((row,index) => (
        <Row>
          {row.map((pin, j) => (
            <Col key={j} size={1}>
              {pin ? <Pin /> : <Empty /> }
            </Col>
          ))}
        </Row>
      ))}
    </PinGrid>
  )
}

export default RenderPins;