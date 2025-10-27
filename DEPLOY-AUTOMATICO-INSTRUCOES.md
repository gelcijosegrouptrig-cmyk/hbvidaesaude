# 🚀 DEPLOY AUTOMÁTICO - Cloudflare Pages + GitHub

## 📋 O Que Você Vai Conseguir

Depois de seguir este guia, **toda vez que você fizer alterações no código e enviar para o GitHub**, o site **será atualizado automaticamente** no Cloudflare! ✨

**Sem precisar executar comandos manuais!** 🎉

---

## 🎯 MÉTODO RECOMENDADO: GitHub + Cloudflare Pages

### Vantagens:
- ✅ **100% Automático** - Push no GitHub = Deploy no Cloudflare
- ✅ **Sem comandos manuais** - Tudo funciona sozinho
- ✅ **Histórico de versões** - Você pode voltar para versões anteriores
- ✅ **Grátis** - Cloudflare Pages Free suporta até 500 builds/mês
- ✅ **SSL automático** - HTTPS configurado automaticamente

---

## 📝 PASSO A PASSO COMPLETO

### **PARTE 1: Preparar o Repositório GitHub (5 minutos)**

#### 1.1. Criar repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name:** `hbvidaesaude`
   - **Description:** `Site HBVIDAESAUDE - Operadora ANS 41.837-4`
   - **Visibility:** Private (recomendado) ou Public
   - ❌ **NÃO marque** "Add README" (já temos)
3. Clique em **"Create repository"**

#### 1.2. Fazer upload dos arquivos (3 opções)

**OPÇÃO A: Via Interface Web do GitHub (Mais Fácil)**

1. No repositório recém-criado, clique em **"uploading an existing file"**
2. Arraste **TODOS os arquivos** do projeto para a área de upload:
   ```
   📁 Arquivos para upload:
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   ├── .gitignore
   ├── wrangler.toml
   ├── .github/
   │   └── workflows/
   │       └── deploy.yml
   ├── README.md
   └── todos os arquivos .md (documentação)
   ```
3. Na mensagem de commit, escreva: `Initial commit - HBVIDAESAUDE`
4. Clique em **"Commit changes"**

**OPÇÃO B: Via Git CLI (Linha de Comando)**

```bash
# Navegue até a pasta do projeto no terminal
cd caminho/para/hbvidaesaude

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - HBVIDAESAUDE"

# Conectar ao repositório remoto (substitua SEU_USUARIO)
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/hbvidaesaude.git

# Enviar para GitHub
git push -u origin main
```

**OPÇÃO C: Via GitHub Desktop (Interface Gráfica)**

1. Baixe GitHub Desktop: https://desktop.github.com/
2. File → Add Local Repository
3. Selecione a pasta do projeto
4. Commit to main
5. Publish repository

---

### **PARTE 2: Conectar Cloudflare Pages ao GitHub (5 minutos)**

#### 2.1. Acessar Cloudflare Dashboard

1. Acesse: https://dash.cloudflare.com/
2. No menu lateral, clique em **"Workers & Pages"**
3. Clique em **"Create application"**
4. Vá para a aba **"Pages"**
5. Clique em **"Connect to Git"**

#### 2.2. Autorizar GitHub

1. Clique em **"Connect GitHub"**
2. **Autorize o Cloudflare** a acessar seus repositórios
3. Selecione:
   - **"Only select repositories"**
   - Escolha: `hbvidaesaude`
4. Clique em **"Install & Authorize"**

#### 2.3. Configurar Build

1. **Project name:** `hbvidaesaude` (ou qualquer nome)
2. **Production branch:** `main`
3. **Build settings:**
   - Framework preset: **None** (site estático)
   - Build command: **(deixe vazio)**
   - Build output directory: `/`
   - Root directory: **(deixe vazio)**
4. Clique em **"Save and Deploy"**

🎉 **Aguarde 2-3 minutos** enquanto o Cloudflare faz o primeiro deploy!

---

### **PARTE 3: Conectar Domínio hbvidaesaude.me (5 minutos)**

#### 3.1. Adicionar Custom Domain

1. Após o deploy, vá para **"Custom domains"**
2. Clique em **"Set up a custom domain"**
3. Digite: `hbvidaesaude.me`
4. Clique em **"Continue"**

#### 3.2. Configurar DNS

**Você já tem o domínio no Cloudflare!** (vi na sua screenshot)

1. Vá para: **Cloudflare Dashboard** → **hbvidaesaude.me** → **DNS**
2. Cloudflare vai sugerir adicionar um registro CNAME
3. **Aceite a configuração automática** ou adicione manualmente:
   ```
   Type: CNAME
   Name: @ (ou hbvidaesaude.me)
   Target: hbvidaesaude.pages.dev
   Proxy status: Proxied (nuvem laranja)
   ```
4. Salve

⏱️ **Aguarde 5-15 minutos** para propagação DNS

---

### **PARTE 4: Configurar GitHub Secrets (OPCIONAL - Para GitHub Actions)**

Se você quer usar o arquivo `.github/workflows/deploy.yml` que criei:

#### 4.1. Obter Cloudflare API Token

1. Acesse: https://dash.cloudflare.com/profile/api-tokens
2. Clique em **"Create Token"**
3. Use o template **"Edit Cloudflare Workers"**
4. Ou crie um custom token com permissões:
   - Account → Cloudflare Pages → Edit
5. Copie o token (você verá apenas uma vez!)

#### 4.2. Obter Account ID

