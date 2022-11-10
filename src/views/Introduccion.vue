<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La calidad es uno de los conceptos más trabajados en el mundo laboral, personal y en todos los ámbitos del ser humano. El siguiente video presenta un bosquejo general de lo que se estudiará en el presente componente formativo.
    
    figure.mb-0
      .video      
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/slYO3iq8FeM" title="Calidad del servicio de la guianza" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
