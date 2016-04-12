import React                    from 'react';
import ReactCssTransitionsGroup from 'react-addons-css-transition-group';
import PokeMessage              from '../PokeMessage';

class PokeChat extends React.Component {
  render() {
    return (
      <section className="PokeChat">
        <header>Chat</header>
        {
          this.props.messages.map((message,i) => {
            return <PokeMessage key={i} message={message} />
          })
        }
      </section>
    )
  }
}

PokeChat.defaultProps = { messages: [] };

export default PokeChat;
