<template>
  <div id="create-post" class="clearfix">
    <h2>What's on your mind?</h2>
    <input type="text" id="post-input" v-model="post" @keyup.enter="createNew">
    <button id="submit" @click.prevent="createNew">Publish</button>
  </div>  
</template>

<script>
  export default {
    data: function() {
      return {
        post: null
      }
    },
    methods: {
      createNew: function() {
        if (this.post === null) return false;
        else {
          this.$emit('postAdded', this.post);
          this.post = null;
        }
      }
    }
  }
</script>