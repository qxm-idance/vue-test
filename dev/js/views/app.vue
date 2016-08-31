<template>
	<div>
		<div title="按钮类型">
		    <v-button type="primary">主按钮</v-button>
		    <v-button>次按钮</v-button>
		    <v-button type="ghost">幽灵按钮</v-button>
	  	</div>
  	</div>
</template>

<script>
import vButton, { vButtonGroup } from '../../components/button'
import vIcon from '../../components/iconfont'

export default {
  data () {
    return {
      loading: false
    }
  },

  components: { vButton, vButtonGroup, vIcon },

  methods: {
    _enterLoading () {
      this.loading = true
    }
  }
}

</script>
