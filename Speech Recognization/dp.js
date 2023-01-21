Const Texts = Document.QuerySelector(".Texts");
Window.SpeechRecognition =
Window.SpeechRecognition || Window.WebkitSpeechRecognition;
Const Recognition = New SpeechRecognition();
Recognition.InterimResults = True;
Let P = Document.CreateElement("P");
Recognition.AddEventListener("Result", (E) => {
Texts.AppendChild(P);
Const Text = Array.From(E.Results)
.Map((Result) => Result[0])
.Map((Result) => Result.Transcript)
.Join("");
P.InnerText = Text;
If (E.Results[0].IsFinal) {
If (Text.Includes("How Are You")) {
P = Document.CreateElement("P");
P.ClassList.Add("Replay");
P.InnerText = "I Am Fine";
Texts.AppendChild(P);
}
If (
Text.Includes("What's Your Name") ||
Text.Includes("What Is Your Name")
) {
P = Document.CreateElement("P");
P.ClassList.Add("Replay");
P.InnerText = "My Name Is Codewith_random";
Texts.AppendChild(P);
}
If (Text.Includes("Open My YouTube")) {
P = Document.CreateElement("P");
P.ClassList.Add("Replay");
P.InnerText = "Opening Youtube Channel";
Texts.AppendChild(P);
Console.Log("Opening Youtube");
Window.Open("Https://Www.Youtube.Com/");
}
P = Document.CreateElement("P");
}
});
Recognition.AddEventListener("End", () => {
Recognition.Start();
});
Recognition.Start();