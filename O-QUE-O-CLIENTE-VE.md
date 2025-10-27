# 👁️ O QUE O CLIENTE VÊ NO CHECKOUT

## 🎯 Experiência Completa do Usuário

---

## 📍 PASSO 1: PÁGINA INICIAL

O cliente vê:
```
┌─────────────────────────────────────────────┐
│  🏥 HBVIDAESAUDE                            │
│                                             │
│  Telemedicina 24/7                          │
│  +27 Especialidades Médicas                 │
│  R$ 59,90/mês                               │
│                                             │
│  [  ASSINAR AGORA  ]  ← Botão azul grande   │
└─────────────────────────────────────────────┘
```

---

## 📍 PASSO 2: MODAL DE PAGAMENTO

Ao clicar em "Assinar Agora", abre modal:

```
┌───────────────────────────────────────────────────┐
│  ✖️                    FECHAR                     │
├───────────────────────────────────────────────────┤
│                                                   │
│  📋 Complete seus dados                           │
│                                                   │
│  Nome: [__________________]                       │
│  CPF:  [___.___.___-__]                          │
│  Email:[__________________]                       │
│  Tel:  [(__)_____-____]                          │
│  Nasc: [__/__/____]                              │
│                                                   │
├───────────────────────────────────────────────────┤
│                                                   │
│  💳 Escolha a forma de pagamento:                │
│                                                   │
│  ┌─────────────┐     ┌─────────────┐            │
│  │  🟢 PIX     │     │  🔵 CARTÃO  │            │
│  │             │     │             │            │
│  │  R$ 59,90   │     │ R$ 59,90/mês│            │
│  │             │     │             │            │
│  │ Pagamento   │     │ Cartão de   │            │
│  │   Único     │     │  Crédito    │            │
│  │   Woovi     │     │ Mensalmente │            │
│  │             │     │             │            │
│  │ [PAGAR COM  │     │ [PAGAR COM  │            │
│  │    PIX]     │     │   CARTÃO]   │            │
│  └─────────────┘     └─────────────┘            │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## 📍 PASSO 3A: SE ESCOLHER PIX

Após clicar em "Pagar com PIX":

```
┌───────────────────────────────────────────────────┐
│  🟢 Pagamento via PIX                     [ X ]   │
├───────────────────────────────────────────────────┤
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │                                             │ │
│  │         [Página da Woovi carrega]          │ │
│  │                                             │ │
│  │    1. Valor: R$ 59,90                      │ │
│  │    2. QR Code aparece                      │ │
│  │    3. Código PIX para copiar/colar         │ │
│  │    4. Instruções de pagamento              │ │
│  │                                             │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  🔐 Pagamento Seguro - Woovi                     │
└───────────────────────────────────────────────────┘

**O que acontece:**
✅ Janela iframe abre na mesma página
✅ Cliente escaneia QR Code ou copia código PIX
✅ Paga R$ 59,90 via app do banco
✅ Pagamento confirmado instantaneamente
✅ Pode fechar o modal e voltar ao site
```

---

## 📍 PASSO 3B: SE ESCOLHER CARTÃO

Após clicar em "Pagar com Cartão":

### **Tela Inicial do Mercado Pago:**

```
┌───────────────────────────────────────────────────┐
│  🔵 Pagamento via Mercado Pago           [ X ]   │
├───────────────────────────────────────────────────┤
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │                                             │ │
│  │      [Página do Mercado Pago carrega]      │ │
│  │                                             │ │
│  │  💳 Cartão de crédito                      │ │
│  │                                             │ │
│  │  ⚠️ IMPORTANTE:                             │ │
│  │  Esta é uma cobrança mensal recorrente     │ │
│  │  de R$ 59,90 todo mês.                     │ │
│  │                                             │ │
│  │  Você pode cancelar a qualquer momento.    │ │
│  │                                             │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  🔐 Pagamento Seguro - Mercado Pago              │
└───────────────────────────────────────────────────┘
```

### **Formulário de Cartão:**

```
┌───────────────────────────────────────────────────┐
│                                                   │
│  💳 Dados do Cartão                               │
│                                                   │
│  Número do cartão:                                │
│  [____  ____  ____  ____]  🔒                    │
│                                                   │
│  Nome no cartão:                                  │
│  [_____________________________]                  │
│                                                   │
│  Validade:        CVV:                            │
│  [MM/AA]          [___]  🔒                      │
│                                                   │
│  CPF do titular:                                  │
│  [___.___.___-__]                                │
│                                                   │
├───────────────────────────────────────────────────┤
│                                                   │
│  📋 Resumo da Assinatura:                         │
│                                                   │
│  Plano: HBVIDAESAUDE - Assinatura Mensal         │
│  Valor: R$ 59,90/mês                             │
│  Cobrança: Mensal (a cada 30 dias)               │
│  Primeira cobrança: HOJE                          │
│  Próxima cobrança: [mesmo dia do próximo mês]    │
│                                                   │
│  ✅ Seu cartão será salvo para cobranças futuras │
│  ✅ Renovação automática                          │
│  ✅ Cancele quando quiser                         │
│                                                   │
├───────────────────────────────────────────────────┤
│                                                   │
│  [ ✓ ] Aceito os termos e condições              │
│                                                   │
│  [      CONFIRMAR ASSINATURA      ]  ← Botão     │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## 🚫 O QUE NÃO APARECE NO CHECKOUT MERCADO PAGO

