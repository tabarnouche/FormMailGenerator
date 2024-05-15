<script lang="ts">
    import { FormStore } from '$lib/stores/Form'

    import SnippetBlock from '$lib/components/SnippetBlock.svelte'

    $: snippet = `
<form action="">
    <div>
        <label for="name">${$FormStore.fixedItems.name}</label>
        <input type="text" id="name" required />
    </div>
    <div>
        <label for="email">${$FormStore.fixedItems.email}</label>
        <input type="email" id="email" required />
    </div>
    <div>
        <label for="${$FormStore.unfixedItems[0].id}">${$FormStore.unfixedItems[0].label}</label>
        <input type="${$FormStore.unfixedItems[0].type}" id="${$FormStore.unfixedItems[0].id}" ${$FormStore.unfixedItems[0].required ? "required" : ""}/>
    </div>
    <div>
        <label for="${$FormStore.unfixedItems[1].id}">${$FormStore.unfixedItems[1].label}</label>
        <textarea id="${$FormStore.unfixedItems[1].id}" ${$FormStore.unfixedItems[1].required ? "required" : ""}></textarea>
    </div>
    <button>送信</button>
</form>
    `

</script>

<section class="p-4">
    <h3 class="mb-4">フォームHTML</h3>
    <div>
        <SnippetBlock snippet={snippet} language="html"></SnippetBlock>
    </div>
</section>
