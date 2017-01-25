<template>
  <header id="header">
    <h1><router-link to="/">Welcome to dejavue.co! We love you.</router-link></h1>
    <nav>
      <ul>
        <!-- Place this tag where you want the button to render. -->
        Please love us too: <a class="github-button" href="https://github.com/MiCottOn/DejaVue" 
          data-style="mega" data-count-href="/MiCottOn/DejaVue/stargazers" 
          data-count-api="/repos/MiCottOn/DejaVue#stargazers_count" 
          data-count-aria-label="# stargazers on GitHub" 
          aria-label="Star MiCottOn/DejaVue on GitHub">Star</a>
        <li><router-link to="/docs">Getting Started</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <!--<li><a href="#" @click="clearPosts">Clear Posts</a></li>-->
      </ul>
    </nav>
  </header>
</template>
<script>
  // export default {
  //   methods: {
  //     clearPosts() {
  //       this.$emit('clearPosts')
  //     }
  //   }
  // }
</script>