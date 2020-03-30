import React from 'react';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Incidents() {
	const navigation = useNavigation();

	function navigateToDetail() {
		navigation.navigate('Detail');
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<Text style={styles.headerText}>
					Total de <Text style={styles.headerTextBold}>0 casos.</Text>
				</Text>
			</View>

			<Text style={styles.title}>Bem-vindo!</Text>
			<Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

			<FlatList
				style={styles.incidentList}
				keyExtractor={incident => String(incident)}
				showsVerticalScrollIndicator={false}
				data={[1, 2, 3]}
				renderItem={() => (
					<View style={styles.incident}>
						<Text style={styles.incidentProperty}>ONG:</Text>
						<Text style={styles.incidentValue}>APAD</Text>

						<Text style={styles.incidentProperty}>CASO:</Text>
						<Text style={styles.incidentValue}>Cadelinha Diana</Text>

						<Text style={styles.incidentProperty}>Valor</Text>
						<Text style={styles.incidentValue}>R$ 300,00</Text>

						<TouchableOpacity
							style={styles.detailsButton}
							onPress={() => {
								navigateToDetail();
							}}
						>
							<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
							<Feather name='arrow-right' size={16} color='#E02041' />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}