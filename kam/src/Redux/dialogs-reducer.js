const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE= 'SEND-MESSAGE';


let initialState ={   dialogs: [ {    id:1,    name: 'Dima' },
{    id:2,    name: 'Bred' },
{    id:3,    name: 'Lola' },
{    id:4,    name: 'Mary' },
{    id:5,    name: 'Meth' },
{    id:6,    name: 'Liza' }],
messages:[ {id:1, message:'wwww'},
{id:2, message:'Hi'},
{id:3, message:'How are you?'},
{id:4, message:'Yo'}],

newMessageBody: ""

};
 const dialogsReduscer = (state = initialState, action) =>{


    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:

        state.newMessageBody=action.body;
        return state;

case SEND_MESSAGE:
        let body= state.newMessageBody;
        state.newMessageBody='';
        state.messages.push(  {id:7, message: body});
        return state;

         default:
                return state;
    }

    }

export const sendMessageCreator=()=>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator =(body)=>
({type: UPDATE_NEW_MESSAGE_BODY, body: body

})

export default dialogsReduscer;