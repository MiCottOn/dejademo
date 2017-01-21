<template>
  <header id="header">
    <h1>DejaDemo</h1>
    <nav>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#" @click="clearPosts">Clear Posts</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    methods: {
      clearPosts() {
        this.$emit('clearPosts')
      }
    }
  }
</script>