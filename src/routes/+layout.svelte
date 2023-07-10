<script>
  import '../app.css'
</script>
<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/posts">Posts</a></li>
	</ul>
</nav>
<slot />
<style>
  ul { 
    display: flex;
    list-style: none;
  }
  ul li {
    margin: 0 5px;
  }
</style>