<script>
    import Information from '$lib/components/input/InfoItems.svelte'
    import FooterItems from '$lib/components/input/FooterItems.svelte'
    import Form from '$lib/components/input/FormItems.svelte'
</script>

<section class="p-4 max-w-xl">
    <h2 class="text-2xl mb-4">インプット</h2>
    <hr class="!border-t-4" />
    <div class="p-2">
        <Information />
        <hr class="!border-t-2" />
        <FooterItems />
        <hr class="!border-t-2" />
        <Form />
    </div>
</section>
