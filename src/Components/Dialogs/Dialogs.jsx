import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import AddNewMessageForm from "./Message/AddMessagesForm";

import { Textarea } from "../Common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "./../../Utils/Validators/vaidators";

// const maxLength50 = maxLengthCreator(50);

// const AddMessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field
//           component={Textarea}
//           validate={[required, maxLength50]}
//           placeholder="Enter your message"
//           name="newMessageBody"
//         />
//       </div>
//       <div>
//         <button>Send</button>
//       </div>
//     </form>
//   );
// };
// let AddNewMessageFormRedux = reduxForm({ form: "dialog-add-message-form" })(
//   AddMessageForm
// );

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddNewMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
