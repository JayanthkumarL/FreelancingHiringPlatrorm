@echo off
echo Running Git Init...
git init
if %errorlevel% neq 0 echo Git Init Failed & exit /b %errorlevel%

echo Adding files...
git add .
if %errorlevel% neq 0 echo Git Add Failed & exit /b %errorlevel%

echo Committing...
git commit -m "Initial commit of Re-design"
if %errorlevel% neq 0 echo Git Commit Failed & exit /b %errorlevel%

echo Done.
