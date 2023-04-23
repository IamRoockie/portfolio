<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: 'TypingEffect',
  props: {
    blinking: {
      type: Number,
      default: 750
    },
    speedTyping: {
      type: Number,
      default: 100
    },
    speedErasing: {
      type: Number,
      default: 50
    },
    cursorColor: {
      type: String,
      default: 'black'
    },
    cursorWidth: {
      type: Number,
      default: 3
    },
    timeout: {
      type: Number,
      default: 1000
    },
    words: {
      type: Array,
      required: true,
      validator(value) {
        if (!value.length > 0) {
          console.error('Передан пустой массив')
          return false
        }
        return true
      }
    }
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    blink() {
      return `${this.blinking}ms`
    },
    width() {
      return `${this.cursorWidth}px`
    },
    cursorMargin() {
      return `-${this.cursorWidth + this.cursorWidth / 3}px`
    }
  },
  methods: {
    async animate() {
      let i = 0
      for (let _ = 0; _ < Infinity; _++) {
        await this.typing(this.words[i++ % this.words.length])
        await new Promise(resolve => {
          setTimeout(() => resolve(), this.timeout)
        })
        await this.erasing()
        this.text = ''
      }
    },
    async typing(text) {
      let c = 0
      while (c < text.length) {
        this.text += await new Promise(resolve => {
          setTimeout(() => {
            resolve(text[c++])
          }, this.speedTyping)
        })
      }
    },
    async erasing() {
      let c = this.text.length
      while (c >= 0) {
        this.text = await new Promise(resolve => {
          setTimeout(() => {
            resolve(this.text.slice(0, c--))
          }, this.speedErasing)
        })
      }
    }
  },
  mounted() {
    this.animate()
  }
}
</script>

<style scoped lang="scss">
span {
  position: relative;
  display: inline-block;
}

span:after {
  content: '';
  position: absolute;
  top: 50%;
  right: v-bind(cursorMargin);
  transform: translateY(-50%);
  width: v-bind(width);
  height: 70%;
  animation: cursor v-bind(blink) infinite;
}

@keyframes cursor {
  from {
    background-color: v-bind(cursorColor);
  }
  50% {
    background-color: transparent;
  }
  to {
    background-color: v-bind(cursorColor);
  }
}
</style>
