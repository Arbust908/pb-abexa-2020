<template>
  <div
    class="font-main bg-blueGray-100 dark:bg-blueGray-900 text-main-500 dark:text-main-100 grid grid-layout min-h-screen"
  >
    <header
      class="flex flex-col sm:flex-row sm:justify-between items-center p-2 w-full bg-blueGray-200 dark:bg-blueGray-800 z-50"
    >
      <nuxt-link to="/" class="rounded-lg px-2 py-1 hover:text-violet-500">
        <h1 class="text-lg font-bold flex items-center">
          <Iso class="w-8 h-8 fill-current" />
        </h1>
      </nuxt-link>
      <nav>
        <ul class="flex space-x-3 items-center justify-between mr-4">
          <li class="flex w-8 h-8 items-center justify-center">
            <ModeToggler />
          </li>
        </ul>
      </nav>
    </header>
    <Nuxt class="z-20" />
    <footer
      class="bg-blueGray-200 dark:bg-blueGray-800 flex flex-col items-center justify-between text-sm"
    >
      <span class="pt-1">
        contecto via mail
        <a
          class="transform transition duration-150 inline-block hover:opacity-75 hover:scale-105 hover:translate-x-1"
          href="mailto:info@abexa.com"
        >
          info@abexa.com
        </a>
      </span>
      <div
        class="w-full h-1 bg-gradient-to-r from-main-700 via-main-500 to-main-700"
      ></div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
</style>
<style scoped>
.grid-layout {
  grid-template-rows: 60px 1fr 40px;
}
@media screen and (min-width: 768px) {
  .grid-layout {
    grid-template-rows: 52px 1fr 32px;
  }
}
</style>
