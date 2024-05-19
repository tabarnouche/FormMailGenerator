<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';

    import FormHtml from '$lib/components/output/FormHtml.svelte'
    import MailToUser from '$lib/components/output/MailToUser.svelte'
    import MailToAdmin from '$lib/components/output/MailToAdmin.svelte'

    let tabSet: number = 0;
</script>


<section class="p-4">
    <h2 class="text-2xl mb-4">アウトプット</h2>
    <hr class="!border-t-4" />
    <TabGroup>
        <Tab bind:group={tabSet} name="tab1" value={0}>
            <span>フォームHTML</span>
        </Tab>
        <Tab bind:group={tabSet} name="tab2" value={1}>
            <span>ユーザー宛メール</span>
        </Tab>
        <Tab bind:group={tabSet} name="tab3" value={2}>
            <span>管理者宛メール</span>
        </Tab>
        <svelte:fragment slot="panel">
            {#if tabSet === 0}
                <FormHtml />
            {:else if tabSet === 1}
                <MailToUser />
            {:else if tabSet === 2}
                <MailToAdmin />
            {/if}
        </svelte:fragment>
    </TabGroup>
</section>
