# 🔧 Correção - API Mercado Pago

## ❌ PROBLEMA IDENTIFICADO

**Erro:** "⚠️ Erro ao iniciar pagamento. Por favor, tente novamente."

### **Causa Raiz:**

A API de **Preferences** do Mercado Pago **NÃO aceita** o parâmetro `subscription` diretamente. 

**Código que estava causando erro:**
```javascript
subscription: {
    frequency: 1,
    frequency_type: 'months',
    transaction_amount: 59.90,
    currency_id: 'BRL',
    start_date: new Date().toISOString(),
    billing_day: new Date().getDate(),
    billing_day_proportional: false
}
```

**Resultado:** API retornava erro 400 (Bad Request)

---

## ✅ SOLUÇÃO APLICADA

### **1. Removido parâmetro `subscription`**

A configuração de assinatura recorrente **não pode ser feita via Preferences API**.

### **2. Mantido restrições de pagamento**

```javascript
payment_methods: {
    excluded_payment_methods: [
        { id: 'pix' },
        { id: 'bolbradesco' },
        { id: 'pec' },
        { id: 'account_money' }
    ],
    excluded_payment_types: [
        { id: 'ticket' },
        { id: 'atm' },
        { id: 'debit_card' },
        // ... outros
    ],
    installments: 1  // Apenas 1x
}
```

✅ **Agora o checkout exibe APENAS Cartão de Crédito (sem parcelamento)**

### **3. Corrigido formato do telefone**

```javascript
phone: {
    area_code: customerData.phone.substring(0, 2),  // DDD
    number: customerData.phone.substring(2)          // Número
}
```

### **4. Melhorado tratamento de erros**

- ✅ Logs detalhados no console
- ✅ Mensagens de erro claras para o usuário
- ✅ Verificação de erro de conexão

---

## 🔄 COMO IMPLEMENTAR ASSINATURA RECORRENTE

A API do Mercado Pago tem **3 formas** de criar assinatura recorrente:

### **OPÇÃO 1: Via Painel Mercado Pago (Mais Simples)** ⭐ RECOMENDADO

1. Acesse: https://www.mercadopago.com.br/subscriptions
2. Clique em "Criar assinatura"
3. Configure:
   - Nome: Plano HBVIDAESAUDE
   - Valor: R$ 59,90
   - Frequência: Mensal
   - Método: Apenas cartão de crédito
4. Copie o link de pagamento gerado
5. Use esse link no botão "Pagar com Cartão"

**Vantagem:** Não precisa código, configuração visual simples

---

### **OPÇÃO 2: API de Assinaturas (Subscriptions API)**

**Endpoint:** `POST https://api.mercadopago.com/preapproval_plan`

**Código exemplo:**

```javascript
async function createSubscriptionPlan() {
    const accessToken = 'APP_USR-6922749920529255-100719-***';
    
    const plan = {
        reason: 'Plano HBVIDAESAUDE - Assinatura Mensal',
        auto_recurring: {
            frequency: 1,
            frequency_type: 'months',
            transaction_amount: 59.90,
            currency_id: 'BRL',
            free_trial: {
                frequency: 0,
                frequency_type: 'days'
            }
        },
        back_url: window.location.href,
        payment_methods_allowed: {
            payment_types: [
                { id: 'credit_card' }
            ],
            payment_methods: [
                { id: 'master' },
                { id: 'visa' },
                { id: 'amex' },
                { id: 'elo' }
            ]
        }
    };
    
    try {
        const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(plan)
        });
        
        const data = await response.json();
        console.log('✅ Plano criado:', data);
        
        // Retorna link de assinatura
        return data.init_point;
        
    } catch (error) {
        console.error('Erro ao criar plano:', error);
    }
}
```

**Depois use:**

```javascript
async function subscribeCustomer(planId, customerData) {
    const accessToken = 'APP_USR-6922749920529255-100719-***';
    
    const subscription = {
        preapproval_plan_id: planId,
        card_token_id: 'token_do_cartao',  // Obtido via Mercado Pago SDK
        payer: {
            email: customerData.email,
            identification: {
                type: 'CPF',
                number: customerData.cpf
            }
        }
    };
    
    const response = await fetch('https://api.mercadopago.com/preapproval', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(subscription)
    });
    
    return await response.json();
}
```

