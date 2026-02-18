/**
 * productsByCategory: categorías y productos para la página de productos y galería.
 * Estructura: { title, description, products: [{ name, description, image? }], image? }
 * image en producto: path bajo /productos/ (static/productos/), coincide con el filename.
 */
export const productsByCategory = [
	{
		title: 'CAJA SECA',
		description: 'Ligeras, resistentes y adaptadas a tu operación diaria.',
		products: [
			{
				name: 'COMPOSITE',
				description:
					'Fabricada con materiales compuestos de alta resistencia. Máxima durabilidad con el menor peso. Ideal para reducir consumo de combustible.',
				image: '/productos/Caja seca-composite.HEIC'
			},
			{
				name: 'PANEL',
				description:
					'Estructura robusta en panel sándwich. Perfecta para cargas generales que requieren protección contra clima y golpes.',
				image: '/productos/Caja seca-panel.jpg'
			},
			{
				name: 'LÁMINA',
				description:
					'Construcción tradicional en lámina de acero. Alta resistencia mecánica para trabajos rudos y de alto impacto.',
				image: '/productos/Caja seca-lámina.png'
			}
		]
	},
	{
		title: 'CAJA DE CONSERVACIÓN',
		description: 'Transporta tu carga a la temperatura perfecta.',
		products: [
			{
				name: 'PANEL DE 3" DE ESPESOR',
				description:
					'Aislamiento térmico superior para transporte de perecederos en conservación.',
				image: '/productos/Caja seca-Conservación.png'
			}
		]
	},
	{
		title: 'CAJA DE CONGELACIÓN/REFRIGERACIÓN',
		description: 'Transporta tu carga a la temperatura perfecta.',
		products: [
			{
				name: 'PANEL DE 4" DE ESPESOR',
				description:
					'Máximo poder de aislamiento para congelación y refrigeración profunda. Diseñadas para mantener la cadena de frío por largos períodos.',
				image: '/productos/Caja de congelación-refrigeración.png'
			}
		]
	},
	{
		title: 'PLATAFORMAS',
		description: 'Soluciones sobre medida para tu tipo de carga.',
		products: [
			{
				name: 'REDILAS',
				description: 'Seguridad y ventilación para carga ligera o voluminosa.',
				image: '/productos/Plataformas-Redila.png'
			},
			{
				name: 'PLANAS',
				description: 'Superficie 100% plana. Ideal para carga estibada o de gran volumen.',
				image: '/productos/Plataformas-Planas.png'
			},
			{
				name: 'A SUS NECESIDADES',
				description:
					'Diseñamos y fabricamos la plataforma que tu operación requiere. Sin medidas estándar, todo a la medida.',
				image: '/productos/Plataformas-A sus necesidades.png'
			}
		]
	},
	{
		title: 'RAMPAS O ELEVADOR HIDRÁULICO',
		description: 'Movimiento de carga con la máxima eficiencia y seguridad.',
		products: [
			{
				name: 'OCULTA',
				description:
					'Distribuidor autorizado de Dhollandia. La rampa perfecta para cada trabajo, desde plataformas ocultas hasta sistemas de alta capacidad.',
				image: '/productos/Rampas- Oculta.jpg'
			},
			{
				name: 'NISSAN',
				description:
					'Amplia gama de configuraciones. Te asesoramos para elegir el sistema ideal de acuerdo a tu chasis y operación.',
				image: '/productos/Rampas-Nissan, cantiliber, columnas.png'
			},
			{ name: 'CANTILIBER', description: '', image: '/productos/Rampas-Nissan, cantiliber, columnas.png' },
			{ name: 'COLUMNAS', description: '', image: '/productos/Rampas-Nissan, cantiliber, columnas.png' }
		]
	},
	{
		title: 'SISTEMAS DE SUJECIÓN',
		description: 'Mantén tu carga firme y segura en todo momento.',
		products: [
			{
				name: 'BANDAS LOGÍSTICAS PARA RIEL LOGÍSTICO',
				description:
					'Sistemas de anclaje y amarre de alta resistencia. Disponibles para unidades abiertas y cerradas. Cintas que van desde 1,000lbs hasta 18,000lbs.',
				image: '/productos/Sistemas de sujeción-Bandas logisticas.jpeg'
			},
			{
				name: 'BANDAS PARA PLATAFORMA',
				description:
					'Sistemas de anclaje y amarre de alta resistencia. Disponibles para unidades abiertas y cerradas. Cintas que van desde 1,000lbs hasta 18,000lbs.',
				image: '/productos/Sistemas de sujeción-Bandas logisticas.jpeg'
			},
			{
				name: 'REDES LOGÍSTICAS (DISEÑO A MEDIDA)',
				description:
					'Redes confeccionadas en longitudes, resistencias y colores personalizados con tu logotipo.',
				image: '/productos/Sistemas de sujeción-Redes logisticas.jpeg'
			},
			{
				name: 'BARRAS LOGÍSTICAS',
				description:
					'Dispositivo metálico ajustable, diseñado para inmovilizar y asegurar mercancías dentro de remolques, cajas secas o contenedores.',
				image: null
			},
			{
				name: 'GATAS LOGÍSTICAS',
				description:
					'Barra logística tipo "gata" o de presión, que utilizan mecanismos de trinquete para ajustarse a las paredes.',
				image: '/productos/Sistemas de sujeción-Gatas logisticas.png'
			},
			{
				name: 'RIEL LOGÍSTICO ZINCADO',
				description:
					'Sistema de anclaje fabricado en acero DD11 de 2mm con acabado anticorrosión de 5 micras. La base que tu carga necesita.',
				image: '/productos/Sistemas de sujeción-Riel logístico.png'
			}
		]
	},
	{
		title: 'PUERTAS CORTINAS',
		description: 'Protección hermética y operación ágil.',
		products: [
			{
				name: 'PUERTA CUBIERTA PLÁSTICA UNIVERSAL MARCA WHITING',
				description:
					'Sistema de elevación horizontal que protege la carga de agentes externos y contaminantes. Rápida operación, máxima estanqueidad. Ideal para reparto urbano y carga general.',
				image: '/productos/Puertas cortinas-Puerta whiting.jpeg'
			}
		]
	},
	{
		title: 'REPARACIONES',
		description: 'Devolvemos la funcionalidad a tu equipo.',
		products: [
			{
				name: 'CARROCERÍA',
				description: 'Reparación estructural y estética de paneles, láminas y marcos.',
				image: '/productos/Reparaciones-Carrocería.jpg'
			},
			{
				name: 'RAMPAS HIDRÁULICAS',
				description: 'Diagnóstico y reparación de fallas mecánicas y oleohidráulicas.',
				image: '/productos/Reparaciones-Rampas hidráulicas.jpg'
			},
			{
				name: 'SISTEMA ELÉCTRICO',
				description: 'Revisión y corrección de instalaciones, cableado e iluminación.',
				image: '/productos/Reparaciones-Sistema eléctrico.jpeg'
			}
		]
	},
	{
		title: 'MANTENIMIENTOS',
		description: 'Alarga la vida útil de tu flota.',
		products: [
			{
				name: 'PREVENTIVOS DE CARROCERÍA',
				description: 'Inspección y ajustes para evitar daños mayores.',
				image: '/productos/Mantenimientos-Preventivo de carroceria.png'
			},
			{
				name: 'CORRECTIVOS DE CARROCERÍA',
				description: 'Intervención rápida ante golpes, desprendimientos o desgaste.',
				image: '/productos/Mantenimientos-Correctivos de carrocería.png'
			},
			{
				name: 'PREVENTIVOS DE RAMPA HIDRÁULICA',
				description: 'Optimización del sistema hidráulico para evitar paros inesperados.',
				image: '/productos/Mantenimientos-Preventivo de rampa hidraulica.jpeg'
			},
			{
				name: 'CORRECTIVO DE RAMPA HIDRÁULICA',
				description: 'Reparación especializada de cilindros, bombas y fugas.',
				image: '/productos/Mantenimientos-Correctivo de rampa hidráulica.png'
			}
		]
	}
];
