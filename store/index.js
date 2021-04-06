export const state = () => {
  return {
    mobileMenuOpened: false,
  }
}

export const getters = {
  //   getCannonPlace: (state) => (place) => {
  //     return state.places[place]
  //   },
}

export const actions = {
  toggleMobileMenu({ commit }) {
    commit('TOGGLE_MOBILEMENU')
  },
  setMobileMenu({ commit }, payload) {
    commit('SET_MOBILEMENU', payload)
  },
}

export const mutations = {
  TOGGLE_MOBILEMENU(state) {
    state.mobileMenuOpened = !state.mobileMenuOpened
  },
  SET_MOBILEMENU(state, payload) {
    state.mobileMenuOpened = payload
  },
}
