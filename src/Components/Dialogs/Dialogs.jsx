import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink className={s.nav} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Eva" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Gordon" },
    { id: 4, name: "Luk" },
    { id: 5, name: "Julia" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "What's up?" },
    { id: 5, message: "I'm ok!" },
  ];
  let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
      </div>
    </div>
  );
};
export default Dialogs;
