@echo off
setlocal
cd /d "%~dp0"

rem Avoid waiting forever on an invisible terminal authentication prompt.
set "GIT_TERMINAL_PROMPT=0"

git add preset-advogado
if errorlevel 1 goto failed

git diff --cached --quiet
if not errorlevel 1 goto no_changes

set "commit_message=%~1"
if "%commit_message%"=="" set "commit_message=Atualiza LP"

git commit -m "%commit_message%"
if errorlevel 1 goto failed

git push origin main
if errorlevel 1 goto failed

echo.
echo Atualizacao enviada. Acompanhe o deploy em Cloudflare ^> Workers ^& Pages ^> preset-adg ^> Implantacoes.
goto done

:no_changes
echo Nenhuma alteracao nova na pasta preset-advogado.
goto done

:failed
pause
exit /b 1

:done
pause
exit /b 0
