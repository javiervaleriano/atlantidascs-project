// REGIONES
export const ORIENTE = "oriente";
export const OCCIDENTE = "occidente";

// ESTADOS DE VENEZUELA (orden alfabético) Y SU REGIÓN ASOCIADA
export const VENEZUELA_STATES = [
	{ value: "Amazonas", region: ORIENTE },
	{ value: "Anzoátegui", region: ORIENTE },
	{ value: "Apure", region: OCCIDENTE },
	{ value: "Aragua", region: OCCIDENTE },
	{ value: "Barinas", region: OCCIDENTE },
	{ value: "Bolívar", region: ORIENTE },
	{ value: "Carabobo", region: OCCIDENTE },
	{ value: "Cojedes", region: OCCIDENTE },
	{ value: "Delta Amacuro", region: ORIENTE },
	{ value: "Distrito Capital", region: ORIENTE },
	{ value: "Falcón", region: OCCIDENTE },
	{ value: "Guárico", region: OCCIDENTE },
	{ value: "La Guaira", region: ORIENTE },
	{ value: "Lara", region: OCCIDENTE },
	{ value: "Mérida", region: OCCIDENTE },
	{ value: "Miranda", region: ORIENTE },
	{ value: "Monagas", region: ORIENTE },
	{ value: "Nueva Esparta", region: ORIENTE },
	{ value: "Portuguesa", region: OCCIDENTE },
	{ value: "Sucre", region: ORIENTE },
	{ value: "Táchira", region: OCCIDENTE },
	{ value: "Trujillo", region: OCCIDENTE },
	{ value: "Yaracuy", region: OCCIDENTE },
	{ value: "Zulia", region: OCCIDENTE },
];

export const getRegionByState = (state) =>
	VENEZUELA_STATES.find(({ value }) => value === state)?.region;
