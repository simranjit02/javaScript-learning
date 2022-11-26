const students = [
    {
      name: "Simranjit Singh",
      classes: "bca",
      id: 1
    },
    {
      name: "Manjot Singh",
      classes: "bca12",
      id: 2
    },
    {
      name: "joshan Singh",
      classes: "bca",
      id: 3
    }
  ];
  const [{ name }, { classes: yoyo }] = students;
  console.log(name);
  console.log(yoyo);
  