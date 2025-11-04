<script>
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="p-16 md:p-24 bg-gray-light">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3">
				<!-- Map Left (1/3) -->
				<div class="relative">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14938.961547019975!2d-100.4044288!3d20.598657049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ace3875a309%3A0x7e2ee867dcd3fedf!2sSERVICIO%20%22%20LA%20HORMIGA%20%22!5e0!3m2!1sen!2smx!4v1762263194161!5m2!1sen!2smx"
						class="w-full h-[400px] md:h-[500px] rounded-lg border-0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2">
						<Button href="/contacto" variant="primary" textSize="base" class="text-nowrap px-[30%]">
							VER MAPA
						</Button>
					</div>
				</div>

				<!-- Company Address Right (2/3) -->
				<div class="md:col-span-2">
					<Card rounded="none" border borderColor="dark" class="p-8">
						<h3 class="text-2xl font-bold text-black-primary mb-6">
							CARROCERÍAS 3G S.A. DE C.V.
						</h3>
						<div class="space-y-4 text-gray-700">
							<p>
								Carretera Celaya-Villagrán Km.2.8<br />
								Col. Fracc. Los Cucus<br />
								Celaya, GTO. México. CP.38020
							</p>
							<div class="pt-4 border-t border-gray-200">
								<p>
									<span class="font-semibold">Teléfonos:</span><br />
									<a
										href="tel:4611348623"
										class="text-red-dark hover:text-red-dark/80 transition-colors"
										>461 134 8623</a
									><br />
									<a
										href="tel:4613463217"
										class="text-red-dark hover:text-red-dark/80 transition-colors"
										>461 346 3217</a
									>
								</p>
							</div>
							<div class="pt-4">
								<p class="font-semibold mb-2">Asesor comercial</p>
								<p>Humberto Márquez Covarrubias</p>
								<p>
									<a
										href="tel:4791447580"
										class="text-red-dark hover:text-red-dark/80 transition-colors"
										>Cel: 479 144 7580</a
									>
								</p>
							</div>
							<div class="pt-4">
								<p>
									<a
										href="mailto:ventas@carrocerias3g.com"
										class="text-red-dark hover:text-red-dark/80 transition-colors break-all"
										>ventas@carrocerias3g.com</a
									>
								</p>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	</div>
</section>
