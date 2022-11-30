<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Toma de decisiones

    .fondo1.py-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.col-8
          img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img01.png")
        .col-lg-6.col-12
          p.mb-4 Cada día el ser humano se ve enfrentado a tomar distintas decisiones, este proceso está definido por la incertidumbre de tener éxito o fracasar a consecuencia de la opción escogida, por más de que se analice la situación y se busque toda la información posible, no se tiene certeza de cuál será el resultado hasta que se tome una decisión.
          p.mb-4 En una organización es necesario el trabajo en equipo para la toma de decisiones ya que se puede contar con el punto de vista de otros para llegar a la mejor opción para cumplir unos objetivos comunes. <b style="color:#EB6F2D">Una decisión es la elección de la alternativa más adecuada entre varias posibilidades con el fin de alcanzar un estado deseado, considerando la limitación de recursos</b>.
          .cajon.color-primario.p-4.mb-0
            p.mb-0 Tomar decisiones aplicadas al campo de la profesión, necesita de referentes o bases, las cuales están dadas por los procesos y procedimientos productivos, toda empresa, área y función necesita de un orden, y está mediada por un cuerpo teórico – científico que orienta y fundamenta las acciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-8
        p.mb-4 La toma de decisiones desde la gestión es considerada en el siglo XXI una habilidad de pensamiento superior que va acompañada de otras como:
        ul.lista-ul--color.mb-lg-0.mb-3
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Plantear y resolver problemas.
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Trabajo en equipo.
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Ética profesional.
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Gestión del cambio.
      .col-lg-5.col-8
        img.mb-0(src="@/assets/curso/tema3/img02.png")

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.d-none.d-lg-block
          img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img03.png")
        .col-lg-8.col-12
          p.mb-4 Existen diferentes modelos para la toma de decisiones en las organizaciones, algunos definen un proceso racional de decisiones organizacionales, otros analizan como variables de decisión el entorno y su relación con la organización y otros centran su análisis en el individuo tomador de la decisión, su estilo y su responsabilidad en una decisión específica.
          p.mb-4 Al final, de los diferentes modelos existentes se debe considerar cuál es el mejor según las necesidades de la empresa, el proceso o profesionales, con el fin de hacer los ajustes necesarios para mejorar la calidad del servicio prestado.
          p.mb-4 Teniendo en cuenta que tomar decisiones está relacionado con el pensamiento sistémico, referentes cuantitativos y de observación, y que la selección es un saber fundamental, se debe hacer un análisis de los factores de decisión, los cuales son:
          ul.lista-ul--color.mb-0
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Emociones y estado de ánimo.   
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Restricciones de tiempo.
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Confianza.
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Calidad.
            li.mb-1
              i.fas.fa-location-arrow
              .p-0 Aceptación.

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-8.col-12
        p.mb-4 La toma de decisiones como proceso que facilita la transformación de la información en acción se desarrolla teniendo en cuenta unas fases del proceso que en general los autores definen así, ver figuras 2 y 3:
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.titulo <b>Figura 2</b> <i>Fases de proceso</i> 
        img.mb-0(src="@/assets/curso/tema3/img04.svg")

    p.mb-5 Igualmente, se plantea que, siendo la habilidad tan compleja, se necesita de una estructura metódica en el caso de la organización, la cual se describe a continuación:

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.titulo <b>Figura 3</b> <i>Estructura - Piradime</i> 
        
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img05.svg')              

          .tarjeta.p-3(style="background-color:#f6f6f7" x="42.6%" y="8.6%" numero=" ")
            .titulo-sexto.color-acento-botones(data-aos="fade-left")
              h4.titulo.mb-0 <b>Fase de inteligencia</b>
            p.mb-0 Consiste en identificar y definir el problema sobre el que se tomará una decisión En primer lugar, se realiza un análisis completo interno y externo para buscar el origen fundamental de este problema. Para ello es necesario recopilar todos los datos disponibles acerca de la situación para optimizar la utilidad de la información. En este punto un error común, es dedicar más tiempo   a la búsqueda de la respuesta apropiada que a la formulación de la pregunta correcta. 

          .tarjeta.p-3(style="background-color:#f6f6f7" x="49.7%" y="27.8%" numero=" ")
            .titulo-sexto.color-acento-botones(data-aos="fade-left")
              h4.titulo.mb-0 <b>Fase de diseño, modelización o concepción</b>
            p.mb-0 Se identifican y enumeran todas las alternativas, estrategias o vías de acción posibles. Para ello el guía deberá hacer un análisis exhaustivo del problema, siendo recomendable la opinión de varias personas con distintos puntos de vista, con el fin de que no queden alternativas sin identificar.

          .tarjeta.p-3(style="background-color:#f6f6f7" x="57.1%" y="47%" numero=" ")
            .titulo-sexto.color-acento-botones(data-aos="fade-left")
              h4.titulo.mb-0 <b>Fase de selección</b>
            p.mb-0 Consiste en la elección de una alternativa. Para ello, se evalúan todas las líneas de acción teniendo en cuenta la concordancia de los objetivos de la empresa y los recursos. Además, la alternativa elegida debe ser factible y contribuir a la resolución del problema. Hay que tener en cuenta los posibles problemas futuros y las consecuencias asociadas a cada una de las alternativas. Por supuesto, esta elección se realiza en función de la cantidad y calidad de información disponible a tal efecto.

          .tarjeta.p-3(style="background-color:#f6f6f7" x="64.5%" y="69%" numero=" ")
            .titulo-sexto.color-acento-botones(data-aos="fade-left")
              h4.titulo.mb-0 <b>Fase de implantación</b>
            p.mb-0 Se desarrollan las acciones que conlleva la alternativa elegida para solucionar el problema.

          .tarjeta.p-3(style="background-color:#f6f6f7" x="72%" y="89.5%" numero=" ")
            .titulo-sexto.color-acento-botones(data-aos="fade-left")
              h4.titulo.mb-0 <b>Fase de revisión</b>
            p.mb-0 Sirve para comprobar si la puesta en marcha de la decisión es la más adecuada y si se alcanzan los resultados deseados. Se realiza un control evaluando las acciones pasadas y si algo no es correcto, se reinicia el proceso.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
