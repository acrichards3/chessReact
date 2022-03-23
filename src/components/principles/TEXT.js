const TEXT = [
  {
    type: 't10',
    titles: [
      '#1 Control the Center',
      '#2 Develop Your Pieces Quickly',
      '#3 Castle Before Move 10',
      '#4 Develop Knights Towards the Center',
      '#5 Knights in Closed Postions, Bishops in Open Positions',
      '#6 Use All of Your Pieces',
      '#7 Calculate Forceful Moves First',
      '#8 Put Rooks On Open Files',
      '#9 Avoid Doubled Pawns',
      "#10 Don't Sacrifice Without a Good Reason",
    ],
    descriptions: [
      'Arguably one of, if not the most important principle in all of Chess is to control the center of the board as best you can. The player who controls the center has access to more of the board and will almost certainly control more squares. The best way to control the center is to develop your pieces towards the center of the board as early as you can.',
      'Another extremely important Chess principle to follow is to develop your minor pieces as quickly as you can. If your opponent develops their pieces before you, it will be very difficult to develop your pieces later on. Pieces on your back rank are essentially useless and it is very difficult to control the center or carry out attacks without all of your pieces. Ideally, you should develop Knights, then Bishops, then try to connect your Rooks.',
      'Another thing you should prioritize in Chess is the safety of your King. Castling as early as you can is best practice because it moves your King to the edge of the board where it is protected by your pawns. If you leave your King in the center, you are usually leaving yourself open to attack from both sides of the board. Castling early in the game stops your opponent from targeting your King early on.',
      "You may have heard the phrase Knights on the rim are dim. If your knights are on the edge of the board, they won't control nearly as many squares as they would in the center. You should always try to keep your Knights towards the center of the board where they are the most active unless you have a good reason otherwise.",
      "In Chess, there are both Open and Closed positions that you can reach. When a portion of the board is locked up (usually from pawns) Knights typically perform better than Bishops due to the fact that they can jump around. In closed postitions, Bishops usually can't control more than a couple of squares. In positions where the board is open, however, Bishops become much more powerful. A bishop in an open position can often eye down an entire diagonal on the board which coveres a lot of squares and restricts your opponents movement.",
      "When attacking your opponents King, pieces, or just about anything else, it's always a good idea to support your attack with as many pieces as possible. This is especially important when attacking your opponents King. Usually, 1-2 pieces won't be enough to achieve Checkmate but if you have 4-5 pieces attacking your opponents King, it becomes much easier to win material or achieve a Checkmate.",
      'Forceful moves include, attacking pieces, checks, forks, or any other move that will force your opponent to move in one way or another. If you spot any moves that could be forceful, you should calculate these moves first as they are most often the best moves available. Forcing your opponent to move somewhere is a great way to gain a positional advantage, win material, or sometimes even Checkmate your opponent.',
      'Open files are files with no pawns on them, a half open file is a file with only one pawn on it. It is a good idea to place your Rooks on open files since they will control a lot of space. If you can get doubled Rooks on an open file, you should try to do it. Doubled Rooks on an open file are very powerful and will be problematic to your opponent in the later game.',
      "Doubled pawns happen when you have one of your pawns on top of another. Doubled pawns are bad because they hurt your pawn structure and are very weak. Usually, you won't be able to defend both pawns and moving them up the board will become difficult as well. If can, always try to avoid doubling your pawns.",
      "Everybody at one point or another will reach a position in Chess where a sacrfice looks good but unless you go through and calculate everything else, sacrificing can be very bad for you. Just because something looks good at a glance doesn't mean that it actually is good. Being at a material disadvantage is one of the easiest ways to lose in Chess, therefore, you should only sacrifice if you have a good reason to do so.",
    ],
  },
  {
    type: 'opening',
    titles: [
      'Develop Your Pieces Quickly',
      'Develop Knights Towards the Center',
      'Develop Knights Before Bishops',
      'Castle Before Move 10',
      "Don't Move the Same Piece Twice",
      "Don't Bring Your Queen Out Too Early",
      'Connect Your Rooks',
      "Don't Push Pawns in Front of Your Castled King",
    ],
    descriptions: [
      'Developing your pieces as fast as possible in Chess is one of the most important things you can do in the early game. When you bring out all of your pieces as fast as possible, you are essentially ready to start your attack quicker. If you waste time moving pointless pawns forward without a good reason, your opponent can get the upperhand very quickly by bringing their pieces into the game.',
      "When you decide to develop your knights in the early game, it almost always better to develop them towards the center rather than towards the edge of the board. Knights on the edge of the board won't be able to control nearly as many squares as a knight in the center and on top of that, a knight on the edge of the board will struggle to support your other pieces in the center. Unless you have a very specific reason for developing a Knight to the edge, you should always develop it towards the center where it can control the most space.",
      "As a general rule of thumb, you should try to develop your Knights before you develop your Bishops. One reason for this is that your Knights will be able to protect your center Pawns. Another reason is to give your Rook some breathing room so that it can't be trapped. Typically, Knights can defend your pieces in the early game better than your Bishops can.",
      "In Chess, one of the most important things you need to prioritize is the safety of your King. If your King is left exposed in the Center for too long, you are open to being attacked from all sides which is always a bad situation. Ideally, you should castle as early as you possibly can but if you can't castle right away, you should still try to castle by or before move 10.",
      "In the early game, you should avoid moving the same piece more than once. This is because in the early game you need to prioritize developing your pieces as quickly as possible. If you move a piece multiples times, you are wasting moves that could've been spent developing your pieces and getting ready to attack.",
      "Not beinging out the Queen early ties into the principle of not moving the same piece more than once. The two principles are similar because moving the Queen out early will often lead to your Queen being attacked. If your Queen is attacked, most of the time you'll have to move it somewhere safe which is a wasted move that could've been spent developing your pieces. On top of that, a lot of the times your opponent can attack your Queen and develop their pieces at the same time.",
      'Another reason why we try to bring out all the minor pieces and then the queen is because connected Rooks are very powerful together. Connected Rooks protect each other and allow you to take control of open files.',
      'The reason why you castle your King is so that your King can be safe from attack. If you then decide to start pushing the pawns in front of your castled King, a lot of the time this is a mistake because all you are really doing is giving your opponent more opportunities to attack your King again which can easily lead to a loss.',
    ],
  },
  {
    type: 'middle',
    titles: [
      'Bishops Are Slightly More Powerful Than Knights',
      'Trade Pieces When Up Mateiral, Trade Pawns When Down Material',
      'When Capturing With Pawns, Capture Towards the Center',
      'Put Your Rooks on Open Files',
      'Bishop Pairs Are Very Strong',
      "If Castled on Opposite Sides, Push Your Pawns Towards the Opponent's King",
      'Rooks on the 7th Rank Are Powerful',
      'Try to Create Passed Pawns',
    ],
    descriptions: [
      `Another way to word this principle would be, "Don't trade Bishops for Knights". This is because Bishops are generally actually slightly stronger than Knights are. Many times at the beginner level, you will see people trade their Bishops for Knights which puts them at a slight disadvantage a lot of the time. If you can help it, you should trade Knights for Bishops and not Bishops for Knights.`,
      "When you are up material, it's usually a good idea to then start trading your pieces and getting into the end game as quickly as possible. When you are up material and rush into an end-game, it becomes very difficult for your opponent to create any counterplay against you. If you happen to be down material, you should try to hold on to your pieces and only trade pawns to give yourself better positions and create counterplay.",
      'As a general rule of thumb, if you take a piece or a pawn with one of your pawns, you should try to capture towards the center of the board. Remember, having center control is one of the fastest ways to win in Chess so any thing that you can do to give yourself more center control will be very helpful.',
      'Something that you should try to do in when you are given the opportunity is to place your Rooks on files where there are no pawns. Files with no pawns are called open files and files with only 1 pawn are called half open files. Controlling open files with your Rooks gives them the most squares that they can control and opens up routes for them to travel to later on in the game. If your Rooks are connected and you can place one on an open file, your Rook will almost always be very powerful.',
      'Bishops in Chess by themselves are like snipers, when you have two of them side by side facing down a diagonal, they become extremely powerful together. Being able to cut off two diagonalls side by side will completely hinder your opponents movement. If you can target two bishops towards the enemy King, Checkmate or a material gain is often going to happen shortly after.',
      'If you caslte short and your opponent castles long or vice versa, you should try to push your pawns towards your opponents King. Belive it or not, these pawns by themselves will become a problem for your opponent, and they will be forced to defend their King which is a great way to get an advantage.',
      "Rooks on the 7th rank (or 2nd rank if playing Black) are often very powerful because you can pick off your opponents pawns that haven't been pushed. Usually, you can attack two pawns at the same time which is a great way to get a slight material advantage.",
      "Passed pawns happen when one of your pawns makes it past your opponents pawns on the left center and the right. Essentially, a passed pawn can't be captured or blocked by your opponents pawns. Passed pawns are very powerful because all they have to do to promote is make it to the 8th (or 1st) rank, and since passed pawns can't be captured or blocked by your opponents pawns, they will have to take time to deal with your passed pawns with some of their other pieces. Towards the late middle-game to the end-game, getting passed pawns is one of the easiest ways to win the game.",
    ],
  },
  {
    type: 'end',
    titles: [
      'Bring Your King Into the Game',
      'A Rook Cannot Stop 2 Pawns on the 6th Rank',
      'Learn Basic Checkmates',
      'Passed Pawns Are Very Strong',
      "If You're Up Pawns, Trade Off Your Pieces",
      'Watch for Stalemate!',
      'Place Rooks Behind Passed Pawns',
    ],
    descriptions: [
      "When you are in the end game, your King actually becomes a pretty powerful piece and will often determine the outcome of a game. Once the end-game starts and there aren't many pieces left on the board, you should try to centralize your King so that you can move it where you need to quickly.",
      'If you happen to get two passed Pawns on the 6th rank (or 3rd if playing black), a Rook cannot prevent at least one of those two Pawns from promoting to a Queen. This is another reason why passed pawns are so powerful, especially when they are together.',
      "Something that will become very helpful to you in the long run is to go online and look up some basic checkmates. 3 that I would recommend are, King and Queen checkmate, King and Rook checkmate, and Knight and Bishop checkmate. If you don't take time to learn some basic ways to checkmate in the end-game it is very likely that you will actually draw your games even when you are completely winning.",
      "Once again talking about passed pawns, they are the strongest in the end-game since there usually aren't many pieces left on the board to stop them. The more passed pawns you can get yourself in the end-game, the greater chances you will have at winning that game.",
      "In the end-game if you are up in pawns and if your opponent doesn't have any passed pawns, it can be a good idea to trade off the last of your pieces with your opponent. Once all of the pieces are gone, the person with more pawns will usually win the game, since they will be able to get a Queen first.",
      "This ties in a lot with learning some of the common ways to checkmate in the end-game. Stalemate happens when your opponent can only move their King but their King has no legal moves and it's not in check. A stalemate is a draw and if you don't take the time to see all of the squares that your pieces cover, it can actually be pretty easy to stalemate your opponent in the end-game especially with the King and Queen. On a side note, if you are losing you should also try to stalemate your opponent. Usually, the best way to do this is to keep your King towards the cneter of the board.",
      "If you have a passed pawn, you should try to move one of your Rooks behind it so that it can constantly be defended while also pushing forward. Most of the time, your opponent won't be able to take the pawn without losing significant material so most people will try to block the pawn with one of their own pieces. This is a great way to restrict your opponents movement and keep pressure on them at the same time.",
    ],
  },
];

export default TEXT;