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
           {id: 3, message: 'Yo', whoWriting: 'you'},
           {id: 4, message: 'Yo', whoWriting: 'you'},
           {id: 5, message: 'Yo', whoWriting: 'me'},
           {id: 6, message: 'sfo', whoWriting: 'you'},
           {id: 6, message: 'sfo', whoWriting: 'me'},
           {id: 7, message: 'Привет', whoWriting: 'me'},
           {id: 8, message: 'как дела', whoWriting: 'me'},
           {id: 9, message: 'Норм', whoWriting: 'you'}
       ],
    dialogs: [
             {id: 1, name: 'Dimych'},
             {id: 2, name: 'Andrew'},
             {id: 3, name: 'Sveta'},
             {id: 4, name: 'Sasha'},
             {id: 5, name: 'Viktor'},
             {id: 6, name: 'Valera'},
             {id: 7, name: 'Kirill'},
             {id: 8, name: 'Vika'}
         ]
  },
  siteBar: {
    friends:[
      {id: 1, name: 'Vika', foto: 'https://i.pinimg.com/736x/2a/a2/5d/2aa25d48af14dbd551111b98f6b80569.jpg'},
      {id: 2, name: 'Vlad', foto: 'https://avatars.mds.yandex.net/get-pdb/226447/28007d4c-dbc8-4fdd-b61c-1c544a57ee58/s360'},
      {id: 3, name: 'Anya', foto: 'http://www.rewizor.ru/files/101817mzwn.jpg'},
      {id: 4, name: 'Kirill', foto: 'https://gdb.rferl.org/DEDCAD1D-C780-4407-A7AE-A25F24D6B614_w1023_s.jpg'},
      {id: 5, name: 'Dima', foto: 'https://static.expres.online/storage/2018/11/13/image/desktop_Dc9x_budinok.jpeg'},
      {id: 6, name: 'Rusya', foto: 'https://svidok.online/wp-content/uploads/2018/08/ea3_vlad_jama_1.jpg'}
    ]
  }
}


export default state;
