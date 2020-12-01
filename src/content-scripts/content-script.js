// const inputs = document.querySelectorAll('input[autocomplete="new-password"]')
//
// inputs.forEach(input => {
//   input.value = 'qweqwe'
// })
//
//
// console.log(inputs)

// import store from '../store'
//
// const test = async () => {
//   const response = await store.dispatch('updateHist', 'qweqwe')
//   console.log(response)
// }
//
// test()

// window.addEventListener('click', notifyExtension)
//
// function notifyExtension (e) {
//   browser.runtime.sendMessage({ url: e.target.href })
// }

import Vue from 'vue'
import Content from './Content'
import store from '../store'

const wrapper = document.createElement('div')
wrapper.id = 'pasgendernoeneravenstvo'
document.body.prepend(wrapper)

/* eslint-disable no-new */
new Vue({
  el: '#pasgendernoeneravenstvo',
  store,
  render: h => h(Content)
})
