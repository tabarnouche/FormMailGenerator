<script>
    import { InformationStore } from '$lib/stores/Information'
    import { FooterStore } from '$lib/stores/Footer'
    import { FormStore } from '$lib/stores/Form'

    import SnippetBlock from '$lib/components/SnippetBlock.svelte'

    $: senderName = $InformationStore.siteName !== ''
        ? $InformationStore.siteName
        : $InformationStore.companyName

    $: replyLimit = $InformationStore.replyLimitValue + $InformationStore.replyLimitUnit


    $: snippet = `
[USER_NAME] 様

${senderName}へお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受付いたしました。

———————————————————————
———————————————————————

内容を確認次第、担当者よりご連絡いたしますので、今しばらくお待ちください。

${replyLimit}以内にご連絡がない場合は、お手数ですがこのメールに返信する形でお問い合わせください。

---
    `
</script>

<section class="p-4">
    <h3 class="mb-4">ユーザー宛メール</h3>
    <pre class="card card-hover p-4 cursor-pointer whitespace-pre-line">
{$InformationStore.companyName}
{#each $FooterStore as item}
{@html ''}
{item.key}: {item.value}
{/each}
メールアドレス: {$InformationStore.emailAddress}
    </pre>
    <div>
        <SnippetBlock snippet={snippet} language="plaintext" showLineNumbers={false}></SnippetBlock>
    </div>
</section>
