<template>
  <div id="app">
    <router-link to="/red">Red</router-link>
    <router-link to="/yellow">Yellow</router-link>
    <router-link to="/green">Green</router-link>
    <div id="traffic-light">
      <color class="red" :class="{active: this.$route.path === '/red'}"></color>
      <color class="yellow" :class="{active: this.$route.path === '/yellow'}"></color>
      <color class="green" :class="{active: this.$route.path ==='/green'}"></color>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    height: 100vh;
  }

  #traffic-light {
    width: 70px;
    height: 240px;
    background: #222;
    border-radius: 8px;
    margin: auto;
    padding: 15px;
  }
  .light {
    display: inline-block;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
    opacity: 0.2;
    transition: opacity 0.2s
  }
  .active {
    opacity: 1;
  }
  .red {
    background: red;
  }
  .yellow {
    background: yellow;
  }

  .green {
    background: limegreen;
  }

</style>
