<script>
	import '@picocss/pico'
  import '../app.css'
</script>
<main class="container">
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/hookone">Hook 1</a></li>
			<li><a href="/shop" data-sveltekit-preload-data>Shop</a></li>
		</ul>
	</nav>
	<slot />
</main>
<style>

</style>