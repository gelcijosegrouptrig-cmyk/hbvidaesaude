// Especialidades Médicas
const specialties = [
    { name: "Alergia e Imunologia Pediátrica", icon: "fa-allergies", category: "Pediatria" },
    { name: "Cardiologia", icon: "fa-heartbeat", category: "Clínica" },
    { name: "Cirurgia Geral", icon: "fa-user-md", category: "Cirurgia" },
    { name: "Cirurgia Plástica", icon: "fa-hand-sparkles", category: "Cirurgia" },
    { name: "Cirurgia Vascular", icon: "fa-stethoscope", category: "Cirurgia" },
    { name: "Clínica Médica", icon: "fa-clinic-medical", category: "Clínica" },
    { name: "Coloproctologia", icon: "fa-user-md", category: "Clínica" },
    { name: "Dermatologia", icon: "fa-hand-holding-medical", category: "Clínica" },
    { name: "Endocrinologia/Metabologia", icon: "fa-dna", category: "Clínica" },
    { name: "Gastroenterologia", icon: "fa-notes-medical", category: "Clínica" },
    { name: "Gastroenterologia Pediátrica", icon: "fa-baby", category: "Pediatria" },
    { name: "Geriatria", icon: "fa-wheelchair", category: "Clínica" },
    { name: "Ginecologia/Obstetrícia", icon: "fa-female", category: "Clínica" },
    { name: "Hematologia Pediátrica", icon: "fa-tint", category: "Pediatria" },
    { name: "Hematologia e Hemoterapia", icon: "fa-tint", category: "Clínica" },
    { name: "Infectologia Pediátrica", icon: "fa-shield-virus", category: "Pediatria" },
    { name: "Mastologia", icon: "fa-ribbon", category: "Clínica" },
    { name: "Neurologia", icon: "fa-brain", category: "Clínica" },
    { name: "Nutricionista", icon: "fa-apple-alt", category: "Saúde" },
    { name: "Oftalmologia", icon: "fa-eye", category: "Clínica" },
    { name: "Ortopediatria", icon: "fa-child", category: "Pediatria" },
    { name: "Otorrinolaringologia", icon: "fa-head-side-mask", category: "Clínica" },
    { name: "Pediatria", icon: "fa-baby-carriage", category: "Pediatria" },
    { name: "Pneumologia", icon: "fa-lungs", category: "Clínica" },
    { name: "Pneumologia Pediátrica", icon: "fa-lungs-virus", category: "Pediatria" },
    { name: "Psicologia", icon: "fa-user-friends", category: "Saúde Mental" },
    { name: "Psiquiatria", icon: "fa-head-side-virus", category: "Saúde Mental" },
    { name: "Reumatologia", icon: "fa-hand-holding-medical", category: "Clínica" },
    { name: "Urologia", icon: "fa-procedures", category: "Clínica" }
];

// Função para renderizar especialidades
function renderSpecialties(filteredSpecialties = specialties) {
    const grid = document.getElementById('specialties-grid');
    const noResults = document.getElementById('no-results');
    
    if (filteredSpecialties.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    grid.innerHTML = filteredSpecialties.map(specialty => `
        <div class="specialty-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="flex flex-col items-center text-center">
                <div class="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <i class="fas ${specialty.icon} text-3xl text-primary"></i>
                </div>
                <h3 class="font-bold text-lg text-gray-800 mb-2">${specialty.name}</h3>
                <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">${specialty.category}</span>
            </div>
        </div>
    `).join('');
    
    // Adicionar animação de entrada
    const cards = document.querySelectorAll('.specialty-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Função de busca
function setupSearch() {
    const searchInput = document.getElementById('search-specialty');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        const filtered = specialties.filter(specialty => 
            specialty.name.toLowerCase().includes(searchTerm) ||
            specialty.category.toLowerCase().includes(searchTerm)
        );
        
        renderSpecialties(filtered);
    });
}

// Menu Mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Fechar menu ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth scroll para links internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header fixo com sombra ao rolar
function setupHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl');
        } else {
            header.classList.remove('shadow-xl');
        }
    });
}

