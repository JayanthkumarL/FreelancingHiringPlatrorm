@echo off
echo Clearing Git credentials for GitHub...
cmdkey /delete:git:https://github.com
cmdkey /delete:git:https://github.com/JayanthkumarL/FreelancingHiringPlatrorm.git
echo.
echo Credentials cleared (if they existed).
echo.
echo ========================================================
echo Now running push_git.bat...
echo DEPENDING ON YOUR SYSTEM, YOU MAY BE PROMPTED TO LOG IN.
echo PLEASE LOG IN AS: JayanthkumarL
echo ========================================================
echo.
call push_git.bat
