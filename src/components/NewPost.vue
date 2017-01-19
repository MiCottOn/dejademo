<template>
  <div id="create-post" class="clearfix">
    <h2>What's on your mind?</h2>
    <input type="text" id="post-input" v-model="post">
    <button id="submit" @click.prevent="createNew">Publish</button>
  </div>  
</template>

<script>
  export default {
    data: function() {
      return {
        post: ''
      }
    },
    methods: {
      createNew() {
        this.$emit('postAdded', this.post);
        this.post = '';
      }
    }
  }
</script>