<template>
  <main>
    <section class="flex flex-wrap group-section">
      <SectionTitle class="w-full">Nosotros</SectionTitle>
      <article class="historia">
        <h3>Historia</h3>
        <p>
          Fundada en el año 2000, brinda servicios profesionales a partir de un
          equipo de especialistas que aportan su formación técnica y su
          experiencia práctica, desarrollada en empresas líderes de Argentina y
          el resto de la región.
        </p>
      </article>
      <article>
        <h3>Estructura</h3>
        <p>
          <strong>Abexa</strong> es una empresa que cree y se identifica con la
          efectividad de costos y por ende, posee una estructura flexible que se
          adapta a las necesidades de cada cliente.
        </p>
      </article>
      <article>
        <h3>Historia</h3>
        <p>
          <strong>Abexa</strong> es una empresa de servicios, líder en la
          articulación de negocios medianos en la región latinoamericana.
        </p>
      </article>
    </section>
    <section class="flex flex-wrap group-section">
      <SectionTitle class="w-full">Principios</SectionTitle>
      <article>
        <font-awesome-icon class="text-2xl" icon="lock-alt" />
        <h3>Confidencialidad</h3>
        <p>
          Cuidamos diligentemente la confidencialidad de nuestros clientes en
          orden a maximizar el valor de las operaciones y lograr los mejores
          terminos de negociacion.
        </p>
      </article>
      <article>
        <font-awesome-icon class="text-2xl" icon="sitemap" />
        <h3>Atención Jerárquica</h3>
        <p>
          <strong>Abexa</strong> garantiza que todo el proceso es llevado a cabo
          y monitoreado por profesionales de destacada trayectoria.
        </p>
      </article>
      <article>
        <font-awesome-icon class="text-2xl" icon="mind-share" />
        <h3>Creatividad</h3>
        <p>
          <strong>Abexa</strong> busca la solución que da mejor respuesta a la
          necesidad de sus clientes.
        </p>
      </article>
      <article>
        <font-awesome-icon class="text-2xl" icon="file-plus" />
        <h3>Documentación de Nivel</h3>
        <p>
          <strong>Abexa</strong> presenta documentación de estándares de
          calidad, adecuados al estilo de los altos inversores institucionales.
        </p>
      </article>
    </section>
    <section>
      <SectionTitle>Lista de servicios</SectionTitle>
      <ul>
        <li v-for="service in listaDeServicios" :key="service">
          {{ service }}
        </li>
      </ul>
      <AcordionCases
        v-for="servicios in serviciosAcordion"
        :key="servicios.title"
        :title="servicios.title"
        :description="servicios.description"
        :opened="selected === servicios.title"
        class="w-10/12 mx-auto"
        @click.native="toggleCases(servicios.title)"
      />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      serviciosAcordion: [
        {
          title: 'Estructuración',
          description:
            '-Re Formulación integral de empresas, donde Abexa colabora con la dirección de la empresa en la elaboración de un plan de reformulación que abarca todos los aspectos de la empresa, desde el análisis de la situación actual, diagnóstico y la propuesta de un plan de acción que tiene como objetivo adecuar a la empresa a la realidad particular de cada mercado.<br />-Estructuración de Deuda, mandato de préstamos y negociación del precio; inversiones relacionadas con la deuda pública o privada, incluyendo el paquete de condiciones para la estructuración de transacciones y la documentación necesaria.<br />Abexa busca conocer y comprender la necesidad del cliente en profundidad para ayudarlo a analizar nuevas oportunidades, realizar un plan de negocios sobre un negocio existente o futuro, redefinirlo o identificar que tipo de ayuda es la más adecuada para continuarlo.<br />Esto lo realiza por medio de la inmersión de profesionales en las empresas, de manera de implementar junto con el cliente los cambios necesarios para la creación de valor',
        },
        {
          title: 'Socios',
          description:
            '-Cuando una empresa tiene vocación de crecimiento, necesita buscar capital.<br>– Una empresa que desea crecer no solo desea capital, sino capital más inteligencia, el llamado smart money.Abexa realiza una búsqueda de socios con conocimiento específico de la necesidad del cliente basándose en un diagnóstico realizado por sus analistas.',
        },
        {
          title: 'Financiamento',
          description:
            'Abexa evalúa la capacidad de endeudamiento de sus clientes, y en función a ello, implementa un plan de financiamiento para adecuarlo a la mejor ecuación capital / deuda, intentando balancear el costo financiero total, los plazos de vencimiento y las garantías, en función de cada caso particular.<br><br><br>A partir de una amplia comprensión del negocio y las necesidades de los clientes, Abexa los asiste en la búsqueda de inversores en el mercado local e internacional; en el diseño e implementación de la estructura de capital más favorable a su perfil y situación financiera.',
        },
        {
          title: 'Fusiones',
          description:
            'La unión de dos o más empresas que deciden unir sus patrimonios y formar una nueva sociedad con la finalidad de afianzarse en el mercado y optimizar costos.',
        },
        {
          title: 'Adquisiciones',
          description:
            'Una adquisición consiste en la compra por parte de una empresa del paquete accionario de control de otra sociedad, sin realizar fusión de sus patrimonios.',
        },
        {
          title: 'Banca de Inversión',
          description:
            'Abexa interviene en el proceso de busqueda y colocacion de capitales, en el financiamiento de proyectos de inversión, producción y construcción; participa en el financiamiento de operaciones en el mercado de capitales y realiza el diagnóstico (viabilidad) empresarial, organizando el proceso de búsqueda de compradores potenciales, asesorando al inversionista en la creación de nuevas empresas.',
        },
      ],
      selected: 'Estructuración',
      listaDeServicios: [
        'Diagnóstico de empresas',
        'Reformulación de empresas',
        'Intervención de empresas',
        'Valuación',
        'Análisis de factibilidad',
        'Asistencia en la negociación de Compra-Venta del paquete accionario',
        'Asesoría en salidas a Bolsa',
        'Colaboración en la resolución de disputas entre socios',
        'Memorándum de ofertas (Offering Memorandum)',
        'Asistencia en la elaboración de acuerdos de acciones',
        'Valuación de activos tangibles e intangibles',
        'Recapitalización y planes de saneamiento',
      ],
    }
  },
  methods: {
    toggleCases(title) {
      this.selected = this.selected === title ? null : title
    },
  },
}
</script>

<style scoped>
.group-section > article {
  @apply w-10/12 mx-auto mb-8;
}
article > h3 {
  @apply text-xl mb-2;
}

.historia {
  @apply w-8/12 mx-auto font-bold text-xl;
}
.historia > h3 {
  @apply text-3xl;
}

section ul {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(60px, 1fr));
  @apply grid w-10/12 mx-auto gap-4 gap-x-8 list-none mb-8;
}
ul > li::before {
  content: '-';
}

@media screen and (min-width: 768px) {
  .group-section > article {
    @apply w-5/12 mx-auto mb-8;
  }
}
</style>
