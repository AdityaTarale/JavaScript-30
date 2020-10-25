const inputVariables = document.querySelectorAll(".container input");

function ChangeValues() {
  // console.log(this.name, this.value);
  // console.log(this.dataset)

  const suffix = this.dataset.sizing || ""; /*|| OR*/
  console.log(this.name, this.value, suffix);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}` + suffix
  );
}

inputVariables.forEach((variable) =>
  variable.addEventListener("change", ChangeValues)
);
inputVariables.forEach((variable) =>
  variable.addEventListener("mousemove", ChangeValues)
);
