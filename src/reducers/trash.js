import {
    READ_TRASH_MAIL,
    STORE_TRASH_MAIL,
    RESTORE_TRASH_MAIL
  } from "../actions/delete.js";
  

  let initialState = {};
  initialState.id = 3001;
  initialState.data = [
    {
      id: 3000,
      from: "user@tcs.com",
      to: "ievolve@tcs.com",
      subject: "Trash mail",
      folder: "sent",
      folderId: "2",
      time: "2018-01-23T18:25",
      body: "you can restore this" 
    }
  ];
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case READ_TRASH_MAIL:
        return state;
      case STORE_TRASH_MAIL:
        if (action.payload.folder == "inbox") {
          var found = false;
          for (var i = 0; i < state.data.length; i++) {
            if (
              state.data[i].folderId == action.payload.folderId &&
              state.data[i].folder == "inbox"
            ) {
              found = true;
              console.log(state.data[i].folderId);
              break;
            }
          }
          if (!found) {
            state.data.push(action.payload);
          }
          return state
        } else {          
          return state;
        }
      case RESTORE_TRASH_MAIL:
        return state;
      default:
        return state;
    }
  };