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
      this.chatService.sendMessage(this.nuevoMensaje);

      document.querySelector(".conversation__body")?.insertAdjacentHTML('beforeend',
      `<div class="d-flex flex-row-reverse px-2 my-2">
      <div class="position-relative py-0 px-2 text-bg-dark bg-warning border border-dark rounded-3 text-end">${this.nuevoMensaje}</div>
      </div>`
      );
    };
    this.nuevoMensaje = '';
    document.getElementById("area-messages")?.scrollTop;
  }
  onReceive(){
    this.socket.io.on("response", function(data) {
      let mensajeText = data["msg"];
      document.querySelector('.conversation__body')?.
      insertAdjacentHTML('beforeend',
      `<div class="d-flex flex-row px-2 my-2">
      <div class="position-relative py-0 px-2 text-bg-success bg-success border border-dark rounded-3 text-light">${mensajeText}</div>
      </div>`
      );
      document.getElementById("area-messages")?.scrollTop;
    }
    )
  }



}

