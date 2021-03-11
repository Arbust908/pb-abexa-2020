<template>
  <main>
    <section class="w-full relative hero">
      <h1 class="col-span-full flex items-center">
        <LogoFull class="w-6/12 mx-auto" />
        <span class="sr-only">Abexa</span>
      </h1>
      <button
        class="absolute bottom-0 right-0 px-4 py-2 m-8 bg-main-500 text-white font-bold rounded hover:text-main-600 hover:bg-main-100 border border-main-500 transition duration-300 ease-out hover:shadow-lg"
      >
        Credenciales
      </button>
    </section>
    <section>
      <SectionTitle class="col-span-full"> Que es Abexa? </SectionTitle>
      <article>
        <p>
          <strong>Abexa</strong> es una empresa de servicios, líder en la
          articulación de negocios medianos en la región latinoamericana,
          orientada a crear, desarrollar, implementar y operar soluciones a la
          medida de sus clientes.
        </p>
      </article>
      <article>
        <p>
          <strong>Abexa</strong> es el nexo entre las pequeñas y medianas
          empresas del Cono Sur y los inversores regionales e internacionales
          que buscan invertir en empresas de esta porción del territorio
          sudamericano.
        </p>
      </article>
      <article>
        <p>
          <strong>Abexa</strong> es una empresa de profesionales
          interdisciplinarios, trabajando en equipo para desarrollar alianzas de
          largo plazo con sus clientes, bajo una única cultura que incluye los
          estándares más altos de ética y profesionalismo.
        </p>
      </article>
      <article>
        <p>
          <strong>Abexa</strong> es una empresa que cree y se identifica con la
          efectividad de costos y por ende, posee una estructura flexible que se
          adapta a la necesidad de cada cliente.
        </p>
      </article>
      <h3>
        Nuestra misión es asistir a nuestros clientes a identificar, desarrollar
        y ejecutar transacciones que maximicen su valor como accionistas.
      </h3>
    </section>
    <section>
      <SectionTitle class="col-span-full"> Nuestros Clientes </SectionTitle>
      <VueSlickCarousel
        class="col-span-full p-8 bg-white mb-12"
        v-bind="settings"
      >
        <ClientLogo
          v-for="client in clients"
          :key="`client-${client}`"
          :client-logo="client"
        />
      </VueSlickCarousel>
    </section>
  </main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  data() {
    return {
      settings: {
        lazyLoad: 'ondemand',
        dots: false,
        arrows: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      clients: [
        '01-Farmacitiy.jpg',
        '1-grupo-Tapegicua.jpg',
        '1-L-Catterton.jpg',
        '2-Celulosa.jpg',
        '3-EtonPark.jpg',
        '4-Fanapel.jpg',
        '6-SwissMedical.jpg',
        '7-Barugel-Azulay.jpg',
        '8-SMG.jpg',
        '9-Selma.jpg',
        '10-Fantoche.jpg',
        '11-Guapaletas.jpg',
        '12-DolceVita.jpg',
        '13-Edelpa.jpg',
        '14-AJC.jpg',
        '15-Bronzovich.jpg',
        '16-CMP.jpg',
        '17-FarmaciasDC.jpg',
        '18-Encata-1.jpg',
        '19-PreVer.jpg',
        '20-Winterbotham.jpg',
        '21-Chobet.jpg',
        '22-Parolaccia.jpg',
        '23-Bistecca.jpg',
        '24-LeGrandMenu.jpg',
      ],
    }
  },
}
</script>

<style scoped>
.hero {
  height: 80vh;
}
section {
  @apply grid grid-cols-12 gap-2;
}

section > article {
  @apply col-span-6 w-9/12 px-6 mx-auto mb-8;
}

section > h3 {
  @apply col-span-full w-9/12 py-8 mx-auto my-8 text-2xl text-center;
}
</style>
