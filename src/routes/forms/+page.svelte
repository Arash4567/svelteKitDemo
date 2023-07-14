<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>
<h1>Forms</h1>
<form method="POST" use:enhance>
  <input type="text" name="user" value={form?.data?.user ?? ''} />
  {#if form?.data?.user}
    <span style="color: tomato;">Name is required</span>    
  {/if}

  <input type="password" name="password" />
  {#if form?.data?.password}
    <span style="color: tomato;">Password is required</span>    
  {/if}
  <button type="submit">Login</button>
</form>