<template>
  <div id="parent">
    <div class="container">
      <demo-new-post @postAdded="newPost"></demo-new-post>
      <demo-post-list :posts="posts" :count="postCount"></demo-post-list>
    </div>
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import NewPost from './components/NewPost.vue';

export default {
  name: 'app',
  data: function() {
    return {
      posts: [

      ],
      postCount: 0, 
    }
  },
  methods: {
    newPost(post) {
      this.posts.unshift({message: post, comments: []});
      this.postCount++;
    }
  },
  components: {
    demoPostList: PostList,
    demoNewPost: NewPost
  }
}
</script>
