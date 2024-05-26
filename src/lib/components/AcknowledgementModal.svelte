<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    export let parent: SvelteComponent;
</script>

<article class="card p-4 w-modal shadow-xl space-y-4">
    <header class="text-2xl font-bold">Acknowledgement</header>
    <p class="mb-4 ml-4">
        This project is created and hosted with the following tools, resources, and services.
    </p>
    <ul class="list ml-4">
        <li>
            <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer" class="anchor">SvelteKit</a>
        </li>
        <li>
            <a href="https://www.skeleton.dev" target="_blank" rel="noreferrer" class="anchor">Skeleton</a>
        </li>
        <li>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" class="anchor">tailwindcss</a>
        </li>
        <li>
            <a href="https://www.flaticon.com/free-icons/contact-form" target="_blank" rel="noreferrer" class="anchor">Contact form icons created by Freepik - Flaticon</a>
        </li>
        <li>
            <a href="https://pages.github.com" target="_blank" rel="noreferrer" class="anchor">GitHub Pages</a>
        </li>
    </ul>
		<footer class="{parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose} data-focusindex="1">Close</button>
    </footer>
</article>
