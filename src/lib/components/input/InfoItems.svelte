<script>
    import { InformationStore } from '$lib/stores/Information'
</script>

<section class="my-4">
    <h3 class="text-xl my-4">基本情報</h3>
    <div class="m-4">
        <fieldset class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="">
                <label class="label" for="companyName">会社・団体名</label>
                <input type="text" autocomplete="off" id="companyName" class="input" bind:value={$InformationStore.companyName} />
            </div>
            <div class="">
                <label class="label" for="siteName">サイト名</label>
                <input type="text" autocomplete="off" id="siteName" class="input" bind:value={$InformationStore.siteName} />
            </div>
            <div class="">
                <label class="label" for="emailAddress">メールアドレス</label>
                <input type="email" autocomplete="off" id="emailAddress" class="input" bind:value={$InformationStore.emailAddress} />
            </div>
            <div class="">
                <label class="label" for="replyLimit">返信期限</label>
                <div>
                  <input type="text" autocomplete="off" id="replyLimit" class="input w-24" bind:value={$InformationStore.replyLimitValue} />
                  <select class="select w-fit" bind:value={$InformationStore.replyLimitUnit}>
                      <option>営業日</option>
                      <option>日</option>
                      <option>時間</option>
                  </select>
                  <span>以内</span>
                </div>
            </div>
        </fieldset>
    </div>
</section>
