# rock-paper-scissors

INITIALIZE choices array
INITIALIZE humanScore and computerScore

GET computerChoice
    SET computer choice to random number in array

GET humanChoice
    IF choice is valid
    SET human choice
    ELSE
    DISPLAY invalid message
    *Add an exit??

GET roundWinner
    IF computerChoice beats humanChoice
        ADD 1 to computerScore
    IF humanChoice beats computerChoice
        ADD 1 to humanScore
    ELSE
        redoRound

GET winner
    IF humanScore > computerScore
    DISPLAY human winner
    ELSE
    DISPLAY computer winner

gameLoop
    WHILE # of rounds < 5
    REPEAT until rounds == 5
    DISPLAY winner