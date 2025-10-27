# HBVIDAESAUDE - Assistência à Saúde

Site institucional da HBVIDAESAUDE, operadora de autogestão de saúde (ANS 41.837-4), com foco em serviços de telemedicina e assistência médica à distância.

## 🏥 Sobre o Projeto

Este é um website moderno e responsivo desenvolvido para apresentar os serviços de telemedicina da HBVIDAESAUDE, incluindo atendimento médico, psicológico e nutricional à distância, disponível 24 horas por dia, 7 dias por semana.

## ✨ Funcionalidades Implementadas

### ✅ Funcionalidades Principais

1. **Página Inicial (Hero Section)**
   - Apresentação institucional da HBVIDAESAUDE
   - Destaques dos principais serviços (24/7, +27 especialidades, ANS)
   - Call-to-action para assinatura do plano
   - Design responsivo com gradiente moderno
   - Botão direto para plano de R$ 59,90/mês

2. **Seção "Sobre"**
   - Informações sobre a operadora de autogestão
   - Registro ANS (41.837-4)
   - Compromisso com os beneficiários
   - Layout clean e profissional

3. **Seção de Telemedicina**
   - Explicação sobre o que é telemedicina
   - Como funciona o serviço
   - Diferentes modalidades de atendimento
   - Cards informativos com ícones

4. **Especialidades Médicas (27+ especialidades)**
   - Grid responsivo com todas as especialidades
   - Sistema de busca em tempo real
   - Categorização por tipo (Clínica, Pediatria, Cirurgia, Saúde Mental)
   - Cards interativos com ícones FontAwesome
   - Animações suaves de entrada
   - Feedback visual "Nenhuma especialidade encontrada"

5. **Planos e Pagamento**
   - Seção dedicada ao plano mensal de R$ 59,90
   - Lista completa de benefícios incluídos
   - Integração com API de pagamento Cielo
   - Card de pagamento com design premium
   - Animações e efeitos de hover sofisticados
   - FAQ sobre pagamento e plano
   - Badges de segurança (SSL, Cielo)
   - Botão de pagamento que redireciona para checkout seguro

6. **Navegação e UX**
   - Menu de navegação fixo com efeito de sombra ao rolar
   - Menu mobile responsivo (hamburger menu)
   - Smooth scroll para navegação entre seções
   - Links internos funcionais
   - Link para Planos em todos os menus

7. **Modal de Agendamento**
   - Modal informativo ao clicar em botões de agendamento
   - Informações sobre pronto atendimento e especialidades
   - Design moderno com backdrop blur
   - Fechamento ao clicar fora ou no botão

8. **Footer Completo**
   - Informações de contato
   - Links rápidos de navegação
   - Horários de atendimento
   - Copyright e informações da ANS

### 🎨 Design e Estilo

- **Framework CSS**: Tailwind CSS (via CDN)
- **Ícones**: Font Awesome 6.4.0
- **Tipografia**: Google Fonts (Inter)
- **Paleta de Cores**:
  - Primária: `#0066CC` (azul)
  - Secundária: `#00A8E8` (azul claro)
  - Accent: `#00C9A7` (verde água)
  - Dark: `#1A202C` (cinza escuro)

### 🔧 Recursos Técnicos

- **HTML5 Semântico**: Tags apropriadas (header, nav, section, article, footer)
- **CSS3 Avançado**: Animações, transições, gradientes, backdrop-filter
- **JavaScript ES6+**: Funções modernas, arrow functions, template literals
- **Responsividade**: Design mobile-first, breakpoints para tablet e desktop
- **Otimização Mobile**: 
  - Touch-friendly (44x44px mínimo)
  - Sem zoom iOS (inputs 16px)
  - Tap highlights customizados
  - Active states otimizados
  - Grid responsivo (1 coluna mobile, 2 tablet, 4 desktop)
- **Acessibilidade**: 
  - Alt text para ícones
  - ARIA labels onde necessário
  - Suporte a teclado
  - Redução de movimento para usuários com preferências de acessibilidade

### 📱 Funcionalidades JavaScript

1. **Renderização Dinâmica de Especialidades**
2. **Sistema de Busca em Tempo Real**
3. **Menu Mobile com Toggle**
4. **Smooth Scrolling**
5. **Header com Sombra Dinâmica**
6. **Animações de Scroll (Intersection Observer)**
7. **Modal de Agendamento**
8. **Efeitos Hover e Transições**

## 📋 Estrutura de URIs

### Páginas e Seções

