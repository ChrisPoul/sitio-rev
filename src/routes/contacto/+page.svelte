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
<MainBanner imageSrc="/6.png" position="left">
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
					<div class="flex items-center text-w4 gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
						<label for="nombre" class=" text-red-dark font-semibold whitespace-nowrap">
							NOMBRE
						</label>
						<input
							type="text"
							id="nombre"
							bind:value={formData.nombre}
							required
							placeholder="OBLIGATORIO"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
						/>
					</div>
					<div class="flex items-center text-w4 gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
						<label for="correo" class="text-red-dark font-semibold whitespace-nowrap">
							CORREO
						</label>
						<input
							type="email"
							id="correo"
							bind:value={formData.correo}
							required
							placeholder="OBLIGATORIO"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
						/>
					</div>
					<div class="flex items-center text-w4 gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
						<label for="telefono" class="text-red-dark font-semibold whitespace-nowrap">
							TELÉFONO
						</label>
						<input
							type="tel"
							id="telefono"
							bind:value={formData.telefono}
							required
							placeholder="OBLIGATORIO"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
						/>
					</div>
				</div>
				<!-- Segunda fila: EMPRESA (2 columnas) -->
				<div class="grid grid-cols-3 gap-6">
					<div class="flex items-center text-w4 gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min col-span-2">
						<label for="empresa" class="text-red-dark font-semibold whitespace-nowrap">
							EMPRESA/RAZÓN SOCIAL
						</label>
						<input
							type="text"
							id="empresa"
							bind:value={formData.empresa}
							placeholder="OPCIONAL"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
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
					<div class="grid grid-cols-3 gap-6 text-w4">
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="producto" class="text-red-dark font-semibold whitespace-nowrap">
								PRODUCTO
							</label>
							<input
								type="text"
								id="producto"
								bind:value={formData.producto}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
							/>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="tipoProducto" class="text-red-dark font-semibold whitespace-nowrap">
								TIPO DE PRODUCTO
							</label>
							<select
								id="tipoProducto"
								bind:value={formData.tipoProducto}
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 pr-5 text-w4"
							>
								<option value="">ELIGE UNA OPCIÓN</option>
								<option value="opcion1">Opción 1</option>
								<option value="opcion2">Opción 2</option>
							</select>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="marca" class="text-red-dark font-semibold whitespace-nowrap">
								MARCA
							</label>
							<input
								type="text"
								id="marca"
								bind:value={formData.marca}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
							/>
						</div>
					</div>
				</div>

				<!-- MEDIDAS -->
				<div class="space-y-4 mb-6">
					<h4 class="text-w6 font-semibold text-black-primary">MEDIDAS</h4>
					<div class="grid grid-cols-3 gap-6 text-w4">
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="largoExterior" class="text-red-dark font-semibold whitespace-nowrap">
								LARGO EXTERIOR
							</label>
							<input
								type="text"
								id="largoExterior"
								bind:value={formData.largoExterior}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
							/>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="altoExterior" class="text-red-dark font-semibold whitespace-nowrap">
								ALTO EXTERIOR
							</label>
							<input
								type="text"
								id="altoExterior"
								bind:value={formData.altoExterior}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
							/>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="anchoExterior" class="text-red-dark font-semibold whitespace-nowrap">
								ANCHO EXTERIOR
							</label>
							<input
								type="text"
								id="anchoExterior"
								bind:value={formData.anchoExterior}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4"
							/>
						</div>
					</div>
				</div>

				<!-- SERVICIO A COTIZAR -->
				<div class="space-y-4">
					<h4 class="text-w6 font-semibold text-black-primary">SERVICIO A COTIZAR</h4>
					<div class="grid grid-cols-3 gap-6 text-w4">
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="reparacion" class="text-red-dark font-semibold whitespace-nowrap">
								REPARACIÓN
							</label>
							<select
								id="reparacion"
								bind:value={formData.reparacion}
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 pr-5 text-w4"
							>
								<option value="">ELIGE UNA OPCIÓN</option>
								<option value="opcion1">Opción 1</option>
								<option value="opcion2">Opción 2</option>
							</select>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="carrocerias" class="text-red-dark font-semibold whitespace-nowrap">
								CARROCERÍAS
							</label>
							<select
								id="carrocerias"
								bind:value={formData.carrocerias}
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 pr-5 text-w4"
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
				<div class="bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] ">
					
					<textarea
						id="mensaje"
						bind:value={formData.mensaje}
						rows="4"
						placeholder="DINOS LO QUE ESTÁS BUSCANDO..."
						class="w-full border-none focus:outline-none bg-inherit rounded-tr-[2cqw] rounded-bl-[2cqw] py-1.5 text-w4"
					></textarea>
				</div>
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
