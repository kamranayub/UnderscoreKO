@echo off
setlocal enabledelayedexpansion
set /p version=<version.txt

rmdir build /s /q
mkdir build

copy underscore-ko.js build\underscore-ko-%version%.js

set INTEXTFILE=underscore-ko-%version%.js
set OUTTEXTFILE=underscore-ko-%version%_out.js
set SEARCHTEXT=$version$
set REPLACETEXT=%version%
set OUTPUTLINE=

for /f "tokens=1,* delims=¶" %%A in ( '"type build\%INTEXTFILE%"') do (
SET string=%%A
SET modified=!string:%SEARCHTEXT%=%REPLACETEXT%!

echo !modified! >> build\%OUTTEXTFILE%
)
del build\%INTEXTFILE%
rename build\%OUTTEXTFILE% %INTEXTFILE%

start /b uglifyjs --comments -o build\underscore-ko-%version%.min.js build\underscore-ko-%version%.js
nuget pack UnderscoreKO.nuspec -Version %version% -Output build

echo.
echo Build files and Nuget package ready in .\build