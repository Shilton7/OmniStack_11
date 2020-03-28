import React, { useState, useEffect } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Profile() {
	//redirect
	const history = useHistory();

	//localStorage
	const ongName = localStorage.getItem('ongName');
	const ongId = localStorage.getItem('ongId');

	const [incidents, setIncidents] = useState([]);

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ongId
			}
		}).then(response => {
			setIncidents(response.data);
		});
	}, [ongId]);

	async function handleDeleteIncident(id) {
		try {
			await api.delete(`incident/${id}`, {
				headers: {
					Authorization: ongId
				}
			});

			//atualizando lista
			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (error) {
			alert('Erro ao deletar caso, tente novamente.');
		}
	}

	function handleLogout() {
		localStorage.clear();
		history.push('/');
	}

	return (
		<div className='profile-container'>
			<header>
				<img src={logoImg} alt='Be The hero' />
				<span>Bem vinda , {ongName}</span>

				<Link className='button' to='/incidentes/new'>
					Cadastrar novo caso
				</Link>

				<button onClick={handleLogout}>
					<FiPower size={18} color='#e02041' />
				</button>
			</header>

			<h1>Casos Cadastrados</h1>

			<ul>
				{incidents.map(incident => (
					<li key={incident.id}>
						<strong>CASO: {incident.id} </strong>
						<p>{incident.title}</p>

						<strong>DESCRIÇÂO: </strong>
						<p>{incident.description}</p>

						<strong>VALOR: </strong>
						<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)} </p>

						<button tyoe='button' onClick={() => handleDeleteIncident(incident.id)}>
							<FiTrash2 size={20} color='#a8a8b3' />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
