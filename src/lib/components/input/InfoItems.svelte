<script>
    import { InformationStore } from '$lib/stores/Information'
</script>

<section class="my-4">
    <h3 class="text-xl my-4">基本情報</h3>
    <div class="m-4">
        <table>
            <tr>
                <td>
                    <label class="label" for="companyName">会社・団体名</label>
                </td>
                <td>
                    <input type="text" id="companyName" class="input" bind:value={$InformationStore.companyName} />
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label" for="siteName">サイト名</label>
                </td>
                <td>
                    <input type="text" id="siteName" class="input" bind:value={$InformationStore.siteName} />
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label" for="emailAddress">メールアドレス</label>
                </td>
                <td>
                    <input type="email" id="emailAddress" class="input" bind:value={$InformationStore.emailAddress} />
                </td>
            </tr>
            <tr>
                <td>
                    <label class="label" for="replyLimit">返信期限</label>
                </td>
                <td>
                    <input type="text" id="replyLimit" class="input w-24" bind:value={$InformationStore.replyLimitValue} />
                    <select class="select w-fit" bind:value={$InformationStore.replyLimitUnit}>
                        <option>営業日</option>
                        <option>日</option>
                        <option>時間</option>
                    </select>
                    <span>以内</span>
                </td>
            </tr>
        </table>
    </div>
</section>
