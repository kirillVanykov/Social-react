let state = {
  profilePage: {
    posts: [
         {id: 1, message: 'Hi, how are you?', likesCount: 12},
         {id: 2, message: 'It\'s my first post', likesCount: 11},
         {id: 3, message: 'Blabla', likesCount: 11},
         {id: 4, message: 'Dada', likesCount: 11}
     ]
  },
  dialogsPage: {
    messages: [
           {id: 1, message: 'Hi', whoWriting: 'me'},
           {id: 2, message: 'How is your it-kamasutra?', whoWriting: 'you'},
           {id: 3, message: 'Yo', whoWriting: 'me'},
           {id: 4, message: 'Yo', whoWriting: 'you'},
           {id: 5, message: 'Yo', whoWriting: 'me'},
           {id: 6, message: 'sfo', whoWriting: 'you'},
           {id: 6, message: 'sfo', whoWriting: 'me'}
       ],
    dialogs: [
             {id: 1, name: 'Dimych'},
             {id: 2, name: 'Andrew'},
             {id: 3, name: 'Sveta'},
             {id: 4, name: 'Sasha'},
             {id: 5, name: 'Viktor'},
             {id: 6, name: 'Valera'},
             {id: 7, name: 'Kirill'},
             {id: 7, name: 'Vika'}
         ]
  }
}


export default state;
