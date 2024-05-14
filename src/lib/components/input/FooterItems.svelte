<script>
    import { FooterStore, addItem, removeItem, resetStore } from '$lib/stores/Footer'
</script>

<section class="my-4">
    <h3 class="text-xl my-4">フッター記載項目</h3>
    <div class="m-4">
        <table class="mb-4">
            {#each $FooterStore as item, index}
                <tr>
                    <td>
                        <input type="text" class="bg-transparent border-x-0 border-b-1 border-t-0 w-32 focus:border-0" bind:value={item.key} />
                    </td>
                    <td>
                        <input type="text" class="input" bind:value={item.value} />
                    </td>
                    <td>
                        <button class="btn btn-sm variant-filled-warning" on:click={() => removeItem(index)}>削除</button>
                    </td>
                </tr>
            {/each}
        </table>
        <div class="flex justify-end items-center gap-2">
            <button class="btn variant-filled-success" on:click={() => addItem()}>追加</button>
            <button class="btn variant-filled-error" on:click={() => window.confirm('フッター記載項目をリセットしてもよろしいですか？') && resetStore()}>リセット</button>
        </div>
    </div>
</section>
