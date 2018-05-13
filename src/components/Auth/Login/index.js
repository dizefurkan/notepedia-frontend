import React from 'react';
import cx from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import glStyles from '../../../public/main.css';

class Login extends React.Component {
  state = {
    error: '',
    username: '',
    password: '',
  };

  submitHandler(e) {
    e.preventDefault();
    const res = this.formReqControl();
    // eslint-disable-next-line
    res.then(result => console.log(result));
  }

  formReqControl = () => {
    return new Promise((resolve, reject) => {
      const {
        username,
        password,
      } = this.state;
      if (username.length > 0 && password.length > 0) {
        resolve({
          message: 'guzelll',
        });
      } else {
        resolve({
          error: 'Hataaa',
        });
      }
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    const submitEnabled = username.length > 0 && password.length > 0;
    const { active } = styles;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className={styles.login}>
              <div className={styles.box}>
                <div>{this.state.error}</div>
                <form action=""
                  className={styles.form}
                  onSubmit={e => this.submitHandler(e)}
                >
                  <div className={glStyles.relative}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="username"
                      name="username"
                      onChange={e => this.onChange(e)}
                    />
                    <i className={`${styles.inputIcon} fas fa-user`}></i>
                  </div>
                  <div className={glStyles.relative}>
                    <input
                      type="password"
                      className={styles.input}
                      placeholder="password"
                      name="password"
                      onChange={e => this.onChange(e)}
                    />
                    <i className={`${styles.inputIcon} fas fa-key`}></i>
                  </div>
                  <button
                    disabled={!submitEnabled}
                    className={`
                      ${styles.button}
                      ${submitEnabled ? active : ''}
                    `}
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </form>
                <div className={styles.textBox}>
                  <p className={styles.text}>
                    forgot your password?
                    <Link to='/register' className={styles.textLink}>
                      click here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
