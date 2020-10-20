<template>
  <div class="counter">
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

export default class Counter extends Vue {
  count = 0

  increment () {
    this.count++
  }

  decrement () {
    if (this.count === 0) return
    this.count--
  }
}
</script>