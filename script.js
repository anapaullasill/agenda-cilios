document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agendamento-form');
    const feedback = document.getElementById('mensagem-feedback');
    const dataInput = document.getElementById('data');
    const horaInput = document.getElementById('hora');

    // Impede datas anteriores ao dia atual
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.min = hoje;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const servico = document.getElementById('servico').value;
        const data = dataInput.value;
        const hora = horaInput.value;
        const whatsapp = document.getElementById('whatsapp').value.trim();

        if (!nome || !servico || !whatsapp || !data || !hora) {
            feedback.textContent = 'Por favor, preencha todos os campos.';
            feedback.style.color = 'red';
            return;
        }

        const agora = new Date();
        const dataSelecionada = new Date(`${data}T${hora}`);
        if (dataSelecionada < agora) {
            feedback.textContent = 'Escolha um horário futuro.';
            feedback.style.color = 'red';
            return;
        }

        const dataFormatada = new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        const mensagem = `💖 Oi Ana! Tudo bem? Gostaria de pré-agendar um horário.
        \n👩 Nome: ${nome}
        \n💅 Serviço: ${servico}
        \n📅 Data: ${dataFormatada}
        \n⏰ Horário: ${hora}
        \n📱 WhatsApp para contato: ${whatsapp}
        \n✨ Aguardo sua confirmação! 💕`;

        const numeroWhatsapp = "5521981870347";
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;

        window.open(linkWhatsapp, '_blank');

        feedback.innerHTML = `🌸 Pedido enviado para o WhatsApp!<br>Assim que possível, retorno confirmando o horário 💕`;
        feedback.style.color = 'var(--cor-primaria)';
        feedback.style.textAlign = 'center';
        feedback.style.fontWeight = 'bold';

        setTimeout(() => {
            form.reset();
            feedback.textContent = '';
        }, 5000);
    });
});
