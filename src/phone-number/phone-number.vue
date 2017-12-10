<template lang="pug">
div.pn-control
  label
    span.pn-control__label {{label}}
    input.pn-control__field.pn-control__field_toggle(
      type="text" 
      v-model="phone"
    )

  button.pn-button.pn-control__pn-button(
    type="button"
    :class="{ 'pn-button_active': opened }"
    @click="toggle()"
  ) &#x25BC;

  ul.pn-list.pn-control__pn-list(
    v-if="opened"
    )
    li.pn-list__item +7 Russian Federation
</template>

<script>
import countryNames from '../data/country-names.json'
console.log(countryNames)
export default {
  name: 'PhoneNumber',
  props: {
    value: {
      type: String
    }
  },
  data: () => {
    return {
      _model: '',
      label: 'Phone',
      opened: false
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
    updatePhone () {
      this.$emit('input', this._model)
    },
    toggle () {
      if (this.opened) {
        this.close()
        return;
      }

      this.open()
    },
    close () {
      this.opened = false;
    },
    open () {
      this.opened = true;
    }
  },
  created () {
    this._model = this.value
  }
}
</script>
