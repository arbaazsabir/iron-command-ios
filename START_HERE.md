# 🎖️ IRON COMMAND - START HERE

## ✅ COMPLETE - Ready to Test!

Your Iron Command iOS game is **fully built** and ready for testing!

---

## 🚀 **Quick Start (30 seconds)**

```bash
cd /Users/austinstickley/iron-command-ios
npx expo start
```

Then press **`i`** for iOS Simulator or scan the QR code with Expo Go on your iPhone.

---

## 📦 What You Have

### ✅ Fully Implemented Systems

1. **Resource Management**
   - Credits, Fuel, Power tracking
   - Automatic production from buildings
   - Real-time UI updates

2. **Building System**
   - 5 building types with unique 3D models
   - Touch-based placement on terrain
   - Health tracking and damage system
   - Power consumption management

3. **AI & Pathfinding**
   - A* algorithm for intelligent movement
   - Obstacle avoidance
   - Smooth path following

4. **Mobile UI**
   - Touch-optimized controls
   - Build menu with costs
   - Resource display
   - Placement hints

5. **Dual Game Modes**
   - RTS: Top-down strategy view
   - FPS: First-person unit control

---

## 🎮 How to Play

### Starting Resources
- 💰 Credits: 500
- ⛽ Fuel: 300
- ⚡ Power: 100 (production) / 0 (consumption)

### Controls
- **Tap Units** - Select soldier
- **Tap BUILD Button** - Open building menu
- **Tap Terrain** - Place selected building
- **Tap "POSSESS UNIT"** - Enter FPS mode
- **ESC** - Exit FPS mode

### Strategy
1. Place Oil Derrick to generate fuel
2. Build Power Plant for more structures
3. Construct Barracks for future units
4. Add Turrets for defense

---

## 📂 Project Structure

```
iron-command-ios/
├── src/
│   ├── App.tsx              ← Main game (INTEGRATED)
│   ├── components/
│   │   ├── Unit.tsx         ← Player units
│   │   ├── UpdatedUnit.tsx  ← With AI pathfinding
│   │   └── Building.tsx     ← 5 building types
│   ├── store/
│   │   ├── gameStore.ts     ← RTS/FPS mode
│   │   ├── resourceStore.ts ← Credits/Fuel/Power
│   │   └── buildingStore.ts ← Building management
│   ├── systems/
│   │   └── pathfinding.ts   ← A* algorithm
│   └── config/
│       └── constants.ts     ← Game settings
├── BUILD_AND_TEST.md        ← Full testing guide
└── MOBILE_FEATURES_ADDED.md ← Feature documentation
```

---

## 🔗 Links

- **GitHub**: https://github.com/astickleyid/iron-command-ios
- **Actions**: https://github.com/astickleyid/iron-command-ios/actions
- **Issues**: https://github.com/astickleyid/iron-command-ios/issues

---

## 🐛 Common Issues

### "Unable to resolve module"
```bash
rm -rf node_modules && npm install --legacy-peer-deps
```

### Metro bundler stuck
```bash
npx expo start --clear
```

### iOS Simulator not opening
```bash
npx expo run:ios
```

---

## 📊 What's Working

- ✅ Touch controls
- ✅ Unit selection
- ✅ Building placement
- ✅ Resource production
- ✅ 3D rendering
- ✅ AI pathfinding
- ✅ RTS/FPS modes
- ✅ Power management
- ✅ Health systems

---

## 🎯 Test It Now!

```bash
cd /Users/austinstickley/iron-command-ios
npx expo start
```

**Press `i` for iOS Simulator**

---

**Version**: 0.1.0 (Phase 1 Complete)  
**Status**: ✅ Ready for Testing

🎖️ **Let's Play!** 🎖️
