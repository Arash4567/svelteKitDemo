<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import type { SubmitFunction } from '@sveltejs/kit';
  import type { ActionData } from './$types';

  export let form: ActionData;

  const login: SubmitFunction = () => {
    return async ({ result }) => {
      console.log(result);
      await applyAction(result);
    };
  };
</script>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>
<h1>Login</h1>
<form method="POST" action="/login" use:enhance={login}>
  <input type="text" name="user" value={form?.data?.user ?? ''} />
  {#if form?.errors?.user}
    <span style="color: tomato;">Name is required</span>
  {/if}

  <input type="password" name="password" />
  {#if form?.errors?.password}
    <span style="color: tomato;">Password is required</span>
  {/if}
  <button type="submit">Login</button>
</form>
