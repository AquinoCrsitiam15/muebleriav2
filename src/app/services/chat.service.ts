import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: WebSocketService) { }

  sendMessage(mensaje: any){
    this.socket.io.emit("ask", {
      "msg": mensaje
    });
  }
}
