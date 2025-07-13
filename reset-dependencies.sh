#!/bin/bash

# Reset and update dependencies script
echo "🧹 Cleaning up old dependencies..."
rm -rf node_modules package-lock.json

echo "📦 Installing fresh dependencies..."
npm install

echo "✅ Dependencies updated successfully!"
echo "🚀 You can now run: npm run build" 