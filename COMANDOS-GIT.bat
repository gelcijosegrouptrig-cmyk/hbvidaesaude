@echo off
REM ========================================
REM Script de Deploy - HBVIDAESAUDE (Windows)
REM ========================================
REM Este script envia os arquivos do projeto para o GitHub
REM Repositorio: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git
REM
REM COMO USAR:
REM 1. Abra o Prompt de Comando na pasta do projeto
REM 2. Execute: COMANDOS-GIT.bat
REM ========================================

echo.
echo ========================================
echo   DEPLOY HBVIDAESAUDE
echo ========================================
echo.

REM Verificar se Git esta instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Git nao esta instalado!
    echo.
    echo Baixe em: https://git-scm.com/downloads
    echo.
    pause
    exit /b 1
)

echo [OK] Git instalado
echo.

REM Verificar se ja e um repositorio Git
if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    echo [OK] Repositorio inicializado
) else (
    echo [OK] Repositorio Git ja existe
)
echo.

REM Verificar remote
git remote -v | findstr "origin" >nul
if errorlevel 1 (
    echo Adicionando remote 'origin'...
    git remote add origin https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude.git
    echo [OK] Remote adicionado
) else (
    echo [OK] Remote 'origin' ja configurado
)
echo.

REM Mudar para branch main
echo Configurando branch 'main'...
git branch -M main
echo [OK] Branch 'main' configurada
echo.

REM Adicionar arquivos
echo Adicionando arquivos...
git add .
echo [OK] Arquivos adicionados
echo.

REM Mostrar status
echo Status do repositorio:
git status --short
echo.

REM Commit
set /p commit_msg="Digite a mensagem de commit (ou Enter para usar padrao): "
if "%commit_msg%"=="" set commit_msg=Update - %date% %time%

echo.
echo Fazendo commit...
git commit -m "%commit_msg%"
echo [OK] Commit realizado
echo.

REM Push
echo ========================================
echo   ENVIANDO PARA GITHUB
echo ========================================
echo.
echo ATENCAO: Voce pode precisar fazer login:
echo   - Username: gelcijosegrouptrig-cmyk
echo   - Password: Use um Personal Access Token
echo.
echo Como criar token:
echo https://github.com/settings/tokens
echo.

git push -u origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo   ERRO AO ENVIAR PARA GITHUB
    echo ========================================
    echo.
    echo Possiveis solucoes:
    echo.
    echo 1. Autenticacao falhou:
    echo    - Crie um Personal Access Token em:
    echo      https://github.com/settings/tokens
    echo    - Marque a opcao 'repo'
    echo    - Use o token como senha
    echo.
    echo 2. Conflitos:
    echo    git pull origin main --rebase
    echo    git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOY CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo Repositorio: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude
echo.
echo Proximos passos:
echo   1. Aguarde 2-3 minutos
echo   2. Cloudflare Pages fara o deploy automatico
echo   3. Site atualizado em: https://hbvidaesaude.me
echo.
echo Monitorar deploy:
echo   - Cloudflare: https://dash.cloudflare.com/
echo   - GitHub: https://github.com/gelcijosegrouptrig-cmyk/hbvidaesaude/actions
echo.
pause
