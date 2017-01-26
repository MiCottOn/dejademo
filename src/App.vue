<template>
  <div>
    <DemoHeader @clearPosts="clearPosts"></DemoHeader>
    <div class="container">
      <PostForm @postAdded="newPost"></PostForm>
      <PostList :posts="posts" :count="postCount"></PostList>
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
      posts: ['This is a Post'],
      postCount: 1
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
    PostList: PostList,
    PostForm: NewPost,
    DemoHeader: Header
  }
}
</script>

