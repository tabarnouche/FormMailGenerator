<script lang="ts">
    import {FormStore} from '$lib/stores/Form'

    let html:any

    function copyToClipboard(el:any) {
        navigator.clipboard.writeText(html.innerText)
    }

    $: form_html = `
<form action="">
    <div>
        <label for="name">${$FormStore.fixedItems.name}</label>
        <input type="text" id="name" required />
    </div>
    <div>
        <label for="email">${$FormStore.fixedItems.email}</label>
        <input type="email" id="email" required />
    </div>
    <button>送信</button>
</form>
    `

</script>

<h3 class="mb-4">フォームHTML</h3>
<button on:click={copyToClipboard}>COPY</button>
<pre class="card card-hover p-4 cursor-pointer overflow-x-scroll">
    <code bind:this={html}>{form_html}</code>
</pre>
