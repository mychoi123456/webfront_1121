import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  combine(
    {
      count: 0,
      double: 0
    },
    set => {
      function increaseDouble() {
        set(state => ({
          double: state.count * 2
        }))
      }
      function increase() {
        set(state => ({
          count: state.count + 1
        }))
        increaseDouble()
      }
      return {
        increase,
        increaseDouble
      }
    }
  )
)
