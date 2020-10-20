<template>
  <div class="greeting">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Options, Vue, mixins } from 'vue-class-component'
import Super from './Super.vue'

@Options({
  components: {
    Super
  },
  props: {
    name: String
  }
})

export default class Greeting extends mixins(Vue, Super)  {
  name!: string

  get message(): string {
    return `${this.superValue}, ${this.name}`
  }
}
</script>