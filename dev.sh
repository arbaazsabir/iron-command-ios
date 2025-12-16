#!/bin/bash

# Iron Command - Quick Development Script
# Usage: ./dev.sh [command]

set -e

BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}🎖️  IRON COMMAND - Development Tool${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}→ $1${NC}"
}

# Commands
cmd_install() {
    print_header
    print_info "Installing dependencies..."
    npm install
    print_info "Installing iOS pods..."
    cd ios && pod install && cd ..
    print_success "All dependencies installed!"
}

cmd_start() {
    print_header
    print_info "Starting development server..."
    npm start
}

cmd_ios() {
    print_header
    print_info "Running on iOS simulator..."
    npm run ios
}

cmd_clean() {
    print_header
    print_info "Cleaning build artifacts..."
    rm -rf node_modules
    rm -rf ios/Pods
    rm -rf ios/build
    rm -rf ~/Library/Developer/Xcode/DerivedData/IronCommand-*
    npm cache clean --force
    print_success "Clean complete!"
}

cmd_lint() {
    print_header
    print_info "Running linter..."
    npm run lint:fix
    print_success "Linting complete!"
}

cmd_test() {
    print_header
    print_info "Running tests..."
    npm test
}

cmd_build() {
    print_header
    print_info "Building iOS app..."
    npm run build:ios
}

cmd_help() {
    print_header
    echo ""
    echo "Available commands:"
    echo ""
    echo "  install    Install all dependencies (npm + pods)"
    echo "  start      Start development server"
    echo "  ios        Run on iOS simulator"
    echo "  clean      Clean all build artifacts"
    echo "  lint       Run linter with auto-fix"
    echo "  test       Run test suite"
    echo "  build      Build iOS app for TestFlight"
    echo "  help       Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./dev.sh install"
    echo "  ./dev.sh start"
    echo "  ./dev.sh ios"
    echo ""
}

# Main
case "${1:-help}" in
    install)
        cmd_install
        ;;
    start)
        cmd_start
        ;;
    ios)
        cmd_ios
        ;;
    clean)
        cmd_clean
        ;;
    lint)
        cmd_lint
        ;;
    test)
        cmd_test
        ;;
    build)
        cmd_build
        ;;
    help|*)
        cmd_help
        ;;
esac
