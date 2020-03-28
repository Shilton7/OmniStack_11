import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function NewIncident() {
	return (
		<div className='new-incident-container'>
			<div className='content'>
				<section>
					<img src={logoImg} alt='Be The Hero' />
					<h1>Cadastro novo caso</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
					<Link className='back-link' to='/profile'>
						<FiArrowLeft size={16} color='E02041' />
						Voltar para Home
					</Link>
				</section>

				<form>
					<input placeholder='Titulo do Caso' />
					<textarea placeholder='Titulo do Caso' />
					<input placeholder='Valor em reais' />

					<button className='button' type='submit'>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
