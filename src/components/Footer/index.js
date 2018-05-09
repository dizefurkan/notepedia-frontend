import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.css';
// import globalStyles from '../../public/main.css';

class Footer extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Footer;
