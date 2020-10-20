<template>
  <div class="counter">
    <button @click="decrement">-</button>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Log } from '../decorators';

export default class Counter extends Vue {
  public count = 0;

  @Log
  public increment() {
    this.count++;
  }

  public decrement() {
    if (this.count === 0) { return; }
    this.count--;
  }
}
</script>