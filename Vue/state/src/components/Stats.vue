// template is controling adding the items for the stats compontent
<template>
  <div class="Status">
   <h1> Instructor's Quick View </h1>
   <p> There are currently {{ countLinks}} students that need to be helped</p>
   <button v-on:click="removeAllStudents">Remove All Students From Que</button>
    <p>{{ message }}</p>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Status',
  data() {
    return {
      message: ''
    }
  },
  //object spreader operator
  computed: {...mapGetters(['countLinks']),},
  methods:{
    ...mapActions(['removeAll']),
    ...mapMutations(['Remove_all']),
    removeAllStudents(){
      this.removeAll().then(() => {
      this.message = 'The student queue is empty.'
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


button {
    color:white;
    padding: 8px;
    margin-top: 25px;
    width: 100%;
    background: none;
    border: 1px solid rgb(163, 162, 162);
    cursor: pointer;
}
</style>
