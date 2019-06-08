import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

  componentDidMount() {
    this.props.fetchRecentPosts();
  }
  render() {
    return (
        <div className="recent-posts">
            <div className="recent-posts_wrapper">
                <div className="recent-posts_heading"></div>
                <ul className="recent-posts_posts">
                    <li>recent posts 1</li>
                    <li>recent posts 2</li>
                    <li>recent posts 3</li>
                    <li>recent posts 4</li>
                    <li>recent posts 5</li>
                </ul>
            </div>
           
        </div>
    )
  }
}

export default connect(null, actions)(RecentPosts);