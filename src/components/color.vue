<template>
  <div class="light" :class="{active: isActive}">
  </div>
</template>
<script>
export default {
  props: ['path'],
  computed: {
    isActive: function () {
      return this.$route.path === this.path
    }
  }
}
</script>
<style>
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
</style>
