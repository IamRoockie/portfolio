<script setup>
import { AppHeader, AppLangSwitcher } from '@/components'
</script>

<template>
  <main class="gradient__bg">
    <div class="container">
      <app-header />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <app-lang-switcher class="lang" />
    </div>
  </main>
</template>

<style lang="scss">
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(60px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.fade-enter-active,
.fade-leave-active {
  transition: 400ms ease-out;
}

.lang {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>
