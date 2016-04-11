import React from 'react';

class PokeHeader extends React.Component {
  render() {
    let social = {
      twitter: this.props.twitter,
      facebook: this.props.facebook,
      github: this.props.github
    };
    return (
      <nav className="PokeHeader">
        <span>{this.props.title}</span>
        <div className="contact">
          <span>
            <a href={`https://www.facebook.com/${social.facebook}`} target="_blank">
              <i className="fa fa-facebook-official facebook"></i>
            </a>
          </span>
          <span>
            <a href={`https://www.twitter.com/${social.twitter}`} target="_blank">
              <i className="fa fa-twitter-square twitter"></i>
            </a>
          </span>
          <span>
            <a href={`https://www.github.com/${social.github}`} target="_blank">
              <i className="fa fa-github github"></i>
            </a>
          </span>
        </div>
      </nav>
    )
  }
}

export default PokeHeader;
