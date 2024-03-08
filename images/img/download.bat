@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

:: List of countries
set "countries=Taliban Albania Algeria Andorra Angola Antigua_and_Barbuda Argentina Armenia Australia Austria Azerbaijan Bahamas Bahrain Bangladesh Barbados Belarus Belgium Belize Benin Bhutan Bolivia Bosnia_and_Herzegovina Botswana Brazil Brunei Bulgaria Burkina_Faso Burundi Cambodia Cameroon Canada Cape_Verde Central_African_Republic Chad Chile China Colombia Comoros Democratic_Republic_of_the_Congo Republic_of_the_Congo Costa_Rica Croatia Cuba Cyprus Czech_Republic Denmark Djibouti Dominica Dominican_Republic East_Timor Ecuador Egypt El_Salvador Equatorial_Guinea Eritrea Estonia Eswatini Ethiopia Fiji Finland France Gabon Gambia Georgia Germany Ghana Greece Grenada Guatemala Guinea Guinea-Bissau Guyana Haiti Honduras Hungary Iceland India Indonesia Iran Iraq Ireland Israel Italy Ivory_Coast Jamaica Japan Jordan Kazakhstan Kenya Kiribati Kuwait Kyrgyzstan Laos Latvia Lebanon Lesotho Liberia Libya Liechtenstein Lithuania Luxembourg Madagascar Malawi Malaysia Maldives Mali Malta Marshall_Islands Mauritania Mauritius Mexico Micronesia Moldova Monaco Mongolia Montenegro Morocco Mozambique Myanmar Namibia Nauru Nepal Netherlands New_Zealand Nicaragua Niger Nigeria North_Korea North_Macedonia Norway Oman Pakistan Palau Palestine Panama Papua_New_Guinea Paraguay Peru Philippines Poland Portugal Qatar Romania Russia Rwanda Saint_Kitts_and_Nevis Saint_Lucia Saint_Vincent_and_the_Grenadines Samoa San_Marino São_Tomé_and_Príncipe Saudi_Arabia Senegal Serbia Seychelles Sierra_Leone Singapore Slovakia Slovenia Solomon_Islands Somalia South_Africa South_Korea South_Sudan Spain Sri_Lanka Sudan Suriname Sweden Switzerland Syria Tajikistan Tanzania Thailand Togo Tonga Trinidad_and_Tobago Tunisia Turkey Turkmenistan Tuvalu Uganda Ukraine United_Arab_Emirates United_Kingdom United_States Uruguay Uzbekistan Vanuatu Vatican_City Venezuela Vietnam Yemen Zambia Zimbabwe Abkhazia Kosovo Northern_Cyprus Sahrawi_Arab_Democratic_Republic Somaliland South_Ossetia Taiwan Transnistria_^(state^)"

:: Output directory
set "outputDirectory=Flags"

:: Create output directory if not exists
if not exist "%outputDirectory%" mkdir "%outputDirectory%"

:: Loop through each country and download the flag
for %%C in (%countries%) do (
    set "country=%%C"
    set "country=!country: =_!"
    set "country=!country:~0,1!!country:~1!"

    set "url=https://en.wikipedia.org/wiki/File:Flag_of_!country!.svg"

    :: Use curl to download HTML page
    curl -L "!url!" -o "temp.html">nul

    :: Use findstr to extract SVG URL
    set "token=og:image""

    for /f "tokens=3 delims==" %%I in ('findstr "!token!" temp.html') do (
        set "svgURL=%%I"
    )

    set "svgURL=!svgURL:/thumb/=/!"

    for /f "tokens=8 delims=/" %%a in ("!svgURL!") do (
        set "svgURL=!svgURL:%%a=!"
    )

    set "svgURL=!svgURL:~1!"

    if "!svgURL:~-1!"=="/" set "svgURL=!svgURL:~0,-1!"
    if "!country!"=="Taliban" set "country=Afghanistan"
    if "!country!"=="Transnistria_(state)" set "country=Transnistria"

    echo>!country!
    dir /b/l !country!>lower.tmp
    set /p lowercaseCountry=<lower.tmp
    del !country!
    del lower.tmp

    :: Download the SVG file
    set "outputFile=%outputDirectory%\!lowercaseCountry!.svg"
    echo Downloading !country! flag from "!svgURL!"...
    curl -L "!svgURL!" -o "!outputFile!">nul
    echo - Done

    :: Delete temporary HTML file
    del temp.html
)

echo All flags downloaded successfully.

endlocal