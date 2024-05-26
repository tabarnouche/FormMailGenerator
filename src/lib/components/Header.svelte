<script>
    import { LightSwitch, AppBar, getDrawerStore } from '@skeletonlabs/skeleton'
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'

    const drawerStore = getDrawerStore();

    function drawerOpen(){
        drawerStore.open({});
    }
</script>

<AppBar slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen} title="インプット">
            <span>
                <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                </svg>
            </span>
        </button>
    </svelte:fragment>
    <h1 class="hidden lg:block text-2xl">フォームとメールを作る</h1>
    <svelte:fragment slot="trail">
        <LightSwitch />
        <ThemeSwitch />
    </svelte:fragment>
</AppBar>
