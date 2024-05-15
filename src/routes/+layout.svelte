<script>
    import { AppShell } from '@skeletonlabs/skeleton'
    import "../app.css"

    import Header from '$lib/components/Header.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'
    import Footer from '$lib/components/Footer.svelte'

</script>

<AppShell>
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