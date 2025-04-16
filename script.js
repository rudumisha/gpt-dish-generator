async function generateRecipe() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.textContent = "Генерація...";

  const res = await fetch("/api/gpt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        { role: "user", content: `Придумай простий український рецепт з інгредієнтом "${input}". Додай назву, інгредієнти та спосіб приготування.` }
      ]
    })
  });

  const data = await res.json();
  output.textContent = data.choices?.[0]?.message?.content || "Виникла помилка 😥";
}
