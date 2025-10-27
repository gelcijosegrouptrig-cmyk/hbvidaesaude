# 🔑 Credenciais dos Gateways de Pagamento

## 📋 RESUMO GERAL

Este documento contém todas as credenciais configuradas para os gateways de pagamento integrados no sistema HBVIDAESAUDE.

**⚠️ IMPORTANTE:** Mantenha este arquivo seguro e nunca compartilhe publicamente!

---

## 🟢 WOOVI (PIX)

### **URL de Pagamento:**
```
https://woovi.com/pay/ef8af5ea-0820-42a7-bbb8-3d9a8f32c24a
```

### **Tipo:**
- Link direto de pagamento
- Não requer credenciais adicionais
- QR Code gerado automaticamente

### **Status:**
✅ Configurado e funcionando

---

## 🔵 MERCADO PAGO (Cartão de Crédito)

### **Credenciais Completas:**

#### **Public Key (Frontend):**
```
APP_USR-343756f0-2122-419e-a44c-ffd5f1087a11
```
- **Uso:** Pode ser exposta no frontend
- **Localização:** JavaScript (cliente)
- **Finalidade:** Identificação pública do vendedor

#### **Access Token (API):**
```
APP_USR-6922749920529255-100719-1d4753766489de0063b0345f3d1c6608-2911366389
```
- **Uso:** Chamadas à API do Mercado Pago
- **Localização:** Atualmente no frontend (⚠️ recomenda-se backend)
- **Finalidade:** Autenticação nas requisições
- **Permissões:** Criar preferências, processar pagamentos

#### **Client ID:**
```
6922749920529255
```
- **Uso:** Identificação do aplicativo
- **Localização:** Backend
- **Finalidade:** OAuth, renovação de tokens

#### **Client Secret:**
```
Hy3MfwWhdmpBYNdna5lul7tFKS3tBOwX
```
- **Uso:** Autenticação OAuth
- **Localização:** ❌ **NUNCA expor no frontend**
- **Finalidade:** Gerar/renovar Access Tokens
- **Segurança:** Máxima proteção necessária

#### **User ID:**
```
2911366389
```
- **Uso:** Identificação do vendedor
- **Localização:** Metadata
- **Finalidade:** Rastreamento de transações

### **Status:**
✅ Configurado e funcionando

---

## 📊 TABELA COMPARATIVA

| Gateway | Tipo | Método | URL/Endpoint |
|---------|------|--------|--------------|
| **Woovi** | PIX | Link direto | woovi.com/pay/... |
| **Mercado Pago** | Cartão | API + Checkout | api.mercadopago.com |

---

## 🔒 NÍVEIS DE SEGURANÇA

### **✅ Pode Expor (Frontend):**
- Public Key do Mercado Pago
- URL de pagamento Woovi

### **⚠️ Preferível Backend:**
- Access Token do Mercado Pago

### **❌ NUNCA Expor:**
- Client Secret do Mercado Pago
- Chaves privadas
- Senhas de acesso

---

## 🔐 RENOVAÇÃO DE TOKENS

### **Mercado Pago Access Token:**

**Endpoint OAuth:**
```
POST https://api.mercadopago.com/oauth/token
```

**Request Body:**
```json
{
  "client_id": "6922749920529255",
  "client_secret": "Hy3MfwWhdmpBYNdna5lul7tFKS3tBOwX",
  "grant_type": "client_credentials"
}
```

**Response:**
```json
{
  "access_token": "APP_USR-...",
  "token_type": "bearer",
  "expires_in": 15552000,
  "scope": "...",
  "user_id": 2911366389
}
```

**Quando Renovar:**
- Token expirado
- Mudança de permissões
- Rotação de segurança (recomendado a cada 6 meses)

---

## 🧪 AMBIENTES

### **Produção (Atual):**
- ✅ Woovi: Produção
- ✅ Mercado Pago: Produção

### **Sandbox/Teste:**
- Para testes, usar credenciais de teste do Mercado Pago
- Woovi: Usar conta de teste se disponível

---

## 📝 CHECKLIST DE SEGURANÇA

### **✅ Implementado:**
- [x] Public Key exposta (seguro)
- [x] Access Token em uso (funcional)
- [x] URLs de pagamento configuradas
- [x] Validação de formulário frontend

### **⚠️ Recomendações:**
- [ ] Mover Access Token para backend
- [ ] Implementar servidor intermediário
- [ ] Adicionar validação backend
- [ ] Configurar webhooks
- [ ] Implementar logs de transações
- [ ] Adicionar monitoramento

### **❌ Crítico (Não Fazer):**
- [ ] Expor Client Secret no frontend
- [ ] Commitar credenciais no Git público
- [ ] Compartilhar tokens publicamente
- [ ] Usar credenciais de produção em teste

---

## 🔧 ARQUIVOS CONFIGURADOS

### **index.html:**
```html
<!-- Texto do botão Mercado Pago -->
<p>Pagamento via Mercado Pago</p>
```

### **js/main.js:**
```javascript
// Access Token configurado
const accessToken = 'APP_USR-6922749920529255-100719-...';

// Client Secret NÃO está no código (seguro)
```

### **URLs de Pagamento:**
```javascript
// PIX (Woovi)
const pixUrl = 'https://woovi.com/pay/ef8af5ea-0820-42a7-bbb8-3d9a8f32c24a';

// Mercado Pago (Dinâmico via API)
const checkoutUrl = data.init_point; // Retornado pela API
```

---

## 📞 SUPORTE

### **Woovi:**
- Site: https://woovi.com
- Suporte: Consultar painel Woovi

### **Mercado Pago:**
- Site: https://www.mercadopago.com.br
- Developers: https://www.mercadopago.com.br/developers
- Suporte: https://www.mercadopago.com.br/ajuda

---

## 🎯 RESUMO VISUAL

```
┌──────────────────────────────────────┐
│ GATEWAYS DE PAGAMENTO                │
├──────────────────────────────────────┤
│                                      │
│ 🟢 PIX (Woovi)                       │
│    └─ Link direto                    │
│       └─ QR Code automático          │
│                                      │
│ 🔵 CARTÃO (Mercado Pago)             │
│    ├─ Public Key (exposta)           │
│    ├─ Access Token (frontend)        │
│    ├─ Client ID (backend)            │
│    └─ Client Secret (backend) 🔒     │
│                                      │
└──────────────────────────────────────┘
```

---

## ⚠️ AVISO IMPORTANTE

**Este documento contém informações sensíveis!**

✅ **Permitido:**
- Armazenar em local seguro
- Compartilhar com equipe autorizada
- Usar em ambiente de desenvolvimento

❌ **NUNCA:**
- Commitar no Git público
- Compartilhar em chats/e-mails públicos
- Expor em screenshots
- Postar em fóruns/redes sociais

---

## 🔄 HISTÓRICO DE ALTERAÇÕES

| Data | Alteração | Responsável |
|------|-----------|-------------|
| 2025-10-23 | Criação inicial | AI Assistant |
| 2025-10-23 | Adição Mercado Pago | AI Assistant |
| 2025-10-23 | Documentação completa | AI Assistant |

---

**📅 Última Atualização:** 2025-10-23  
**👤 Responsável:** Equipe HBVIDAESAUDE  
**🔒 Classificação:** Confidencial  
**📋 Versão:** 1.0.0

---

**🔐 MANTENHA ESTAS CREDENCIAIS SEGURAS!**
