<template lang="pug">
    div
      h1 {{message}}
      h2 {{title}}
      phone-number
</template>

<script>
import PhoneNumber from 'vue-phone-number'

export default {
  name: 'app',
  data: function () {
    return {
      message: 'hello from component',
      title: 'with pug!'
    }
  },
  components: {
    PhoneNumber
  }
}
</script>

<style>
$color_red: #f00;

h1 {
  color: $color_red;
  text-align: center;
  display: inline-block;
  width: 100%;
}
</style>
