# 🎓 Portal Acadêmico Inatel

Portal acadêmico completo e moderno desenvolvido para gerenciar informações estudantis do Inatel.

## ✨ Funcionalidades

### 📊 Dashboard
- **Boas-vindas personalizadas** com nome do aluno e data atual
- **Estatísticas rápidas**: matérias matriculadas, CR médio e frequência geral
- **Notificações** importantes (financeiro, provas, reservas, etc.)
- **Aulas do dia** com informações detalhadas (horário, sala, tipo)
- **Carrossel de eventos** com notícias e acontecimentos da faculdade

### 📚 Minhas Matérias
- Lista completa de matérias matriculadas
- Informações de professor, créditos e carga horária
- Visualização de CR e frequência por matéria
- Ementa expansível para cada disciplina
- Resumo geral: total de matérias, créditos e carga horária

### 🗓️ Horários
- Grade horária semanal completa
- Visualização clara de todas as aulas
- Diferenciação entre aulas teóricas e práticas
- Informações de sala e tipo de aula
- Layout responsivo com scroll horizontal em mobile

### ✅ Frequência
- Controle detalhado de presença por matéria
- **Sistema de cores inteligente**:
  - 🟢 Verde: Situação regular (acima de 85%)
  - 🟠 Laranja: Atenção necessária (75% - 85%)
  - 🔴 Vermelho: Situação crítica (abaixo de 75%)
- Barra de progresso visual
- Alertas para matérias em risco
- Estatísticas: faltas restantes, presenças, aulas dadas

### 📝 Notas
- Visualização de todas as avaliações
- CR por matéria com código de cores
- Tabela detalhada de provas, trabalhos e pesos
- Status de aprovação (Aprovado/Recuperação/Reprovado)
- Média geral do semestre destacada

### 👤 Perfil
- Informações pessoais e acadêmicas do aluno
- Foto de perfil
- Dados de contato (email e telefone)
- **Seletor de temas** com 3 opções:
  - 🔵 Tema Inatel (azul padrão)
  - 🟢 Tema Limão (verde vibrante)
  - ⚫ Tema Dark (escuro)

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilos com variáveis CSS, flexbox e grid
- **JavaScript ES6+**: Código modular e assíncrono
- **Material Symbols**: Ícones do Google
- **JSON**: Armazenamento de dados estruturados

## 📁 Estrutura do Projeto

```
S205/
├── index.html                    # Página principal (Dashboard)
├── assets/
│   ├── css/
│   │   ├── global.css           # Estilos globais e temas
│   │   ├── dashboard.css        # Estilos específicos do dashboard
│   │   ├── materias.css         # Estilos da página de matérias
│   │   ├── horarios.css         # Estilos da grade horária
│   │   ├── frequencia.css       # Estilos de frequência
│   │   ├── notas.css            # Estilos de notas
│   │   └── perfil.css           # Estilos do perfil
│   ├── js/
│   │   ├── global.js            # Funções globais e utilitárias
│   │   ├── dashboard.js         # Lógica do dashboard
│   │   ├── materias.js          # Lógica de matérias
│   │   ├── horarios.js          # Lógica de horários
│   │   ├── frequencia.js        # Lógica de frequência
│   │   ├── notas.js             # Lógica de notas
│   │   └── perfil.js            # Lógica do perfil
│   └── data/
│       ├── aluno.json           # Dados do aluno
│       ├── materias.json        # Lista de matérias
│       ├── horarios.json        # Grade horária
│       ├── frequencia.json      # Registro de frequência
│       ├── notas.json           # Notas e avaliações
│       ├── eventos.json         # Eventos e notícias
│       └── notificacoes.json    # Notificações do sistema
└── pages/
    ├── materias.html            # Página de matérias
    ├── horarios.html            # Página de horários
    ├── frequencia.html          # Página de frequência
    ├── notas.html               # Página de notas
    └── perfil.html              # Página de perfil
```

## 🚀 Como Usar

1. **Abrir o Portal**: Clique duas vezes no arquivo `index.html` ou abra-o em um navegador moderno
2. **Navegar**: Use o menu lateral (ícone ☰) para acessar diferentes seções
3. **Trocar Tema**: Acesse o menu lateral ou a página de Perfil para escolher seu tema preferido
4. **Explorar**: Navegue entre as páginas para ver todas as informações acadêmicas

## 🎯 Destaques do Design

### ✅ Organização
- Código modular e separado por funcionalidade
- Arquivos CSS e JS específicos para cada página
- Dados centralizados em arquivos JSON
- Estrutura de pastas profissional

### 🎨 Interface Moderna
- Design limpo e profissional
- Cores harmoniosas do Inatel
- Animações suaves e transições
- Cards com sombras e hover effects
- Ícones Material do Google

### 📱 Responsivo
- Layout adaptável para mobile, tablet e desktop
- Menu lateral retrátil
- Tabelas com scroll horizontal
- Grid responsivo

### ♿ Acessibilidade
- Contraste adequado de cores
- Hierarquia visual clara
- Navegação intuitiva
- Feedback visual em interações

## 🔄 Funcionalidades Recicladas do Código Original

- ✅ Carrossel de notícias/eventos (melhorado)
- ✅ Sistema de temas (Inatel, Limão, Dark)
- ✅ Controle de frequência com cores
- ✅ Menu lateral retrátil
- ✅ Logo do Inatel em SVG
- ✅ Estrutura de notificações

## 🛠️ Personalização

### Alterar Dados do Aluno
Edite o arquivo `assets/data/aluno.json`:
```json
{
  "nome": "Seu Nome",
  "sobrenome": "Seu Sobrenome",
  "matricula": "2023001234",
  "curso": "Seu Curso",
  ...
}
```

### Adicionar Matérias
Edite o arquivo `assets/data/materias.json` e adicione uma nova matéria no array.

### Modificar Cores do Tema
Edite o arquivo `assets/css/global.css` na seção de variáveis CSS (`:root`).

## 📊 Dados de Exemplo

O portal vem com dados de exemplo completos:
- 6 matérias matriculadas
- Grade horária de segunda a sexta
- Registros de frequência
- Avaliações e notas
- 5 eventos/notícias
- 4 notificações

## 💡 Melhorias Futuras

- [ ] Integração com backend real
- [ ] Sistema de login
- [ ] Calendário acadêmico interativo
- [ ] Gráficos de desempenho
- [ ] Histórico de notas por período
- [ ] Download de documentos
- [ ] Sistema de mensagens

## 📝 Licença

Projeto desenvolvido para fins acadêmicos - Inatel

---

**Desenvolvido com ❤️ para o Inatel**
