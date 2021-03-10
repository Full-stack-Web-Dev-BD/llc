import { atom } from 'recoil'

export const navShow = atom({
    default: true,
    key: 'navShow'
})
export const userInfo = atom({
    default: {
        isAuthenticated: false,
        user: {}
    },
    key: 'userInfo'
})
