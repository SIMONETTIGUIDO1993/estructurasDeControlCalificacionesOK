let nombreAlumno: string | null;
let notaPractica, notaProblemas, notaTeoria, notaFinal: number;

nombreAlumno = prompt("Ingrese el nombre del alumno");

while (nombreAlumno !== "") {
  notaPractica = Number(prompt("Ingrese nota de Practica"));
  notaProblemas = Number(prompt("Ingrese nota de Problemas"));
  notaTeoria = Number(prompt("Ingrese nota de Teoria"));

  if (
    notaPractica > 10 ||
    notaPractica < 0 ||
    notaTeoria > 10 ||
    notaTeoria < 0 ||
    notaProblemas > 10 ||
    notaProblemas < 0
  ) {
    console.log(
      "ERROR: Algunas de las notas ingresadas esta fuera del rango de 0 a 10"
    );
  } else {
    let notaFinal: number =
      notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4;
    console.log(
      "NOTA PROMEDIO FINAL DE " + nombreAlumno + ":" + "$" + notaFinal
    );
  }
  nombreAlumno = prompt("Ingrese el nombre del alumno");
}

//comentario de prueba para github
