// template is controling adding the items
<template>
  <div class="main">
    <div class="top">
      <h1>Student Queue</h1>
      <form @submit.prevent="addStudent" >
        <input class="link-input" type="text" placeholder="Add your name and question to the queue" v-model="newStudent" />
      </form>
      <ul>
        <!-- create a list element for every student using list rendering -->
        <li v-for="(student,index) in students" v-bind:key="index">
          {{student}}
          <button v-on:click="removeStudents(index)" class="rm">HELPED</button>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <stats />
    </div>
  </div>
</template>


<script>
import Stats from '@/components/Stats.vue'
import { mapState , mapMutations, mapActions} from 'vuex'

export default {
  name: 'studentQueue',
  data(){
    return{
      newStudent: ''
    }
  },
  components:{
    Stats
  },
  //object spreader operator
  computed: {...mapState(['students']),
  },
  methods:{
    ...mapActions(['removeStudent']),
    ...mapMutations(['Add_student']),
    addStudent:function(){
      this.Add_student(this.newStudent)
      this.newStudent=''
    },
    removeStudents: function(student) { 
      this.removeStudent(student)
    }
  }

  
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: rgb(0, 0, 0);
    margin: 0;
    color:white;
  }

  .main {
    display: grid;
    grid-template-rows:80%;
    grid-template-areas:
      "left"
      "right";
  }

  .top, .bottom {
    padding: 30px;
  }


  .bottom {
    grid-area: right;
    background-color: rgb(43, 43, 43);
  }
  input {
    border: none;
    padding: 20px;
    width: calc(100% - 35px);
    outline: none;
  }
  .rm {
    float: right;
    padding: 5px;
    font-size: .8em;
    background:rgb(140, 0, 255);
    border: none;
    color:rgb(255, 255, 255);
    cursor:pointer;
    border-radius: 5px;

    
  }
  ul {
    list-style-type: none;
    padding: 0;
    color:black;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }
</style>
