<template>
    <ListsUser/>
</template>

<script>
import ListsUser from './components/ListsUser.vue'

export default {
  name: 'App',
  components: {
    ListsUser
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 60px auto;
  max-width: 1200px;
  text-align: center;
}
</style>
