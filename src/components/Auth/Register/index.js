import React from 'react';
// eslint-disable-next-line
import cx from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import glStyles from '../../../public/main.css';

class Register extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            Register
        </Col>
        </Row>
      </Grid>
    );
  }
}

export default Register;
