# ARHAM TECH SOLUTIONS — Automated GitHub Push Script
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  ARHAM TECH SOLUTIONS — PUSHING GITHUB ECOSYSTEM        " -ForegroundColor Red
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Push Main Portfolio Repository
Write-Host "`n[1/2] Synchronizing Main Portfolio Repository..." -ForegroundColor Yellow
$mainStatus = git status --porcelain
if ($mainStatus) {
    Write-Host "  Staging and committing local changes in main portfolio..." -ForegroundColor Cyan
    git add .
    git commit -m "fix: update WhatsApp contact and fix modal animation"
}
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Main portfolio pushed successfully to arham-tech-solutions-portfolio!" -ForegroundColor Green
} else {
    Write-Host "⚠ If prompted, please sign in via your browser or paste your GitHub Personal Access Token." -ForegroundColor Yellow
}

# 2. Push GitHub Profile Repository
Write-Host "`n[2/2] Synchronizing GitHub Profile Repository..." -ForegroundColor Yellow
$profileDir = Join-Path $PSScriptRoot "github-profile"

if (Test-Path $profileDir) {
    Push-Location $profileDir
    if (-not (Test-Path ".git")) {
        git init
        git branch -M main
    }
    
    # Configure remote origin
    $existingRemote = git remote get-url origin 2>$null
    if (-not $existingRemote) {
        git remote add origin https://github.com/arhamtechsolutions/arhamtechsolutions.git
    } else {
        git remote set-url origin https://github.com/arhamtechsolutions/arhamtechsolutions.git
    }

    # Stage and commit
    git add .
    $profileStatus = git status --porcelain
    if ($profileStatus) {
        git commit -m "feat: setup ARHAM TECH SOLUTIONS GitHub profile"
    }

    git branch -M main
    git push -u origin main
    $pushExit = $LASTEXITCODE
    Pop-Location

    if ($pushExit -eq 0) {
        Write-Host "✓ Profile README & banner pushed successfully to arhamtechsolutions/arhamtechsolutions!" -ForegroundColor Green
    } else {
        Write-Host "⚠ Note: If the repository 'arhamtechsolutions' is not yet created on GitHub," -ForegroundColor Yellow
        Write-Host "  please create it first at https://github.com/new with name: arhamtechsolutions" -ForegroundColor Yellow
    }
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  SUCCESS! Synchronization script execution completed.    " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
