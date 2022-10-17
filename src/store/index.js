import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
        food: 'ຕຳໝາກຮຸ່ງ',
        sport: 'ເຕະບານ',
        notfound_page:'ບໍ່ພົບໜ້າທີ່ຄົ້ນຫາ',
        back_main_page:'ກັບຄືນໜ້າທຳອິດ',
    }
  },
  getters: {
    food:state => state.food,
    sport:state => state.sport
  },
  mutations: {
    changeFood_state(state, payload){
      state.food = payload;
    },
    changeSport_state(state, payload){
      state.sport = payload;
    }

  },
  actions: {
    changeFood_state(context, payload){
      // let aaa = '123'
      context.commit('changeFood_state', payload)
      
      // commit('changeFood_state', payload)
    },

    changeSport_state({commit}, payload){
 
      commit('changeSport_state', payload)
      

    }
  },
  modules: {
  }
})
