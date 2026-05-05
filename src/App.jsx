import { useState } from 'react'
import './App.css'

function App() {
  const [copiedCode, setCopiedCode] = useState(null)

  // Summer camp coding challenges - Python codes for copy/paste
  const codes = [
    {
      id: 1,
      name: '🎮 Tic-Tac-Toe Game',
      code: `board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

def print_board():
    print(f"\\n {board[0]} | {board[1]} | {board[2]} ")
    print("-----------")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("-----------")
    print(f" {board[6]} | {board[7]} | {board[8]} \\n")

print("🎮 WELCOME TO TIC-TAC-TOE! 🎮")
current_player = "X"

for turn in range(9):
    print_board()
    move = input(f"Player {current_player}, pick a spot (1-9): ")
    
    if move in board:
        index = int(move) - 1
        board[index] = current_player
    else:
        print("❌ Invalid move! You lose your turn.")
    
    win_combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    
    winner_found = False
    for combo in win_combos:
        if board[combo[0]] == board[combo[1]] == board[combo[2]]:
            print_board()
            print(f"🎉 CONGRATULATIONS! Player {current_player} wins! 🎉")
            winner_found = True
            break
            
    if winner_found:
        break
    
    current_player = "O" if current_player == "X" else "X"
else:
    print_board()
    print("👔 IT'S A DRAW!")`,
      description: 'Classic Tic-Tac-Toe game for 2 players'
    },
    {
      id: 2,
      name: '🎯 Number Guessing Game',
      code: `import random

number = random.randint(1, 50)
guess = 0
attempts = 0

print("Guess the number between 1 and 50")

while guess != number:
    guess = int(input("Enter your guess: "))
    attempts += 1
    
    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
    else:
        print("🎉 Correct! You guessed it in", attempts, "attempts")`,
      description: 'Guess the random number between 1-50'
    },
    {
      id: 3,
      name: '✊ Rock, Paper, Scissors',
      code: `import random

choices = ["rock", "paper", "scissors"]

computer = random.choice(choices)
user = input("Enter rock, paper, or scissors: ")

print("Computer chose:", computer)

if user == computer:
    print("It's a draw!")
elif (user == "rock" and computer == "scissors") or \\
     (user == "paper" and computer == "rock") or \\
     (user == "scissors" and computer == "paper"):
    print("🎉 You win!")
else:
    print("You lose!")`,
      description: 'Play Rock, Paper, Scissors against the computer'
    }
  ]

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-top">
          <img src="infividhya-logo.png" alt="InfiVidhya" className="logo" />
          <div className="header-text">
            <h1>Summer Camp Access Codes</h1>
            <p className="subtitle">Welcome! Copy the code you need below</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="codes-grid">
          {codes.map((codeItem) => (
            <div key={codeItem.id} className="code-card">
              <h2 className="card-title">{codeItem.name}</h2>
              <p className="card-description">{codeItem.description}</p>
              
              <div className="code-display">
                <span className="code-text">{codeItem.code}</span>
                <button
                  className={`copy-button ${copiedCode === codeItem.code ? 'copied' : ''}`}
                  onClick={() => handleCopyCode(codeItem.code)}
                >
                  {copiedCode === codeItem.code ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="instructions">
          <h3>📋 How to Use</h3>
          <ol>
            <li>Click the "Copy" button on the code you need</li>
            <li>The code will be copied to your clipboard</li>
            <li>Paste it (Ctrl+V or Cmd+V) where needed</li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>✨ Have fun at Summer Camp! ✨</p>
      </footer>
    </div>
  )
}

export default App