### **Métodos de Pagamento BLOQUEADOS:**

```
❌ NÃO APARECE PIX
❌ NÃO APARECE BOLETO
❌ NÃO APARECE DÉBITO EM CONTA
❌ NÃO APARECE CARTÃO DE DÉBITO
❌ NÃO APARECE SALDO MERCADO PAGO
❌ NÃO APARECE TRANSFERÊNCIA BANCÁRIA
❌ NÃO APARECE PARCELAMENTO (apenas 1x)

✅ APARECE APENAS: CARTÃO DE CRÉDITO (à vista)
```

---

## 📍 PASSO 4: PROCESSAMENTO

Quando o cliente clica em "Confirmar Assinatura":

```
┌───────────────────────────────────────────────────┐
│                                                   │
│              ⏳ Processando...                     │
│                                                   │
│  Validando cartão de crédito...                   │
│  Autorizando primeira cobrança...                 │
│  Salvando cartão para cobranças futuras...        │
│                                                   │
│  [   ████████████████░░░░  70%   ]               │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## 📍 PASSO 5: CONFIRMAÇÃO

### **Se APROVADO:**

```
┌───────────────────────────────────────────────────┐
│                                                   │
│              ✅ PAGAMENTO APROVADO!                │
│                                                   │
│  Sua assinatura foi confirmada com sucesso!       │
│                                                   │
│  Plano: HBVIDAESAUDE                              │
│  Valor: R$ 59,90/mês                              │
│  Primeira cobrança: R$ 59,90 (HOJE)              │
│  Próxima cobrança: [dia]/[mês]/[ano]             │
│                                                   │
│  📧 Você receberá um e-mail de confirmação        │
│     com todos os detalhes da sua assinatura.      │
│                                                   │
│  📱 Gerencie sua assinatura no app Mercado Pago:  │
│     - Ver histórico de pagamentos                 │
│     - Atualizar dados do cartão                   │
│     - Pausar ou cancelar assinatura               │
│                                                   │
│  [      VOLTAR AO SITE      ]                    │
│                                                   │
└───────────────────────────────────────────────────┘
```

### **Se RECUSADO:**

```
┌───────────────────────────────────────────────────┐
│                                                   │
│              ❌ PAGAMENTO RECUSADO                 │
│                                                   │
│  Não foi possível processar o pagamento.          │
│                                                   │
│  Possíveis motivos:                               │
│  • Limite insuficiente no cartão                  │
│  • Dados incorretos                               │
│  • Cartão expirado ou bloqueado                   │
│  • Transação negada pelo banco                    │
│                                                   │
│  [    TENTAR NOVAMENTE    ]                      │
│  [  USAR OUTRO CARTÃO     ]                      │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## 📧 E-MAILS QUE O CLIENTE RECEBE

### **1. Confirmação Inicial:**

```
De: Mercado Pago <noreply@mercadopago.com>
Para: cliente@email.com
Assunto: ✅ Sua assinatura foi confirmada - HBVIDAESAUDE

Olá [Nome],

Sua assinatura do Plano HBVIDAESAUDE foi confirmada!

📋 Detalhes da Assinatura:
• Plano: HBVIDAESAUDE - Assinatura Mensal
• Valor: R$ 59,90/mês
• Primeira cobrança: R$ 59,90 (realizada em [data])
• Próxima cobrança: [dia]/[mês]/[ano]
• Cartão: **** **** **** [4 últimos dígitos]

✅ Benefícios incluídos:
• Telemedicina 24/7
• +27 especialidades médicas
• Atendimento imediato
• Agendamento de consultas

📱 Gerencie sua assinatura:
Acesse o app Mercado Pago para ver histórico,
atualizar cartão ou cancelar quando quiser.

Obrigado por escolher HBVIDAESAUDE!
```

