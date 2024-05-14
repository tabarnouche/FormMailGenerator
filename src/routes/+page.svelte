<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';

    import FormHtml from '$lib/FormHtml.svelte'
    import MailToUser from '$lib/MailToUser.svelte'
    import MailToAdmin from '$lib/MailToAdmin.svelte'

    let tabSet: number = 0;
</script>


<section>
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