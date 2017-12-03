<template lang="pug">
    div
      div
        h4 result: {{phone}}
      phone-number(v-model="phone" @input="phoneChanged($event)")
</template>

<script>
import PhoneNumber from 'vue-phone-number'

export default {
  name: 'app',
  data: function () {
    return {
      phone: '+44 (787) 579-22-12'
    }
  },
  components: {
    PhoneNumber
  },
  methods: {
    phoneChanged (value) {
      this.phone = value
    }
  }
}
</script>
