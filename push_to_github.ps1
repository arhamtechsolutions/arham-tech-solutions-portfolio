# ARHAM TECH SOLUTIONS — Automated GitHub Push Script
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  ARHAM TECH SOLUTIONS — PUSHING GITHUB ECOSYSTEM        " -ForegroundColor Red
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Push Main Portfolio Repository
Write-Host "`n[1/2] Pushing Main Portfolio Repository..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Main portfolio pushed successfully to arham-tech-solutions-portfolio!" -ForegroundColor Green
} else {
    Write-Host "⚠ If prompted, please sign in via your browser or paste your GitHub Personal Access Token." -ForegroundColor Yellow
}

# 2. Push GitHub Profile Repository
Write-Host "`n[2/2] Pushing GitHub Profile Repository..." -ForegroundColor Yellow
$profileDir = Join-Path $PSScriptRoot "github-profile"

if (Test-Path $profileDir) {
    Push-Location $profileDir
    if (-not (Test-Path ".git")) {
        git init
        git branch -M main
        git add .
        git commit -m "feat: setup ARHAM TECH SOLUTIONS GitHub profile"
        git remote add origin https://github.com/arhamtechsolutions/arhamtechsolutions.git
    }
    git push -u origin main
    Pop-Location
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Profile README & banner pushed successfully to arhamtechsolutions/arhamtechsolutions!" -ForegroundColor Green
    }
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "  SUCCESS! Both repositories are synchronized with GitHub. " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan

