const questionItemInput = (inputName, id, value, labelText) => {
  const div = document.createElement("div");
  const inputRadio = document.createElement("input");
  const label = document.createElement("label");

  div.className = "input-question";

  inputRadio.id = id;
  inputRadio.type = "radio";
  inputRadio.name = inputName;
  inputRadio.value = value;

  label.setAttribute("for", id);
  label.textContent = labelText
    .split("-")
    .join(" ")
    .replace(/^\w/, (c) => c.toUpperCase());

  div.append(inputRadio);
  div.append(label);

  return div;
};

export { questionItemInput };
