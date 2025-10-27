# ✅ CHECKLIST DE DEPLOY - HBVIDAESAUDE

## 📍 Seu Repositório GitHub
**https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git**

---

## 🎯 MISSÃO: Deploy Automático Funcionando em 15 Minutos

### ETAPA 1: ENVIAR ARQUIVOS PARA GITHUB ⏱️ 5 min

#### Opção A: Interface Web (Mais Fácil) 🌐

- [ ] **1.1** Abrir: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude
- [ ] **1.2** Clicar em **"Add file"** → **"Upload files"**
- [ ] **1.3** Arrastar TODOS os arquivos do projeto:
  ```
  ✓ index.html
  ✓ css/style.css
  ✓ js/main.js
  ✓ .gitignore
  ✓ wrangler.toml
  ✓ .github/workflows/deploy.yml
  ✓ README.md
  ✓ Todos os arquivos .md
  ```
- [ ] **1.4** Mensagem de commit: `Initial commit - Site HBVIDAESAUDE completo`
- [ ] **1.5** Clicar em **"Commit changes"**
- [ ] **1.6** ✅ **VERIFICAR:** Recarregar página e ver todos os arquivos listados

---

#### Opção B: Linha de Comando (Git CLI) 💻

**Windows:** Execute `COMANDOS-GIT.bat` (arquivo criado)
**Mac/Linux:** Execute `bash COMANDOS-GIT.sh` (arquivo criado)

**OU manualmente:**

- [ ] **1.1** Abrir terminal na pasta do projeto
- [ ] **1.2** Executar comandos:
  ```bash
  git init
  git add .
  git commit -m "Initial commit - Site HBVIDAESAUDE completo"
  git branch -M main
  git remote add origin https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git
  git push -u origin main
  ```
