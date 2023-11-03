<script setup>
import { useLocale } from '@/stores/locale'

const store = useLocale()
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
        <typing-effect class='typing typing-gradient' cursor-color='#ff8a71' :words='store.locale.home.devs' />
      </div>
      <div class='text'>{{ store.locale.home.description }}</div>
      <a href='https://disk.yandex.ru/i/rhwFz67TnHh6SA' target='_blank' class='download'>{{ store.locale.home.download
      }}</a>
    </div>

    <div class='img-wrapper'>
      <img class='img' src='@/assets/main.webp' alt='logo' />
    </div>
  </section>
</template>

<style scoped lang='scss'>
.content {
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 20px;
}

.title {
  font-weight: 700;
  font-size: 60px;
  color: white;
}

.typing-wrapper {
  height: 65px;
}

.typing-gradient {
  @include gradient-text;
}

.typing {
  font-size: 40px;
  font-weight: 700;
}

.text {
  max-width: 500px;
  color: $text;
}

.download {
  margin-top: 20px;
  display: inline-block;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  color: $footer;
  background-color: $alt;
  cursor: pointer;
  transition: 250ms ease;
}

.download:hover {
  background-color: $primary;
}

.img-wrapper {
  width: 650px;
  height: 650px;
}

.img {
  width: 100%;
  object-fit: cover;
}

@media (max-width : 1024px) {
  .home {
    flex-direction: column;
    justify-content: center;
  }

  .content {
    align-items: center;
  }

  .text {
    text-align: center;
  }

  .img-wrapper {
    display: none;
  }
}

@media (max-width : 700px) {
  .title {
    font-size: 45px;
  }

  .typing-wrapper {
    height: 50px;
  }

  .typing {
    font-size: 30px;
  }

  .text {
    font-size: 14px;
  }

  .download {
    font-size: 16px;
  }
}

@media (max-width : 500px) {
  .title {
    font-size: 30px;
  }

  .typing-wrapper {
    height: 30px;
  }

  .typing {
    font-size: 20px;
  }

  .text {
    font-size: 10px;
  }

  .download {
    font-size: 12px;
  }
}</style>
