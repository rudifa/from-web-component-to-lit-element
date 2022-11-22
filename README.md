# From Web Component to Lit Element

> created with
> `npm create vite@latest from-web-component-to-lit-element`

Based on code from the codelab [From Web Component to Lit Element](https://codelabs.developers.google.com/codelabs/the-lit-path).

The codelab shows how the LitElement abstracts away the details of the HTMLElement use, making the resulting web component code more compact and more expressive.

I kept the 3 web component versions for easy comparison:

- `rating-htmlelement` corresponds to the checkpoint in the step 7 of the codelab
- `rating-htmlelement2` corresponds to the checkpoint in the step 8 of the codelab
- `rating-litelement` corresponds to the checkpoint in the step 9 of the codelab

In the original codelab code the complcated interactions between the thumbs buttons and the rating provide an unnecessary distraction, so I simplified handling of these items.
