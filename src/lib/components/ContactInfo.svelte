<script>
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="p-24 bg-gray-light">
	<div class="container mx-auto px-8">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-10">
				<!-- Map Left -->
				<div class="relative col-span-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14938.961547019975!2d-100.4044288!3d20.598657049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ace3875a309%3A0x7e2ee867dcd3fedf!2sSERVICIO%20%22%20LA%20HORMIGA%20%22!5e0!3m2!1sen!2smx!4v1762263194161!5m2!1sen!2smx"
						class="w-full h-full rounded-lg border-0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					<div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
						<Button target="_blank" href="https://google.com/maps?ll=20.598976,-100.411301&z=14&t=m&hl=en&gl=MX&mapclient=embed&cid=9092460230491766495" variant="primary" textSize="base" class="w-55 h-9">
							VER MAPA
						</Button>
					</div>
				</div>

				<!-- Company Address -->
				<div class="col-span-6 my-15">
					<Card rounded="none" border borderColor="dark" class="p-8 border-l-0">
						<h3 class="text-w7 font-bold text-black-primary mb-6">
							CARROCERÍAS 3G S.A. DE C.V.
						</h3>
						<div class="space-y-6 text-gray-700">
							<!-- Dirección -->
							<div class="flex gap-4">
								<div class="shrink-0 mt-1">
									<svg
										class="w-5 h-5 text-red-dark"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<p>Carretera Celaya-Villagrán Km.2.8</p>
									<p>Col. Fracc. Los Cucus Celaya, GTO. México. CP.38020</p>
								</div>
							</div>

							<!-- Teléfonos -->
							<div class="flex gap-4">
								<div class="shrink-0 mt-1">
									<svg
										class="w-5 h-5 text-red-dark"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
								</div>
								<div>
									<p>
										<a
											href="tel:4611348623"
											class="text-red-dark hover:text-red-dark/80 transition-colors"
											>461 134 8623</a
										>
										<span class="text-gray-500"> / </span>
										<a
											href="tel:4613463217"
											class="text-red-dark hover:text-red-dark/80 transition-colors"
											>461 346 3217</a
										>
									</p>
								</div>
							</div>

							<!-- Asesor comercial -->
							<div class="flex gap-4">
								<div class="shrink-0 mt-1">
									<svg
										class="w-5 h-5 text-red-dark"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<div>
									<p class="font-semibold">Humberto Márquez Covarrubias</p>
									<p class="mt-1">Asesor comercial</p>
									<p class="mt-1">
										<a
											href="tel:4791447580"
											class="text-red-dark hover:text-red-dark/80 transition-colors"
											>Cel: 479 144 7580</a
										>
									</p>
									<p class="mt-1">
										<a
											href="mailto:ventas@carrocerias3g.com"
											class="text-red-dark hover:text-red-dark/80 transition-colors break-all"
											>ventas@carrocerias3g.com</a
										>
									</p>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	</div>
</section>
