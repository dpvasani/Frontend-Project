Var PlayerTurn, Moves, IsGameOver, Span, RestartButton;
PlayerTurn = "X";
Moves = 0;
IsGameOver = False;
Span = Document.GetElementsByTagName("Span");
RestartButton = '<Button Onclick="PlayAgain()"><Svg Xmlns="Http://Www.W3.Org/2000/Svg" Width="30" Height="30" Fill="CurrentColor" Class="Bi Bi-Arrow-Repeat" ViewBox="0 0 16 16"><Path D="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><Path Fill-Rule="Evenodd" D="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></Svg></Button>';
Function Play(Y){
If (Y.Dataset.Player=="None" && Window.IsGameOver == False) {
Y.InnerHTML = PlayerTurn;
Y.Dataset.Player = PlayerTurn;
Moves++;
If (PlayerTurn=="X") {
PlayerTurn="O";
} Else If (PlayerTurn=="O") {
PlayerTurn="X"
}
}
CheckWinner(1,2,3);
CheckWinner(4,5,6);
CheckWinner(7,8,9);
CheckWinner(1,4,7);
CheckWinner(2,5,8);
CheckWinner(3,6,9);
CheckWinner(1,5,9);
CheckWinner(3,5,7);
If (Moves == 9 && IsGameOver == False) {Draw();}
}
Function CheckWinner(A, B, C) {
A--; B--; C--;
If (
(Span[A].Dataset.Player === Span[B].Dataset.Player) &&
(Span[B].Dataset.Player === Span[C].Dataset.Player) &&
(Span[A].Dataset.Player === Span[C].Dataset.Player) &&
((Span[A].Dataset.Player === "X") || Span[A].Dataset.Player == "O")&&
IsGameOver == False
) {
Span[A].ParentNode.ClassName += " ActiveBox";
Span[B].ParentNode.ClassName += " ActiveBox";
Span[C].ParentNode.ClassName += " ActiveBox";
GameOver(A);
}
}
Function PlayAgain(){
Document.GetElementsByClassName("Alert")[0].ParentNode.RemoveChild(Document.GetElementsByClassName("Alert")[0]);
ResetGame();
Window.IsGameOver = False;
For(Var K =0; K<Span.Length; K++){
Span[K].ParentNode.ClassName= Span[K].ParentNode.ClassName.Replace("ActiveBox", "");//Remove Activebox Class; You Can Use Classlist.Remove , But It Doesn't Support All Browsers
}
}
Function ResetGame(){
For (I=0; I<Span.Length; I++){
Span[I].Dataset.Player = "None";
Span[I].InnerHTML = "&Nbsp;"
}
PlayerTurn = "X";
}
Function GameOver(A){
Var GameOverAlertElement = "<B>GAME OVER</B><Br><Br> Player " + Span[A].Dataset.Player.ToUpperCase() + ' Win !!! <Br><Br>' + RestartButton
Var Div = Document.CreateElement("Div");
Div.ClassName = "Alert";
Div.InnerHTML = GameOverAlertElement;
Document.GetElementsByTagName("Body")[0].AppendChild(Div);
Window.IsGameOver = True;
Moves = 0;
}
Function Draw(){
Var DrawAlertElement = '<B>DRAW!!!</B><Br><Br>' + RestartButton;
Var Div = Document.CreateElement("Div");
Div.ClassName = "Alert";
Div.InnerHTML = DrawAlertElement;
Document.GetElementsByTagName("Body")[0].AppendChild(Div);
Window.IsGameOver = True;
Moves = 0;
}