<script>
import { CircleProgressBar } from '@/components'

export default {
  name: 'ProfileView',
  components: { CircleProgressBar },
  data: () => ({
    skillProgress: {
      radius: null,
      stroke: null
    },
    groups: [
      {
        name: 'backend',
        skills: [
          { name: 'PHP', progress: 85 },
          { name: 'C#', progress: 50 },
          { name: 'VLang', progress: 20 }
        ]
      },
      {
        name: 'frontend',
        skills: [
          { name: 'HTML / CSS', progress: 85 },
          { name: 'JavaScript', progress: 70 },
          { name: 'Vue', progress: 60 },
          { name: 'React', progress: 30 }
        ]
      },
      {
        name: 'database',
        skills: [
          { name: 'MySQL', progress: 65 },
          { name: 'Redis', progress: 50 },
          { name: 'MongoDB', progress: 30 }
        ]
      }
    ]
  }),
  methods: {
    resize() {
      const width = window.innerWidth
      this.skillProgress.radius = width >= 1200 ? 40 : 25
      this.skillProgress.stroke = width >= 1200 ? 12 : 8
    }
  },
  created() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  unmounted() {
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<template>
  <section class="profile">
    <div class="skills">
      <div class="skills__inner">
        <div class="skills__group" v-for="group in groups" :key="group.name">
          <h2 class="skills__group-name">{{ group.name }}:</h2>
          <div class="skills__progress">
            <div class="skills__item" v-for="skill in group.skills" :key="skill.name">
              <span class="skills__item-name">{{ skill.name }}</span>
              <circle-progress-bar :percentage="skill.progress" :radius="skillProgress.radius"
                :stroke="skillProgress.stroke" bar-color="#ae67fa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills {
  text-align: center;

  &__inner {
    display: flex;
    flex-direction: column;
    row-gap: 70px;
  }

  &__group {
    display: flex;
    align-items: center;

    &-name {
      width: 250px;
      text-align: left;
      font-size: 40px;
      text-transform: capitalize;
      @include gradient-text;
    }
  }

  &__progress {
    display: flex;
    column-gap: 70px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;

    &-name {
      width: 120px;
      font-size: 18px;
      font-weight: 500;
    }
  }
}

@media (max-width: 1200px) {
  .skills {
    &__group {
      &-name {
        width: 170px;
        font-size: 30px;
      }
    }

    &__progress {
      column-gap: 20px;
    }
  }
}

@media (max-width: 900px) {
  .profile {
    margin-top: 30px;
    justify-content: center;
  }

  .skills__group {
    row-gap: 30px;
    flex-direction: column;

    &-name {
      width: auto;
    }
  }
}

@media (max-width: 700px) {
  .skills__progress {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
  }
}

@media (max-width: 420px) {
  .skills__progress {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
