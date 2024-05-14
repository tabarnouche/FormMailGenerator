<script>
    import { clipboard } from '@skeletonlabs/skeleton';
    import { FooterStore } from '$lib/stores/Information'
</script>

<section class="p-4">
    <h2 class="h2 mb-4">ユーザー宛メール</h2>
    <pre class="card card-hover p-4 cursor-pointer" data-clipboard="cb" use:clipboard={{ element: 'cb' }}>
※このメールはシステムからの自動返信です

様

お世話になっております。
へのお問い合わせありがとうございました。

以下の内容でお問い合わせを受け付けいたしました。
以内に、担当者よりご連絡いたしますので
今しばらくお待ちくださいませ。

━━━━━━□■□ お問い合わせ内容 □■□━━━━━━
お名前： 
E-Mail: 
電話番号： 

お問い合わせ内容:  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

———————————————————————

{#each $FooterStore as item}
    &nbsp;
    {item.key}: {item.value}
{/each}
———————————————————————
    </pre>
</section>
