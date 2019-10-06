<template>
    <div class="stopwatch">{{currentTime}}
    </div>
</template>

<script>
export default {
  name: 'stopwatch',
  props: ['currentTime'],
  mounted () {
    setInterval(() => {
      this.currentTime--
    }, 1000)
  }
}
</script>

<style>
  .stopwatch {
    width: 70px;
    height: 35px;
    background: aqua;
    border: 2px solid #000;
    border-radius: 3px;
    margin-left: 20px;
    overflow: hidden;
    line-height: 35px;
    font-size: 25px;
    text-align: center;
  }
</style>
