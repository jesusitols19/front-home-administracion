import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

interface CardComoSolicitar{
  idComoSolicitar:number;
  titulo:string;
  img:string;
  texto:string
}
interface CardComoPostular{
  idComoPostular:number;
  titulo:string;
  img:string;
  texto:string
}
declare const bootstrap: any;


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private scroller: ViewportScroller) {}

  scrollTo(seccion: string) {
    this.scroller.scrollToAnchor(seccion);
  }


  selectedCard: CardComoSolicitar | CardComoPostular | null = null;

  abrirModal(card: CardComoSolicitar | CardComoPostular) {
    this.selectedCard = card;
  }

  cerrarModal() {
    this.selectedCard = null;
  }
  cardComoSolicitar: CardComoSolicitar[]=[
    {
      idComoSolicitar: 1,
      titulo:'Inicar Sesion',
      img: '/Images/Login-Cliente.webp',
      texto: 'Debes iniciar sesión con tu cuenta de SODIMAC registrada o cuenta goolge.'
    },
    {
      idComoSolicitar: 2,
      titulo:'Solicitar Servicio',
      img: '/Images/Servicios.webp',
      texto: 'Busca a través de los servicios que deseas solicitar.'
    },
    {
      idComoSolicitar: 3,
      titulo:'Detalla tu solicitud',
      img: '/Images/SolicitarServicio.webp',
      texto: 'Ingresa los datos de tu solicitud, describe la necesidad y fotos.'
    },
    {
      idComoSolicitar: 4,
      titulo:'Selecionar especialista',
      img: '/Images/Todas-las-Solicitudes.webp',
      texto: 'Apareceran los especialistas que aceptaron el servicio, se le notificara con sus datos y deberá aceptar un especialista.'
    },
    {
      idComoSolicitar: 5,
      titulo:'Califica al especialista',
      img: '/Images/Mis-Solicitudes-Calificar.webp',
      texto: 'Despues de la realizacón de tu servicio calificaras al especialista.'
    },
    {
      idComoSolicitar: 6,
      titulo:'Chatbot',
      img: '/Images/CHAT-BOT.webp',
      texto: 'Se Implemento un chatbot para la ayuda de algunos servicios de SODIMAC.'
    }
  ]
  
  cardComoPostular: CardComoPostular[]=[
    {
      idComoPostular:1,
      titulo:'Registra tu cuenta',
      img: '/Images/Registrar-Postulante.webp',
      texto:'Registrate con nosotros como postulante, ingresa tus datos personales, envia tu cv y acepta los terminos y condiciones. El admin evaluará tus datos y te notificara los resultados.'
    },
    {
      idComoPostular:2,
      titulo:'Accede como especialista',
      img: '/Images/Login-Especialista.webp',
      texto:'Una vez confirmada tu admisión, podrás usar tu cuenta como postulante para acceder como especialista. Elige los servicios que deseas realizar.'
    },
    {
      idComoPostular:3,
      titulo:'Accede como especialista',
      img: '/Images/Vista-Solicitud-Especialista.webp',
      texto:'Revisar la solicitud del cliente y puedes modificar el precio antes de aceptar y programación de tu servicio.'
    },
    {
      idComoPostular:4,
      titulo:'Revisa el estado de tu servicio programado',
      img: '/Images/Historial-de-especialistas.webp',
      texto:'Revisar la solicitud del cliente y puedes modificar el precio antes de aceptar y programación de tu servicio.'
    }
  ]

}
