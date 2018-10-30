import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './style.module.css';

import Dashboard from './../dashboard';
import About from './../about';

const Main = () => (
  <main className={styles.wrapper}>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;