// Animação de entrada dos elementos
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar seções
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Estatísticas animadas (contador)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar animação quando o elemento estiver visível
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// FAQ Toggle
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            const isOpen = !answer.classList.contains('hidden');
            
            // Fechar todas as outras FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.add('hidden');
                    otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle da FAQ atual
            if (isOpen) {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Modal de Agendamento (simulado)
function setupAppointmentModal() {
    const appointmentButtons = document.querySelectorAll('a[href="#"]');
    
    appointmentButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.textContent.includes('consulta') || button.textContent.includes('Agendar')) {
                e.preventDefault();
                showAppointmentInfo();
            }
        });
    });
}

function showAppointmentInfo() {
    // Criar modal simples
    const modalHTML = `
        <div id="appointment-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div class="text-center mb-6">
                    <i class="fas fa-video text-6xl text-primary mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Agendar Consulta</h3>
                    <p class="text-gray-600">Para realizar ou agendar sua consulta, acesse o portal do beneficiário</p>
                </div>
                
                <div class="space-y-4 mb-6">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-clock text-primary"></i>
                            <div>
                                <p class="font-bold text-sm text-gray-700">Pronto Atendimento</p>
                                <p class="text-sm text-gray-600">Disponível 24h/dia</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-calendar text-secondary"></i>
                            <div>
                                <p class="font-bold text-sm text-gray-700">Especialidades</p>
                                <p class="text-sm text-gray-600">Agendamento com 48h de antecedência</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button onclick="closeAppointmentModal()" class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                    Entendi
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Fechar ao clicar fora
    document.getElementById('appointment-modal').addEventListener('click', (e) => {
        if (e.target.id === 'appointment-modal') {
            closeAppointmentModal();
        }
    });
}

function closeAppointmentModal() {
    const modal = document.getElementById('appointment-modal');
    if (modal) {
        modal.remove();
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    renderSpecialties();
    setupSearch();
    setupMobileMenu();
    setupSmoothScroll();
    setupHeaderScroll();
    setupScrollAnimations();
    animateCounters();
    setupFAQ();
    setupAppointmentModal();
    setupPaymentForm();
    
    console.log('HBVIDAESAUDE - Sistema carregado com sucesso!');
});

// Modal de Pagamento
function openPaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Previne scroll do body
        
        // Animação de entrada
        setTimeout(() => {
            modal.querySelector('div').style.opacity = '1';
            modal.querySelector('div').style.transform = 'scale(1)';
        }, 10);
    }
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        // Animação de saída
        modal.querySelector('div').style.opacity = '0';
        modal.querySelector('div').style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restaura scroll
        }, 200);
    }
}

// Máscara para CPF
function formatCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

// Máscara para Telefone
function formatPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

// Validar formulário antes de redirecionar para pagamento
function validateFormBeforePayment(event) {
    const form = document.getElementById('payment-form');
    
    if (!form || !form.checkValidity()) {
        event.preventDefault();
        
        if (form) {
            form.reportValidity();
        }
        
        // Mostrar alerta
        alert('⚠️ Por favor, preencha todos os campos obrigatórios antes de continuar para o pagamento.');
        return false;
    }
    
    // Coletar dados para analytics
    const formData = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        email: form.email.value,
        telefone: form.telefone.value,
        nascimento: form.nascimento.value,
        plano: 'Plano Mensal - R$ 59,90',
        data_assinatura: new Date().toISOString(),
        metodo_pagamento: event.target.closest('.payment-option-card') ? 
            (event.target.href?.includes('woovi') ? 'PIX' : 'Cartão') : 'Cartão'
    };
    
    console.log('Dados da Assinatura:', formData);
    
    // Mostrar mensagem de sucesso
    setTimeout(() => {
        showSuccessMessage(formData.metodo_pagamento);
    }, 500);
    
    return true;
}

// Processar Formulário de Pagamento
function setupPaymentForm() {
    const form = document.getElementById('payment-form');
    const cpfInput = document.querySelector('input[name="cpf"]');
    const phoneInput = document.querySelector('input[name="telefone"]');
    
    // Aplicar máscaras
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            e.target.value = formatCPF(e.target.value);
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = formatPhone(e.target.value);
        });
    }
}

// Mensagem de sucesso
function showSuccessMessage(metodo = 'Cartão') {
    const isPix = metodo === 'PIX';
    const icon = isPix ? 'fa-qrcode' : 'fa-credit-card';
    const bgColor = isPix ? 'bg-green-500' : 'bg-accent';
    const texto = isPix ? 
        'Complete o pagamento via PIX na página que foi aberta.' : 
        'Complete o pagamento com cartão na página do Mercado Pago que foi aberta.';
    
    const messageHTML = `
        <div id="success-message" class="fixed top-24 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-slide-in max-w-sm">
            <div class="flex items-start space-x-3">
                <i class="fas ${icon} text-2xl mt-1"></i>
                <div>
                    <h4 class="font-bold text-lg mb-1">Redirecionado para pagamento!</h4>
                    <p class="text-sm">${texto}</p>
                </div>
                <button onclick="closeSuccessMessage()" class="ml-2 hover:bg-white hover:bg-opacity-20 rounded p-1">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', messageHTML);
    
    // Auto fechar após 8 segundos
    setTimeout(() => {
        closeSuccessMessage();
    }, 8000);
}

