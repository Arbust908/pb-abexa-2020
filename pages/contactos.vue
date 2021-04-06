<template>
  <main>
    <section>
      <SectionTitle>Contactenos</SectionTitle>
      <div
        class="lg:w-10/12 mx-auto flex flex-col md:flex-row gap-4 justify-center items-center pt-8"
      >
        <a href="skype:abexa1?chat">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'skype']" />
          </div>
          <h3>Skype</h3>
          <!-- <a href="callto:abexa1">abexa1</a> -->
          <p>abexa1</p>
        </a>
        <a v-if="false" href="tel:+54-11-3980-4410">
          <div class="icon">
            <font-awesome-icon icon="phone" />
          </div>
          <h3>Telefono</h3>
          <p>(+54) 11 3980-4410</p>
        </a>
        <a href="mailto:info@abexa.com">
          <div class="icon">
            <font-awesome-icon icon="envelope" />
          </div>
          <h3>E-mail</h3>
          <p>info@abexa.com</p>
        </a>
      </div>
    </section>
    <section>
      <img src="" alt="" />
      <img src="" alt="" />
    </section>
  </main>
</template>

<style scoped>
div > a {
  @apply text-center text-3xl transform transition duration-150 ease-out cursor-pointer;
}
div > a:hover {
  @apply scale-105;
}
h3 {
  @apply font-bold;
}
.icon {
  @apply w-12 h-12 bg-white bg-opacity-50 rounded-full text-3xl mx-auto flex justify-around items-center;
}
a:hover .icon {
  @apply bg-main-200;
}
.dark a:hover .icon {
  @apply bg-main-600;
}
@media screen and (min-width: 768px) {
  div > a {
    @apply w-4/12;
  }
}
</style>
