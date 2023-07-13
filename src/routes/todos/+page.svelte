<script lang="ts">
  import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
  import type { ActionData, PageData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  const addTodo: SubmitFunction = (input) => {
    // do something before submitting form
    console.log(input);
    
  }
</script>

<pre>
{JSON.stringify(data, null, 2)}
</pre>

<ul>
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form method="POST" action="?/removeTodo" use:enhance>
        <input type="hidden" name="id" value={todo.id} />
        <button type="submit">x</button>
      </form>
    </li>
  {/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance>
  <input type="text" name="todo" />
  {#if form?.missing}
    <span style="color: red;">This field is required</span>
  {/if}
  <button type="submit">+ Add Todo</button>
  <button formaction="?/clearTodos" type="submit">Clear</button>
</form>
