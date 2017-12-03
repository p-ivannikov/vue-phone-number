<template lang="pug">
input(type="text" v-model="phone")
</template>

<script>
export default {
  name: 'PhoneNumber',
  props: {
    value: {
      type: String
    }
  },
  data: () => {
    return {
      _model: ''
    }
  },
  computed: {
    phone: {
      get: function () {
        return this._model
      },
      set: function (value) {
        this._model = value
        this.updatePhone();
      }
    }
  },
  methods: {
    updatePhone() {
      this.$emit('input', this._model)
    }
  },
  created () {
    this._model = this.value
  }
}
</script>
