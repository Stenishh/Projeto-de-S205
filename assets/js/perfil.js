// ========== PERFIL.JS ==========

let alunoData = null;

document.addEventListener('DOMContentLoaded', async () => {
    alunoData = await carregarJSON('../assets/data/aluno.json');
    const notasData = await carregarJSON('../assets/data/notas.json');
    const frequenciaData = await carregarJSON('../assets/data/frequencia.json');
    
    exibirPerfil();
    calcularEstatisticas(notasData, frequenciaData);
});

function exibirPerfil() {
    if (!alunoData) return;
    
    document.getElementById('perfilFoto').src = '../' + alunoData.foto;
    document.getElementById('perfilNome').textContent = `${alunoData.nome} ${alunoData.sobrenome}`;
    document.getElementById('perfilCurso').textContent = alunoData.curso;
    document.getElementById('perfilPeriodo').textContent = alunoData.periodo;
    
    document.getElementById('infoMatricula').textContent = alunoData.matricula;
    document.getElementById('infoCurso').textContent = alunoData.curso;
    document.getElementById('infoPeriodo').textContent = alunoData.periodo;
    document.getElementById('infoEmail').textContent = alunoData.email;
    document.getElementById('infoTelefone').textContent = alunoData.telefone;
}

function calcularEstatisticas(notasData, frequenciaData) {
    if (!notasData || !frequenciaData) return;
    
    // Calcular CR Geral
    const totalNotas = notasData.reduce((acc, materia) => acc + materia.media_final, 0);
    const crGeral = (totalNotas / notasData.length).toFixed(1);
    document.getElementById('crGeral').textContent = crGeral;
    
    // Total de Matérias
    document.getElementById('totalMaterias').textContent = notasData.length;
    
    // Frequência Média
    const totalPresencas = frequenciaData.reduce((acc, f) => acc + f.presencas, 0);
    const totalAulas = frequenciaData.reduce((acc, f) => acc + f.aulas_dadas, 0);
    const frequenciaMedia = totalAulas > 0 ? ((totalPresencas / totalAulas) * 100).toFixed(1) : 0;
    document.getElementById('frequenciaMedia').textContent = `${frequenciaMedia}%`;
}

console.log('✅ Perfil.js carregado!');
