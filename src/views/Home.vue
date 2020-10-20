<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Mixins/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Mixins from '@/components/Mixins.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Mixins
  },
})
export default class Home extends Vue {}
</script>
