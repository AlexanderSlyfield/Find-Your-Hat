# Find Your Hat 🧢

A terminal-based game where you navigate a field to find your hat while avoiding holes.  

---

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Features](#features)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## About

In *Find Your Hat*, you start at the top-left corner of a randomized field. Your goal is to reach the hat (`^`) while avoiding holes (`O`). The field is filled with safe spaces (`░`) and your path is marked with `*`.  

This project demonstrates:

- Arrays and 2D arrays
- Randomized field generation
- Classes and static methods
- User input handling in the terminal

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/find-your-hat.git
```

2. Navigate into the project directory:
 ```bash
cd find-your-hat
```

3. Install dependencies:
```bash
npm install
```

4. Run the game:
```bash
node main.js
```

--

## How to Play

1. After running the game, you will see a grid representing the field.

Example field:
```bash
*░░░
░O░O
░░^░
```

   - `*` = Your current position (starting point)
   - `░` = Safe field
   - `O` = Hole (falling into one ends the game)
   - `^` = Hat (find it to win)

2. Move using the keyboard:
   - `w` = Move up
   - `a` = Move left
   - `s` = Move down
   - `d` = Move right
   - `q` = Quit the game

3. Avoid holes and try to reach the hat.

4. The game ends when you find the hat, fall into a hole, go out of bounds, or quit.

--

## Features

- Randomized fields with customizable size and hole percentage
- Player path marked with `*`
- Terminal display with clear feedback
- Input validation to prevent invalid moves

--

## Future Improvements

- Ensure every field is solvable
- Add color using `terminal-kit`
- Implement levels and scoring
- Animate player movement

--

## License

This project is open-source and free to use.