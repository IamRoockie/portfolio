<script>
import { CircleProgressBar } from '@/components'

export default {
  name: 'ProfileView',
  components: { CircleProgressBar },
  data: () => ({
    groups: [
      {
        name: 'frontend',
        skills: [
          { name: 'HTML / CSS', progress: 80 },
          { name: 'JavaScript', progress: 85 },
          { name: 'TypeScript', progress: 50 },
          { name: 'Vue', progress: 65 },
          { name: 'React', progress: 50 }
        ]
      },
      {
        name: 'backend',
        skills: [
          { name: 'PHP', progress: 50 },
          { name: 'C#', progress: 40 },
          { name: 'Java', progress: 40 }
        ]
      },
      {
        name: 'database',
        skills: [
          { name: 'MySQL', progress: 50 },
          { name: 'PostgreSQL', progress: 40 }
        ]
      }
    ]
  })
}
</script>

<template>
  <section>
    <div class='skills'>
      <div class='skills__inner'>
        <div class='skills__group' v-for='group in groups' :key='group.name'>
          <h2 class='skills__group-name'>{{ group.name }}:</h2>
          <div
            class='skills__item'
            v-for='skill in group.skills'
            :key='skill.name'>
            <span class='skills__item-name'>{{ skill.name }}</span>
            <circle-progress-bar
              :percentage='skill.progress'
              :radius='40'
              :stroke='12'
              bar-color='#ae67fa'
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang='scss'>
section {
  margin-top : 120px;
  color      : $light;
}

.skills {
  text-align : center;

  &__inner {
    margin-top     : 50px;
    display        : flex;
    flex-direction : column;
    row-gap        : 70px;
  }

  &__group {
    display     : flex;
    align-items : center;
    column-gap  : 70px;

    &-name {
      width          : 250px;
      text-align     : left;
      font-size      : 40px;
      text-transform : capitalize;
      @include gradient-text;
    }
  }

  &__item {
    display        : flex;
    flex-direction : column;
    align-items    : center;
    row-gap        : 10px;

    &-name {
      width       : 120px;
      font-size   : 18px;
      font-weight : 500;
    }
  }
}
</style>
