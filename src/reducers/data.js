import {RECEIVE_API_DATA, DELETE_INBOX_MAIL} from "../actions/inbox.js"


export default (state={},action) => {
  switch(action.type){
    case RECEIVE_API_DATA:
    	return {
        data: action.payload
      };
    
    case DELETE_INBOX_MAIL:
      return {
        data: state.data.filter(mail => mail.id != action.payload)
      };
    
    default:
      return state;
  }
};