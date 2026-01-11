@echo off
echo ===========================================
echo STEP 1: Saving your local changes...
echo ===========================================
git add .
git commit -m "Deployment preparations and safeguards"
:: If commit fails (empty), that's fine, we proceed.

echo.
echo ===========================================
echo STEP 2: Merging remote changes...
echo ===========================================
:: We use --allow-unrelated-histories because you likely created the repo with a README/License
git pull origin master --allow-unrelated-histories --no-edit

if %errorlevel% neq 0 (
    echo.
    echo 'master' pull failed. Trying 'main' just in case...
    git pull origin main --allow-unrelated-histories --no-edit
)

echo.
echo ===========================================
echo STEP 3: Pushing to GitHub...
echo ===========================================
git push -u origin master

if %errorlevel% neq 0 (
   echo.
   echo Push failed. If you see 'conflict' errors, we may need to resolve them manually.
   exit /b 1
)

echo.
echo SUCCESS! Your code is on GitHub.
pause
