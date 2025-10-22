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

        // 3. Prepara a mensagem para envio (WhatsApp)
        // O valor do 'servico' virá agora como "Volume Hibrido", "Design de Sobrancelhas", etc.
        const mensagem = `Olá Ana! Gostaria de pré-agendar um horário. 
        \nNome: ${nome}
        \nServiço Desejado: ${servico}
        \nMeu WhatsApp para contato: ${whatsapp}
        \nAguardo a confirmação da disponibilidade!`;

        // **AÇÃO DE ENVIO:**
        // Configure seu número de WhatsApp. O formato deve ser Código do País (55) + DDD (21) + Número.
        const numeroWhatsapp = "5521981870347"; // Seu número (21) 98187-0347

        // Cria o link do WhatsApp com a mensagem pré-preenchida
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;

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