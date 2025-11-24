// ========== HORÁRIOS.JS ==========

let horariosData = [];

document.addEventListener('DOMContentLoaded', async () => {
    horariosData = await carregarJSON('../assets/data/horarios.json');
    exibirHorarios();
});

function exibirHorarios() {
    const container = document.getElementById('horariosTabela');
    if (!container || !horariosData || horariosData.length === 0) return;
    
    const horarios = [
        { label: '8:00', periodo: '8:00 - 9:40' },
        { label: '10:00', periodo: '10:00 - 11:40' },
        { label: '13:30', periodo: '13:30 - 15:10' },
        { label: '15:30', periodo: '15:30 - 17:10' },
        { label: '17:30', periodo: '17:30 - 19:10' },
        { label: '19:30', periodo: '19:30 - 21:10' },
        { label: '21:30', periodo: '21:30 - 23:10' }
    ];
    
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    
    let html = '<div class="horarios-grid">';
    
    // Cabeçalho
    html += '<div class="horarios-header">';
    html += '<div class="header-cell">Horário</div>';
    dias.forEach(dia => {
        html += `<div class="header-cell">${dia}</div>`;
    });
    html += '</div>';
    
    // Linhas de horário
    horarios.forEach(horario => {
        html += '<div class="horario-row">';
        html += `<div class="horario-label">${horario.label}</div>`;
        
        horariosData.forEach(diaData => {
            const aula = diaData.aulas.find(a => a.horario === horario.periodo);
            
            if (aula) {
                const tipoClass = aula.tipo.toLowerCase() === 'prática' ? 'pratica' : 'teorica';
                html += `
                    <div class="aula-slot">
                        <div class="aula-card ${tipoClass}">
                            <div class="aula-materia">${aula.materia}</div>
                            <div class="aula-codigo">${aula.codigo}</div>
                            <div class="aula-detalhes">
                                <div class="aula-detalhe-item">
                                    <span class="material-symbols-outlined">schedule</span>
                                    <span>${horario.periodo}</span>
                                </div>
                                <div class="aula-detalhe-item">
                                    <span class="material-symbols-outlined">location_on</span>
                                    <span>${aula.sala}</span>
                                </div>
                                <div class="aula-detalhe-item">
                                    <span class="material-symbols-outlined">category</span>
                                    <span>${aula.tipo}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                html += '<div class="aula-slot vazio"></div>';
            }
        });
        
        html += '</div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
}

console.log('✅ Horarios.js carregado!');
