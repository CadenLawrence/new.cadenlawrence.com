<template>
  <div class="main">
    <about-section></about-section>
    {{this.scrolled}}
    <experience-section></experience-section>
    <project-section></project-section>
    <contact-section></contact-section>
  </div>
</template>

<script>
export default {
  name: 'main',
  props:{scrolled:false},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