### **2. Lembrete de Renovação (3 dias antes):**

```
De: Mercado Pago <noreply@mercadopago.com>
Para: cliente@email.com
Assunto: 🔔 Lembrete: Próxima cobrança em 3 dias

Olá [Nome],

Sua assinatura será renovada em breve!

Próxima cobrança: [dia]/[mês]/[ano]
Valor: R$ 59,90
Cartão: **** **** **** [4 últimos dígitos]

Tudo certo? Não precisa fazer nada.
A cobrança será automática.

Se quiser cancelar ou atualizar o cartão,
acesse o app Mercado Pago.
```

### **3. Confirmação de Renovação:**

```
De: Mercado Pago <noreply@mercadopago.com>
Para: cliente@email.com
Assunto: ✅ Assinatura renovada - HBVIDAESAUDE

Olá [Nome],

Sua assinatura foi renovada com sucesso!

Cobrança realizada: R$ 59,90
Cartão: **** **** **** [4 últimos dígitos]
Data: [data da cobrança]

Próxima cobrança: [dia]/[mês]/[ano]

Continue aproveitando todos os benefícios!
```

### **4. Falha no Pagamento:**

```
De: Mercado Pago <noreply@mercadopago.com>
Para: cliente@email.com
Assunto: ⚠️ Problema na renovação da assinatura

Olá [Nome],

Não conseguimos processar o pagamento da sua
assinatura HBVIDAESAUDE.

Valor: R$ 59,90
Cartão: **** **** **** [4 últimos dígitos]
Tentativa: [data]

Possíveis motivos:
• Limite insuficiente
• Cartão expirado
• Transação negada pelo banco

⚠️ IMPORTANTE:
Para não perder acesso aos serviços, atualize
seus dados de pagamento no app Mercado Pago.

Tentaremos novamente em 3 dias.
```

---

## 📱 GESTÃO DA ASSINATURA PELO CLIENTE

### **No App Mercado Pago:**

```
┌─────────────────────────────────────┐
│  💳 Minhas Assinaturas              │
├─────────────────────────────────────┤
│                                     │
│  🏥 HBVIDAESAUDE                    │
│  R$ 59,90/mês                       │
│  Status: ✅ Ativa                   │
│                                     │
│  Próxima cobrança: [dia]/[mês]      │
│  Cartão: Visa ****1234              │
│                                     │
│  [   VER DETALHES   ]               │
│  [  GERENCIAR       ]               │
│                                     │
└─────────────────────────────────────┘
```

### **Opções de Gestão:**

```
┌─────────────────────────────────────┐
│  🏥 HBVIDAESAUDE                    │
│                                     │
│  📊 Histórico de Pagamentos         │
│  • [data] - R$ 59,90 ✅ Aprovado    │
│  • [data] - R$ 59,90 ✅ Aprovado    │
│  • [data] - R$ 59,90 ✅ Aprovado    │
│                                     │
│  💳 Método de Pagamento             │
│  [  TROCAR CARTÃO  ]                │
│                                     │
│  📅 Próxima Cobrança                │
│  [dia]/[mês]/[ano] - R$ 59,90       │
│                                     │
│  ⏸️ Ações                            │
│  [  PAUSAR ASSINATURA  ]            │
│  [  CANCELAR ASSINATURA  ]          │
│                                     │
└─────────────────────────────────────┘
```

---

## ✅ RESUMO: O QUE O CLIENTE VÊ

### **No Checkout:**
- ✅ **SOMENTE Cartão de Crédito** (outros métodos bloqueados)
- ✅ **Informação clara**: "Cobrança mensal recorrente de R$ 59,90"
- ✅ **Sem parcelamento**: Apenas 1x
- ✅ **Transparência total**: Data da próxima cobrança informada
- ✅ **Segurança**: Checkout oficial do Mercado Pago

### **Após a Compra:**
- ✅ **E-mail de confirmação** com todos os detalhes
- ✅ **Lembretes de renovação** 3 dias antes
- ✅ **Confirmações de cobrança** a cada mês
- ✅ **Alertas de problemas** se pagamento falhar
- ✅ **Gestão total via app** Mercado Pago

### **Controle Total:**
- ✅ Ver histórico completo
- ✅ Trocar cartão quando quiser
- ✅ Pausar assinatura
- ✅ Cancelar sem multa ou burocracia

---

**🎉 Experiência completa e transparente para o cliente!**

_Última atualização: 27 de Outubro de 2025_