| URI | Descrição |
|-----|-----------|
| `/` ou `/index.html` | Página principal |
| `#inicio` | Seção Hero (topo da página) |
| `#sobre` | Informações sobre a HBVIDAESAUDE |
| `#telemedicina` | Explicação sobre telemedicina |
| `#especialidades` | Lista de especialidades médicas |
| `#planos` | Planos e pagamento (R$ 59,90/mês) |
| `#contato` | Informações de contato (footer) |

## 🗂️ Estrutura de Arquivos

```
HBVIDAESAUDE/
├── index.html                        # Página principal
├── css/
│   └── style.css                    # Estilos customizados
├── js/
│   └── main.js                      # JavaScript principal (assinatura recorrente)
├── README.md                         # Documentação principal
├── INTEGRACAO-MERCADOPAGO.md        # Guia técnico Mercado Pago
├── CREDENCIAIS-GATEWAYS.md          # Credenciais PIX + Cartão
├── ASSINATURA-RECORRENTE.md         # Documentação completa de recorrência
├── RESUMO-CONFIGURACAO.md           # Status e configuração atual
└── O-QUE-O-CLIENTE-VE.md            # Experiência visual do usuário
```

## 🚀 Como Usar

### Visualização Local

1. Abra o arquivo `index.html` em um navegador moderno
2. Todas as dependências são carregadas via CDN (conexão à internet necessária)

### 🌐 Site Publicado

- **URL Principal**: https://hbvidaesaude.me
- **Status**: ✅ Ativo (217 visitantes únicos)
- **Hospedagem**: Cloudflare
- **SSL/HTTPS**: ✅ Ativo

### 📦 Deploy Automático

**🔗 Repositório GitHub:** https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git

O site está configurado para **deploy automático** via GitHub + Cloudflare Pages:

1. **Faça alterações** nos arquivos HTML/CSS/JS
2. **Envie para GitHub** (push)
3. **Aguarde 2-3 minutos** - Site atualizado automaticamente! 🎉

#### 🎯 QUER CONFIGURAR DEPLOY AUTOMÁTICO?

**👉 [TUDO-PRONTO.md](TUDO-PRONTO.md) ⭐⭐⭐ COMECE AQUI!**

Tudo foi preparado! Escolha seu método e configure em 15 minutos.

#### 📖 Guias de Configuração:

| Arquivo | Descrição | Use Para |
|---------|-----------|----------|
| 🎯 **[COMECE-AQUI.md](COMECE-AQUI.md)** | ⭐ **PÁGINA INICIAL** - Escolha seu método | Começar configuração |
| 📋 **[CHECKLIST-DEPLOY.md](CHECKLIST-DEPLOY.md)** | Checklist visual passo a passo | Marcar cada etapa |
| 📘 **[CONECTAR-CLOUDFLARE-AGORA.md](CONECTAR-CLOUDFLARE-AGORA.md)** | Guia detalhado específico para este repo | Instruções completas |
| 🚀 **[DEPLOY-AUTOMATICO-INSTRUCOES.md](DEPLOY-AUTOMATICO-INSTRUCOES.md)** | Guia geral de deploy automático | Referência técnica |
| 🖥️ **[COMANDOS-GIT.bat](COMANDOS-GIT.bat)** | Script automático para Windows | Enviar arquivos (Windows) |
| 🐧 **[COMANDOS-GIT.sh](COMANDOS-GIT.sh)** | Script automático para Mac/Linux | Enviar arquivos (Mac/Linux) |

#### 📁 Arquivos de Deploy:
- `.gitignore` - Arquivos ignorados pelo Git
- `wrangler.toml` - Configuração Cloudflare Pages
- `.github/workflows/deploy.yml` - GitHub Actions para CI/CD automático

## 🔗 Dependências (CDN)

- **Tailwind CSS**: https://cdn.tailwindcss.com
- **Font Awesome**: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css
- **Google Fonts (Inter)**: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap

## 📊 Especialidades Disponíveis (29)

### Clínica Geral
- Cardiologia
- Clínica Médica
- Coloproctologia
- Dermatologia
- Endocrinologia/Metabologia
- Gastroenterologia
- Geriatria
- Ginecologia/Obstetrícia
- Hematologia e Hemoterapia
- Mastologia
- Neurologia
- Oftalmologia
- Otorrinolaringologia
- Pneumologia
- Reumatologia
- Urologia

### Pediatria
- Alergia e Imunologia Pediátrica
- Gastroenterologia Pediátrica
- Hematologia Pediátrica
- Infectologia Pediátrica
- Ortopediatria
- Pediatria
- Pneumologia Pediátrica

