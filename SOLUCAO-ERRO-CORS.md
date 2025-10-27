# 🔧 Solução - Erro de Conexão com Mercado Pago

## ❌ PROBLEMA IDENTIFICADO

**Erro:** "Erro de conexão com o Mercado Pago"

**Causa:** **CORS (Cross-Origin Resource Sharing)**

A API do Mercado Pago **bloqueia requisições** feitas diretamente do navegador (frontend) por questões de segurança.

```
Browser ─────❌ BLOQUEADO ────> API Mercado Pago
         (CORS Policy)
```

---

## ✅ SOLUÇÃO IMPLEMENTADA

### **Opção 1: Usar Link de Assinatura Direto** ⭐ RECOMENDADO

Ao invés de criar o plano via API no frontend, você **cria o plano no painel** do Mercado Pago e usa o link gerado.

#### **PASSO A PASSO:**

1. **Acesse o painel de assinaturas:**
   ```
   https://www.mercadopago.com.br/subscriptions
   ```

2. **Clique em "Criar assinatura" ou "Novo plano"**

3. **Configure o plano:**
   ```
   Nome: Plano HBVIDAESAUDE
   Descrição: Telemedicina 24/7 com +27 especialidades
   Valor: R$ 59,90
   Frequência: Mensal (a cada 30 dias)
   Método: Apenas cartão de crédito
   ```

4. **Copie o link gerado:**
   ```
   https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=SEU_PLAN_ID
   ```

5. **Configure no código (js/main.js, linha 593):**
   ```javascript
   const SUBSCRIPTION_CHECKOUT_URL = 'COLE_SEU_LINK_AQUI';
   ```

**Vantagens:**
- ✅ Sem problemas de CORS
- ✅ Sem necessidade de backend
- ✅ Configuração visual simples
- ✅ Link pode ser reutilizado

---

### **Opção 2: Usar URL Fornecida** (TEMPORÁRIA)

Você mencionou uma URL do Mercado Pago:

```
https://www.mercadopago.com.br/checkout/v1/payment/redirect/382356d4-bb2f-40de-9ed9-a3cb12ce1b29/card-form/?preference-id=2911366389-973f9b86-0375-4056-ba47-a60f0d4391a1&router-request-id=cbf9be99-fe26-46dc-b6bd-91eef234d435&p=cc765e1268f4d1e78c6d8842272af8ca
```

**⚠️ IMPORTANTE:** Esta URL parece ser de uma preferência específica já criada.

**Para usar essa URL:**

1. **Abra js/main.js**

2. **Encontre a linha 593:**
   ```javascript
   const SUBSCRIPTION_CHECKOUT_URL = null;
   ```

3. **Substitua por:**
   ```javascript
   const SUBSCRIPTION_CHECKOUT_URL = 'https://www.mercadopago.com.br/checkout/v1/payment/redirect/382356d4-bb2f-40de-9ed9-a3cb12ce1b29/card-form/?preference-id=2911366389-973f9b86-0375-4056-ba47-a60f0d4391a1';
   ```

**Desvantagem:**
- ⚠️ URL pode expirar
- ⚠️ Pode não ter as configurações corretas (apenas cartão)
- ⚠️ Pode não ser recorrente

---

### **Opção 3: Backend Intermediário** (IDEAL PARA PRODUÇÃO)

Criar um servidor backend que faz a comunicação com a API do Mercado Pago.

```
Browser ──✅──> Backend ──✅──> API Mercado Pago
```

**Exemplo (Node.js + Express):**

