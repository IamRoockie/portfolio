<script>
import { useLocale } from '@/stores/locale'

export default {
  name: 'AppHeader',
  data: () => ({
    store: useLocale(),
    menuActive: false,
    links: [
      { icon: 'icon-github', href: 'https://github.com/IamRoockie' },
      { icon: 'icon-telegram', href: 'https://t.me/Way2D' },
      { icon: 'icon-linkedin', href: 'https://www.linkedin.com/in/pioneeer/' }
    ]
  }),
  methods: {
    menuOpen() {
      this.menuActive = true
    },
    menuClose() {
      this.menuActive = false
    }
  },
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
    <div class='menu' @click='menuOpen'>
      <div class='menu__line'></div>
      <div class='menu__line'></div>
      <div class='menu__line'></div>
    </div>
    <div class='logo'>Portfolio</div>
    <ul class='routes' :class='{active: menuActive}'>
      <li class='routes__close' @click='menuClose'>&#10006;</li>
      <li
        class='routes__item'
        v-for='r in store.locale.routes'
        :key='r.route'
        :class='{ active: currentRoute === r.name }'
        @click='menuClose'
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
  color       : $light;
}

.menu {
  display         : none;
  flex-direction  : column;
  justify-content : center;
  row-gap         : 5px;
  width           : 30px;
  height          : 35px;
  cursor          : pointer;

  &__line {
    border-radius    : 2px;
    height           : 5px;
    background-color : $light;
  }
}

.logo {
  border         : 2px solid $light;
  padding        : 10px;
  font-size      : 28px;
  font-weight    : 700;
  text-transform : uppercase;
}

.routes {
  font-weight : 500;

  &__close {
    display         : none;
    color           : $light;
    position        : absolute;
    right           : 0;
    top             : 0;
    width           : 35px;
    height          : 35px;
    justify-content : center;
    align-items     : center;
    font-size       : 30px;
    cursor          : pointer;
  }

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

@media (max-width : 800px) {
  .menu {
    display : flex;
  }
  .logo {
    position  : absolute;
    left      : 50%;
    transform : translateX(-50%);
    padding   : 8px;
    font-size : 24px;
  }
  .routes {
    padding-top                : 20px;
    position                   : fixed;
    z-index                    : 5;
    top                        : 0;
    left                       : 0;
    transform                  : translateX(-105%);
    width                      : 200px;
    min-height                 : 300px;
    box-shadow                 : 1px 1px 5px 0 $light;
    border-bottom-right-radius : 20px;
    flex-direction             : column;
    row-gap                    : 30px;
    background-color           : $bg;
    transition                 : 200ms ease-out;

    &__close {
      display : flex;
    }
  }
  .routes.active {
    transform : translateX(0);
  }
  .icon {
    font-size : 30px;
  }
}

@media (max-width : 600px) {
  .icon {
    font-size : 25px;
  }
}

@media (max-width : 600px) {
  .links {
    position   : absolute;
    top        : 15px;
    left       : 15px;
    column-gap : 20px;
  }
  .icon {
    font-size : 22px;
  }
}
</style>
