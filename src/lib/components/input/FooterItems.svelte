<script>
    import { FooterStore, addItem, removeItem, resetStore } from '$lib/stores/Footer'
</script>

<section class="my-4">
    <h3 class="text-xl my-4">フッター記載項目</h3>
    <div class="m-4">
        <fieldset class="flex flex-col gap-4">
            {#each $FooterStore as item, index}
                <div class="flex gap-2">
                    <input type="text" class="bg-transparent border-x-0 border-b-1 border-t-0 w-32 focus:border-0" bind:value={item.key} />
                    <input type="text" class="input" bind:value={item.value} />
                    <button class="btn btn-sm variant-filled-warning self-center" on:click={() => removeItem(index)}>削除</button>
                </div>
            {/each}
            <div class="flex justify-end items-center gap-2">
                <button class="btn variant-filled-success" on:click={() => addItem()}>追加</button>
                <button class="btn variant-filled-error" on:click={() => window.confirm('フッター記載項目をリセットしてもよろしいですか？') && resetStore()}>リセット</button>
            </div>
        </fieldset>
    </div>
</section>
