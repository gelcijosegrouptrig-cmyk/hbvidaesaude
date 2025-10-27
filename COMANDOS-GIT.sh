#!/bin/bash

# ========================================
# Script de Deploy - HBVIDAESAUDE
# ========================================
# Este script envia os arquivos do projeto para o GitHub
# Repositório: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git
#
# COMO USAR:
# 1. Abra o terminal na pasta do projeto
# 2. Execute: bash COMANDOS-GIT.sh
# ========================================

echo "🚀 DEPLOY HBVIDAESAUDE - Iniciando..."
echo ""

# Verificar se Git está instalado
if ! command -v git &> /dev/null
then
    echo "❌ Git não está instalado!"
    echo "📥 Baixe em: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git instalado: $(git --version)"
echo ""

# Verificar se já é um repositório Git
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
    echo "✅ Repositório inicializado"
else
    echo "✅ Repositório Git já existe"
fi
echo ""

# Verificar configuração de usuário
if [ -z "$(git config user.name)" ]; then
    echo "⚙️  Configurando usuário Git..."
    read -p "Digite seu nome: " username
    git config --global user.name "$username"
    echo "✅ Nome configurado: $username"
else
    echo "✅ Usuário Git: $(git config user.name)"
fi

if [ -z "$(git config user.email)" ]; then
    read -p "Digite seu email: " useremail
    git config --global user.email "$useremail"
    echo "✅ Email configurado: $useremail"
else
    echo "✅ Email Git: $(git config user.email)"
fi
echo ""

# Verificar remote
if git remote -v | grep -q "origin"; then
    echo "✅ Remote 'origin' já configurado"
else
    echo "🔗 Adicionando remote 'origin'..."
    git remote add origin https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git
    echo "✅ Remote adicionado"
fi
echo ""

# Verificar branch
current_branch=$(git branch --show-current)
if [ -z "$current_branch" ]; then
    echo "🌿 Criando branch 'main'..."
    git branch -M main
    echo "✅ Branch 'main' criada"
else
    echo "✅ Branch atual: $current_branch"
    if [ "$current_branch" != "main" ]; then
        echo "⚠️  Você está na branch '$current_branch', não 'main'"
        read -p "Deseja mudar para 'main'? (s/n): " change_branch
        if [ "$change_branch" = "s" ] || [ "$change_branch" = "S" ]; then
            git checkout main 2>/dev/null || git checkout -b main
        fi
    fi
fi
echo ""

# Adicionar arquivos
echo "📁 Adicionando arquivos ao staging..."
git add .
echo "✅ Arquivos adicionados"
echo ""

# Mostrar status
echo "📊 Status do repositório:"
git status --short
echo ""

# Commit
read -p "📝 Digite a mensagem de commit (ou Enter para usar padrão): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update - $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "💾 Fazendo commit..."
git commit -m "$commit_msg"
echo "✅ Commit realizado: $commit_msg"
echo ""

# Push
echo "🚀 Enviando para GitHub..."
echo "⚠️  Você pode precisar fazer login:"
echo "   - Username: gelcijosegrouptrig-cmyk"
echo "   - Password: Use um Personal Access Token (não a senha do GitHub)"
echo ""
echo "Como criar token: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ =========================================="
    echo "✅  DEPLOY CONCLUÍDO COM SUCESSO!"
    echo "✅ =========================================="
    echo ""
    echo "🌐 Repositório: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude"
    echo ""
    echo "🔄 Próximos passos:"
    echo "   1. Aguarde 2-3 minutos"
    echo "   2. Cloudflare Pages fará o deploy automático"
    echo "   3. Site atualizado em: https://hbvidaesaude.me"
    echo ""
    echo "📊 Monitorar deploy:"
    echo "   - Cloudflare: https://dash.cloudflare.com/"
    echo "   - GitHub: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude/actions"
    echo ""
else
    echo ""
    echo "❌ =========================================="
    echo "❌  ERRO AO ENVIAR PARA GITHUB"
    echo "❌ =========================================="
    echo ""
    echo "💡 Possíveis soluções:"
    echo ""
    echo "1. Autenticação falhou:"
    echo "   - Crie um Personal Access Token em:"
    echo "     https://github.com/settings/tokens"
    echo "   - Marque a opção 'repo'"
    echo "   - Use o token como senha"
    echo ""
    echo "2. Remote incorreto:"
    echo "   git remote -v"
    echo "   git remote set-url origin https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git"
    echo ""
    echo "3. Branch incorreta:"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "4. Conflitos:"
    echo "   git pull origin main --rebase"
    echo "   git push -u origin main"
    echo ""
fi
