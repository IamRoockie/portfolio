<script>
import { useLocale } from '@/stores/locale'

export default {
  name: 'AppHeader',
  data: () => ({
    store: useLocale(),
    links: [
      { icon: 'icon-github', href: 'https://github.com/IamRoockie' },
      { icon: 'icon-telegram', href: 'https://t.me/Way2D' },
      { icon: 'icon-linkedin', href: 'https://www.linkedin.com/in/pioneeer/' }
    ]
  }),
  computed: {
    currentRoute() {
      const name = this.$route.name
      if (this.store.lang === 'en') return name
      switch (name) {
        case 'profile':
          return 'профайл'
        default:
          return 'главная'
      }
    }
  }
}
</script>

<template>
  <header>
    <div class='title'>Portfolio</div>
    <ul class='routes'>
      <li
        class='routes__item'
        v-for='r in store.locale.routes'
        :key='r.route'
        :class='{ active: currentRoute === r.name }'
      >
        <router-link :to='r.route'>{{ r.name }}</router-link>
      </li>
    </ul>
    <ul class='links'>
      <li v-for='link in links' :key='link.href'>
        <a :class='`icon ${link.icon}`' :href='link.href' target='_blank'></a>
      </li>
    </ul>
  </header>
</template>

<style scoped lang='scss'>
header,
ul {
  display     : flex;
  align-items : center;
  column-gap  : 50px;
  color       : #fff;
}

.routes {
  font-weight : 500;

  &__item {
    position       : relative;
    font-size      : 20px;
    text-transform : capitalize;
  }

  &__item::after {
    content          : "";
    position         : absolute;
    bottom           : -5px;
    left             : 0;
    width            : 0;
    height           : 2px;
    background-color : #fff;
    transition       : width 250ms ease-in-out;
  }

  &__item:hover::after {
    width : 100%;
  }

  &__item.active {
    color : $alt;
  }

  &__item.active::after {
    width            : 100%;
    background-color : $alt;
  }
}

.links {
  margin-left : auto;
  column-gap  : 25px;
}

.icon {
  font-size  : 35px;
  transition : color 200ms ease;
}

.icon:hover {
  color : $alt;
}

.title {
  border         : 2px solid white;
  padding        : 10px;
  font-size      : 28px;
  font-weight    : 700;
  text-transform : uppercase;
}
</style>
