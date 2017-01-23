<template>
  <div>
    <demoHeader @clearPosts="clearPosts"></demoHeader>
    <div class="container">
      <demo-new-post @postAdded="newPost"></demo-new-post>
      <demo-post-list :posts="posts" :count="postCount"></demo-post-list>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import PostList from './components/PostList.vue';
import NewPost from './components/NewPost.vue';

export default {
  name: 'app',
  data: function() {
    return {
      posts: ['This is a Post', 'This is also a post'],
      postCount: 2 
    }
  },
  methods: {
    newPost(post) {
      if (post === '') return;
      this.posts.unshift(post);
      this.postCount++;
    }, 
    clearPosts() {
      this.posts = [];
      this.postCount = 0;
    }
  },
  components: {
    demoPostList: PostList,
    demoNewPost: NewPost,
    demoHeader: Header
  }
}
</script>

