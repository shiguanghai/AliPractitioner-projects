'use strict';

import React from 'react';
import Layout from '../../components/layout/index';
import List from './list';
import './index.scss';


export default class ListPage extends React.Component {
  render() {
    return (
      <Layout>
        <List />
      </Layout>
    );
  }
}
