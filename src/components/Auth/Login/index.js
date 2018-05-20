import React from 'react';
import cx from 'classnames';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles.css';
import glStyles from '../../../public/main.css';

class Login extends React.Component {
  state = {
    empty: false,
    error: false,
    message: '',
    username: '',
    password: '',
    redirect: false,
  };

  submitHandler(e) {
    e.preventDefault();
    this.formRequestControl()
      .then((result) => {
        if (result.data.isJoi) {
          this.setState({
            error: true,
            message: result.data.details[0].message,
          });
          return false;
        }
        if (!result.data.success) {
          this.setState({
            error: true,
            message: result.data.message,
          });
        } else {
          this.setState({
            error: false,
            redirect: true,
          });
        }
        return undefined;
      });
  }

  formRequestControl = () => {
    return new Promise((resolve, reject) => {
      const {
        username,
        password,
      } = this.state;
      if (username.length > 0 && password.length > 0) {
        axios({
          method: 'post',
          url: 'http://localhost:3030/login',
          data: {
            username,
            password,
          },
        }).then((result) => {
          resolve(result);
        }).catch(err => reject(err));
      } else {
        resolve({
          error: 'Error',
        });
      }
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { username, password, message } = this.state;
      if (username === '' && password === '') {
        this.setState({
          empty: true,
          error: false,
          message: false,
        });
      } else {
        this.setState({
          empty: false,
        });
      }
    });
  }

  render() {
    const {
      username,
      password,
      error,
      empty,
      message,
      redirect,
    } = this.state;
    const submitEnabled = username.length > 0 && password.length > 0;
    const { active } = styles;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className={styles.login}>
              <div className={styles.box}>
                <div>
                  {
                    error && !empty &&
                    <p className={styles.formErrorHandling}>
                      {message}
                    </p>
                  }
                </div>
                <form action=""
                  className={cx(
                    styles.form,
                    {
                      [styles.formHaveError]: error && !empty,
                    },
                  )}
                  onSubmit={e => this.submitHandler(e)}
                >
                  <div className={cx(
                    styles.line,
                    {
                      [styles.error]: error && !empty,
                    },
                  )}
                  ></div>
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
                    className={cx(
                      styles.button,
                      {
                        [styles.error]: error && !empty,
                        [styles.active]: submitEnabled,
                      },
                    )}
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
