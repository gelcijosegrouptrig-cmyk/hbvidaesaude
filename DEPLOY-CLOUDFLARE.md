# ☁️ Deploy Automático para Cloudflare

## 🎯 OBJETIVO

Configurar deploy automático do site HBVIDAESAUDE para **Cloudflare Pages** ou **Cloudflare Workers**.

---

## 📋 PRÉ-REQUISITOS

1. ✅ Conta no Cloudflare (gratuita)
2. ✅ Node.js instalado (v16+)
3. ✅ npm ou yarn instalado
4. ✅ Arquivos do projeto prontos

---

## 🚀 OPÇÃO 1: CLOUDFLARE PAGES (RECOMENDADO)

Mais simples, não precisa de Workers ou KV.

### **Passo 1: Instalar Wrangler**

```bash
npm install -g wrangler
```

### **Passo 2: Login no Cloudflare**

```bash
wrangler login
```

Isso abrirá o navegador para você fazer login.

### **Passo 3: Estrutura do Projeto**

Crie esta estrutura:

```
hbvidaesaude/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── wrangler.toml
```

### **Passo 4: Criar wrangler.toml**

Crie arquivo `wrangler.toml` na raiz:

```toml
name = "hbvidaesaude"
compatibility_date = "2024-10-27"
pages_build_output_dir = "./public"

[site]
bucket = "./public"
```

### **Passo 5: Deploy**

```bash
wrangler pages deploy public --project-name=hbvidaesaude
```

✅ **Pronto!** Site estará em: `https://hbvidaesaude.pages.dev`

---

## 🔧 OPÇÃO 2: CLOUDFLARE WORKERS + KV

Se precisar de lógica server-side ou armazenamento.

### **Passo 1: Criar Namespace KV**

```bash
# Criar namespace de produção
npx wrangler kv:namespace create SITE_DATA

# Criar namespace de desenvolvimento
npx wrangler kv:namespace create SITE_DATA --preview
```

**Retorno será algo como:**
```
[[kv_namespaces]]
binding = "SITE_DATA"
id = "abc123def456"
```

### **Passo 2: Criar wrangler.toml**

```toml
name = "hbvidaesaude-worker"
main = "src/index.js"
compatibility_date = "2024-10-27"
account_id = "SEU_ACCOUNT_ID"

[[kv_namespaces]]
binding = "SITE_DATA"
id = "abc123def456"

[[kv_namespaces]]
binding = "SITE_DATA"
id = "xyz789ghi012"
preview_id = "xyz789ghi012"
```