- [ ] **1.3** Se pedir login:
  - Username: `gelcijosegrouptrig-cmyk`
  - Password: Personal Access Token (criar em: https://github.com/settings/tokens)
- [ ] **1.4** ✅ **VERIFICAR:** Abrir GitHub e ver arquivos listados

---

### ETAPA 2: CONECTAR CLOUDFLARE PAGES ⏱️ 5 min

- [ ] **2.1** Abrir: https://dash.cloudflare.com/
- [ ] **2.2** Login com: **gelcijosegrouptrig@gmail.com**
- [ ] **2.3** Menu lateral → **"Workers & Pages"**
- [ ] **2.4** Clicar em **"Create application"**
- [ ] **2.5** Aba **"Pages"** → **"Connect to Git"**
- [ ] **2.6** Clicar em **"Connect GitHub"**
- [ ] **2.7** Autorizar Cloudflare Pages (popup)
- [ ] **2.8** Selecionar **"Only select repositories"**
- [ ] **2.9** Escolher: **"hbvidaesaude"**
- [ ] **2.10** Clicar em **"Install & Authorize"**

---

### ETAPA 3: CONFIGURAR BUILD SETTINGS ⏱️ 2 min

Preencher formulário exatamente assim:

- [ ] **3.1** Project name: `hbvidaesaude`
- [ ] **3.2** Production branch: `main`
- [ ] **3.3** Framework preset: `None`
- [ ] **3.4** Build command: *(deixar VAZIO)*
- [ ] **3.5** Build output directory: `/`
- [ ] **3.6** Root directory: *(deixar VAZIO)*
- [ ] **3.7** Clicar em **"Save and Deploy"** (botão azul)
- [ ] **3.8** ✅ **AGUARDAR:** 2-3 minutos para build completar

---

### ETAPA 4: VERIFICAR PRIMEIRO DEPLOY ⏱️ 1 min

- [ ] **4.1** Build completou com "Success" ✅
- [ ] **4.2** Cloudflare gerou URL temporária: `https://hbvidaesaude-xyz.pages.dev`
- [ ] **4.3** ✅ **TESTAR:** Abrir URL temporária no navegador
- [ ] **4.4** Site carrega corretamente
- [ ] **4.5** Formulário de pagamento funciona
- [ ] **4.6** Botões de PIX e Cartão funcionam

---

### ETAPA 5: ADICIONAR DOMÍNIO CUSTOMIZADO ⏱️ 2 min

- [ ] **5.1** Na tela do Cloudflare Pages → Aba **"Custom domains"**
- [ ] **5.2** Clicar em **"Set up a custom domain"**
- [ ] **5.3** Digite: `hbvidaesaude.me`
- [ ] **5.4** Clicar em **"Continue"**
- [ ] **5.5** Cloudflare detecta que domínio já está na conta
- [ ] **5.6** Clicar em **"Activate domain"**
- [ ] **5.7** ✅ Cloudflare cria registro DNS automaticamente

---

### ETAPA 6: VERIFICAR DNS ⏱️ 1 min

- [ ] **6.1** Ir para: Cloudflare Dashboard → **hbvidaesaude.me** → **DNS** → **Records**
- [ ] **6.2** ✅ **VERIFICAR:** Existe registro:
  ```
  Type: CNAME
  Name: hbvidaesaude.me (ou @)
  Target: hbvidaesaude.pages.dev
  Proxy: 🟠 Proxied (nuvem laranja)
  ```
- [ ] **6.3** Se não existe, criar manualmente com os dados acima

---

### ETAPA 7: AGUARDAR PROPAGAÇÃO ⏱️ 15 min

- [ ] **7.1** Aguardar 5-15 minutos para DNS propagar
- [ ] **7.2** SSL será gerado automaticamente
- [ ] **7.3** ✅ **TESTAR:** Abrir https://hbvidaesaude.me
- [ ] **7.4** Site carrega com HTTPS (cadeado verde)
- [ ] **7.5** Todas as funcionalidades funcionam
- [ ] **7.6** Testar em mobile também

---

## 🎯 ETAPA OPCIONAL: GITHUB ACTIONS (Para Controle Avançado)

### OBTER CREDENCIAIS CLOUDFLARE

- [ ] **8.1** Abrir: https://dash.cloudflare.com/profile/api-tokens
- [ ] **8.2** Clicar em **"Create Token"**
- [ ] **8.3** Use template: **"Edit Cloudflare Workers"**
- [ ] **8.4** Copiar o token gerado (mostrado apenas uma vez!)
- [ ] **8.5** Salvar em local seguro

- [ ] **8.6** No Cloudflare Dashboard, copiar **Account ID**
  - Está no painel direito ao abrir qualquer domínio

### ADICIONAR SECRETS NO GITHUB

- [ ] **9.1** Abrir: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude/settings/secrets/actions
- [ ] **9.2** Clicar em **"New repository secret"**
- [ ] **9.3** Adicionar primeiro secret:
  - Name: `CLOUDFLARE_API_TOKEN`
  - Value: *(colar o token copiado)*
  - Clicar em **"Add secret"**
- [ ] **9.4** Adicionar segundo secret:
  - Name: `CLOUDFLARE_ACCOUNT_ID`
  - Value: *(colar o account ID)*
  - Clicar em **"Add secret"**

### TESTAR GITHUB ACTIONS

- [ ] **10.1** Ir para: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude/actions
- [ ] **10.2** Verificar se workflow aparece
- [ ] **10.3** Fazer uma alteração pequena e push
- [ ] **10.4** Ver workflow executar automaticamente
- [ ] **10.5** ✅ Workflow completa com sucesso

---

## ✅ VALIDAÇÃO FINAL

### Todos os itens abaixo devem estar ✅ TRUE:

- [ ] ✅ Repositório GitHub criado e populado
- [ ] ✅ Cloudflare Pages conectado ao GitHub
- [ ] ✅ Build settings configurados corretamente
- [ ] ✅ Primeiro deploy concluído com sucesso
- [ ] ✅ URL temporária `.pages.dev` funciona
- [ ] ✅ Domínio `hbvidaesaude.me` adicionado
- [ ] ✅ Registro DNS CNAME criado
- [ ] ✅ SSL/HTTPS ativo (cadeado verde)
- [ ] ✅ Site acessível em https://hbvidaesaude.me
- [ ] ✅ Todas as funcionalidades testadas e funcionando
- [ ] ✅ Pagamento PIX funciona
- [ ] ✅ Pagamento Cartão funciona
- [ ] ✅ GitHub Actions configurado (opcional)

---

## 🚀 TESTE DE DEPLOY AUTOMÁTICO

**Fazer uma alteração simples para testar:**

### Via Interface Web:

- [ ] **11.1** Abrir: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude/blob/main/index.html
- [ ] **11.2** Clicar no ícone de lápis ✏️ (Edit)
- [ ] **11.3** Fazer alteração pequena (ex: mudar um texto)
- [ ] **11.4** Scroll até o final → Commit changes
- [ ] **11.5** Aguardar 2-3 minutos
- [ ] **11.6** Abrir https://hbvidaesaude.me
- [ ] **11.7** ✅ **VERIFICAR:** Alteração aparece no site!

### Via Git CLI:

```bash
# Fazer alteração em qualquer arquivo...

git add .
git commit -m "Teste de deploy automático"
git push

# Aguardar 2-3 minutos
# Abrir https://hbvidaesaude.me
# Verificar se alteração aparece!
```

- [ ] **11.8** Deploy automático funcionou! 🎉

---

## 📊 MONITORAMENTO

### Cloudflare Pages:
- [ ] Favoritar: https://dash.cloudflare.com/ → Workers & Pages → hbvidaesaude
- [ ] Ver aba **"Deployments"** para histórico completo
- [ ] Ver logs de cada deploy

### GitHub:
- [ ] Favoritar: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude
- [ ] Ver aba **"Actions"** para workflows (se configurou)
- [ ] Ver aba **"Commits"** para histórico

---

## 🎉 SUCESSO!

### Quando TODOS os checkboxes estiverem ✅, você terá:

✅ Deploy automático funcionando  
✅ GitHub → Push → Cloudflare → Site atualizado (2-3 min)  
✅ HTTPS/SSL ativo  
✅ CDN global (site rápido)  
✅ Rollback fácil  
✅ Histórico completo  
✅ URLs de preview para branches  

---

## 🆘 AJUDA RÁPIDA

### ❌ Deploy falhou
→ Ver logs: Cloudflare → Workers & Pages → Deployments → View details

### ❌ Domínio não funciona
→ Verificar DNS: Cloudflare → hbvidaesaude.me → DNS → Records

### ❌ SSL error
→ Aguardar 15-30 min (SSL demora para gerar)

### ❌ Site mostra versão antiga
→ Limpar cache: Cloudflare → Caching → Purge Everything

### ❌ GitHub não conecta
→ Revogar e reconectar: GitHub → Settings → Applications

---

## 📚 DOCUMENTAÇÃO COMPLETA

Se precisar de mais detalhes, leia:

- **[CONECTAR-CLOUDFLARE-AGORA.md](CONECTAR-CLOUDFLARE-AGORA.md)** - Guia detalhado
- **[DEPLOY-AUTOMATICO-INSTRUCOES.md](DEPLOY-AUTOMATICO-INSTRUCOES.md)** - Guia geral
- **[COMANDOS-GIT.sh](COMANDOS-GIT.sh)** - Script automático (Mac/Linux)
- **[COMANDOS-GIT.bat](COMANDOS-GIT.bat)** - Script automático (Windows)

---

## 🎯 PRÓXIMO PASSO

**Comece pela ETAPA 1!** ⬆️

Marque cada checkbox ✅ conforme completar.

**Tempo estimado total: 15-20 minutos**

**Boa sorte!** 🚀