### Cirurgia
- Cirurgia Geral
- Cirurgia Plástica
- Cirurgia Vascular

### Saúde Mental e Nutrição
- Psicologia
- Psiquiatria
- Nutricionista

## 💳 Integração de Pagamento

### Sistema de Pagamento Dual: PIX (Iframe) + Cartão (Nova Aba)

- **Valor**: R$ 59,90/mês
- **Gateways Integrados**:
  - **PIX**: Woovi (iframe na mesma página)
  - **Cartão**: Cielo E-commerce (nova aba)

#### 🟢 PIX via Woovi (Iframe)
- **URL**: `https://woovi.com/pay/ef8af5ea-0820-42a7-bbb8-3d9a8f32c24a`
- **Método**: Iframe modal dentro da mesma página
- **Comportamento**: Abre modal com iframe, sem abrir nova aba
- **Z-index**: 60 (acima do modal de pagamento)
- **Responsivo**: Fullscreen em mobile
- **Fechamento**: Botão X, clicar fora, ou tecla ESC

#### 🔵 Cartão via Mercado Pago (Assinatura Recorrente) 🔄
- **Gateway**: Mercado Pago Subscriptions API
- **Tipo**: **ASSINATURA RECORRENTE MENSAL** ✅
- **Credenciais**:
  - Public Key: `APP_USR-343756f0-2122-419e-a44c-ffd5f1087a11`
  - Access Token: `APP_USR-6922749920529255-100719-***`
  - Client ID: `6922749920529255`
  - Client Secret: `Hy3MfwWhdmpBYNdna5lul7tFKS3tBOwX` (backend only)
- **Método de Pagamento**: **SOMENTE Cartão de Crédito** (PIX, Boleto e outros bloqueados)
- **API**: `POST /preapproval_plan` (cria plano de assinatura)
- **Comportamento**: 
  1. Cria plano de assinatura via API
  2. Gera link de checkout: `mercadopago.com.br/subscriptions/checkout`
  3. Abre em iframe (fallback para popup se bloqueado)
- **Valor**: R$ 59,90/mês (cobrança recorrente automática)
- **Primeira Cobrança**: Imediata (ao criar assinatura)
- **Renovação**: Automática a cada 30 dias (mesmo dia do mês)
- **Parcelamento**: Apenas 1x (sem parcelamento)
- **Tokenização**: Cartão salvo de forma segura pelo Mercado Pago
- **Cancelamento**: Cliente pode cancelar quando quiser via app/painel MP
- **Z-index**: 60 (acima do modal de pagamento)
- **Responsivo**: Fullscreen em mobile
- **Fechamento**: Botão X, clicar fora, ou tecla ESC
- **Segurança**: Checkout seguro Mercado Pago (PCI Compliance)
- **E-mails**: Automáticos (confirmação, renovação, lembretes, falhas)
- **Gestão**: Via painel/app Mercado Pago (histórico, atualizar cartão, cancelar)

### Fluxo de Pagamento Completo

1. **Usuário clica em "Assinar Agora"**
2. **Modal de Pagamento abre** mostrando:
   - Resumo dos benefícios incluídos
   - Formulário com dados do cliente (nome, CPF, e-mail, telefone, data de nascimento)
   - Máscaras automáticas (CPF: 000.000.000-00, Telefone: (00) 00000-0000)
   - Validação HTML5 em tempo real
   - Grid com 2 opções de pagamento (PIX verde / Cartão azul)

3. **Usuário preenche o formulário**
   - Todos os campos são obrigatórios
   - Validação antes de prosseguir

4. **Usuário escolhe método de pagamento:**

   **Opção A: PIX (Woovi)**
   - Clica no botão "Pagar com PIX"
   - **Iframe modal abre na mesma página**
   - Página da Woovi carrega dentro do iframe
   - Usuário gera QR Code e completa pagamento
   - Pode fechar modal e retornar ao site
   
   **Opção B: Cartão (Mercado Pago - Assinatura Recorrente via Subscriptions API)** 🔄
   - Clica no botão "Pagar com Cartão"
   - Sistema cria **plano de assinatura** via API (`POST /preapproval_plan`)
   - Gera link de checkout de assinatura
   - **Modal iframe abre na mesma página**
   - Se iframe for bloqueado → **Popup centralizado abre automaticamente**
   - Checkout do Mercado Pago carrega (iframe ou popup)
   - **Exibe APENAS opção de Cartão de Crédito** (PIX e outros bloqueados)
   - Usuário insere dados do cartão
   - Checkout informa: **"Cobrança mensal recorrente de R$ 59,90"**
   - **Primeira cobrança:** R$ 59,90 processada imediatamente
   - **Cartão tokenizado:** Salvo seguro para cobranças futuras
   - **A cada 30 dias:** Cobrança automática de R$ 59,90
   - **E-mails automáticos:** Confirmação, renovação, lembretes
   - **Gestão:** Cliente gerencia via app/painel Mercado Pago
   - Pode fechar modal/popup e retornar ao site

