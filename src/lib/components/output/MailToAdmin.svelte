<script>
    import { InformationStore } from '$lib/stores/Information'
    import { FormStore } from '$lib/stores/Form'

    import SnippetBlock from '$lib/components/SnippetBlock.svelte'
</script>

<section class="p-4">
    <h3 class="mb-4">管理者宛メール</h3>
    <pre class="card card-hover p-4 cursor-pointer whitespace-pre-line">
{
    $InformationStore.siteName != ''
    ? $InformationStore.siteName
    : $InformationStore.companyName
}のフォームから下記のお問い合わせがありました。
    </pre>
    <div>
        <SnippetBlock snippet="" language="plaintext"></SnippetBlock>
    </div>
</section>
