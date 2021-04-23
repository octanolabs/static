<template>
  <button ref="copy" class="copy">
    <v-icon v-if="state === 'copied'" class="w-5 h-5">
      mdi-clipboard-check-multiple-outline
    </v-icon>
    <v-icon v-else class="w-5 h-5">
      mdi-copy
    </v-icon>
  </button>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  data () {
    return {
      state: 'init'
    }
  },
  mounted () {
    const copyCode = new Clipboard(this.$refs.copy, {
      target (trigger) {
        return trigger.previousElementSibling
      }
    })

    copyCode.on('success', (event) => {
      event.clearSelection()
      this.state = 'copied'
      window.setTimeout(() => {
        this.state = 'init'
      }, 2000)
    })
  }
}
</script>