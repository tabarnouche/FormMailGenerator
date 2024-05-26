<script lang="ts">
    import { ThemeStore } from '$lib/stores/Theme'
	import { onMount } from 'svelte';

	onMount(() => {
        const theme: string|null = localStorage.getItem('theme')
        if (theme) {
            $ThemeStore = theme
            document.body.setAttribute('data-theme', theme)
        }
	});

    const onChange = () => {
        document.body.setAttribute('data-theme', $ThemeStore)
        localStorage.setItem('theme', $ThemeStore)
    }
</script>

<select class="select w-fit" bind:value={$ThemeStore} on:change={onChange} aria-label="テーマ">
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
