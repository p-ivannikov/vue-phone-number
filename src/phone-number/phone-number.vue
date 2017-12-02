<template lang="pug">
h3 {{message}}
</template>

<style>
h3 {
  color: #60a;
}
</style>

<script>
export default {
  name: 'PhoneNumber',
  data: function () {
    return {
      message: 'component message'
    }
  }
}
</script>
