<script>
	import MainBanner from '$lib/components/MainBanner.svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';

	let formData = $state({
		tipoProducto: '',
		marca: '',
		empresa: '',
		nombre: '',
		correo: '',
		telefono: '',
		producto: '',
		servicioCotizar: '',
		largoExterior: '',
		altoExterior: '',
		anchoExterior: '',
		mensaje: '',
		reparacion: '',
		carrocerias: ''
	});

	function handleSubmit() {
		// TODO: Implement form submission
		console.log('Form submitted:', formData);
	}
</script>

<!-- Main Banner -->
<MainBanner imageSrc="/images/contacto-banner.jpg" position="left">
	{#snippet title()}
		Estamos listos para<br />
		<b>trabajar contigo</b>
	{/snippet}
	{#snippet paragraph()}
		Llena el formulario y nos comunicaremos contigo lo antes posible
	{/snippet}
</MainBanner>

<!-- Contact Form Section -->
<section class="py-16 px-40">
	<Card rounded="partial" border class="p-16">
		<form onsubmit={handleSubmit} class="space-y-8">
			<!-- DATOS PERSONALES -->
			<div class="space-y-4">
				<h3 class="text-w7 font-semibold text-black-primary mb-4">DATOS PERSONALES</h3>
				<!-- Primera fila: NOMBRE, CORREO, TELÉFONO -->
				<div class="grid grid-cols-3 gap-6">
					<div class="flex items-center gap-4">
						<label for="nombre" class="text-w5 text-gray-700 whitespace-nowrap">
							NOMBRE <span class="text-red-dark">*</span>
						</label>
						<input
							type="text"
							id="nombre"
							bind:value={formData.nombre}
							required
							placeholder="obligatorio"
							class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
						/>
					</div>
					<div class="flex items-center gap-4">
						<label for="correo" class="text-w5 text-gray-700 whitespace-nowrap">
							CORREO <span class="text-red-dark">*</span>
						</label>
						<input
							type="email"
							id="correo"
							bind:value={formData.correo}
							required
							placeholder="obligatorio"
							class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
						/>
					</div>
					<div class="flex items-center gap-4">
						<label for="telefono" class="text-w5 text-gray-700 whitespace-nowrap">
							TELÉFONO <span class="text-red-dark">*</span>
						</label>
						<input
							type="tel"
							id="telefono"
							bind:value={formData.telefono}
							required
							placeholder="obligatorio"
							class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
						/>
					</div>
				</div>
				<!-- Segunda fila: EMPRESA (2 columnas) -->
				<div class="grid grid-cols-3 gap-6">
					<div class="flex items-center gap-4 col-span-2">
						<label for="empresa" class="text-w5 text-gray-700 whitespace-nowrap">
							EMPRESA/RAZÓN SOCIAL
						</label>
						<input
							type="text"
							id="empresa"
							bind:value={formData.empresa}
							placeholder="opcional"
							class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
						/>
					</div>
				</div>
			</div>

			<!-- COTIZACIÓN -->
			<div class="space-y-4">
				<h3 class="text-w7 font-semibold text-black-primary mb-4">COTIZACIÓN</h3>
				
				<!-- PRODUCTO -->
				<div class="space-y-4 mb-6">
					<h4 class="text-w6 font-semibold text-black-primary">PRODUCTO</h4>
					<div class="grid grid-cols-3 gap-6">
						<div class="flex items-center gap-4">
							<label for="producto" class="text-w5 text-gray-700 whitespace-nowrap">
								PRODUCTO
							</label>
							<input
								type="text"
								id="producto"
								bind:value={formData.producto}
								placeholder="opcional"
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							/>
						</div>
						<div class="flex items-center gap-4">
							<label for="tipoProducto" class="text-w5 text-gray-700 whitespace-nowrap">
								TIPO DE PRODUCTO
							</label>
							<select
								id="tipoProducto"
								bind:value={formData.tipoProducto}
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							>
								<option value="">ELIGE UNA OPCIÓN</option>
								<option value="opcion1">Opción 1</option>
								<option value="opcion2">Opción 2</option>
							</select>
						</div>
						<div class="flex items-center gap-4">
							<label for="marca" class="text-w5 text-gray-700 whitespace-nowrap">
								MARCA
							</label>
							<input
								type="text"
								id="marca"
								bind:value={formData.marca}
								placeholder="opcional"
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							/>
						</div>
					</div>
				</div>

				<!-- MEDIDAS -->
				<div class="space-y-4 mb-6">
					<h4 class="text-w6 font-semibold text-black-primary">MEDIDAS</h4>
					<div class="grid grid-cols-3 gap-6">
						<div class="flex items-center gap-4">
							<label for="largoExterior" class="text-w5 text-gray-700 whitespace-nowrap">
								LARGO EXTERIOR
							</label>
							<input
								type="text"
								id="largoExterior"
								bind:value={formData.largoExterior}
								placeholder="opcional"
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							/>
						</div>
						<div class="flex items-center gap-4">
							<label for="altoExterior" class="text-w5 text-gray-700 whitespace-nowrap">
								ALTO EXTERIOR
							</label>
							<input
								type="text"
								id="altoExterior"
								bind:value={formData.altoExterior}
								placeholder="opcional"
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							/>
						</div>
						<div class="flex items-center gap-4">
							<label for="anchoExterior" class="text-w5 text-gray-700 whitespace-nowrap">
								ANCHO EXTERIOR
							</label>
							<input
								type="text"
								id="anchoExterior"
								bind:value={formData.anchoExterior}
								placeholder="opcional"
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							/>
						</div>
					</div>
				</div>

				<!-- SERVICIO A COTIZAR -->
				<div class="space-y-4">
					<h4 class="text-w6 font-semibold text-black-primary">SERVICIO A COTIZAR</h4>
					<div class="grid grid-cols-3 gap-6">
						<div class="flex items-center gap-4">
							<label for="reparacion" class="text-w5 text-gray-700 whitespace-nowrap">
								REPARACIÓN
							</label>
							<select
								id="reparacion"
								bind:value={formData.reparacion}
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							>
								<option value="">ELIGE UNA OPCIÓN</option>
								<option value="opcion1">Opción 1</option>
								<option value="opcion2">Opción 2</option>
							</select>
						</div>
						<div class="flex items-center gap-4">
							<label for="carrocerias" class="text-w5 text-gray-700 whitespace-nowrap">
								CARROCERÍAS
							</label>
							<select
								id="carrocerias"
								bind:value={formData.carrocerias}
								class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
							>
								<option value="">ELIGE UNA OPCIÓN</option>
								<option value="opcion1">Opción 1</option>
								<option value="opcion2">Opción 2</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<!-- MENSAJE ADICIONAL -->
			<div class="space-y-4">
				<h3 class="text-w7 font-semibold text-black-primary mb-4">MENSAJE ADICIONAL</h3>
				<textarea
					id="mensaje"
					bind:value={formData.mensaje}
					rows="4"
					placeholder="DINOS LO QUE ESTÁS BUSCANDO..."
					class="w-full px-4 py-3 border border-gray-300 rounded-lg text-w5 focus:outline-none focus:ring-2 focus:ring-red-dark"
				></textarea>
			</div>

			<!-- Submit Button -->
			<div class="flex justify-end pt-6">
				<Button type="submit" variant="primary" textSize="xl">
					ENVIAR
				</Button>
			</div>
		</form>
	</Card>
</section>

<ContactInfo />