function closeSuccessMessage() {
    const message = document.getElementById('success-message');
    if (message) {
        message.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            message.remove();
        }, 300);
    }
}

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
    const modal = document.getElementById('payment-modal');
    if (modal && e.target === modal) {
        closePaymentModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePaymentModal();
        closeAppointmentModal();
        closePixPayment();
        closeCardPayment();
    }
});

// Função para abrir o pagamento PIX em iframe
function openPixPayment(event) {
    event.preventDefault();
    
    // Valida o formulário primeiro
    if (!validateFormBeforePayment(event)) {
        return;
    }
    
    // URL do PIX
    const pixUrl = 'https://woovi.com/pay/ef8af5ea-0820-42a7-bbb8-3d9a8f32c24a';
    
    // Obtém elementos
    const iframe = document.getElementById('pix-iframe');
    const modal = document.getElementById('pix-payment-frame');
    
    if (!iframe || !modal) {
        console.error('Elementos do modal PIX não encontrados');
        return;
    }
    
    // Define a URL do PIX
    iframe.src = pixUrl;
    
    // Exibe o modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Modal PIX aberto em iframe');
    
    // Detectar erro de carregamento do iframe (X-Frame-Options)
    setTimeout(() => {
        try {
            // Tenta acessar o conteúdo do iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (!iframeDoc || iframeDoc.body.innerHTML === '') {
                throw new Error('Iframe bloqueado');
            }
        } catch (error) {
            // Se o iframe não carregar (bloqueado por X-Frame-Options)
            console.warn('⚠️ Iframe bloqueado, abrindo em popup centralizado');
            
            // Fecha o modal
            closePixPayment();
            
            // Abre em popup centralizado
            const width = 600;
            const height = 800;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;
            
            const popup = window.open(
                pixUrl,
                'PagamentoPIX',
                `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
            );
            
            if (popup) {
                popup.focus();
                alert('✅ Janela de pagamento PIX aberta!\n\nComplete o pagamento na janela que acabou de abrir.');
            } else {
                alert('⚠️ Pop-up bloqueado!\n\nPor favor, permita pop-ups para este site e tente novamente.');
            }
        }
    }, 2000); // Aguarda 2 segundos para tentar carregar
}

// Função para fechar o iframe do PIX
function closePixPayment() {
    const modal = document.getElementById('pix-payment-frame');
    const iframe = document.getElementById('pix-iframe');
    
    if (!modal || !iframe) {
        console.error('Elementos do modal PIX não encontrados');
        return;
    }
    
    // Esconde o modal
    modal.classList.add('hidden');
    
    // Limpa o iframe
    iframe.src = '';
    
    // Restaura scroll
    document.body.style.overflow = '';
    
    console.log('❌ Modal PIX fechado');
}

// Função para abrir o pagamento com Cartão (Mercado Pago) em iframe
function openCardPayment(event) {
    event.preventDefault();
    
    // Valida o formulário primeiro
    if (!validateFormBeforePayment(event)) {
        return;
    }
    
    // Obtém dados do formulário
    const form = document.getElementById('payment-form');
    const customerData = {
        name: form.nome.value,
        email: form.email.value,
        cpf: form.cpf.value.replace(/\D/g, ''),
        phone: form.telefone.value.replace(/\D/g, ''),
        birthdate: form.nascimento.value
    };
    
    // Cria preferência de pagamento no Mercado Pago
    createMercadoPagoPreference(customerData);
}

// ========================================
// PAGAMENTO CARTÃO - MERCADO PAGO
// ========================================

// URL do checkout Mercado Pago (fornecida pelo usuário)
const SUBSCRIPTION_CHECKOUT_URL = 'https://www.mercadopago.com.br/checkout/v1/payment/redirect/382356d4-bb2f-40de-9ed9-a3cb12ce1b29/card-form/?preference-id=2911366389-973f9b86-0375-4056-ba47-a60f0d4391a1&router-request-id=cbf9be99-fe26-46dc-b6bd-91eef234d435&p=cc765e1268f4d1e78c6d8842272af8ca';

// Função principal para abrir checkout de pagamento
async function createMercadoPagoPreference(customerData) {
    try {
        console.log('🔄 Iniciando checkout de pagamento...');
        console.log('👤 Dados do cliente:', customerData);
        
        if (SUBSCRIPTION_CHECKOUT_URL) {
            console.log('✅ Abrindo checkout Mercado Pago...');
            openMercadoPagoCheckout(SUBSCRIPTION_CHECKOUT_URL);
        } else {
            alert('⚠️ Link de pagamento não configurado.\n\nContate o suporte.');
        }
        
    } catch (error) {
        console.error('💥 Erro ao abrir checkout:', error);
        alert('⚠️ Erro ao iniciar pagamento.\n\nPor favor, tente novamente.');
    }
}

// Função para abrir checkout do Mercado Pago em iframe
function openMercadoPagoCheckout(checkoutUrl) {
    // Obtém elementos
    const iframe = document.getElementById('card-iframe');
    const modal = document.getElementById('card-payment-frame');
    
    if (!iframe || !modal) {
        console.error('Elementos do modal Cartão não encontrados');
        return;
    }
    
    // Define a URL do Mercado Pago
    iframe.src = checkoutUrl;
    
    // Exibe o modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Modal Mercado Pago aberto em iframe');
    
    // Detectar erro de carregamento do iframe (X-Frame-Options)
    setTimeout(() => {
        try {
            // Tenta acessar o conteúdo do iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (!iframeDoc || iframeDoc.body.innerHTML === '') {
                throw new Error('Iframe bloqueado');
            }
        } catch (error) {
            // Se o iframe não carregar (bloqueado por X-Frame-Options)
            console.warn('⚠️ Iframe bloqueado, abrindo em popup centralizado');
            
            // Fecha o modal
            closeCardPayment();
            
            // Abre em popup centralizado
            const width = 800;
            const height = 900;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;
            
            const popup = window.open(
                checkoutUrl,
                'PagamentoMercadoPago',
                `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
            );
            
            if (popup) {
                popup.focus();
                console.log('✅ Popup aberto com sucesso');
                
                // Mostrar modal de ajuda
                showPaymentHelp(checkoutUrl);
            } else {
                console.error('❌ Popup bloqueado pelo navegador');
                
                // Mostrar modal com instruções e link
                showPopupBlockedModal(checkoutUrl);
            }
        }
    }, 2000); // Aguarda 2 segundos para tentar carregar
}

