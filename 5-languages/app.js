const result = prompt ("На каком языке приветствие?");
switch (result) {
  case "Hello":
    console.log ("Английский язык");
      break;
  case "Привет":
    console.log ("Русский язык");
      break;
  case "Hola":
    console.log ("Испанский язык");
      break;
  case "Ciao":
    console.log ("Итальянский язык");
      break;
  case "Ola":
    console.log ("Португальский язык");
      break;
  default:
    console.log("Я знаю только португальский,итальянский,русский,испанский и английский языки");
}