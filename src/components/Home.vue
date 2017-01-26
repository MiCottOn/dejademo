<template>
  <div>
   <NewPost @postAdded="newPost"></NewPost>
   <PostList :posts="posts" :count="postCount"></PostList>
  </div>
</template>
<script>
  import PostList from './components/PostList.vue';
  import NewPost from './components/NewPost.vue';

  export default {
    name: 'Home',
    data: function() {
      return {
        posts: ['This is a Post', 'This is also a post'],
        postCount: 2
      }
    },
    methods: {
      newPost: function(post) {
        if (post === '') return;
        this.posts.unshift(post);
        this.postCount++;
      },
      clearPosts: function() {
        this.posts = [];
        this.postCount = 0;
      }
    },
    components: {
      PostList: PostList,
      NewPost: NewPost,
    }
  }
</script>