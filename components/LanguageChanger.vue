<template>
  <CustomDropdown
    :id="`lang-changer`"
    btn-classes="flex items-center justify-between px-2 py-1 rounded space-x-4"
  >
    <template #btn>
      <IconLanguage title="Cambiar Idioma" class="w-8 h-8" />
      <span class="sr-only">Idioma</span>
    </template>
    <template #options>
      <LanguageButton
        v-for="lang in $i18n.locales"
        :key="`${lang.name}-${lang.code}`"
        :contry-code="lang.code"
        :title="lang.name"
      />
    </template>
  </CustomDropdown>
</template>
