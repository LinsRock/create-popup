import Vue from 'vue'

/* 首字母大写 */
function upFirstString (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}

/* 将组件实例化并挂载到body下 */
function Popup (component, {props, on}) {
  const newPopup = new Vue({
    data () {
      return {
        props
      }
    },
    render: h => <component props={props} on={on} ref='popupDom' />
  })
  // 挂载到body
  const popupCom = newPopup.$mount()
  document.body.appendChild(popupCom.$el)

  return newPopup.$refs.popupDom
}

/* 创建单例模式 */
function createPopup (component) {
  let popupInstance
  return (options) => {
    return popupInstance = popupInstance || Popup(component, options)
  }
}


// 集中处理popup组件，将$create[popupName]挂载到Vue.prototype上
function createAPI (components = {}) {
  for (let key in components) {
    let popupNmae = '$create' + upFirstString(key)
    Vue.prototype[popupNmae] = createPopup(components[key])
  }
}


export default createAPI