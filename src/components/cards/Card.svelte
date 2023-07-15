<script lang="ts">
  import Title from './CardTitle.svelte';
  import Description from './CardDescription.svelte';
  import Button from './CardButton.svelte';

  let C = {
    Title,
    Description,
    Button
  };
</script>

<div class="flex items-center justify-center">
  <div class="bg-gray-500 h-52 w-95 rounded-xl p-3">
    <slot {...C} />
  </div>
</div>
