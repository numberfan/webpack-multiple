import Vue from 'vue'
import TooltipsVue from './Toast.vue'
let TooltipsConstructor = Vue.extend(TooltipsVue)

let Tooltips = (message, options) => {
  let instance

  options = options || {}
  if (typeof options === 'number') {
    options = {
      duration: options
    }
  }
  options.message = message

  instance = new TooltipsConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  return instance.vm
}

['top', 'middle', 'bottom'].forEach((position) => {
  Tooltips[position] = (message, options) => {
    options = options || {}
    if (typeof options === 'number') {
      options = {
        duration: options
      }
    }
    options.position = position === 'top' ? 'top' : position
    return Tooltips(message, options)
  }
})

// install
Tooltips.install = (Vue) => {
  Vue.prototype.$tooltips = Tooltips
}

export default Tooltips
