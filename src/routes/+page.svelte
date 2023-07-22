<script lang="ts">
    import { enhance } from '$app/forms';
  import { page } from '$app/stores';
</script>

{#if $page.data.user}
  <h1>Welcome {$page.data.user}</h1>
{/if}

<form method="POST" use:enhance>
  <label for="username">
    Username
    <input type="text" name="username" id="username">
  </label>
  <label for="password">
    Password
    <input type="password" name="password" id="password">
  </label>
  <label for="remember">
    <input type="checkbox" name="&remember" id="remember">
    Remember me
  </label>
  <button type="submit">Submit</button>
</form>