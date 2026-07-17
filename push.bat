@echo off
chcp 65001 > nul

:: Vérifie si un message a été fourni
if "%~1"=="" (
    echo ❌ ERREUR : Tu as oublie le message !
    echo 👉 Utilisation : push.bat "Ton message de mise a jour"
    exit /b
)

echo ⏳ Ajout des fichiers...
git add .

echo 📝 Creation du commit...
git commit -m "%~1"

echo 🚀 Envoi sur GitHub en cours...
git push origin main

echo ✅ Termine ! Ton site va se mettre a jour sur Netlify.