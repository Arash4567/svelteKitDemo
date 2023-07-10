<div class="posts">
	<aside>
		Posts Sidebar
		<ul>
			<li><a href="/posts/one">One</a></li>
			<li><a href="/posts/two">Two</a></li>
		</ul>
	</aside>
	<main>
		<slot />
	</main>
</div>
<style>
  .posts {
    display: grid;
    gap: 2rem;
    grid-template-columns: 200px 60ch;
    margin-top: 2rem;
  }
</style>