<script>
    import { LightSwitch, AppBar } from '@skeletonlabs/skeleton'
    import { ThemeStore } from '$lib/stores/Theme'

    const onChange = () => {
        document.body.setAttribute('data-theme', $ThemeStore)
    }
</script>

<AppBar slotTrail="place-content-end">
    <h1 class="text-2xl">メール生成</h1>
    <svelte:fragment slot="trail">
        <LightSwitch />
        <select class="select w-fit" bind:value={$ThemeStore} on:change={onChange}>
            <option value="skeleton">Skeleton</option>
            <option value="wintry">Wintry</option>
            <option value="modern">Modern</option>
            <option value="rocket">Rocket</option>
            <option value="seafoam">Seafoam</option>
            <option value="vintage">Vintage</option>
            <option value="sahara">Sahara</option>
            <option value="hamlindigo">Hamlindigo</option>
            <option value="gold-nouveau">Gold Nouveau</option>
            <option value="crimson">Crimson</option>
        </select>
    </svelte:fragment>
</AppBar>