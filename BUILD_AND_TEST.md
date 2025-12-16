# 🎖️ Iron Command - Build & Test Instructions

## ✅ What's Been Built

### Core Systems (100% Complete)
- ✅ Resource management (Credits, Fuel, Power)
- ✅ Building system (5 types with unique properties)
- ✅ A* pathfinding AI for units
- ✅ 3D building models with animations
- ✅ Unit AI with smooth movement
- ✅ Touch-optimized mobile UI
- ✅ Resource production loop
- ✅ Building placement system

### Game Features
- ✅ RTS mode with top-down camera
- ✅ FPS mode with unit possession
- ✅ Touch controls for iOS
- ✅ Build menu with resource costs
- ✅ Power management system
- ✅ Health bars on buildings
- ✅ Animated Command Center radar

## 🚀 Test on iOS Simulator

### Method 1: Expo Go (Fastest)

```bash
cd /Users/austinstickley/iron-command-ios

# Start Expo development server
npx expo start

# In the terminal, press:
# - 'i' for iOS Simulator
# - 'a' for Android (if available)
# - Scan QR code with Expo Go app on physical iPhone
```

### Method 2: Development Build

```bash
# Create development build
npx expo run:ios

# This will:
# 1. Install iOS pods
# 2. Build native code
# 3. Launch in simulator
```

## 🎮 How to Play

### RTS Mode (Commander View)
1. **Select Units**: Tap on soldier units to select them
2. **Build Structures**: 
   - Tap the 🏗️ BUILD button (bottom right)
   - Select a building type
   - Tap on terrain to place it
3. **Watch Resources**: Top bar shows Credits 💰, Fuel ⛽, and Power ⚡
4. **Power Management**: Keep power production > consumption

### FPS Mode (Field Operative)
1. **Possess Unit**: Tap a selected unit, then tap "⚡ POSSESS UNIT"
2. **First-Person View**: Camera moves to unit's perspective
3. **Exit**: Shake device or press ESC (simulator) to return to RTS mode

### Building Types & Costs

| Building | Credits | Fuel | Function |
|----------|---------|------|----------|
| Command Center | 1000 | 0 | Base HQ (starting building) |
| Oil Derrick | 300 | 0 | Produces +10 Fuel/sec |
| Power Plant | 400 | 100 | Produces +100 Power |
| Barracks | 500 | 200 | Trains units (future) |
| Turret | 200 | 50 | Defense structure |

## 🐛 Troubleshooting

### Error: "Unable to resolve module"
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install --legacy-peer-deps
npx expo start --clear
```

### Metro Bundler Issues
```bash
# Reset Metro bundler
watchman watch-del-all
rm -rf $TMPDIR/metro-*
npx expo start --clear
```

### iOS Simulator Not Starting
```bash
# Check available simulators
xcrun simctl list devices

# Reset simulator
xcrun simctl erase all
```

### Three.js Not Rendering
```bash
# Make sure you have expo-gl installed
npx expo install expo-gl
```

## 📊 Expected Performance

- **FPS**: 60 on iPhone 12+ (Simulator may be slower)
- **Startup**: < 5 seconds cold start
- **Memory**: ~150MB in RTS mode
- **Touch Response**: < 100ms

## 🔧 Development Tips

### Hot Reload
- Save any file to see changes instantly
- Shake device (or Cmd+D in simulator) for dev menu

### Debugging
```bash
# View logs
npx expo start --ios --clear

# In another terminal
npx react-native log-ios
```

### Performance Profiling
1. Open React Native Dev Menu (Cmd+D)
2. Enable "Performance Monitor"
3. Watch FPS and memory usage

## 📝 Next Steps for Full Game

1. **Add Unit Shooting** - Raycasting in FPS mode
2. **Enemy AI** - Basic hostile units
3. **Unit Production** - Spawn units from Barracks
4. **Touch Gestures** - Pinch to zoom, pan camera
5. **Sound Effects** - Weapon sounds, building ambient
6. **Multiplayer** - Network synchronization

## 🎯 Quick Test Checklist

- [ ] App launches without errors
- [ ] Can select units by tapping
- [ ] Resources increase over time
- [ ] Build menu appears when tapped
- [ ] Can place buildings on terrain
- [ ] Buildings show up in 3D
- [ ] Command Center radar spins
- [ ] Power consumption updates
- [ ] Can possess units (FPS mode)
- [ ] Can return to RTS mode

## 🆘 Need Help?

- **Repository**: https://github.com/astickleyid/iron-command-ios
- **Issues**: https://github.com/astickleyid/iron-command-ios/issues
- **Documentation**: See `/docs` folder

---

**Version**: 0.1.0 (Phase 1 Complete)  
**Last Updated**: December 2024  
**Status**: ✅ Ready for iOS Testing

🎖️ **Happy Testing, Commander!** 🎖️
