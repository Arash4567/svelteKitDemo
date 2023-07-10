<script>
	import { page } from '$app/stores';
</script>

<h1>Yikes</h1>
<p>{$page.error?.message}</p>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>