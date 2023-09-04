import {rerenderEnterTree} from "../../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Smurfiki', LikesCount: 765},
            {id: 3, message: 'Gargamel', LikesCount: 26654},
        ],
        newPostText: ''

    },

    dialogPage: {
        dialogData: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Svetla'},
            {id: 3, name: 'Katrine'},
            {id: 4, name: 'Sokol'},
            {id: 5, name: 'Kate'},
            {id: 6, name: 'Jolie'},
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are y?'},
            {id: 3, message: 'what?'},
        ]

    },
}
export let addPost = (postMessage)=> {
    let newPost= {
        id:5,
        message: postMessage,
        LikesCount : 1
    };
    state.profilePage.postData.push(newPost);
    rerenderEnterTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEnterTree(state);
}
export let addMessage = (messageFriend) =>{
        let newaddmessage ={
            id: 7,
         message: messageFriend,
        };
        state.dialogPage.messageData.push(newaddmessage);
        rerenderEnterTree(state)
}
export default state;