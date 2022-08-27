import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set,push, onValue,onChildAdded} from 'firebase/database'

@Component({
  selector: 'app-chat-test',
  templateUrl: './chat-test.component.html',
  styleUrls: ['./chat-test.component.css']
})
export class ChatTestComponent{

  title = 'chat_test';
  all_chats:any = [];
   firebaseConfig = {
    apiKey: "AIzaSyCiJt5PNdQVth5K0Mu02jClWE3wQZky2iA",
    authDomain: "chat-test-76af5.firebaseapp.com",
    projectId: "chat-test-76af5",
    storageBucket: "chat-test-76af5.appspot.com",
    messagingSenderId: "285509761505",
    appId: "1:285509761505:web:3ea6617c3bc005bbde3aa0",
    dataBaseURL:"https://chat-test-76af5-default-rtdb.firebaseio.com/"
  }

  constructor(private route:ActivatedRoute)
  {

  }


  username:any= ""
  ngOnInit()
  {
    this.route.queryParamMap.subscribe(params => this.username = params.get("user"));

    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
      })
    });
  }

  x:any = [];

  app = initializeApp(this.firebaseConfig)

  database = getDatabase(this.app);


  showFiller = false;


  add_to_chat(chat:string)
  {

    this.all_chats.push(chat);
    let postref = ref(this.database,"Chats/");
    let newpostref = push(postref);
    set(
      newpostref,{
        "username":this.username,
        "chat":chat
      }
    )


    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
      })
    });
  }



  ngOnChanges()
  {
    const starCountRef = ref(this.database, '/Chats');
    onValue(starCountRef, (snapshot) => {
      this.x=[]
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val()
        this.x.push(data)
      })
    });
  }
}
