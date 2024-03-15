<script>
	// Define an array of product objects
	let products = [
		{
			name: 'Item 01',
			image:
				'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
			price: '£24.00 GBP',
			id: 'abcdefg'
		}
		// Add more product objects as needed
	];
</script>

<div
	class="flex w-full flex-col items-center justify-center bg-[url('https://unsplash.com/photos/dS87qokCAC4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDcxMjQ2fA&force=true&w=1920')] bg-cover"
>
	<div class="h-full w-full bg-primary-900 p-16 py-48 text-center opacity-30">
		<h2 class="cursive text-2xl font-bold text-white md:text-6xl">Gallery</h2>
	</div>
</div>

<section>
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
		<header>
			<h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Service Gallery</h2>
			<!-- <p class="mt-4 max-w-md text-gray-500">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
				dicta incidunt est ipsam, officia dolor fugit natus?
			</p> -->
		</header>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<div class="mt-8 block">
				<div class="hidden space-y-4 lg:block">
					<div>
						<label for="SortBy" class="block text-xs font-medium text-gray-700"> Sort By </label>

						<select id="SortBy" class="mt-1 rounded border-gray-300 text-sm">
							<option>Sort By</option>
							<option value="Title, DESC">Title, DESC</option>
							<option value="Title, ASC">Title, ASC</option>
							<option value="Price, DESC">Price, DESC</option>
							<option value="Price, ASC">Price, ASC</option>
						</select>
					</div>

					<div>
						<p class="block text-xs font-medium text-gray-700">Filters</p>

						<div class="mt-1 space-y-2">
							<details
								class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
							>
								<summary
									class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
								>
									<span class="text-sm font-medium"> Availability </span>

									<span class="transition group-open:-rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="h-4 w-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</summary>

								<div class="border-t border-gray-200 bg-white">
									<header class="flex items-center justify-between p-4">
										<span class="text-sm text-gray-700"> 0 Selected </span>

										<button
											type="button"
											class="text-sm text-gray-900 underline underline-offset-4"
										>
											Reset
										</button>
									</header>

									<ul class="space-y-1 border-t border-gray-200 p-4">
										<li>
											<label for="FilterInStock" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterInStock"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> In Stock (5+) </span>
											</label>
										</li>

										<li>
											<label for="FilterPreOrder" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterPreOrder"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
											</label>
										</li>

										<li>
											<label for="FilterOutOfStock" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterOutOfStock"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
											</label>
										</li>
									</ul>
								</div>
							</details>

							<details
								class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
							>
								<summary
									class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
								>
									<span class="text-sm font-medium"> Price </span>

									<span class="transition group-open:-rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="h-4 w-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</summary>

								<div class="border-t border-gray-200 bg-white">
									<header class="flex items-center justify-between p-4">
										<span class="text-sm text-gray-700"> The highest price is $600 </span>

										<button
											type="button"
											class="text-sm text-gray-900 underline underline-offset-4"
										>
											Reset
										</button>
									</header>

									<div class="border-t border-gray-200 p-4">
										<div class="flex justify-between gap-4">
											<label for="FilterPriceFrom" class="flex items-center gap-2">
												<span class="text-sm text-gray-600">$</span>

												<input
													type="number"
													id="FilterPriceFrom"
													placeholder="From"
													class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
												/>
											</label>

											<label for="FilterPriceTo" class="flex items-center gap-2">
												<span class="text-sm text-gray-600">$</span>

												<input
													type="number"
													id="FilterPriceTo"
													placeholder="To"
													class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
												/>
											</label>
										</div>
									</div>
								</div>
							</details>

							<details
								class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
							>
								<summary
									class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
								>
									<span class="text-sm font-medium"> Colors </span>

									<span class="transition group-open:-rotate-180">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="h-4 w-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</summary>

								<div class="border-t border-gray-200 bg-white">
									<header class="flex items-center justify-between p-4">
										<span class="text-sm text-gray-700"> 0 Selected </span>

										<button
											type="button"
											class="text-sm text-gray-900 underline underline-offset-4"
										>
											Reset
										</button>
									</header>

									<ul class="space-y-1 border-t border-gray-200 p-4">
										<li>
											<label for="FilterRed" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterRed"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Red </span>
											</label>
										</li>

										<li>
											<label for="FilterBlue" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterBlue"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Blue </span>
											</label>
										</li>

										<li>
											<label for="FilterGreen" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterGreen"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Green </span>
											</label>
										</li>

										<li>
											<label for="FilterOrange" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterOrange"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Orange </span>
											</label>
										</li>

										<li>
											<label for="FilterPurple" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterPurple"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Purple </span>
											</label>
										</li>

										<li>
											<label for="FilterTeal" class="inline-flex items-center gap-2">
												<input
													type="checkbox"
													id="FilterTeal"
													class="size-5 rounded border-gray-300"
												/>

												<span class="text-sm font-medium text-gray-700"> Teal </span>
											</label>
										</li>
									</ul>
								</div>
							</details>
						</div>
					</div>
				</div>
			</div>

			<div class=" col-span-3 mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
				<!-- Loop through products and generate HTML for each product -->
				{#each products as product}
					<div class="lg:col-span-1">
						<a href={'/item/' + product.id} class="group block overflow-hidden">
							<img
								src={product.image}
								alt={product.name}
								class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div class="relative bg-white pt-3">
								<h3
									class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
								>
									{product.name}
								</h3>
								<p class="mt-2">
									<span class="sr-only"> Regular Price </span>
									<span class="tracking-wider text-gray-900">{product.price}</span>
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
