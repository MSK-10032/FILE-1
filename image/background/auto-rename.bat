@echo off
setlocal enabledelayedexpansion
for /f "tokens=*" %%a in ("%0") do set "SCRIPT_PATH=%%~fa"
for /r %%F in (*) do (
    set "filepath=%%F"
    set "filename=%%~nxF"
    set "extension=%%~xF"
    if not "%%F"=="!SCRIPT_PATH!" (
        for /f "delims=" %%H in ('
            powershell -Command "(Get-FileHash -LiteralPath '%%F' -Algorithm SHA256).Hash.ToLower()"
        ') do set "hash=%%H"
        ren "%%F" "!hash!!extension!"
    )
)
pause
