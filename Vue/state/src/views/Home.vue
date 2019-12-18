<template>
  <div class="home">
    <studentQueue />
  </div>
</template>

<script>
// @ is an alias to /src
import studentQueue from '@/components/studentQueue.vue'

export default {
  name: 'home',
  components: {
    studentQueue
  }
}
</script>