// Função para fechar o iframe do Cartão
function closeCardPayment() {
    const modal = document.getElementById('card-payment-frame');
    const iframe = document.getElementById('card-iframe');
    
    if (!modal || !iframe) {
        console.error('Elementos do modal Cartão não encontrados');
        return;
    }
    
    // Esconde o modal
    modal.classList.add('hidden');
    
    // Limpa o iframe
    iframe.src = '';
    
    // Restaura scroll
    document.body.style.overflow = '';
    
    console.log('❌ Modal Cartão fechado');
}

// Fechar modais ao clicar fora
document.addEventListener('click', (e) => {
    const pixModal = document.getElementById('pix-payment-frame');
    const cardModal = document.getElementById('card-payment-frame');
    
    if (pixModal && e.target === pixModal) {
        closePixPayment();
    }
    
    if (cardModal && e.target === cardModal) {
        closeCardPayment();
    }
});

// Modal de ajuda quando popup abre
function showPaymentHelp(checkoutUrl) {
    const modalHTML = `
        <div id="payment-help-modal" class="fixed inset-0 bg-black bg-opacity-50 z-70 flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div class="text-center mb-6">
                    <i class="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Janela de Pagamento Aberta!</h3>
                    <p class="text-gray-600">Complete o pagamento na janela que foi aberta</p>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <p class="text-sm text-gray-700">
                        <i class="fas fa-info-circle text-blue-500 mr-2"></i>
                        Se a janela não aparecer, verifique se o navegador bloqueou o pop-up
                    </p>
                </div>
                
                <button onclick="closePaymentHelp()" class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                    Entendi
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closePaymentHelp() {
    const modal = document.getElementById('payment-help-modal');
    if (modal) modal.remove();
}

// Modal quando popup é bloqueado
function showPopupBlockedModal(checkoutUrl) {
    const modalHTML = `
        <div id="popup-blocked-modal" class="fixed inset-0 bg-black bg-opacity-50 z-70 flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div class="text-center mb-6">
                    <i class="fas fa-exclamation-triangle text-6xl text-yellow-500 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Pop-up Bloqueado!</h3>
                    <p class="text-gray-600">Seu navegador bloqueou a janela de pagamento</p>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-gray-800 mb-2">Como permitir:</h4>
                    <ol class="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                        <li>Clique no ícone 🚫 na barra de endereço</li>
                        <li>Selecione "Sempre permitir pop-ups"</li>
                        <li>Clique em "Pagar com Cartão" novamente</li>
                    </ol>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 class="font-bold text-gray-800 mb-2">Ou abra manualmente:</h4>
                    <button onclick="copyPaymentLink('${checkoutUrl}')" class="w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition mb-2">
                        <i class="fas fa-copy mr-2"></i>
                        Copiar Link de Pagamento
                    </button>
                    <button onclick="openPaymentInNewTab('${checkoutUrl}')" class="w-full bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        Abrir em Nova Aba
                    </button>
                </div>
                
                <button onclick="closePopupBlockedModal()" class="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition">
                    Fechar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closePopupBlockedModal() {
    const modal = document.getElementById('popup-blocked-modal');
    if (modal) modal.remove();
}

function copyPaymentLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('✅ Link copiado!\n\nCole em uma nova aba do navegador para completar o pagamento.');
    }).catch(() => {
        prompt('Copie este link:', url);
    });
}

function openPaymentInNewTab(url) {
    window.open(url, '_blank');
    closePopupBlockedModal();
    alert('✅ Nova aba aberta!\n\nComplete o pagamento na aba que foi aberta.');
}

// Expor funções globalmente
window.closeAppointmentModal = closeAppointmentModal;
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.closeSuccessMessage = closeSuccessMessage;
window.validateFormBeforePayment = validateFormBeforePayment;
window.openPixPayment = openPixPayment;
window.closePixPayment = closePixPayment;
window.openCardPayment = openCardPayment;
window.closeCardPayment = closeCardPayment;
window.closePaymentHelp = closePaymentHelp;
window.closePopupBlockedModal = closePopupBlockedModal;
window.copyPaymentLink = copyPaymentLink;
window.openPaymentInNewTab = openPaymentInNewTab;
