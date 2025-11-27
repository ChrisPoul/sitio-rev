import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const resend = new Resend(env.RESEND_API_KEY);

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		// Extract all form fields
		const data = {
			nombre: formData.get('nombre') || '',
			correo: formData.get('correo') || '',
			telefono: formData.get('telefono') || '',
			empresa: formData.get('empresa') || '',
			tipoProducto: formData.get('tipoProducto') || '',
			marca: formData.get('marca') || '',
			largoExterior: formData.get('largoExterior') || '',
			altoExterior: formData.get('altoExterior') || '',
			anchoExterior: formData.get('anchoExterior') || '',
			reparacion: formData.get('reparacion') || '',
			mensaje: formData.get('mensaje') || ''
		};

		// Validate required fields
		if (!data.nombre || !data.correo || !data.telefono) {
			return fail(400, {
				error: 'Por favor completa los campos obligatorios: Nombre, Correo y Teléfono',
				data
			});
		}

		// Recipient email
		const recipientEmail = 'chrispoulsenfernandez@gmail.com';

		// Build email HTML content
		const emailHtml = `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<style>
					body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
					.container { max-width: 600px; margin: 0 auto; padding: 20px; }
					.header { background-color: #b91c1c; color: white; padding: 20px; text-align: center; }
					.header h1 { margin: 0; font-size: 24px; }
					.content { background-color: #f9f9f9; padding: 20px; }
					.section { margin-bottom: 20px; }
					.section-title { font-weight: bold; color: #b91c1c; font-size: 18px; margin-bottom: 10px; border-bottom: 2px solid #b91c1c; padding-bottom: 5px; }
					.field { margin-bottom: 10px; }
					.label { font-weight: bold; color: #555; }
					.value { color: #333; margin-left: 10px; }
					.empty { color: #999; font-style: italic; }
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h1>Nuevo Formulario de Contacto</h1>
					</div>
					<div class="content">
						<div class="section">
							<div class="section-title">DATOS PERSONALES</div>
							<div class="field">
								<span class="label">Nombre:</span>
								<span class="value">${data.nombre || '<span class="empty">No proporcionado</span>'}</span>
							</div>
							<div class="field">
								<span class="label">Correo:</span>
								<span class="value">${data.correo || '<span class="empty">No proporcionado</span>'}</span>
							</div>
							<div class="field">
								<span class="label">Teléfono:</span>
								<span class="value">${data.telefono || '<span class="empty">No proporcionado</span>'}</span>
							</div>
							<div class="field">
								<span class="label">Empresa/Razón Social:</span>
								<span class="value">${data.empresa || '<span class="empty">No proporcionado</span>'}</span>
							</div>
						</div>

					<div class="section">
						<div class="section-title">COTIZACIÓN - PRODUCTO</div>
						<div class="field">
							<span class="label">Tipo de Producto:</span>
							<span class="value">${data.tipoProducto || '<span class="empty">No proporcionado</span>'}</span>
						</div>
						<div class="field">
							<span class="label">Marca:</span>
							<span class="value">${data.marca || '<span class="empty">No proporcionado</span>'}</span>
						</div>
					</div>

						<div class="section">
							<div class="section-title">MEDIDAS</div>
							<div class="field">
								<span class="label">Largo Exterior:</span>
								<span class="value">${data.largoExterior || '<span class="empty">No proporcionado</span>'}</span>
							</div>
							<div class="field">
								<span class="label">Alto Exterior:</span>
								<span class="value">${data.altoExterior || '<span class="empty">No proporcionado</span>'}</span>
							</div>
							<div class="field">
								<span class="label">Ancho Exterior:</span>
								<span class="value">${data.anchoExterior || '<span class="empty">No proporcionado</span>'}</span>
							</div>
						</div>

					<div class="section">
						<div class="section-title">SERVICIO A COTIZAR</div>
						<div class="field">
							<span class="label">Reparación:</span>
							<span class="value">${data.reparacion || '<span class="empty">No proporcionado</span>'}</span>
						</div>
					</div>

						<div class="section">
							<div class="section-title">MENSAJE ADICIONAL</div>
							<div class="field">
								<span class="value">${data.mensaje || '<span class="empty">No hay mensaje adicional</span>'}</span>
							</div>
						</div>
					</div>
				</div>
			</body>
			</html>
		`;

		// Plain text version
		const emailText = `
Nuevo Formulario de Contacto

DATOS PERSONALES
Nombre: ${data.nombre}
Correo: ${data.correo}
Teléfono: ${data.telefono}
Empresa/Razón Social: ${data.empresa || 'No proporcionado'}

COTIZACIÓN - PRODUCTO
Tipo de Producto: ${data.tipoProducto || 'No proporcionado'}
Marca: ${data.marca || 'No proporcionado'}

MEDIDAS
Largo Exterior: ${data.largoExterior || 'No proporcionado'}
Alto Exterior: ${data.altoExterior || 'No proporcionado'}
Ancho Exterior: ${data.anchoExterior || 'No proporcionado'}

SERVICIO A COTIZAR
Reparación: ${data.reparacion || 'No proporcionado'}

MENSAJE ADICIONAL
${data.mensaje || 'No hay mensaje adicional'}
		`.trim();

		try {
			// Send email using Resend
			// Note: You may need to verify your domain in Resend dashboard
			// For now using Resend's default domain. Update 'from' after domain verification
			await resend.emails.send({
				from: 'Formulario Web <onboarding@resend.dev>',
				to: recipientEmail,
				replyTo: data.correo,
				subject: `Nuevo Formulario de Contacto - ${data.nombre}`,
				html: emailHtml,
				text: emailText
			});

			return {
				success: true,
				message: '¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.'
			};
		} catch (error) {
			console.error('Error sending email:', error);
			return fail(500, {
				error: 'Error al enviar el formulario. Por favor intenta de nuevo más tarde.',
				data
			});
		}
	}
};

