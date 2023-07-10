<script lang="ts">
	let count: number = 0;

	const counter = () => count++;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Count: {count}</p>
<button on:click={counter}>Count</button>
