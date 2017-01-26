<template>
  <div>
    <demoHeader></demoHeader>
    <div class="container">
      <h2 class="contact">Contact Form</h2>
      <ContactForm></ContactForm>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Form from './components/Form.vue';

export default {
  name: 'Profile',
  components: {
    demoHeader: Header,
    ContactForm: Form
  }
}
</script>
