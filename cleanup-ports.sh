#!/bin/bash
# Cleanup script to kill processes on ports 3001 and 5173

echo "Cleaning up ports..."

# Kill processes on port 3001
PID_3001=$(lsof -ti:3001)
if [ ! -z "$PID_3001" ]; then
  echo "Killing process on port 3001 (PID: $PID_3001)"
  kill -9 $PID_3001 2>/dev/null
  sleep 1
fi

# Kill processes on port 5173
PID_5173=$(lsof -ti:5173)
if [ ! -z "$PID_5173" ]; then
  echo "Killing process on port 5173 (PID: $PID_5173)"
  kill -9 $PID_5173 2>/dev/null
  sleep 1
fi

echo "✅ Ports cleaned up!"
echo "You can now run: npm run dev:all"

