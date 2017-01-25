<template>
  <div id="posts">
    <h2>Total Posts: {{count}}</h2>
    <demo-post v-for="post in posts" :postArray="posts">{{post}}</demo-post>
  </div>
</template>

<script>
// import Post from './Post.vue';
  export default {
    props: ['posts', 'count'],
    components: {
      // demoPost: Post
    }
  }
</script>
