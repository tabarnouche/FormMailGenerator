<script>
    import { clipboard } from '@skeletonlabs/skeleton';
    import { InformationStore } from '$lib/stores/Information'
    import { FooterStore } from '$lib/stores/Footer'
</script>

<section class="p-4">
    <h2 class="mb-4">管理者宛メール</h2>
    <pre class="card card-hover p-4 cursor-pointer whitespace-pre-line" data-clipboard="cb" use:clipboard={{ element: 'cb' }}>
{
    $InformationStore.siteName != ''
    ? $InformationStore.siteName
    : $InformationStore.companyName
}のフォームから下記のお問い合わせがありました。
    </pre>
</section>

