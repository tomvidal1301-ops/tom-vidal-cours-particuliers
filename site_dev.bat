@echo off
chcp 65001 > nul
echo 🚀 Lancement de ton site en local...

:: Le "start" ouvre le serveur dans une nouvelle petite fenetre
:: Le "-- --open" force Vite a ouvrir un onglet dans ton navigateur
start npm run dev -- --open

echo ✅ Serveur lancé, fenêtre web ouverte.