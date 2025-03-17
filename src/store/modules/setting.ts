import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLayoutSettingStore = defineStore('SettingStore', () => {
  const fold = ref(false)

  const changeFold = () => {
    fold.value = !fold.value
  }

  return {
    fold,
    changeFold,
  }
})

export default useLayoutSettingStore
