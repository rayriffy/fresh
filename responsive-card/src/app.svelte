<script lang="ts">
  import Place from '$components/place.svelte'
  import { places } from '$data/places'
</script>

<main>
  {#each places as place}
    <Place place={place} />
  {/each}
</main>

<style>
  main {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: 640px) {
    main {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    main {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    main {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {
    main {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
</style>
