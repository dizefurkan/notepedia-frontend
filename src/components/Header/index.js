import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import styles from './styles.css';
import globalStyles from '../../public/main.css';

class Header extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className={styles.header}>
              <ul className={`${globalStyles.clearfix} ${styles.list}`}>
                <Links />
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const navbarItems = [
  {
    path: '/home',
    title: 'Home',
  },
  {
    path: '/login',
    title: 'Login',
  },
  {
    path: '/register',
    title: 'Register',
  },
  {
    path: '/friends',
    title: 'Friends',
  },
  {
    path: '/mynotes',
    title: 'My Notes',
  },
];

const Links = () =>
  navbarItems.map((item, index) =>
    <li key={index} className={styles.listItem}>
      <NavLink
        to={item.path}
        activeClassName={styles.active}>{item.title}</NavLink>
    </li>);

export default Header;
