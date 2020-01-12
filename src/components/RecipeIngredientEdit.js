import React from "react";

export default function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        onChange={e => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onChange={e => handleChange({ amount: e.target.value })}
      />
      <button
        onClick={() => handleIngredientDelete(ingredient.id)}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}
