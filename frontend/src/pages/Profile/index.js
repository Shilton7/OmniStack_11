import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Profile() {
	return (
		<div className='profile-container'>
			<header>
				<img src={logoImg} alt='Be The hero' />
				<span>Bem vinda , APAD</span>

				<Link className='button' to='/incidentes/new'>
					Cadastrar novo caso
				</Link>

				<button>
					<FiPower size={18} color='#e02041' />
				</button>
			</header>

			<h1>Casos Cadastrados</h1>

			<ul>
				<li>
					<strong>CASO: </strong>
					<p>Caso Teste</p>

					<strong>DESCRIÇÂO: </strong>
					<p>Descrição Teste</p>

					<strong>VALOR: </strong>
					<p>R$ 120,00</p>

					<button tyoe='button'>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>

				<li>
					<strong>CASO: </strong>
					<p>Caso Teste</p>

					<strong>DESCRIÇÂO: </strong>
					<p>Descrição Teste</p>

					<strong>VALOR: </strong>
					<p>R$ 120,00</p>

					<button tyoe='button'>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>

				<li>
					<strong>CASO: </strong>
					<p>Caso Teste</p>

					<strong>DESCRIÇÂO: </strong>
					<p>Descrição Teste</p>

					<strong>VALOR: </strong>
					<p>R$ 120,00</p>

					<button tyoe='button'>
						<FiTrash2 size={20} color='#a8a8b3' />
					</button>
				</li>
			</ul>
		</div>
	);
}
