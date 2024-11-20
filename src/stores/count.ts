import { create } from 'zustand'
import { combine, persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useCountStore = create(
  immer(
    subscribeWithSelector(
      persist(
        combine(
          {
            count: 0,
            double: 0
          },
          set => ({
            increase: () => {
              set(state => ({
                count: state.count + 1
              }))
            }
          })
        ),
        {
          name: 'countStore'
        }
      )
    )
  )
)
