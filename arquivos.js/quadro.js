// Função para abrir o modal com o conteúdo específico
function openModal(content) {
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('service-modal').style.display = "block";
}

// Fechar o modal
document.querySelector('.modal .close').addEventListener('click', function() {
    document.getElementById('service-modal').style.display = "none";
});

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('service-modal')) {
        document.getElementById('service-modal').style.display = "none";
    }
}

// Conteúdo para cada card
const limpezaContent = `
 <div class="quadro">
    <h2>Limpeza Dental</h2>
    <p>🦷 Manter uma higiene bucal adequada é essencial para a saúde dos seus dentes e gengivas. Na nossa clínica, oferecemos serviços de limpeza dental especializados para garantir que sua boca permaneça saudável e livre de problemas.</p>
    <h3>O Que Inclui a Limpeza Dental?</h3>
    <p>🦷<strong> Remoção de Placa e Tártaro:</strong> Utilizamos técnicas avançadas para remover a placa bacteriana e o tártaro acumulado, prevenindo doenças gengivais e cáries.</p>
    <p>🦷<strong> Polimento dos Dentes:</strong> Após a remoção do tártaro, nossos profissionais realizam o polimento dos dentes para deixar seu sorriso mais brilhante e suave.</p>
    <p>🦷<strong> Aplicação de Flúor:</strong> Aplicamos um gel de flúor para fortalecer o esmalte dos dentes e proporcionar uma camada adicional de proteção contra cáries.</p>
    <p>🦷<strong> Orientação sobre Higiene Bucal:</strong> Oferecemos dicas personalizadas sobre cuidados diários, como a técnica correta de escovação e uso do fio dental.</p>
    <a href="https://wa.me/5562993041755?text=Olá+quero+marcar+uma+consulta+de+limpeza+Dental" class="button">Marcar Consulta</a>
    </div>
`;

const ortodontiaContent = `
<div class="quadro">
    <h2>Ortodontia</h2>
    <p>🦷 A ortodontia é uma especialidade da odontologia que se concentra no diagnóstico, prevenção e tratamento de irregularidades dentárias e faciais. Nosso objetivo é ajudar você a alcançar um sorriso alinhado e saudável, proporcionando não apenas benefícios estéticos, mas também funcionais.</p>
    <h3>O Que Fazemos na Ortodontia?</h3>
    <p>🦷 <strong>Aparelhos Dentários:</strong> Oferecemos uma variedade de opções de aparelhos dentários, incluindo metálicos, cerâmicos e alinhadores invisíveis, para corrigir problemas como dentes desalinhados, mordidas inadequadas e espaço entre os dentes.</p>
    <p>🦷 <strong>Avaliação e Planejamento Personalizado:</strong> Realizamos uma análise detalhada de sua estrutura dentária e facial para criar um plano de tratamento personalizado que atenda às suas necessidades específicas e objetivos estéticos.</p>
    <p>🦷 <strong>Monitoramento Contínuo:</strong> Durante o tratamento ortodôntico, monitoramos o progresso regularmente para garantir que os dentes estejam se movendo conforme esperado e para ajustar o plano de tratamento se necessário.</p>
    <p>🦷 <strong>Manutenção Pós-Tratamento:</strong> Após o tratamento, fornecemos orientação sobre o uso de contenções para manter os dentes em suas novas posições e evitar recaídas.</p>
    <a href="https://wa.me/5562993041755?text=Olá+quero+marcar+uma+consulta+de+Ortodontia" class="button">Marcar Consulta</a>
     </div>
`;

const implanteContent = `
<div class="quadro">
    <h2>Implantes Dentários</h2>
    <p>🦷 Os implantes dentários são uma solução eficaz e duradoura para substituir dentes perdidos, proporcionando uma aparência natural e uma funcionalidade semelhante aos dentes naturais. Com a tecnologia avançada e o expertise da nossa equipe, oferecemos tratamentos de implantes dentários que ajudam a restaurar seu sorriso e sua qualidade de vida.</p>
    <h3>O Que São Implantes Dentários?</h3>
    <p>🦷 Os implantes dentários são pequenas estruturas de titânio que são inseridas no osso maxilar para substituir as raízes dos dentes perdidos. Após a inserção, um dente artificial, conhecido como coroa, é fixado ao implante para completar a restauração.</p>
    <h3>Benefícios dos Implantes Dentários</h3>
    <p>🦷 <strong>Aparência Natural:</strong> Os implantes dentários são projetados para se parecer e funcionar como dentes naturais, proporcionando um sorriso estético e natural.</p>
    <p>🦷<strong>Conforto e Funcionalidade:</strong> Diferente de dentaduras removíveis, os implantes dentários são fixos e oferecem um ajuste confortável, permitindo que você mastigue e fale com confiança.</p>
    <p>🦷 <strong>Preservação Óssea:</strong> Os implantes ajudam a preservar a estrutura óssea do maxilar, evitando a perda óssea que pode ocorrer quando um dente é perdido.</p>
    <p>🦷 <strong>Durabilidade e Resistência:</strong> Feitos de titânio, os implantes dentários são altamente duráveis e têm uma taxa de sucesso comprovada, oferecendo uma solução a longo prazo para a substituição de dentes.</p>
    <a href="https://wa.me/5562993041755?text=Olá+quero+marcar+uma+consulta+de+Implantes+Dentarios" class="button">Marcar Consulta</a>
     </div>
`;

// Adicionando evento de clique para cada card
document.getElementById('limpeza-card').addEventListener('click', function() {
    openModal(limpezaContent);
});

document.getElementById('ortodontia-card').addEventListener('click', function() {
    openModal(ortodontiaContent);
});

document.getElementById('implante-card').addEventListener('click', function() {
    openModal(implanteContent);
});