import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from "react-dom";
import Message from "./Message";
import Counter from "./Counter";
import Messages from "./Messages";
import FormMessage from "./FormMessage";

class HelloMessage extends Component {
  state = {
    messages: [
      { author: "user", text: "привет", uuidv4 },
      { author: "user", text: "как дела",uuidv4 },
    ],
    isVisible: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== "bot") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { author: "bot", text: "привет от бота",uuidv4 }],
        }));
      }, 1000);
    }
  }

  addMessage = ({ author, text }) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { author, text }],
     
    }));
  };

  render() {
    const { messages, isVisible } = this.state;
    const { name } = this.props;

    return (
      <div>
        <Message name="GeekBrains" />
        <p>Hello {name}!!!</p>
        <Messages messages={messages} />
        <FormMessage addMessage={this.addMessage} />
        <div>
          <button
            onClick={() => {
              this.setState({ isVisible: !isVisible });
            }}
          >
            <span>{isVisible ? "Hide" : "Show"}</span>
          </button>
        </div>
        {isVisible && <Counter />}
      </div>
    );
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

const element = document.getElementById("root");

ReactDOM.render(<HelloMessage name="Alex" />, element);
