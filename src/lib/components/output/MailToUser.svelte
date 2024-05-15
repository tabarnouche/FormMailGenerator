<script>
    import { InformationStore } from '$lib/stores/Information'
    import { FooterStore } from '$lib/stores/Footer'
    import { FormStore } from '$lib/stores/Form'

    import SnippetBlock from '$lib/components/SnippetBlock.svelte'

    $: replyLimit = $InformationStore.replyLimitValue + $InformationStore.replyLimitUnit

    $: snippet = `
[name] 様

${$InformationStore.siteName} へお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受付いたしました。

———————————————————————
${$FormStore.fixedItems.name}: [name]
${$FormStore.fixedItems.email}: [email]
${$FormStore.unfixedItems.map(item => `${item.label}: [${item.id}]`).join('\n')}
———————————————————————

内容を確認次第、担当者よりご連絡いたしますので、今しばらくお待ちください。

${replyLimit} 以内にご連絡がない場合は、お手数ですがこのメールに返信する形でお問い合わせください。

---
${$InformationStore.companyName}
${$FooterStore.map(item => `${item.key}: ${item.value}`).join('\n')}
メールアドレス: ${$InformationStore.emailAddress}
    `
</script>

<section class="p-4">
    <h3 class="text-xl mb-4">ユーザー宛メール</h3>
    <div>
        <SnippetBlock snippet={snippet} language="plaintext" showLineNumbers={false}></SnippetBlock>
    </div>
</section>
