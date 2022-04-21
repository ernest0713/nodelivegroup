<template>
  <div class="hello">
    <ul class="d-flex justify-content-center mt-5">
      <li><router-link to="/wall">動態牆</router-link></li>
      <li><router-link to="/newpost">張貼動態</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