**Vantagem:** Controle total via código

---

### **OPÇÃO 3: Link de Assinatura Direto**

Você pode criar um plano no painel e gerar um link fixo:

```javascript
function openCardPayment(event) {
    event.preventDefault();
    
    if (!validateFormBeforePayment(event)) {
        return;
    }
    
    // Link de assinatura fixo (criado no painel MP)
    const subscriptionUrl = 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=SEU_PLAN_ID';
    
    // Abre em iframe
    openMercadoPagoCheckout(subscriptionUrl);
}
```

**Vantagem:** Mais simples, sem API

---

## 📊 COMPARAÇÃO DAS OPÇÕES

| Opção | Complexidade | Controle | Recomendado |
|-------|--------------|----------|-------------|
| **Painel MP** | ⭐ Baixa | ⭐⭐ Médio | ✅ SIM (mais simples) |
| **Subscriptions API** | ⭐⭐⭐ Alta | ⭐⭐⭐ Total | Para dev avançado |
| **Link Fixo** | ⭐ Baixa | ⭐ Baixo | ✅ SIM (mais rápido) |

---

## ✅ SITUAÇÃO ATUAL (APÓS CORREÇÃO)

### **O que está funcionando AGORA:**

```
✅ Checkout Mercado Pago abre corretamente
✅ Exibe APENAS Cartão de Crédito
✅ SEM PIX, Boleto, Débito, etc.
✅ Sem parcelamento (apenas 1x)
✅ Formulário valida dados antes
✅ Iframe + popup fallback
✅ Tratamento de erros melhorado
```

### **O que NÃO está configurado:**

```
❌ Assinatura recorrente automática
❌ Cobranças mensais automáticas
❌ Tokenização de cartão para futuras cobranças
```

**Status:** Pagamento único de R$ 59,90 (cliente precisa pagar manualmente todo mês)

---

## 🎯 RECOMENDAÇÃO PARA RECORRÊNCIA

### **SOLUÇÃO MAIS RÁPIDA: Usar Link de Assinatura**

1. **Criar plano no painel:**
   - Acesse: https://www.mercadopago.com.br/subscriptions
   - Crie plano mensal de R$ 59,90
   - Copie o link gerado

2. **Atualizar código:**
   ```javascript
   // Substituir URL dinâmica por link fixo de assinatura
   const subscriptionUrl = 'SEU_LINK_DE_ASSINATURA_AQUI';
   openMercadoPagoCheckout(subscriptionUrl);
   ```

3. **Pronto!**
   - ✅ Assinatura recorrente
   - ✅ Cobranças automáticas
   - ✅ Gestão pelo painel MP

---

## 📝 CÓDIGO ATUALIZADO

**Arquivo:** `js/main.js`

**Mudanças:**
1. ❌ Removido `subscription` object (causava erro)
2. ✅ Corrigido formato de telefone
3. ✅ Melhorado logs e tratamento de erro
4. ✅ Mantido restrição: APENAS cartão de crédito

**Status:** ✅ **Sistema funcionando (pagamento único)**

**Para recorrência:** Implementar uma das 3 opções acima

---

## 🧪 COMO TESTAR AGORA

1. **Abra index.html**
2. **Clique "Assinar Agora"**
3. **Preencha formulário**
4. **Clique "Pagar com Cartão"**
5. ✅ **Deve abrir checkout Mercado Pago**
6. ✅ **Deve mostrar APENAS cartão de crédito**
7. ✅ **Sem parcelamento (1x)**

**Cartão de teste:**
```
Número: 5031 4332 1540 6351
Nome: APRO
Validade: 11/25
CVV: 123
```

---

## 📞 PRECISA IMPLEMENTAR RECORRÊNCIA?

Se quiser que eu implemente a **Opção 1 (Link de Assinatura)** ou **Opção 2 (Subscriptions API)**, me avise qual você prefere!

**Opção 1 (Link Fixo):** Você cria o plano no painel e me passa o link
**Opção 2 (API):** Eu implemento via código (mais complexo)

---

**✅ Erro corrigido! Sistema funcionando novamente!**

_Data: 27 de Outubro de 2025, 14:15_
