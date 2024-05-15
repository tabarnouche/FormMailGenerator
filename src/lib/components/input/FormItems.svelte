<script>
    import {FormStore} from '$lib/stores/Form'
</script>

<section class="my-4">
    <h3 class="text-xl my-4">フォーム項目</h3>
    <div class="m-4">
        <table>
            <tr>
                <th class="w-24">id</th>
                <th>ラベル</th>
                <th>タイプ</th>
                <th>必須</th>
            </tr>
            <tr>
                <td>
                    <input type="text" class="input" value="name" disabled/>
                </td>
                <td>
                    <input type="text" class="input" bind:value={$FormStore.fixedItems.name} />
                </td>
                <td>
                    <select class="select" disabled>
                        <option>text</option>
                    </select>
                </td>
                <td>
                    <input type="checkbox" class="checkbox cursor-not-allowed !bg-gray-300 !filter-none" checked disabled/>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" class="input" value="email" disabled/>
                </td>
                <td>
                    <input type="text" class="input" bind:value={$FormStore.fixedItems.email} />
                </td>
                <td>
                    <select class="select" disabled>
                        <option>email</option>
                    </select>
                </td>
                <td>
                    <input type="checkbox" class="checkbox cursor-not-allowed !bg-gray-300 !filter-none" checked disabled/>
                </td>
            </tr>
            {#each $FormStore.unfixedItems as item, index}
                <tr>
                    <td>
                        <input type="text" class="input" bind:value={item.id} />
                    </td>
                    <td>
                        <input type="text" class="input" bind:value={item.label} />
                    </td>
                    <td>
                        <select class="select" bind:value={item.type}>
                            <option>text</option>
                            <option>email</option>
                            <option>tel</option>
                            <option>textarea</option>
                        </select>
                    </td>
                    <td>
                        <input type="checkbox" class="checkbox" bind:checked={$FormStore.unfixedItems[index].required} />
                    </td>
                </tr>
            {/each}
        </table>
    </div>
</section>
