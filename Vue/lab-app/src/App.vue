<template>
<!-- HTML ITEMS -->
  <div id="app" class = "small-container">
    <h1>Students Help Queue</h1>
    <student-table v-bind:students="students" @delete:student="deleteStudent"/>
    <student-form @add-student="addStudent" />

  </div>
</template>

<script>
// import the compontents on the page
import StudentTable from '@/components/StudentTable.vue'
import StudentForm from '@/components/StudentForm.vue'


export default {
  name: 'app',
  components: {
    StudentTable,
    StudentForm,
  },

  data(){
    return{
      students:[
      {
        id:1,
        name: 'Joe Smoe',
        email:'JS@gmail.com',
        help: 'I need help on how to implement a class.',
      },
      {
        id:2,
        name: 'Paul Smith',
        email:'Paul@gmail.com',
        help: 'I do not understand the assignment please help.',
      },
      {
        id:3,
        name: 'Nicole Hamm',
        email:'NicoleHamm@gmail.com',
        help: 'I need help adding methods to my functions.',
      },
      
      ],
    }
  },
  methods:{
    addStudent(student){
      if( this.students.length > 0 ){
        var newID= this.students.length +1
      }
      const newStudent = { ...student, newID};
      this.students = [...this.students,newStudent]
    },
    deleteStudent(id) {
      this.students = this.students.filter(
        students => students.id !== id
      )
    }
  },
}


</script>

<style>
  button {
    background: #00ffdd;
    border: 1px solid #00ffdd;
    color:black
  }

  .small-container {
    max-width: 700px;
  }
  body{
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    justify-content: center;
    color:white;
    background-color:black;
  }
  
</style>
