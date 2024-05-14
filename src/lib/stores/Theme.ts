import { writable } from 'svelte/store'

const initVal = 'skeleton'

export const ThemeStore = writable(initVal)