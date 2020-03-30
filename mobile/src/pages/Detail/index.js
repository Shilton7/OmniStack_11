import React from 'react';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailCompose from 'expo-mail-composer';

export default function Detail() {
	//Navigation parameters
	const navigation = useNavigation();
	const route = useRoute();
	const incident = route.params.incident;

	//Contact details
	const emailSubject = `Herói do Caso ${incident.title}`;
	const emailRecipients = [incident.email];
	const message = `Olá ${incident.name}, estou entrando em contato sobre o caso ${incident.title}`;
	const phoneWhatsapp = incident.whatsapp;

	function navigateToIncident() {
		navigation.goBack();
	}

	function sendMail() {
		MailCompose.composeAsync({
			subject: emailSubject,
			recipients: emailRecipients,
			body: message
		});
	}

	function sendWhatsapp() {
		Linking.openURL(`whatsapp://send?phone=${phoneWhatsapp}&text=${message}`);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />

				<TouchableOpacity onPress={navigateToIncident}>
					<Feather name='arrow-left' size={30} color='#E02041' />
				</TouchableOpacity>
			</View>

			<View style={styles.incident}>
				<Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
				<Text style={styles.incidentValue}>
					{incident.name} de {incident.city}/{incident.uf}
				</Text>

				<Text style={styles.incidentProperty}>CASO:</Text>
				<Text style={styles.incidentValue}>{incident.title}</Text>

				<Text style={styles.incidentProperty}>Valor</Text>
				<Text style={styles.incidentValue}>
					{Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(incident.value)}
				</Text>
			</View>

			<View style={styles.contactBox}>
				<Text style={styles.heroTitle}>Salve o dia!</Text>
				<Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

				<Text style={styles.heroDescription}>Entre em contato:</Text>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
						<Text style={styles.actionText}>WhatsApp</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.action} onPress={sendMail}>
						<Text style={styles.actionText}>E-mail</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
