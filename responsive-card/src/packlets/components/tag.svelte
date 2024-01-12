<script lang="ts">
  import { tags } from "$data/tags"

  export let id: number

  const tag = tags.find(tag => tag.id === id)
</script>

<!-- if tag id exists, then render -->
{#if tag !== undefined}
  <span>{tag.name}</span>
{/if}

<style>
  span {
    color: #fff;
    background: #a6c947;
    border-radius: 9999px;
    padding: 0.125rem 1rem;
    font-size: 0.875rem;
  }
</style>
