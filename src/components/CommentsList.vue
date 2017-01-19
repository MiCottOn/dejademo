<template>
  <div class="comments">
    <demo-comment v-for="comment in comments">
      {{comment}}
    </demo-comment>
  </div>
</template>

<script>
  import DemoComment from './Comment.vue';

  export default {
    props: ['comments', 'commentcount'],
    components: {
      demoComment: DemoComment,
    }
  }
</script>