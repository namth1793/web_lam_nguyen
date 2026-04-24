@echo off
echo ========================================
echo   TantyMedia - Installing Dependencies
echo ========================================

echo.
echo [1/3] Installing backend dependencies...
cd /d "%~dp0backend"
call npm install
if errorlevel 1 ( echo ERROR: Backend install failed & pause & exit /b 1 )

echo.
echo [2/3] Seeding database...
call node db/seed.js
if errorlevel 1 ( echo ERROR: Seed failed & pause & exit /b 1 )

echo.
echo [3/3] Installing frontend dependencies...
cd /d "%~dp0frontend"
call npm install
if errorlevel 1 ( echo ERROR: Frontend install failed & pause & exit /b 1 )

echo.
echo ========================================
echo   Installation Complete!
echo   Run start.bat to launch the app.
echo ========================================
pause
