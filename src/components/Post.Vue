<template>
  <div class="post">
    <slot></slot>
    <div class="post-option">
      <a href="#" @click="showComments">Comments ({{commentCount}})</a>
    </div>
    <template v-if="visible">
      <CommentList :comments="commentList" :commentcount="commentCount"></CommentList>
      <CommentBox @commentAdded="newComment"></CommentBox>
    </template>
  </div>
</template>

<script>
  import CommentList from './CommentsList.vue';
  import NewComment from './NewComment.vue';

  export default {
    data: function() {
      return {
        visible: true,
        commentList: [],
        commentCount: 0
      }
    },
    props: ['comments'],
    methods: {
      showComments: function() {
        if (this.visible) this.visible = false;
        else this.visible = true
      },
      newComment: function(comment) {
        this.commentList.unshift(comment)
        this.commentCount++;
        console.log(this.commentCount)
      }
    },
    components: {
      CommentList: CommentList,
      CommentBox: NewComment
    }
  }
</script>
<style>

</style>