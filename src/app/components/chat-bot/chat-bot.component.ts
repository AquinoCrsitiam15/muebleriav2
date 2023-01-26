import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'],
  providers: [WebSocketService, ChatService]
})
export class ChatBotComponent implements OnInit {
  displayChat: boolean = false;
  position: string = '';

  usuarioLogeado: number = 123;
  nuevoMensaje: string = '';
  chats: any = [
    /* {
      emisor: "idBot",
      texto: "Como le puedo ayudar?"
    } */
  ]

  constructor(private socket: WebSocketService,
              private chatService: ChatService) { this.onReceive(); }

  ngOnInit(){
    this.usuarioLogeado = 123
  }
  showChatDialog(){
    this.displayChat= true;
  }

  enviarMensaje(){
    if (this.nuevoMensaje.trim() !== '') {
      let mensaje = {
        emisor: this.usuarioLogeado,
        texto: this.nuevoMensaje
      }
      this.chats.push(mensaje);
      this.chatService.sendMessage(mensaje.texto);
    };
    this.nuevoMensaje = '';
  }
  onReceive(){
    this.socket.io.on("response", (mensajeInfo)=>{
      let mensaje = {
        emisor: "idBot",
        texto: mensajeInfo["msg"]
      }
      setTimeout(() => {
        this.chats.push(mensaje);
      }, 200);
    });
  }
}