1. Vá para: https://dash.cloudflare.com/
2. Clique em qualquer domínio
3. No painel direito, copie o **Account ID**

#### 4.3. Adicionar Secrets no GitHub

1. No repositório GitHub, vá para **Settings** → **Secrets and variables** → **Actions**
2. Clique em **"New repository secret"**
3. Adicione 2 secrets:

   **Secret 1:**
   ```
   Name: CLOUDFLARE_API_TOKEN
   Value: [cole o token copiado]
   ```

   **Secret 2:**
   ```
   Name: CLOUDFLARE_ACCOUNT_ID
   Value: [cole o account ID]
   ```

4. Clique em **"Add secret"** para cada um

---

## ✅ PRONTO! DEPLOY AUTOMÁTICO CONFIGURADO!

### 🎯 Como Usar (Workflow Diário)

**A partir de agora, para atualizar o site:**

1. **Faça alterações** nos arquivos HTML/CSS/JS
2. **Envie para GitHub:**

   **Via GitHub Desktop:**
   - Commit changes
   - Push origin

   **Via Git CLI:**
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```

3. **Aguarde 2-3 minutos** ⏱️
4. **Site atualizado automaticamente!** 🎉

### 📊 Monitorar Deploys

- **Cloudflare Dashboard:**
  - Workers & Pages → hbvidaesaude → Deployments
  - Você verá o histórico de todos os deploys

- **GitHub Actions:**
  - No repositório → Actions
  - Você verá o status de cada deploy

---

## 🔥 RECURSOS EXTRAS

### Ver Logs de Deploy

**No Cloudflare:**
1. Workers & Pages → hbvidaesaude
2. Clique em um deployment
3. Veja logs em tempo real

**No GitHub:**
1. Actions tab
2. Clique no workflow
3. Veja cada step do deploy

### Rollback (Voltar para Versão Anterior)

**No Cloudflare:**
1. Workers & Pages → hbvidaesaude → Deployments
2. Encontre a versão anterior
3. Clique nos "..." → **Rollback to this deployment**

### Preview Deployments

Cloudflare cria automaticamente uma URL de preview para cada branch!

- **Production:** https://hbvidaesaude.me
- **Branch preview:** https://[branch-name].hbvidaesaude.pages.dev

---

## 🚨 TROUBLESHOOTING

### Problema: Deploy falhou

**Solução:**
1. Veja os logs no Cloudflare Dashboard
2. Verifique se todos os arquivos estão no repositório
3. Confirme que `.gitignore` não está bloqueando arquivos importantes

### Problema: Domínio não está funcionando

**Solução:**
1. Verifique DNS no Cloudflare:
   - Deve ter um CNAME apontando para `.pages.dev`
   - Proxy deve estar ativo (nuvem laranja)
2. Aguarde até 1 hora para propagação DNS completa
3. Limpe cache do navegador (Ctrl+Shift+Del)

### Problema: GitHub Actions não está executando

**Solução:**
1. Verifique se os secrets estão configurados
2. Vá para Actions → Enable workflows (se desabilitado)
3. Verifique se o arquivo `.github/workflows/deploy.yml` está presente

### Problema: Alterações não aparecem no site

**Solução:**
1. Confirme que o push foi feito: `git status`
2. Veja o histórico: `git log`
3. Verifique deploy no Cloudflare Dashboard
4. Limpe cache do navegador ou use modo anônimo

---

## 📚 RECURSOS ADICIONAIS

- **Documentação Cloudflare Pages:** https://developers.cloudflare.com/pages/
- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Git Basics:** https://git-scm.com/book/en/v2

---

## 🎓 DICAS PROFISSIONAIS

### Mensagens de Commit Claras

```bash
# ✅ BOM
git commit -m "Corrigir bug no formulário de pagamento PIX"
git commit -m "Adicionar validação de CPF"
git commit -m "Atualizar preços dos planos"

# ❌ RUIM
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

### Usar Branches para Testes

```bash
# Criar branch de desenvolvimento
git checkout -b desenvolvimento

# Fazer alterações e testar
git add .
git commit -m "Testar nova funcionalidade"
git push origin desenvolvimento

# Quando estiver pronto, fazer merge
git checkout main
git merge desenvolvimento
git push
```

### Automatizar Tudo com GitHub Actions

O arquivo `.github/workflows/deploy.yml` já está configurado para:
- ✅ Deploy automático no push
- ✅ Permitir deploy manual via interface
- ✅ Notificação de sucesso/erro

---

## ✨ RESULTADO FINAL

**Você terá:**
- 🚀 Deploy automático em 2-3 minutos
- 📝 Histórico completo de versões
- 🔄 Rollback fácil para versões anteriores
- 🌐 SSL/HTTPS automático
- 📊 Dashboard para monitorar deploys
- 🎯 URLs de preview para testar antes de publicar

**Economizará:**
- ⏰ Tempo (não precisa fazer deploy manual)
- 💡 Energia mental (automação cuida de tudo)
- 🐛 Bugs (pode reverter instantaneamente se algo der errado)

---

## 🆘 PRECISA DE AJUDA?

Se tiver dúvidas em qualquer etapa, me pergunte! Estou aqui para ajudar! 😊

**Principais pontos de atenção:**
1. ✅ Todos os arquivos no GitHub
2. ✅ Cloudflare Pages conectado ao repositório
3. ✅ DNS configurado corretamente
4. ✅ Secrets do GitHub configurados (se usar Actions)

**Bom deploy automático!** 🎉
