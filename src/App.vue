<script setup>
import { AppHeader, AppLangSwitcher } from '@/components'
</script>

<template>
  <main class='main'>
    <app-header />
    <router-view v-slot='{ Component }'>
      <transition name='fade' mode='out-in'>
        <component :is='Component' />
      </transition>
    </router-view>
    <app-lang-switcher class='lang' />
  </main>
</template>

<style lang='scss'>
.main {
  display        : flex;
  flex-direction : column;
  min-height     : calc(100vh - 100px);
  max-width      : 1400px;
  margin         : 0 auto;
  padding        : 0 15px;
}

section {
  flex-grow       : 1;
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  color           : $light;
}

.fade-enter-from {
  opacity   : 0;
  transform : translateY(50px);
}

.fade-leave-to {
  opacity   : 0;
  transform : translateY(-50px);
}

.fade-enter-active,
.fade-leave-active {
  transition : 400ms ease-out;
}

.lang {
  position : fixed;
  bottom   : 50px;
  right    : 50px;
}

@media (max-width : 800px) {
  .main {
    padding-top : 30px;
  }
  .lang {
    position : absolute;
    top      : 10px;
    right    : 10px;
  }
}
</style>
