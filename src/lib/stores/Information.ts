import { writable } from 'svelte/store'

type Item = {
    key: string,
    value: string,
    placeholder: string,
}

const requiredVal = {
    companyName: '',
    serviceName: '',
    replyLimit: {
        'value': '2',
        'unit': '営業日',
    },
}

export const RequiredStore = writable(requiredVal)


const footerVal: Item[] = [
    {
        'key': '住所',
        'value': '',
        'placeholder': '◯◯県◯◯市0-0-0',
    },
    {
        'key': '電話番号',
        'value': '',
        'placeholder': '0980-00-0000',
    },
    {
        'key': 'FAX',
        'value': '',
        'placeholder': '0980-00-0000',
    },
    {
        'key': 'メール',
        'value': '',
        'placeholder': 'aaaaa@bbb.ccc',
    },
    {
        'key': '営業時間',
        'value': '',
        'placeholder': '平日 9:00-18:00',
    },
]

const initFooterVal = structuredClone(footerVal)
export const FooterStore = writable(footerVal)

export const addItem = () => {
    FooterStore.update((val) => {
        const newItem: Item = {
            key: '',
            value: '',
            placeholder: '',
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
