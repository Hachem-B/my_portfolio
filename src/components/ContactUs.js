import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Gmail: bahlousshachem@gmail.com</h4>
                <h4>LinkedIn : linkedin.com/in/hachem-bahlous/</h4>
                <h4>Github: github.com/Hachem-B</h4>
                 
              </div>
            </aside>
          </div>
        </section>
        );
  }
}