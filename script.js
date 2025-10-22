document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agendamento-form');
    const feedback = document.getElementById('mensagem-feedback');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // 1. Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const servico = document.getElementById('servico').value;
        const whatsapp = document.getElementById('whatsapp').value;

        // 2. Validação simples
        if (!nome || !servico || !whatsapp) {
            feedback.textContent = 'Por favor, preencha todos os campos.';
            feedback.style.color = 'red';
            return;
        }

        // 3. Prepara a mensagem para envio (Exemplo: WhatsApp/Email)
        const mensagem = `Olá! Gostaria de pré-agendar um horário. 
        \nNome: ${nome}
        \nServiço Desejado: ${servico}
        \nWhatsApp para contato: ${whatsapp}
        \nAguardo confirmação!`;

        // **Ação de envio:**
        // Como o GitHub Pages é estático, a forma mais fácil é direcionar para o WhatsApp.
        // Você precisará configurar seu número de WhatsApp abaixo.
        
        const numeroWhatsapp = "5521981870347"; // Substitua XX9XXXXXXXX pelo seu número

        // Cria o link do WhatsApp com a mensagem pré-preenchida
        const linkWhatsapp = `https://www.instagram.com/anapaullasill?igsh=MXI0cmx1ZTdldnEwcw%3D%3D&utm_source=qr${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;

        // Abre o WhatsApp
        window.open(linkWhatsapp, '_blank');
        
        // 4. Feedback para o usuário no site
        feedback.textContent = 'Pedido enviado! Por favor, finalize o agendamento no WhatsApp que se abriu. Redirecionando...';
        feedback.style.color = 'green';
        
        // Limpa o formulário após 3 segundos
        setTimeout(() => {
            form.reset();
            feedback.textContent = '';
        }, 3000);

    });
});