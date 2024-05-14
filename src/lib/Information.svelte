<script>
    import { RequiredStore, FooterStore, addItem, removeItem, resetStore } from '$lib/stores/Information';
</script>

<section class="p-4">
    <h2 class="mb-8">基本情報</h2>
    <div>
        <div>
            <h3 class="my-4">必須項目</h3>
            <div class="m-4">
                <table>
                    <tr>
                        <td>
                            <label class="label" for="companyName">会社名</label>
                        </td>
                        <td>
                            <input type="text" id="companyName" class="input" bind:value={$RequiredStore.companyName} placeholder="◯◯株式会社" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="label" for="serviceName">サービス名</label>
                        </td>
                        <td>
                            <input type="text" id="serviceName" class="input" bind:value={$RequiredStore.serviceName} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="label" for="replyLimit">返信期限</label>
                        </td>
                        <td>
                            <input type="text" id="replyLimit" class="input w-24" bind:value={$RequiredStore.replyLimit.value} placeholder="返信期限" />
                            <select class="select w-fit" bind:value={$RequiredStore.replyLimit.unit}>
                                <option>営業日</option>
                                <option>日</option>
                                <option>時間</option>
                            </select>
                            <span>以内</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div>
            <h3 class="my-4">フッター記載項目</h3>
            <div class="m-4">
                <table>
                    {#each $FooterStore as item, index}
                        <tr>
                            <td>
                                <input type="text" class="bg-transparent border-x-0 border-b-1 border-t-0 w-32 focus:border-0" bind:value={item.key} />
                            </td>
                            <td>
                                <input type="text" class="input" bind:value={item.value} placeholder={item.placeholder} />
                            </td>
                            <td>
                                <button class="btn variant-filled-warning" on:click={() => removeItem(index)}>削除</button>
                            </td>
                        </tr>
                    {/each}
                </table>
                <button class="btn variant-filled-success" on:click={() => addItem()}>追加</button>
                <button class="btn variant-filled-error" on:click={() => resetStore()}>リセット</button>
            </div>
        </div>
    </div>
</section>
