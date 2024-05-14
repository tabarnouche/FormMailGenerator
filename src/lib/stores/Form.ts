import { writable } from 'svelte/store'

type Item = {
    id: string,
    label: string,
    type: string,
    required: boolean,
}

const fixedItems = {
    name: 'お名前',
    email: 'メールアドレス',
}

const unfixedItems: Item[] = [
    {
        id: 'tel',
        label: 'お電話番号',
        type: 'tel',
        required: false,
    },
    {
        id: 'message',
        label: 'お問い合わせ内容',
        type: 'textarea',
        required: true,
    },
]

const initVal = {
    fixedItems,
    unfixedItems,
}

export const FormStore = writable(initVal)
