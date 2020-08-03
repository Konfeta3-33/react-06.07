import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Messages, FormMessage } from "../../components";
import { getChatsSuccess } from "../../actions/chats";

class Chats extends PureComponent {
  state = {
    chats: {
      1: {
        id: 1,
        messageList: [1, 2],
        title: "Чат 1",
      },
      2: {
        id: 2,
        messageList: [3, 4],
        title: "Чат 2",
      },
      3: {
        id: 3,
        messageList: [1, 4],
        title: "Чат 2",
      },
    },
    messages: {
      1: { author: "user", text: "привет 1", id: 1 },
      2: { author: "user", text: "как дела? 2", id: 2 },
      3: { author: "user", text: "как дела? 3", id: 3 },
      4: { author: "user", text: "как дела? 4", id: 4 },
    },
  };

  timer = null;

  //   componentDidUpdate(prevProps, PrevState) {
  // const { messages } = this.state;
  // clearTimeout(this.timer);
  // if (messages[messages.length - 1].author !== "bot") {
  //   this.timer = setTimeout(() => {
  //     this.setState(({ messages: currentMessages }) => ({
  //       messages: [
  //         ...currentMessages,
  //         {
  //           author: "bot",
  //           text: "Привет от Бота",
  //           id: shortid.generate(),
  //         },
  //       ],
  //     }));
  //   }, 1000);
  // }
  //   }

  get messages() {
    const {
      match: { params },
    } = this.props;
    const { chats, messages } = this.state;

    return chats[params.chatId]?.messageList.map(
      messageId => messages[messageId],
    );
  }

  addMessage = ({ author, text, id }) => {
    const {
      match: { params },
    } = this.props;
    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [params.chatId]: {
          ...chats[params.chatId],
          messageList: [...chats[params.chatId].messageList, id],
        },
      },
      messages: { ...messages, [id]: { id, author, text } },
    }));
  };

  render() {
    return (
      <>
        <Messages messages={this.messages} />
        <FormMessage addMessage={this.addMessage} />
      </>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      chatId: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = store => ({});

const mapDispatchToProps = {
  getChatsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
