import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  io = io("https://muebleriaoscanoa.onrender.com",{
    //withCredentials: true,
    autoConnect: true,
    //path: "/socket.io/"
  });

  constructor() { }
}