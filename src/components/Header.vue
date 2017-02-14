<template>
  <header id="header">
    <h1><router-link to="/">DejaDemo</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    methods: {
      clearPosts: function() {
        this.$emit('clearPosts')
      }
    }
  }
</script>