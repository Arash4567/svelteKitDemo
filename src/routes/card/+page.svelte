<script>
  import Card from '../../components/cards/Card.svelte';
</script>

<h1 class="text-red-500">Cards</h1>
<Card let:Title let:Description let:Button>
  <Title>Hello</Title>
  <Description>Description</Description>
  <Button>Button</Button>
</Card>
