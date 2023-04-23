<script>
export default {
  name: 'CircleProgressBar',
  props: {
    percentage: {
      type: Number,
      required: true
    },
    radius: {
      type: Number,
      default: 50
    },
    stroke: {
      type: Number,
      default: 15
    },
    fontColor: {
      type: String,
      default: 'white'
    },
    barColor: {
      type: String,
      default: '#12c2e9'
    },
    circleColor: {
      type: String,
      default: 'transparent'
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      percent: 0
    }
  },
  computed: {
    width() {
      return this.radius * 2 + this.stroke
    },
    dashArray() {
      return this.radius * Math.PI * 2
    },
    dashOffset() {
      return this.dashArray - (this.dashArray * this.percent) / 100
    },
    fontSize() {
      return `${this.radius * 0.55}px`
    }
  },
  methods: {
    animate() {
      const interval = setInterval(() => {
        this.percent++
        if (this.percent === this.percentage) clearInterval(interval)
      }, 15)
    }
  },
  mounted() {
    if (this.animated) {
      this.animate()
    } else {
      this.percent = this.percentage
    }
  }
}
</script>

<template>
  <svg :width="width" :height="width" :viewBox="`0 0 ${width} ${width}`">
    <circle
      class="circle-bg"
      :cx="width / 2"
      :cy="width / 2"
      :stroke-width="stroke"
      :r="radius"
    />
    <circle
      class="circle-progress"
      :cx="width / 2"
      :cy="width / 2"
      :stroke-width="stroke"
      :r="radius"
      :transform="`rotate(-90 ${width / 2} ${width / 2})`"
    />
    <text class="circle-text" x="50%" y="50%" dy="0.3em" text-anchor="middle">
      {{ percent }}%
    </text>
  </svg>
</template>

<style scoped lang="scss">
.circle-bg {
  fill: none;
  stroke: v-bind(circleColor);
}

.circle-progress {
  fill: none;
  stroke: v-bind(barColor);
  stroke-dasharray: v-bind(dashArray);
  stroke-dashoffset: v-bind(dashOffset);
}

.circle-text {
  font-size: v-bind(fontSize);
  font-weight: bold;
  fill: v-bind(fontColor);
}
</style>
