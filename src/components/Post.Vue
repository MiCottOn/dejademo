<template>
  <div class="post">
    <slot></slot>
    <div class="post-option">
      <a href="#" @click="showComments">Comments ({{commentCount}})</a>
    </div>
    <template v-if="visible">
      <demo-comment-list :comments="commentList" :commentcount="commentCount"></demo-comment-list>
      <demo-new-comment @commentAdded="newComment"></demo-new-comment>
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
        commentList: ['This is A Comment'],
        commentCount: 1
      }
    },
    props: ['comments'],
    methods: {
      showComments() {
        if (this.visible) this.visible = false;
        else this.visible = true
      }, 
      newComment(comment) {
        this.commentList.push(comment)
        this.commentCount++;
        console.log(this.commentCount)
      }
    },
    components: {
      demoCommentList: CommentList,
      demoNewComment: NewComment
    }
  }
</script>
<style>

</style>