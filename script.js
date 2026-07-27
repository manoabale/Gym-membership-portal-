const plans = [
  { id: 1, name: "Basic Plan", price: "$20/month", features: "Access to gym equipment" },
  { id: 2, name: "Standard Plan", price: "$40/month", features: "Gym + group classes" },
  { id: 3, name: "Premium Plan", price: "$60/month", features: "All access + personal trainer" }
];

function displayPlans(list) {
  const container = document.getElementById("plans");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "plan";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: ${p.price}</p>
      <p>Features: ${p.features}</p>
    `;
    container.appendChild(div);
  });
}

function filterPlans() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = plans.filter(p => p.name.toLowerCase().includes(query));
  displayPlans(filtered);
}

function submitSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const membership = document.getElementById("membership").value;

  alert(`Signup successful!\nName: ${name}\nEmail: ${email}\nPlan: ${membership}`);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("membership").value = "";
}

displayPlans(plans);
