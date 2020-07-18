const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [{
      id: 1,
      message: "Hi"
    },
    {
      id: 2,
      message: "Hello"
    },
    {
      id: 3,
      message: "How are you?"
    },
    {
      id: 4,
      message: "What's up?"
    },
    {
      id: 5,
      message: "I'm ok!"
    },
  ],
  dialogs: [{
      id: 1,
      name: "Eva"
    },
    {
      id: 2,
      name: "Mike"
    },
    {
      id: 3,
      name: "Gordon"
    },
    {
      id: 4,
      name: "Luk"
    },
    {
      id: 5,
      name: "Julia"
    },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({
        id: 6,
        message: body
      });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;