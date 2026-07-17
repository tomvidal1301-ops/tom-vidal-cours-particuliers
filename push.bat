@echo off
chcp 65001 > nul

:: On récupère l'argument fourni (s'il y en a un)
set "COMMIT_MSG=%~1"

:: Si aucun argument n'a été fourni au lancement, on demande à l'utilisateur
if "%COMMIT_MSG%"=="" (
    echo ℹ️ Aucun argument fourni - entrée pour annuler l'opération
    set /p COMMIT_MSG="👉 Veuillez saisir la description du commit : "
)

:: Vérification de sécurité : si l'utilisateur a juste appuyé sur "Entrée" sans rien écrire
if "%COMMIT_MSG%"=="" (
    echo ❌ Opération annulée : Le message de validation ne peut pas être vide.
    exit /b
)
echo ⏳ Préparation des fichiers modifiés...
git add . || goto :erreur_add

echo 📝 Création de la révision locale...
git commit -m "%COMMIT_MSG%" || goto :erreur_commit

echo 🚀 Synchronisation avec le dépôt distant GitHub...
git push origin main || goto :erreur_push

echo.
echo 🎉 Commit "%COMMIT_MSG%" réalisé avec succès !
echo ✅ Opération terminée avec succès. Le déploiement automatisé est en cours.
exit /b

:: --- GESTION DES ERREURS ---

:erreur_add
echo.
echo ❌ ERREUR : Une erreur est survenue lors de la préparation des fichiers (git add).
echo Veuillez vérifier l'état des fichiers ou les permissions du dossier.
exit /b

:erreur_commit
echo.
echo ❌ ERREUR : Une erreur est survenue lors de la validation (git commit).
echo Note : Cette erreur se produit généralement s'il n'y a aucune nouvelle modification à sauvegarder.
exit /b

:erreur_push
echo.
echo ❌ ERREUR : Une erreur est survenue lors de l'envoi vers le serveur (git push).
echo Veuillez vérifier votre connexion internet ou d'éventuels conflits avec le dépôt distant.
exit /b