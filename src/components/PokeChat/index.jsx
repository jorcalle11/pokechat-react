import React                    from 'react';
import ReactCssTransitionsGroup from 'react-addons-css-transition-group';
import PokeMessage              from '../PokeMessage';

class PokeChat extends React.Component {
  render() {
    return (
      <section className="PokeChat">
        <header>Chat</header>
        <ReactCssTransitionsGroup transitionName="animation" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {
            this.props.messages.map((message, i) => {
              return <PokeMessage key={i} message={message} />
            })
          }
        </ReactCssTransitionsGroup>
      </section>
    )
  }
}

PokeChat.defaultProps = { messages: [] };

export default PokeChat;
