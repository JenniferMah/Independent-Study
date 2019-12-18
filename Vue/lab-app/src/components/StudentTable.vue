<template>
<!-- utalize CSS tables to for layout -->
  <div id="student-table">
    <table>
      <thead>
        <p v-if="students.length < 1" class="empty-table">
         No students need help
        </p>
        <tr v-else>
          <th>Student's Name</th>
          <th>Student's Email</th>
          <th>What you need help on</th>
          <th>Helped</th>
        </tr>
      </thead>
      <!-- things that go into the list -->
      <tbody>
        <!-- for every item in the students array add the student name and email to a list key
        is similar to i in this case and uniquely identifys each element in the array-->
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.help }}</td>
          <td><button @click="$emit('delete:student', student.id)">Helped</button></td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'employee-table',
    //retrieve props from the app vue
    props:{
      students: Array,
    }
  }
</script>

<style scoped>
  button {
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 8px;
}

thead th {
  border-bottom: 2px solid  #ddd;
}

tfoot th {
  border-top: 2px solid  #ddd;
}

td {
  border-bottom: 1px solid  #ddd;
}

th,
td {
  text-align: left;
  padding: .5rem;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
}
</style>