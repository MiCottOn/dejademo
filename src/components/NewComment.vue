<!--<template>
  <div id="create-comment" class="clearfix">
    <input type="text" class="comment-input" placeholder="Add your comment" v-model="comment" @keyup.enter="createNewComment">
  </div>  
</template>

<script>
  export default {
    data: function() {
      return {
        comment: ''
      }
    },
    methods: {
      createNewComment() {
        this.$emit('commentAdded', this.comment);
        this.comment = null;
      }
    }
  }
</script>-->