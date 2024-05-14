import { writable } from 'svelte/store'

type Item = {
    key: string,
    value: string,
}

const footerVal: Item[] = [
    {
        'key': '住所',
        'value': '',
    },
    {
        'key': '電話番号',
        'value': '',
    },
    {
        'key': 'FAX',
        'value': '',
    },
    {
        'key': '営業時間',
        'value': '',
    },
]

const initFooterVal = structuredClone(footerVal)
export const FooterStore = writable(footerVal)

export const addItem = () => {
    FooterStore.update((val) => {
        const newItem: Item = {
            key: '',
            value: '',
        };
        val.push(newItem);
        return val;
    });
}

export const removeItem = (index: number) => {
    FooterStore.update((val) => {
        val.splice(index, 1);
        return val;
    });
}

// TODO: 変更した値がリセットされないのを修正
export const resetStore = () => {
    FooterStore.set([...initFooterVal]);
}