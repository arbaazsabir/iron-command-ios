# 🎖️ Iron Command - Launch Instructions

## ⚠️ System Setup Required

Your Mac needs these adjustments before running Expo:

### 1. Increase File Limit

```bash
# Add to ~/.zshrc (or ~/.bash_profile)
echo "ulimit -n 4096" >> ~/.zshrc
source ~/.zshrc
```

### 2. Install Watchman (Recommended)

```bash
brew install watchman
```

### 3. Close Other Applications

Close any unnecessary apps to free up file descriptors.

---

## 🚀 Launch the Game

### Method 1: iOS Simulator (Recommended)

```bash
cd /Users/austinstickley/iron-command-ios

# Increase file limit for this session
ulimit -n 4096

# Start Expo
npx expo start

# Press 'i' when prompted to launch iOS Simulator
```

### Method 2: Physical iPhone with Expo Go

1. Install **Expo Go** from the App Store on your iPhone
2. Run:
   ```bash
   cd /Users/austinstickley/iron-command-ios
   ulimit -n 4096
   npx expo start
   ```
3. Scan the QR code with your iPhone camera
4. Tap to open in Expo Go

### Method 3: Development Build (Native)

```bash
cd /Users/austinstickley/iron-command-ios
ulimit -n 4096

# Build and run natively
npx expo run:ios
```

---

## 🐛 Troubleshooting

### "EMFILE: too many open files"

```bash
# Increase limit
ulimit -n 4096

# Or permanently:
echo "ulimit -n 4096" >> ~/.zshrc
source ~/.zshrc
```

### "TypeScript dependencies not installed"

```bash
npm install --save-dev typescript@^5.3.0 --legacy-peer-deps
```

### Metro Bundler Stuck

```bash
# Kill any running Metro processes
killall -9 node

# Clear caches
rm -rf node_modules/.cache
rm -rf /tmp/metro-*
rm -rf $TMPDIR/metro-*

# Restart
npx expo start --clear
```

### Still Not Working?

Try the nuclear option:

```bash
# Clean everything
rm -rf node_modules
rm -rf ios/Pods
rm -rf ~/Library/Developer/Xcode/DerivedData/*

# Reinstall
npm install --legacy-peer-deps
npx expo prebuild --clean
npx expo start --clear
```

---

## 📱 Expected Result

Once running, you should see:
- 3D desert terrain with tan/brown colors
- 3 soldier units standing on the ground
- Resource display at top (Credits, Fuel, Power)
- BUILD button at bottom right
- Tap units to select them
- Build menu to place structures

---

## ✅ Quick Verification

The app is working if you can:
- [  ] See the 3D scene render
- [ ] Tap and select a unit (turns tan color)
- [ ] See resources counting up
- [ ] Open the BUILD menu
- [ ] Rotate camera by dragging

---

## 🆘 Still Having Issues?

File an issue on GitHub:
https://github.com/astickleyid/iron-command-ios/issues

Include:
- macOS version
- Output of `ulimit -n`
- Full error message
- Screenshot if possible

