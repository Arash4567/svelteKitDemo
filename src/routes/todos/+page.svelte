<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import type { PageData } from './$types';

  type Data = {
    success: boolean;
    errors: Record<string, string>;
  };

  export let data: PageData;
  export let form: Data;

  async function addTodo(event: Event) {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const response = await fetch(formEl.action, {
      method: 'POST',
      body: data
    });

    const responseData = await response.json();

    form = responseData;

    formEl.reset();

    await invalidateAll();
  }

  async function removeTodo(event: Event) {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const response = await fetch(formEl.action, {
      method: 'DELETE',
      body: data
    });

    await invalidateAll();
  }
</script>

<pre>
{JSON.stringify(data, null, 2)}
</pre>

<ul>
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form method="POST" on:submit|preventDefault={removeTodo}>
        <input type="hidden" name="id" value={todo.id} />
        <button type="submit">x</button>
      </form>
    </li>
  {/each}
</ul>

<form method="POST" on:submit|preventDefault={addTodo}>
  <input type="text" name="todo" />
  <button type="submit">+ Add Todo</button>
</form>