5. **Mensagem de sucesso** aparece confirmando redirecionamento
6. **Sistema registra dados** no console (analytics)

## 🎯 Funcionalidades Não Implementadas

As seguintes funcionalidades podem ser adicionadas em futuras versões:

1. **Sistema de Agendamento Real**
   - Integração com API de agendamento
   - Calendário interativo
   - Seleção de horários disponíveis
   - Confirmação por e-mail/SMS

2. **Portal do Beneficiário**
   - Sistema de login
   - Histórico de consultas
   - Acesso a exames e resultados
   - Gestão de dados pessoais

3. **Sistema de FAQ Expandível**
   - Perguntas frequentes por categoria
   - Sistema de busca no FAQ
   - Feedback útil/não útil

4. **Chat Online / Chatbot**
   - Atendimento em tempo real
   - Bot com respostas automáticas
   - Transferência para atendente humano

5. **Formulário de Contato**
   - Envio de mensagens
   - Solicitação de informações
   - Validação de campos

6. **Blog/Notícias**
   - Artigos sobre saúde
   - Novidades da operadora
   - Dicas de bem-estar

7. **Multilíngue**
   - Suporte a inglês e espanhol
   - Seletor de idioma

8. **Modo Escuro**
   - Toggle dark/light mode
   - Persistência da preferência

9. **Integração com Mapa**
   - Localização de unidades físicas
   - Rede credenciada

10. **Avaliações e Depoimentos**
    - Feedback de beneficiários
    - Sistema de estrelas
    - Carrossel de depoimentos

## 📈 Próximos Passos Recomendados

### Prioridade Alta
1. ✅ **Implementar formulário de contato funcional**
2. ✅ **Adicionar seção de FAQ**
3. ✅ **Integrar Google Analytics para métricas**
4. ✅ **Otimizar SEO (meta tags, schema.org)**

### Prioridade Média
5. ✅ **Adicionar seção de depoimentos**
6. ✅ **Criar página de perguntas frequentes**
7. ✅ **Implementar sistema de newsletter**
8. ✅ **Adicionar mais animações e microinterações**

### Prioridade Baixa
9. ✅ **Implementar modo escuro**
10. ✅ **Adicionar mais idiomas**
11. ✅ **Criar blog institucional**
12. ✅ **Integração com redes sociais**

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (+ Tailwind CSS)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Google Fonts

## 📱 Compatibilidade

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licença

© 2025 HBVIDAESAUDE. Todos os direitos reservados.

## 📚 Documentação Técnica Completa

Para informações detalhadas sobre a implementação:

| Documento | Descrição |
|-----------|-----------|
| 📘 **[INTEGRACAO-MERCADOPAGO.md](INTEGRACAO-MERCADOPAGO.md)** | Guia técnico completo da API Mercado Pago |
| 🔐 **[CREDENCIAIS-GATEWAYS.md](CREDENCIAIS-GATEWAYS.md)** | Todas as credenciais (Woovi + Mercado Pago) |
| 🔄 **[ASSINATURA-RECORRENTE.md](ASSINATURA-RECORRENTE.md)** | Como funciona a recorrência mensal |
| 📊 **[RESUMO-CONFIGURACAO.md](RESUMO-CONFIGURACAO.md)** | Status completo e configurações atuais |
| 👁️ **[O-QUE-O-CLIENTE-VE.md](O-QUE-O-CLIENTE-VE.md)** | Experiência visual do usuário no checkout |

## 📞 Suporte

Para mais informações sobre os serviços da HBVIDAESAUDE:
- **ANS**: 41.837-4
- **Atendimento**: 24 horas por dia, 7 dias por semana
- **Agendamento**: Mínimo de 48h de antecedência para especialidades

**Suporte Técnico (Mercado Pago):**
- 📚 Documentação: https://www.mercadopago.com.br/developers
- 💬 Ajuda: https://www.mercadopago.com.br/ajuda
- 📧 E-mail: developers@mercadopago.com

---

**Desenvolvido com ❤️ para HBVIDAESAUDE**
