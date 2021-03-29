import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const App = () => {
  const titulo = 'Equipos de videojuegos Dota 2'
 

  return (
    <div>
      <center><h1>{titulo}</h1></center>
    <center><img src="https://e.rpp-noticias.io/xlarge/2019/08/30/011701_834543.jpg"/>
    <p> equipo peruano llamado Infamous pero actualmente llamado betscots son el mejor equipo de latinoamerica <br></br>
      en el juego Dota 2 llegando en el año 2019 octavo lugar en el internacional en china </p></center>
     <center><a href="" class="boton">"click" </a></center> <br></br>
      <center><img src ="https://f.rpp-noticias.io/2019/03/18/174117_766365.jpg"/></center>
      <center><p> el equipo secret compuesto de jugadores de Europa que participanron en varios internacional desde el<br></br>
         año 2015 quedando siempre entre los 10 mejores puestos quedando en el año 2019 como segundo lugar </p></center>
         <center><a href="" class="boton">"click" </a></center> <br></br>
         <center><img src ="https://i.ytimg.com/vi/VYgY9dC0ctE/maxresdefault.jpg"/></center>
        <center><p>el equipo liquid es uno de los equipso que gane un internacional en el año 2017 y quedando segundos <br></br>
          en el año 2018 su mejor jugador y mas reconocido es miracle </p></center>
          <center><a href="" class="boton">"click" </a></center> <br></br>
        <center> <img src="https://media.tenor.com/images/716ff161f0bad205dbac2d9cd2bb8250/tenor.gif"></img></center>
        
        <center> <iframe width="560" height="315" src="https://www.youtube.com/embed/ceQ2XFS1tUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
