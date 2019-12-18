<template>
 <div id="student-form">
    <form v-on:submit.prevent="sumbitButtonClicked">
      <label>Student's Name</label>
      <input v-model="student.name" type="text" class = "box" />
      <label>Student's Email</label>
      <input v-model="student.email" type="text" class = "box" />
       <label>What you need help on:</label>
      <input v-model="student.help" type="text"  class = "box"/>
      <br>
      <button>Add To Que</button>
    </form>
</div>
</template>

<script>
  export default {
    name: 'student-form',
    data() {
      return {
        student: {
          name: '',
          email: '',
          help:'',
        },
      }
    },
// this is where we declare the methods for this componenet
    methods:{
      //event handler for when the button is clicked
      sumbitButtonClicked(){
        //Emit broadcasts a name of an event and data to its parent component
        //useing this to pass data to parent class (app)
        this.$emit('add-student', this.student)
      },
    }
  }
</script>

<style scoped>
  
  form {
    display: block;
    padding: .75rem;
    outline: none;
    margin-bottom: .5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
    line-height: 1;
  }
  textarea {
    overflow: auto;
    height: auto;
  }
  label {
  font-weight: 600;
  max-width: 100%;
  display: block;
  margin: 1rem 0 .5rem;
} 

button {
  padding: 10px 32px;
  margin-top: 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}
.box{
 width: 500px; height: 20px
}
</style>