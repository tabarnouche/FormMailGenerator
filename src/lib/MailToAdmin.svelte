<script>
    import { clipboard } from '@skeletonlabs/skeleton';
    import { RequiredStore, FooterStore } from '$lib/stores/Information'
</script>

<section class="p-4">
    <h2 class="h2 mb-4">管理者宛メール</h2>
    <pre class="card card-hover p-4 cursor-pointer" data-clipboard="cb" use:clipboard={{ element: 'cb' }}>
        {$RequiredStore.serviceName}のフォームから下記のお問い合わせがありました。
        {$RequiredStore.replyLimit.value}{$RequiredStore.replyLimit.unit}以内
    </pre>
</section>

