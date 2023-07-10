<script>
	import { page } from '$app/stores';
</script>

<h1>Image {JSON.stringify($page.params, null, 2)}</h1>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>