### **Passo 3: Criar Worker (src/index.js)**

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Servir arquivos estáticos
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML_CONTENT, {
        headers: { 'content-type': 'text/html;charset=UTF-8' }
      });
    }
    
    if (url.pathname === '/css/style.css') {
      return new Response(CSS_CONTENT, {
        headers: { 'content-type': 'text/css' }
      });
    }
    
    if (url.pathname === '/js/main.js') {
      return new Response(JS_CONTENT, {
        headers: { 'content-type': 'application/javascript' }
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
};

// Conteúdo dos arquivos (copie de index.html, style.css, main.js)
const HTML_CONTENT = `<!DOCTYPE html>...`;
const CSS_CONTENT = `/* ... */`;
const JS_CONTENT = `// ...`;
```

### **Passo 4: Deploy**

```bash
npx wrangler deploy
```

---

## 🎨 OPÇÃO 3: CLOUDFLARE PAGES COM GITHUB

Deploy automático a cada commit.

### **Passo 1: Criar Repositório GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/hbvidaesaude.git
git push -u origin main
```

### **Passo 2: Configurar no Cloudflare**

1. Acesse: https://dash.cloudflare.com/
2. Vá em **Pages**
3. Clique **"Create a project"**
4. Conecte GitHub
5. Selecione repositório `hbvidaesaude`
6. Configure:
   ```
   Build command: (deixe vazio)
   Build output directory: ./
   Root directory: /
   ```
7. Clique **"Save and Deploy"**

✅ **Deploy automático** a cada push no GitHub!

---

## 📁 ESTRUTURA RECOMENDADA

### **Para Cloudflare Pages:**

```
hbvidaesaude/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos
├── js/
│   └── main.js            # JavaScript
├── wrangler.toml          # Configuração Cloudflare
├── .gitignore             # Ignorar node_modules
└── README.md              # Documentação
```

### **Conteúdo do .gitignore:**

```
node_modules/
.wrangler/
dist/
.dev.vars
```

---

## 🔑 OBTER ACCOUNT ID

Para obter seu Account ID:

1. Acesse: https://dash.cloudflare.com/
2. Vá em qualquer site/worker
3. Copie o Account ID da URL ou da sidebar

Ou via terminal:

```bash
wrangler whoami
```

---

## ⚙️ CONFIGURAÇÕES AVANÇADAS

### **Redirects (em _redirects):**

```
/sobre              /index.html#sobre           200
/especialidades     /index.html#especialidades  200
/planos             /index.html#planos          200
```

### **Headers (_headers):**

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### **Custom Domain:**

Após deploy, em Cloudflare Pages:
1. Vá em **Custom domains**
2. Clique **"Set up a custom domain"**
3. Adicione: `hbvidaesaude.me`
4. Configure DNS (automático se domínio já estiver no Cloudflare)

---

## 🧪 TESTAR LOCALMENTE

### **Com Wrangler:**

```bash
npx wrangler pages dev ./public
```

Abre em: `http://localhost:8788`

### **Com servidor simples:**

```bash
# Python
python3 -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000
```

---

## 📊 COMPARAÇÃO DE OPÇÕES

| Característica | Pages | Workers + KV | Pages + GitHub |
|----------------|-------|-------------|----------------|
| **Facilidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Deploy automático** | Manual | Manual | ✅ Automático |
| **Custo** | Grátis | Grátis* | Grátis |
| **SSL** | ✅ Auto | ✅ Auto | ✅ Auto |
| **CDN Global** | ✅ | ✅ | ✅ |
| **Velocidade** | Muito rápido | Muito rápido | Muito rápido |

*Workers tem limite gratuito de 100k requisições/dia

---

## 🚀 COMANDOS RÁPIDOS

```bash
# Login
wrangler login

# Deploy Pages
wrangler pages deploy ./public --project-name=hbvidaesaude

# Deploy Worker
wrangler deploy

# Ver logs
wrangler tail

# Listar projects
wrangler pages project list

# Ver deployments
wrangler pages deployment list

# Deletar project
wrangler pages project delete hbvidaesaude
```

---

## 🔒 VARIÁVEIS DE AMBIENTE

Se precisar de secrets (API keys, etc):

```bash
# Adicionar secret
wrangler secret put MP_ACCESS_TOKEN

# Listar secrets
wrangler secret list

# Deletar secret
wrangler secret delete MP_ACCESS_TOKEN
```

No código:

```javascript
export default {
  async fetch(request, env) {
    const accessToken = env.MP_ACCESS_TOKEN;
    // usar accessToken...
  }
}
```

---

## 📈 MONITORAMENTO

### **Analytics do Cloudflare:**

1. Acesse: https://dash.cloudflare.com/
2. Vá no seu projeto Pages
3. Aba **Analytics**
4. Veja:
   - Requisições
   - Bandwidth
   - Países
   - Top páginas

### **Web Analytics (Grátis):**

Adicione no `<head>` do HTML:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "SEU_TOKEN"}'></script>
```

---

## ⚡ OTIMIZAÇÕES

### **1. Cache Headers:**

```javascript
// No Worker
return new Response(html, {
  headers: {
    'Content-Type': 'text/html',
    'Cache-Control': 'public, max-age=3600'
  }
});
```

### **2. Minificar Arquivos:**

```bash
npm install -g terser csso-cli html-minifier

# Minificar JS
terser js/main.js -o js/main.min.js

# Minificar CSS
csso css/style.css -o css/style.min.css

# Minificar HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

### **3. Image Optimization:**

Use Cloudflare Images ou Image Resizing:

```html
<img src="https://hbvidaesaude.me/cdn-cgi/image/width=800/logo.png">
```

---

## 🎯 RECOMENDAÇÃO

**Para seu caso (site estático simples):**

👉 **OPÇÃO 1: CLOUDFLARE PAGES**

É o mais simples e atende perfeitamente:

```bash
# 1. Instalar Wrangler
npm install -g wrangler

# 2. Login
wrangler login

# 3. Deploy
wrangler pages deploy . --project-name=hbvidaesaude
```

✅ **Pronto!** Site em `https://hbvidaesaude.pages.dev`

Depois configure domínio custom `hbvidaesaude.me` no painel.

---

## 📞 SUPORTE

**Documentação Cloudflare:**
- Pages: https://developers.cloudflare.com/pages/
- Workers: https://developers.cloudflare.com/workers/
- Wrangler: https://developers.cloudflare.com/workers/wrangler/

**Comunidade:**
- Discord: https://discord.cloudflare.com
- Forum: https://community.cloudflare.com

---

## ✅ PRÓXIMOS PASSOS

1. **Escolha uma opção** (recomendo Pages)
2. **Instale Wrangler**: `npm install -g wrangler`
3. **Faça login**: `wrangler login`
4. **Deploy**: `wrangler pages deploy . --project-name=hbvidaesaude`
5. **Configure domínio**: hbvidaesaude.me → pages.dev

---

**🚀 Quer que eu ajude a fazer o deploy agora?**

Me diga qual opção você prefere e eu te guio passo a passo! 😊

---

_Última atualização: 27 de Outubro de 2025_  
_Cloudflare Pages: Recomendado para sites estáticos_  
_Cloudflare Workers: Para apps com backend_
