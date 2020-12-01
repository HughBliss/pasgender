<template>
  <h1>Мы сломали сайт</h1>
</template>

<script>
export default {
  name: 'Content',
  created () {
    this.$store.dispatch('updateHist', 'qweqwe').then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
