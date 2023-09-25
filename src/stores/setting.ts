// import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
 
export const settingStore = defineStore('cp-user', () => {
  // 用户信息
  const theme = ref<string>('black')
  // 设置用户，登录后使用
  const setTheme = (t: string) => {
    theme.value = t
  }
//   // 清空用户，退出后使用
//   const delUser = () => {
//     user.value = undefined
//   }
  return { theme, setTheme }
}, {
//   persist:true // 开启持久化
})