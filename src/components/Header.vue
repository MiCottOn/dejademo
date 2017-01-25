<template>
  <header id="header">
    <h1><router-link to="/">Welcome to dejavue.co! We love you.</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/docs">Getting Started</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <!--<li><a href="#" @click="clearPosts">Clear Posts</a></li>-->
      </ul>
    </nav>
  </header>
</template>
<script>
  // export default {
  //   methods: {
  //     clearPosts() {
  //       this.$emit('clearPosts')
  //     }
  //   }
  // }
</script>