import React from 'react';

class PokeChat extends React.Component {
  constructor(props){
    super(props);
    this.state = { messages: [] };
  }
  render() {
    let avatar = 'http://veekun.com/dex/media/pokemon/main-sprites/x-y/1.png';
    return (
      <section className="PokeChat">
        {
          this.state.messages.map((message, i) => {
            return <PokeMessage message={message} />
          })
        }
        <header>Chat</header>
        <article className="message">
          <img src={avatar} className="avatar"></img>
          <p>bulbasaur, bulbasaur, bulbasaur !!</p>
        </article>
        <article className="message">
          <img src={avatar} className="avatar"></img>
          <p>bulbasaur, bulbasaur, bulbasaur !!</p>
        </article>
        <article className="message">
          <img src={avatar} className="avatar"></img>
          <p>bulbasaur, bulbasaur, bulbasaur !!</p>
        </article>
        <article className="message">
          <img src={avatar} className="avatar"></img>
          <p>bulbasaur, bulbasaur, bulbasaur !!</p>
        </article>
        <article className="message">
          <img src={avatar} className="avatar"></img>
          <p>bulbasaur, bulbasaur, bulbasaur !!</p>
        </article>
      </section>
    )
  }
}

export default PokeChat;
