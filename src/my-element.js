import {LitElement, css, html} from 'lit';
import litLogo from './assets/lit.svg';

const myStyles = css`
  :host {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .main-div {
    border: 1px solid black;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.lit:hover {
    filter: drop-shadow(0 0 2em #325cffaa);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static styles = [myStyles];
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},

      border: {type: Boolean},
    };
  }

  constructor() {
    super();
    this.docsHint = 'Click on the Vite and Lit logos to learn more';
    this.count = 0;
    this.border = false;
  }

  render() {
    return html`
      <div class=${this.border ? 'main-div' : ''}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://lit.dev" target="_blank">
            <img src=${litLogo} class="logo lit" alt="Lit logo" />
          </a>
        </div>
        <slot></slot>
        <div class="card">
          <button @click=${this._onClick} part="button">
            count is ${this.count}
          </button>
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
      </div>
    `;
  }

  _onClick() {
    this.count++;
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `;
  }
}

window.customElements.define('my-element', MyElement);
