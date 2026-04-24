@echo off
echo ========================================
echo   TantyMedia - Starting Application
echo ========================================

echo.
echo Starting backend on http://localhost:5015 ...
start "TantyMedia Backend" cmd /k "cd /d "%~dp0backend" && node server.js"

timeout /t 2 /nobreak >nul

echo Starting frontend on http://localhost:5173 ...
start "TantyMedia Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo   App is running!
echo   Frontend : http://localhost:5173
echo   Backend  : http://localhost:5015
echo ========================================
start http://localhost:5173
