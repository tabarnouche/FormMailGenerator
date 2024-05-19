<script>
    import { AppShell, initializeStores, Drawer } from '@skeletonlabs/skeleton'
    import "../app.css"

    import Header from '$lib/components/Header.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'
    import Footer from '$lib/components/Footer.svelte'

    initializeStores();

</script>

<Drawer>
    <Sidebar/>
</Drawer>

<AppShell slotSidebarLeft="hidden lg:block max-w-xl">
    <svelte:fragment slot="header">
        <Header/>
    </svelte:fragment>

    <slot />

    <svelte:fragment slot="sidebarLeft">
        <Sidebar/>
    </svelte:fragment>

    <svelte:fragment slot="pageFooter">
        <Footer/>
    </svelte:fragment>

</AppShell>
