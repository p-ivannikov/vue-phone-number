<template lang="pug">
    div
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
