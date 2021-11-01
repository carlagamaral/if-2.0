import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import { AboutWrapper, CloseButton } from './styles';

const AboutModal = ({ setShowAboutUsModal, isAboutUs }) => (
	<Modal isAboutUs={isAboutUs} setShouldShowModal={setShowAboutUsModal}>
		<AboutWrapper>
			<h2>Sobre o projeto</h2>
			<span>
				Essa plataforma é parte da pesquisa de Doutorado de Carla Giane Fonseca
				do Amaral, docente de Artes Visuais do IFSul Câmpus Sapucaia do Sul e é
				um dos resultados de sua investigação, ocorrida entre os anos 2016 e
				2021, no Programa de Pós-Graduação em Educação da Universidade Federal
				do Rio Grande do Sul, sob orientação da Profa. Dra. Luciana Gruppelli
				Loponte. A pesquisa inscreve-se no campo das problematizações sobre
				educação profissional, com ênfase na relação entre o ensino de arte –
				seja Artes Visuais, Música, Dança e Teatro - e a educação desenvolvida
				atualmente nos Institutos Federais de Educação, Ciência e Tecnologia no
				Brasil. O mapeamento de dados que aqui se apresenta teve como objetivo
				compreender qual tem sido o alcance do ensino de arte nos IFs, a partir
				da presença de cursos relacionados à área da arte e da cultura e também
				da presença de docentes de arte em atividade nessas instituições. As
				estratégias de produção de dados foram diversas, entre elas: pesquisa
				nos sites institucionais de cada câmpus; contato por e-mail com os
				câmpus para confirmação de informações; colaborações de colegas de
				diferentes regiões do país, enviando dados de suas instituições. Devido
				à mobilidade docente na Rede Federal, esses números são dados em
				movimento, cambiantes, como um retrato desfocado, inexato e impreciso da
				realidade. Fora isso, é necessário registrar a dificuldade de confirmar
				dados, pois nem sempre esses números estão disponíveis em sites e alguns
				IFs não atenderam às solicitações de confirmação sobre a presença de
				docentes de arte feitas em 2021.
			</span>
		</AboutWrapper>
		<CloseButton onClick={() => setShowAboutUsModal(false)}>X</CloseButton>
	</Modal>
);

AboutModal.propTypes = {
	isAboutUs: PropTypes.bool,
	setShowAboutUsModal: PropTypes.func.isRequired,
};

AboutModal.defaultProps = {
	isAboutUs: false,
};

export default AboutModal;
