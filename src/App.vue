<template>
  <div>
    <div class="traffic-light">
      <color path="/red" class="red"></color>
      <color path="/yellow" class="yellow"></color>
      <color path="/green" class="green"></color>
    </div>
    <stopwatch :currentTime="timeChange"></stopwatch>
  </div>
</template>

<script>
import color from './components/color'

class State {
  constructor (path, dur, next) {
    this.path = path
    this.dur = dur
    this.next = next
  }
}

export default {
  name: 'App',
  data: function () {
    return {
      timeChange: 0
    }
  },
  methods: {
    trigger (state, callback) {
      callback(state)
      this.timeChange = state.dur + 1
      setTimeout(() => {
        this.trigger(state.next, callback)
      }, state.dur * 1000)
    }
  },
  created () {
    var red = new State('/red', 10)
    var yellowR = new State('/yellow', 3)
    var yellowG = new State('/yellow', 3)
    var green = new State('/green', 15)

    red.next = yellowR
    yellowR.next = green
    green.next = yellowG
    yellowG.next = red
    var beginState = red
    if (this.$route.path === '/yellow') beginState = yellowR
    else if (this.$route.path === '/green') beginState = green

    this.trigger(beginState, (state) => {
      this.$router.push({ path: state.path, component: color })
    })
  }
}
</script>

<style>
  body {
    height: 100vh;
  }

  .traffic-light {
    width: 70px;
    height: 240px;
    background: #222;
    border-radius: 8px;
    margin: auto;
    padding: 15px;
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
