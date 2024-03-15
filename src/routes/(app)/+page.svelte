<script lang="ts">
	import { Button, Dropdown, DropdownItem, Search } from 'flowbite-svelte';
	import { ChevronDownSolid, SearchOutline } from 'flowbite-svelte-icons';

	const items = [
		{
			label: 'All categories'
		},
		{
			label: 'Mockups'
		},
		{
			label: 'Templates'
		},
		{
			label: 'Design'
		},
		{
			label: 'Logos'
		}
	];

	let selectCategory = 'All categories';
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[url('https://unsplash.com/photos/y1XXWct5rBo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDgyMDg2fA&force=true&w=1920')] bg-cover p-4"
>
	<form class="mx-4 flex w-full max-w-xl">
		<div class="relative">
			<Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700">
				{selectCategory}
				<ChevronDownSolid class="ms-2.5 h-2.5 w-2.5" />
			</Button>
			<Dropdown classContainer="w-40">
				{#each items as { label }}
					<DropdownItem
						on:click={() => {
							selectCategory = label;
						}}
						class={selectCategory === label ? 'underline' : ''}
					>
						{label}
					</DropdownItem>
				{/each}
			</Dropdown>
		</div>
		<Search
			size="md"
			class="rounded-none py-2.5"
			placeholder="Search Mockups, Logos, Design Templates..."
		/>
		<Button class="rounded-s-none !p-2.5">
			<SearchOutline class="h-5 w-5" />
		</Button>
	</form>
	<div class="mx-4 w-full max-w-xl bg-primary-900 p-16 text-center opacity-75">
		<h2 class="cursive text-2xl font-bold text-white md:text-6xl">
			Where Dreams<br />Come Unfold And<br />Promises Come To Life
		</h2>
	</div>
</div>
