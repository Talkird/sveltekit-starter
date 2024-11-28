<script lang="ts">
    import { register } from "$lib/services/auth";

    const handleRegister = async () => {
        await register({username: "Juan", password: "password", email: "juan@gmail.com"});
    }

</script>

<h1 class="font-semibold text-5xl">Welcome to SvelteKit</h1>
<button onclick={handleRegister} class="btn btn-primary">Hello!</button>
