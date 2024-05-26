<script lang="ts">
    import { AppShell, initializeStores, Drawer, Modal } from '@skeletonlabs/skeleton'
    import type { ModalComponent } from '@skeletonlabs/skeleton'
    import "../app.css"

    import Header from '$lib/components/Header.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import AcknowledgementModal from '$lib/components/AcknowledgementModal.svelte'

    initializeStores();

    const modalRegistry: Record<string, ModalComponent> = {
        acknowledgementModal: { ref: AcknowledgementModal },
    };

</script>

<Drawer>
    <Sidebar/>
</Drawer>

<Modal components={modalRegistry} />

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
