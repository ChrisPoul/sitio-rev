<script>
	import MainBanner from '$lib/components/MainBanner.svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import { enhance } from '$app/forms';

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

	let submitting = $state(false);
	let result = $state(null);

	function handleResult(event) {
		const { result: formResult } = event.detail;
		if (formResult.type === 'success') {
			result = { success: true, message: formResult.data?.message || '¡Formulario enviado exitosamente!' };
			// Reset form
			formData = {
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
			};
		} else if (formResult.type === 'failure') {
			result = { success: false, message: formResult.data?.error || 'Error al enviar el formulario' };
		}
		submitting = false;
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
<section class="pt-16 px-main">
	<Card rounded="partial" border class="p-16">
		<form
			method="POST"
			use:enhance={({ formData }) => {
				submitting = true;
				result = null;
				return async ({ result: formResult, update }) => {
					handleResult({ detail: { result: formResult } });
					await update();
				};
			}}
			class="space-y-8"
		>
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
							name="nombre"
							bind:value={formData.nombre}
							required
							placeholder="OBLIGATORIO"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
						/>
					</div>
					<div class="flex items-center text-w4 gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
						<label for="correo" class="text-red-dark font-semibold whitespace-nowrap">
							CORREO
						</label>
						<input
							type="email"
							id="correo"
							name="correo"
							bind:value={formData.correo}
							required
							placeholder="OBLIGATORIO"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
						/>
					</div>
					<div class="flex items-center text-w4 gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
						<label for="telefono" class="text-red-dark font-semibold whitespace-nowrap">
							TELÉFONO
						</label>
						<input
							type="tel"
							id="telefono"
							name="telefono"
							bind:value={formData.telefono}
							required
							placeholder="OBLIGATORIO"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
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
							name="empresa"
							bind:value={formData.empresa}
							placeholder="OPCIONAL"
							class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
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
								name="producto"
								bind:value={formData.producto}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
							/>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="tipoProducto" class="text-red-dark font-semibold whitespace-nowrap">
								TIPO DE PRODUCTO
							</label>
							<select
								id="tipoProducto"
								name="tipoProducto"
								bind:value={formData.tipoProducto}
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 pr-5 text-w4 w-full"
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
								name="marca"
								bind:value={formData.marca}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
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
								name="largoExterior"
								bind:value={formData.largoExterior}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
							/>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="altoExterior" class="text-red-dark font-semibold whitespace-nowrap">
								ALTO EXTERIOR
							</label>
							<input
								type="text"
								id="altoExterior"
								name="altoExterior"
								bind:value={formData.altoExterior}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
							/>
						</div>
						<div class="flex items-center gap-4 bg-slate-200 rounded-tr-[2cqw] rounded-bl-[2cqw] pl-5 h-min">
							<label for="anchoExterior" class="text-red-dark font-semibold whitespace-nowrap">
								ANCHO EXTERIOR
							</label>
							<input
								type="text"
								id="anchoExterior"
								name="anchoExterior"
								bind:value={formData.anchoExterior}
								placeholder="OPCIONAL"
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 text-w4 w-full"
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
								name="reparacion"
								bind:value={formData.reparacion}
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 pr-5 text-w4 w-full"
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
								name="carrocerias"
								bind:value={formData.carrocerias}
								class="border-none focus:outline-none bg-inherit rounded-tr-[2cqw] py-1.5 pr-5 text-w4 w-full"
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
						name="mensaje"
						bind:value={formData.mensaje}
						rows="4"
						placeholder="DINOS LO QUE ESTÁS BUSCANDO..."
						class="w-full border-none focus:outline-none bg-inherit rounded-tr-[2cqw] rounded-bl-[2cqw] py-1.5 text-w4"
					></textarea>
				</div>
			</div>

			<!-- Success/Error Message -->
			{#if result}
				<div
					class="mb-6 p-4 rounded-tr-[2cqw] rounded-bl-[2cqw] {result.success
						? 'bg-green-100 text-green-800 border border-green-300'
						: 'bg-red-100 text-red-800 border border-red-300'}"
				>
					<p class="text-w5 font-semibold">{result.message}</p>
				</div>
			{/if}

			<!-- Submit Button -->
			<div class="flex justify-end pt-6">
				<Button type="submit" variant="primary" textSize="xl" disabled={submitting}>
					{submitting ? 'ENVIANDO...' : 'ENVIAR'}
				</Button>
			</div>
		</form>
	</Card>
</section>

<div>
	<h1 class="text-w18 font-bold text-red-dark text-center py-14">
		¡VISÍTANOS!
	</h1>
</div>
<ContactInfo />
