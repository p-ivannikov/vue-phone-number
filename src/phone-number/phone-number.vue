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

  ul.pn-list.pn-control__pn-list(v-if="opened")
    li.pn-list__item(v-for="(phoneCodes, countryCode) in phones")
      button.pn-button.pn-button_theme_country-code(type=button)
        span.pn-country-info(v-for="code in phoneCodes") {{code}}
        span.pn-country-info {{names[countryCode]}}

</template>

<script>
import countryNames from '../data/country-names.json'
import countryPhones from '../data/country-phones.json'

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
        this.updatePhone()
      }
    },
    phones: function () {
      return countryPhones
    },
    names: function () {
      return countryNames
    }
  },
  methods: {
    updatePhone () {
      this.$emit('input', this._model)
    },
    toggle () {
      if (this.opened) {
        this.close()
        return
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
