<template>
  <div>это паапап
    <pre>
    {{ hist }}
  </pre>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    hist () {
      return this.$store.state.hist
    }
  }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
