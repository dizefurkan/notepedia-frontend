import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './styles.css';
// import globalStyles from '../../public/main.css';

class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className={styles.footer}>
              <a
                href="https://github.com/dizefurkan"
                className={styles.title}
              >
                &copy; NOTEPEDIA
              </a>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Footer;
