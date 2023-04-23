<script setup>
import { useLocale } from '@/stores/locale'

const store = useLocale()
const devs = [
  'Fronted Developer',
  'Fullstack Developer',
  'Backend Developer'
]
</script>

<script>
import { TypingEffect } from '@/components'

export default {
  components: { TypingEffect }
}
</script>

<template>
  <section class='home'>
    <div class='content'>
      <h1 class='title'>{{ store.locale.home.greeting }}</h1>
      <div class='typing-wrapper'>
        <typing-effect
          class='typing typing-gradient'
          cursor-color='#ff8a71'
          :words='store.locale.home.devs'
        />
      </div>
      <div class='text'>{{ store.locale.home.description }}</div>
      <a
        href='https://disk.yandex.ru/i/1JAKTXnuoJj0wg'
        target='_blank'
        class='download'
      >{{ store.locale.home.download }}</a
      >
    </div>

    <div class='img-wrapper'>
      <img class='img' src='@/assets/main.webp' alt='logo' />
    </div>
  </section>
</template>

<style scoped lang='scss'>
.home {
  margin-top      : 60px;
  display         : flex;
  justify-content : space-between;
  align-items     : center;
}

.title {
  font-weight : 700;
  font-size   : 60px;
  color       : white;
}

.typing-wrapper {
  margin-top : 20px;
  height     : 70px;
}

.typing-gradient {
  @include gradient-text;
}

.typing {
  font-size   : 40px;
  font-weight : 700;
}

.text {
  margin-top : 20px;
  max-width  : 500px;
  color      : $text;
}

.download {
  display          : inline-block;
  margin-top       : 50px;
  padding          : 15px 25px;
  border           : none;
  border-radius    : 10px;
  font-size        : 18px;
  font-weight      : 700;
  color            : $footer;
  background-color : $alt;
  cursor           : pointer;
  transition       : 250ms ease;
}

.download:hover {
  background-color : $primary;
}

.img-wrapper {
  width  : 650px;
  height : 650px;
}

.img {
  width      : 100%;
  object-fit : cover;
}
</style>
