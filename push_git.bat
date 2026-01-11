@echo off
echo Setting remote with explicit username...
git remote set-url origin https://JayanthkumarL@github.com/JayanthkumarL/FreelancingHiringPlatrorm.git

echo Pushing to Remote (You should be prompted for a password/token for JayanthkumarL)...
git push -u origin master
if %errorlevel% neq 0 (
    echo Push Failed to master. Trying main...
    git push -u origin main
)

if %errorlevel% neq 0 echo Push Failed & exit /b %errorlevel%

echo Done.
pause
