<script setup>
import { useLocale } from '@/stores/locale'

const store = useLocale()

function switcher() {
  store.setLang(store.lang === 'en' ? 'ru' : 'en')
}
</script>

<script>
export default {
  name: 'AppLangSwitcher'
}
</script>

<template>
  <div>
    <div
      @click="switcher"
      class="switcher"
      :class="{ ru: store.lang === 'ru' }"
    >
      <div class="slider left" :class="{ active: store.lang === 'ru' }">ru</div>
      <div class="slider right" :class="{ active: store.lang === 'en' }">
        en
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.switcher {
  position: relative;
  width: 65px;
  height: 34px;
  border-radius: 25px;
  border: 2px solid $primary;
  overflow: hidden;
  cursor: pointer;
  transition: 150ms ease-out;
}

.switcher.ru {
  border-color: $alt;
}

.slider {
  position: absolute;
  top: 50%;
  transform: translateY(-200%);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50%;
  background-color: #fff;
  transition: 150ms ease-out;
}

.left {
  left: 4px;
  background-color: $alt;
}

.right {
  right: 4px;
  background-color: $primary;
}

.left.active,
.right.active {
  transform: translateY(-50%);
}
</style>
