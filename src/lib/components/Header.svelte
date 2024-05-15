<script>
    import { LightSwitch, AppBar } from '@skeletonlabs/skeleton'
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
</script>

<AppBar slotTrail="place-content-end">
    <h1 class="text-2xl">フォームとメールを作る</h1>
    <svelte:fragment slot="trail">
        <LightSwitch />
        <ThemeSwitch />
    </svelte:fragment>
</AppBar>