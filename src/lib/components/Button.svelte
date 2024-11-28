<script lang="ts">
    let { children }: {children: any} = $props();
</script>

<button class="btn btn-primary">
    {@render children()}
</button>