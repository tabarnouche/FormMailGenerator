<script>
    import { clipboard } from '@skeletonlabs/skeleton';
    import { InformationStore } from '$lib/stores/Information';
    import { FooterStore } from '$lib/stores/Footer'

</script>

<section class="p-4">
    <h2 class="mb-4">ユーザー宛メール</h2>
    <pre class="card card-hover p-4 cursor-pointer whitespace-pre-line" data-clipboard="cb" use:clipboard={{ element: 'cb' }}>
[USER_NAME] 様

{
$InformationStore.siteName != ''
    ? $InformationStore.siteName
    : $InformationStore.companyName
}へお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受付いたしました。

———————————————————————
———————————————————————

内容を確認次第、担当者よりご連絡いたしますので、今しばらくお待ちください。

{$InformationStore.replyLimitValue}{$InformationStore.replyLimitUnit}以内にご連絡がない場合は、お手数ですがこのメールに返信する形でお問い合わせください。

---
{$InformationStore.companyName}
{#each $FooterStore as item}
{@html ''}
{item.key}: {item.value}
{/each}
メールアドレス: {$InformationStore.emailAddress}
    </pre>
</section>
