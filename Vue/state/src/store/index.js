import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// this is the file that state is defined in

export default new Vuex.Store({
  state: {
    students: ['Michael - I do not know how to call this function',
    'Nicole - I am running into a runtime error',
    'Lauren - I would like to ask a clarification question']
  },
  getters:{
    //create getter named countLinks then grating acess to state
    countLinks: state => {
      return state.students.length
    }
  },
  //mutations are for creating change in the data
  mutations: {
    //adding student to student array
    Add_student:(state, student) => {
      state.students.push(student)
    },
    Remove_student:(state, student) => {
      state.students.splice(student,1)
    },
    Remove_all:(state) =>{
      state.students = []
    }
  },
  actions: {
    removeStudent: (context,student) =>{
      context.commit("Remove_student", student)
    },
    //use a promise to remove all the links from the queue when class is over
    removeAll ({commit}) {                       
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('Remove_all')
          resolve()
        }, 1500)
      })
    }
  },
  modules: {
  }
})
