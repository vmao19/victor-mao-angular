# Goal #

This is a computer game version of the board game Boggle by Hasbro created in **VB.NET** complete with Profile Loading, Statistics, Game-Saving, and Music!

# Process #

I split this project up into three chunks:

1. Creating the 4x4 grid of letters
2. Creating a solver that found all the words in the grid
3. Creating a game around the grid with timers, statistics, game-saving, music, etc.

### 1. Creating the 4x4 grid of letters ###

My first attempt to create a playable grid with a decent amount of words failed. For each of the 16 letters, I generated a random number from 1-26 and selected corresponding letters (1=A, 2=B, 3=C, etc). This created unplayable consonant-heavy grids that did not contain enough vowels.

My second attempt was based on English letter frequencies I found on [Wikipedia](http://en.wikipedia.org/wiki/Letter_frequency). The frequency of the letter determined the probability it would be selected for the grid. For example the letter "e" makes up 12.702% of the English language (according to Wikipedia), so there was a 12.702% chance that the letter "e" would be chosen for the grid. This method was not effective either; the grid was cluttered with too many vowels (E, A, I, O) since vowels are among the most popular letters in the English language.

My third attempt was the best. After reading websites on creating playable Boggle boards, I noticed that all the "good" grids had vowels spread out all over the board with 1 or 2 vowels for each row. I based my board generation on this observation:

* 25% chance for 0 vowels in the row
* 50% chance for 1 vowel in the row
* 15% chance for 2 vowels in the row
* 5% chance for 3 vowels in the row
* 5% chance for 4 vowels in the row

After determining how many vowels per a row, the generator randomly distributes the vowel(s) throughout the row. Then consonants are selected to fill the non-vowel spots. I split the consonants into popular consonants and unpopular consonants based on their frequency in the English language. When choosing a consonant, there is a 90% chance for a popular consonant and a 10% chance for an unpopular consonant. I tested via trial-and-error to find the best probabilities that would consistently generate boards with many words.

### 2. Creating a solver that found all the words in the grid ###

While looking online for different ways to code a boggle solver, I stumbled upon code by [avarcher](http://stackoverflow.com/questions/746082/how-to-find-list-of-possible-words-from-a-letter-matrix-boggle-solver#750722) on StackOverflow which utilized recursion to find words. I decided to do a similar approach using recursion. In the end, my code is less efficient than avarcher's code, but I am proud of it because I wrote it and troubleshooted it.

To create a solver, I had to compile a list of English words needed to validate player-entered words. I searched the internet for txt files with English words listed and found several. In a Microsoft Excel Spreadsheet, I combined the txt files and processed the data. I changed all the words to lowercase, deleted duplicate words, deleted words less than 3 letters long, alphabetized them, and exported to a new txt file.

To speed up the process of checking player-entered words as valid English words, the solver first, before the game even starts, finds all the paths through the grid. It then checks if each path is an English word and if it is, stores it into an ArrayList. Then, as the player enters words during the game, the solver checks them against the ArrayList of known words, instead of the whole entire list of English words. This speeds up the game considerably as the solver doesn't have to loop through all the English words everytime the player enters a word.

### 3. Creating a game around the grid with timers, statistics, game-saving, music, etc. ###

Lastly I built the game around the boggle grid. I added a 2 minute timer for the game, ListViews that displays the user's found words and all the words, and other extras like profile loading, statistics, game-saving, and music. All the profile information, statistics, and game-saving is stored in txt files, which are read as the application starts and overwritten with new data as the application closes. The Last Player is just another txt file with the name of the last player in the first line. The game searches for that name through all the profiles and loads that profile before the game even starts.

The music I downloaded from [YouTube](https://www.youtube.com/watch?v=S_BzmU8GWTo) via a link in the video description. It music file was originally an 1 hour long mp3 file. I figured no one (in their right mind) would play this game for 1 hour, so using Audacity, I split the mp3 file into three 20 minute segments. As the game starts, one out of the three segments will start playing, as determined by a random number generator. Also I used Audacity to convert the mp3 files to wav so VB.NET would be able to play the music.

# Programming Languages #

* VB.NET
* Contact me via [email](mailto:victormao98@gmail.com) if you are interested in the source code

# Software #

* Microsoft Visual Studio 2010
* GIMP 2
* Audacity

# Computer Science Concepts #

* Recursion
* HashTables
* File Reading/Writing
