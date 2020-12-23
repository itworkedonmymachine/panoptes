<script>
	export let minor = false;
	export let major = false;
</script>

<style>
	button {
		color: #28a745;
	}

	.minor {
		color: #df9913;
	}

	.major {
		color: #cb0000;
	}
</style>

<button
	data-testid='button'
	class:minor={minor}
	class:major={major}
>
</button>