```javascript
// backend/server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-subscription-plan', async (req, res) => {
    const plan = {
        reason: 'Plano HBVIDAESAUDE - Telemedicina Mensal',
        auto_recurring: {
            frequency: 1,
            frequency_type: 'months',
            transaction_amount: 59.90,
            currency_id: 'BRL'
        },
        payment_methods_allowed: {
            payment_types: [{ id: 'credit_card' }]
        }
    };
    
    try {
        const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`
            },
            body: JSON.stringify(plan)
        });
        
        const data = await response.json();
        res.json({ planId: data.id, checkoutUrl: data.init_point });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Backend rodando na porta 3000');
});
```

**Frontend:**
```javascript
async function createMercadoPagoPreference(customerData) {
    const response = await fetch('http://localhost:3000/api/create-subscription-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData)
    });
    
    const data = await response.json();
    openMercadoPagoCheckout(data.checkoutUrl);
}
```

**Vantagens:**
- ✅ Sem CORS
- ✅ Credenciais protegidas
- ✅ Controle total
- ✅ Validações server-side
- ✅ Webhooks

---

## 🎯 RECOMENDAÇÃO

### **Para começar AGORA (5 minutos):**
👉 **OPÇÃO 1: Criar plano no painel MP**

1. Acesse https://www.mercadopago.com.br/subscriptions
2. Crie o plano
3. Copie o link
4. Configure no código

### **Para produção futura:**
👉 **OPÇÃO 3: Implementar backend**

---

## 📝 CÓDIGO ATUAL

**Status:** ✅ Código atualizado

**Localização:** `js/main.js`, linha 593-631

**O que foi feito:**
1. ✅ Removida chamada à API (causava CORS)
2. ✅ Adicionada constante `SUBSCRIPTION_CHECKOUT_URL`
3. ✅ Implementado fallback com URL fornecida
4. ✅ Mensagens de erro claras

**Como configurar:**

```javascript
// js/main.js - Linha 599
const SUBSCRIPTION_CHECKOUT_URL = 'SEU_LINK_AQUI';
```

---

## 🧪 COMO TESTAR

### **Teste 1: Com URL fornecida**

1. O código já está usando a URL que você forneceu como fallback
2. Abra `index.html`
3. Clique "Assinar Agora"
4. Preencha formulário
5. Clique "Pagar com Cartão"
6. ✅ Deve abrir o checkout

### **Teste 2: Com link do painel**

1. Crie plano no painel MP
2. Copie o link
3. Configure `SUBSCRIPTION_CHECKOUT_URL`
4. Teste novamente

---

## 🔍 DIAGNÓSTICO DO ERRO

**Erro original:**
```
Erro de conexão com o Mercado Pago.
Verifique sua conexão com a internet e tente novamente.
```

**Causa técnica:**
```javascript
// Isso causava erro CORS:
fetch('https://api.mercadopago.com/preapproval_plan', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}` // ❌ Bloqueado pelo browser
    }
});

// Erro no console:
// Access to fetch at 'https://api.mercadopago.com/...' from origin 'file://' 
// has been blocked by CORS policy
```

**Solução:**
```javascript
// Usar link direto (sem API):
const checkoutUrl = 'https://www.mercadopago.com.br/subscriptions/checkout?...';
window.open(checkoutUrl); // ✅ Funciona!
```

---

## ✅ STATUS ATUAL

```
✅ Erro CORS identificado
✅ Código atualizado
✅ Fallback implementado
✅ Documentação criada
✅ 3 opções de solução fornecidas
⏳ Aguardando configuração de link de assinatura
```

---

## 📞 PRÓXIMOS PASSOS

**Escolha uma opção:**

### **🅰️ Opção Rápida (5 min):**
- Criar plano no painel MP
- Configurar link no código
- Testar

### **🅱️ Opção Temporária (1 min):**
- Usar URL fornecida (já configurada)
- Testar agora

### **🅲️ Opção Profissional (2-3 horas):**
- Implementar backend Node.js
- Migrar lógica para servidor
- Deploy

---

## 💡 QUAL OPÇÃO VOCÊ PREFERE?

Me diga qual solução quer seguir:

- **"A"** → Criar plano no painel (recomendado)
- **"B"** → Usar URL fornecida (temporário)
- **"C"** → Implementar backend (profissional)

---

_Data: 27 de Outubro de 2025, 15:00_
_Status: Aguardando decisão_
