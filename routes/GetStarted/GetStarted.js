/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 import React from 'react';
 import { connect } from 'react-redux'
 import Layout from '../../components/Layout';
 import s from './GetStarted.css';
 import { title, html } from './GetStarted.md';
 @connect((store) => {
  return {
    user:store.user
  };
})
 class AboutPage extends React.Component {

  componentDidMount() {
    console.log(this.props.user);
    document.title = this.props.user.name;    
    console.log(this);
    setTimeout(()=>{
       this.props.dispatch({type:"CHANGE_NAME", payload:"Peterinos22"});
     },2000);
  }

  render() {

    return (
      <Layout className={s.content}>
      <h1>{title}</h1>
      {this.props.user.name}
      </Layout>
      );
  }

}

export default AboutPage;
