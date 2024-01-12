<script lang="ts">
  import Tag from './tag.svelte'

  import type { Place } from '$types/Place'

  export let place: Place
</script>

<section>
  <div class="header">
    <img
      src={place.img_url}
      alt={place.name}
      loading="lazy"
      width="600"
      height="600" />
    <h1>{place.name}</h1>
  </div>
  <p>{place.body}</p>
  <div class="tags">
    {#each place.tags as tag}
      <Tag id={tag} />
    {/each}
  </div>
</section>

<style>
  section {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1.5rem;
    border-radius: 1rem;
  }

  .header {
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 1rem;
  }

  h1 {
    position: absolute;
    bottom: -1rem;
    text-align: center;
    left: 2rem;
    right: 2rem;
    padding: 0.5rem 1rem;
    margin: 0;
    color: #fff;
    background: #000;
    font-size: 1.5rem;
    overflow-wrap: break-word;
  }

  p {
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin: 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
