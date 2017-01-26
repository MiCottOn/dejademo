<template>
  <div class="comments">
    <Comment v-for="comment in comments">
      {{comment}}
    </Comment>
  </div>
</template>

<script>
  import DemoComment from './Comment.vue';

  export default {
    props: ['comments', 'commentcount'],
    components: {
      Comment: DemoComment,
    }
  }
</script>