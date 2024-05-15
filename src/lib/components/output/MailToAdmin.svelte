<script>
    import { InformationStore } from '$lib/stores/Information'
    import { FormStore } from '$lib/stores/Form'

    import SnippetBlock from '$lib/components/SnippetBlock.svelte'

    $: replyLimit = $InformationStore.replyLimitValue + $InformationStore.replyLimitUnit

    $: snippet = `
${$InformationStore.siteName} のフォームより下記の通り、お問い合わせがありました。
${replyLimit} 以内に返信をするようお願いいたします。

———————————————————————
${$FormStore.fixedItems.name}: [name]
${$FormStore.fixedItems.email}: [email]
${$FormStore.unfixedItems.map(item => `${item.label}: [${item.id}]`).join('\n')}
———————————————————————
    `
</script>

<section class="p-4">
    <h3 class="text-xl mb-4">管理者宛メール</h3>
    <div>
        <SnippetBlock snippet={snippet} language="plaintext"></SnippetBlock>
    </div>
</section>
