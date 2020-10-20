<template>
  <div class="mixins"></div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
import { Hello, World } from '../mixins'

export default class Mixins extends mixins(Hello, World) {
  created () {
    console.log(`${this.hello} ${this.world}!`)
  }
}
</script>