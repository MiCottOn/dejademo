<template>
  <div id="posts">
    <h2>Total Posts: {{count}}</h2>
    <DemoPost v-for="post in posts" :postArray="posts">{{post}}</DemoPost>
  </div>
</template>

<script>
import Post from './Post.vue';
  export default {
    props: ['posts', 'count'],
    components: {
      DemoPost: Post
    }
  }
</script>
