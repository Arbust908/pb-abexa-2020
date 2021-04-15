<template>
  <main>
    <section class="mb-6">
      <SectionTitle>Casos de Exito</SectionTitle>
      <h3>
        Por una cuestión de acuerdos de confidencialidad firmados entre ABEXA y
        sus clientes, se expondrán casos “anónimos” de trabajos realizados, que
        sirven para ejemplificar con casos prácticos la asistencia de ABEXA a
        sus clientes en distintas situaciones.
      </h3>
      <AcordionCases
        v-for="caso in cases"
        :key="caso.title"
        :title="caso.title"
        :description="caso.description"
        :opened="selected === caso.title"
        class="w-10/12 mx-auto"
        @click.native="toggleCases(caso.title)"
      />
    </section>
    <section v-if="false">
      <SectionTitle>Prensa</SectionTitle>
      <h3>
        Estos son algunos de nuestros casos mas importantes documentados por los
        medios de comunicaciones.
      </h3>
      <article>
        <h4>Caso</h4>
        <p></p>
        <button>Ver Mas</button>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cases: [
        {
          title:
            'Caso 1 - COMPRA DE UNA UNIDAD DE NEGOCIOS PARA UNA MULTINACIONAL.',
          description:
            'Hace unos años, Abexa fue contactada por una empresa multinacional, sin actividades en Argentina, para que esta consultora realizara un trabajo de relevamiento con el objetivo era analizar el tamaño del mercado argentino específico, determinar qué empresas eran las principales de esa actividad, y cuáles de esas principales estarían interesadas en venderse o asociarse. <br /> Abexa realizó el análisis preliminar de la actividad, identificó a los principales jugadores de esa industria, realizó entrevistas con cada uno de las diez principales empresas nacionales, e identificó a tres de ellas con voluntad de escuchar ofertas por su negocio.<br /> Abexa viajó a las oficinas centrales de la multinacional y expuso los resultados de su análisis junto con un plan de acción orientado a maximizar el desembarco de la multinacional en la Argentina.<br /> La multinacional validó el plan presentado por Abexa y otorgó a la consultora el mandato exclusivo para adquirir al menos dos de las empresas presentadas.<br /> Abexa realizó el mandato encomendado y logró adquirir dos empresas con las que la multinacional desembarcó en el país, manteniendo su actividad hasta la actualidad.',
        },
        {
          title:
            'Caso 2 - VENTA DE UNA EMPRESA DE CONSUMO MASIVO A UN INVERSOR ESTRATÉGICO',
          description:
            'Abexa fue contactada por una empresa líder en productos de consumo masivo de la Argentina. Aunque su situación era estable, los accionistas decidieron vender la empresa, buscando que el comprador fuera un estratégico y que estuviera consolidando negocios en el sector.<br>Esta consultora firmó un mandato exclusivo de venta, y realizó un plan de trabajo en conjunto con los directivos de la empresa a ser vendida, con el objeto de identificar cuál era el estratégico “ideal” para comprar su negocio. Se identificaron al menos diez compañías que podrían llegar a tener interés en esta actividad, empresas no sólo con presencia en el sector, sino también con posibles sinergias con el negocio a vender.<br>Abexa realizó junto a su cliente una descripción de la empresa, de sus actividades y de su realidad financiera, y contactó a las empresas estratégicas que podrían llegar a tener interés.<br>Con dicha información en mano, fueron firmados acuerdos de confidencialidad con cada uno de los estratégicos que había manifestado interés, y se les presentó la oportunidad.<br>A lo largo de varios meses, se analizaron las propuestas de cada uno de los interesados en adquirir la empresa, y se llegó a una oferta satisfactoria para el cliente de Abexa.<br>Firmada una carta intención vinculante entre las partes, comenzó la negociación de los documentos finales de la compra venta, como así también los términos de la auditoría de compra.<br>Luego de cinco meses de haber iniciado el trabajo, se realizó la venta de la empresa.',
        },
        {
          title:
            'Caso 3 - REFINANCIACIÓN PRÉSTAMO. SINDICADO Y POSTERIOR INGRESO DE SOCIOS.',
          description:
            'En plena crisis del año 2001/2002 Abexa es contactada por el socio mayoritario de un grupo de empresas cuya actividad principal había caído dramáticamente en cuanto a facturación se refiere. Como consecuencia, el endeudamiento que venían manteniendo con los bancos de plaza se tornó muy dificultoso de pagar, haciendo peligrar la viabilidad del grupo en el mediano plazo.<br>Abexa mantuvo varias reuniones con la Dirección Financiera de la empresa con el objeto de realizar un diagnóstico propio de la situación y, en función de dicho diagnóstico, realizó una propuesta de acción para intentar sacar al grupo de la situación en la que se encontraba.<br>La propuesta presentada a los acreedores contemplaba la presentación de un plan a cinco años, en donde se mostraba la viabilidad económica de la empresa, y se pedía a los bancos una refinanciación de la deuda, principalmente la de corto plazo, invitándolos a constituir un préstamo sindicado entre todos los bancos acreedores, a cambio de tener garantías más sólidas y compartidas.<br>Así se realizaron reuniones con los bancos acreedores, seleccionando a uno de los principales como líder del préstamo sindicado. También fueron analizadas las garantías y el plan quinquenal, y se obtuvo el acuerdo del 80% de los bancos; como consecuencia de esta aceptación mayoritaria, la empresa logró mejorar su performance de corto plazo.<br>Dado que uno de los bancos no quiso aceptar las condiciones del préstamo sindicado, Abexa ejecutó una segunda instancia de asistencia al grupo empresario, e identificó un fondo de inversión con interés en ingresar al capital social de este grupo. En esta nueva situación, se le solicitó al banco en desacuerdo que financie parte de la compra del paquete accionario a este fondo de inversión, transformando su acreencia con la empresa, en un préstamo puente de la adquisición de la participación accionaria por parte del fondo. Así se realizó, y el resultado fue un grupo empresario con una ecuación deuda – patrimonio mejor balanceada, los bancos con una deuda mejor garantizada aunque a menor tasa, y un fondo de inversión con participación minoritaria en el negocio.',
        },
        {
          title: 'Caso 4 - RECONVERSIÓN DE EMPRESA CONSTRUCTORA.',
          description:
            'Un cliente de Abexa, en su práctica de consultoría financiera, realiza sus actividades dentro del rubro de la construcción. Se trata de una empresa que se había especializado en el sector de construcción corporativa, prestando servicios a compañías de primer nivel que necesitaban ampliar plantas de producción, construir nuevos depósitos logísticos, etc.<br>Su experiencia, seriedad y antecedentes los hacían elegibles por empresas multinacionales o nacionales grandes que necesitaban construcciones de calidad y con cronogramas ajustados.<br>Las obras se ganaban por licitación, y la empresa debía ajustar fuertemente sus tarifas y utilidad para poder ganar cada una de las obras. Esta situación llevó a la empresa a tener una cantidad muy importante de trabajo, pero con utilidades muy ajustadas por el proceso de licitación y las diferentes características del sector en donde desarrollaba su actividad.<br>Luego de un relevamiento y diagnóstico realizado por Abexa, se le propuso al accionista principal de la empresa aplicar todo ese conocimiento a otro rubro de la construcción, orientando el negocio a la construcción de edificios de vivienda multifamiliar, asumiendo el rol de constructor y desarrollador de los mismos. El concepto era aplicar el profesionalismo, la gestión integral de la construcción, y el manejo de costos y tiempos ajustados, a un rubro con mayor contribución final para la empresa.<br>Una vez aceptada la propuesta por el accionista principal de la empresa, se realizó la compra del primer predio dentro de Capital Federal, y se realizó un fideicomiso para la construcción de un edificio de 10 pisos con cuatro departamentos por piso, fijando parámetros de construcción y premios por finalización en diferentes tiempos.<br>Esta actividad fue un éxito, y llevó a la empresa a reconvertirse, y orientar su principal esfuerzo a esta actividad, manteniendo la construcción corporativa sólo en aquellos casos en que la utilidad era adecuada para la empresa, orientando su esfuerzo principal a ser uno de los desarrolladores y constructores más importantes de los últimos veinte años.',
        },
        {
          title: 'Caso 5 - CONSOLIDACIÓN DE OPERACIONES DE CABLE.',
          description:
            'Un grupo de empresarios, con larga experiencia en la industria de la televisión por cable en la Argentina, identificó la oportunidad de adquirir un cableoperador de una localidad del interior del país que atravesaba dificultades financieras y estaba presentando su empresa en concurso de acreedores. Estos empresarios contactaron a Abexa para que validara la hipótesis de inversión sobre la rentabilidad del negocio existente.<br>Abexa viajó a la localidad del cableoperador y se puso en contacto con el dueño de la sociedad a fin de conseguir la mayor cantidad de información posible. Luego de varias reuniones, se detectó que el negocio era rentable, pero que debido a una merma importante de clientes, el negocio no tenía el resultado final deseado. En función de los resultados obtenidos, se realizó un relevamiento de los cableoperadores de la zona de influencia, y se detectó que existían al menos ocho empresas de televisión por cable más chicas en las localidades cercanas que podían adquirirse y consolidarse bajo una sola empresa, lo que permitía obtener una base de clientes adecuada, sinergiando las compras de señales, y optimizando las estructuras administrativas, comerciales y de mantenimiento de red.<br>Con esta información, se realizó una propuesta a los empresarios en forma de master plan, en donde la clave era adquirir simultáneamente la empresa inicial y al menos dos de los ocho cableoperadores identificados. Los empresarios aprobaron este masterplan, y Abexa inició las tareas de adquisición.<br>Fueron firmadas tres opciones de compra en firme y luego de asegurada la masa crítica que aseguraba la rentabilidad esperada del negocio, se realizaron las adquisiciones. Así, se compraron el negocio original y cinco de los cables posibles, consolidando una operación muy rentable, que luego de tres años, fue vendida a uno de los tres principales consolidadores de este tipo de operación en el país.',
        },
        {
          title:
            'Caso 6 - VENTA DE PORTAFOLIO DE EMPRESAS DE UN FONDO A OTRO FONDO.',
          description:
            'Uno de los primeros casos de Abexa fue la valuación de un portafolio de inversión de un fondo que estaba operando en la región desde hacía casi 10 años y tenía la intención de vender la cartera total debido a que había llegado el momento de desinversión del mismo y devolución del capital aportado a sus inversores.<br>El directorio del fondo quería saber el valor de la cartera de empresas que poseía, y si se podía conseguir otro fondo que le interesara comprar la cartera ya constituida, evitando las ventas parciales que llevarían más esfuerzo y tiempo para su concreción.<br>Abexa realizó un relevamiento de la información de cada una de las empresas del portfolio, participó en reuniones de seguimiento de cada empresa para determinar de manera objetiva cuáles eran los planes de cada una, evaluó junto con un equipo de abogados los acuerdos de protección del fondo en cada empresa, y otras características particulares de cada una de las inversiones. A cada participación se le asignó un valor y se realizó una proyección de cada empresa para validar ese valor por el método de flujo de fondos descontado.<br>Además, se consideró como un valor adicional, el tener un portafolio de inversiones ya armado, esto es, el vehículo de inversión, los acuerdos ya firmados, etc., que también se valuó de manera independiente.<br>Finalmente, se realizó una búsqueda de interesados en adquirir todo el portfolio, de la cual surgieron dos fondos con interés concreto, que compitieron en el mejoramiento de las ofertas, para luego quedar uno como interesado concreto que finalmente adquirió el portafolio de participaciones.',
        },
      ],
      selected:
        'Caso 1 - COMPRA DE UNA UNIDAD DE NEGOCIOS PARA UNA MULTINACIONAL.',
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
section > h3 {
  @apply w-10/12 py-4 mx-auto my-2 text-lg text-center;
}
@media screen and (min-width: 768px) {
  section > h3 {
    @apply w-9/12 py-8 my-8 text-2xl;
  }
}
</style>
