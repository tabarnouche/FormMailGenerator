import { writable } from 'svelte/store'

const initVal = {
    companyName: '',
    siteName: '',
    emailAddress: '',
    replyLimitValue: '2',
    replyLimitUnit: '営業日',
}

export const InformationStore = writable(initVal)
