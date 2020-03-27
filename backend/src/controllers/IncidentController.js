const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const { page = 1 } = request.query; //paginate

		//count
		const [count] = await connection('incidents').count();

		//return header count
		response.header('X-Total-Count', count['count(*)']);

		//incidents
		const incidents = await connection('incidents')
			.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
			.limit(5)
			.offset((page - 1) * 5)
			.select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

		return response.json(incidents);
	},

	async store(request, response) {
		const { title, description, value } = request.body;
		const ong_id = request.headers.authorization;

		await connection('incidents').insert({
			title,
			description,
			value,
			ong_id
		});

		return response.json({ title, description, value, ong_id });
	},

	async delete(request, response) {
		const { id } = request.params;
		const ong_id = request.headers.authorization;

		const incident_id = await connection('incidents')
			.where('id', id)
			.first();

		if (!incident_id) {
			return response.status(404).json({ error: 'Incident not found.' });
		}

		const incident = await connection('incidents')
			.where('id', id)
			.select('ong_id')
			.first();

		// Ong is not the owner of the incident
		if (incident.ong_id !== ong_id) {
			return response.status(401).json({ error: 'Operation not permitted.' });
		}

		//delete
		await connection('incidents')
			.where('id', id)
			.delete();

		return response.status(204).send();
	}
};
