class RatingHtmlelement extends HTMLElement {
  constructor() {
    super();
    this._rating = 0;
    this._vote = null;
    this._boundOnUpClick = this._onUpClick.bind(this);
    this._boundOnDownClick = this._onDownClick.bind(this);
  }

  static get observedAttributes() {
    return ['rating', 'vote'];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    console.log(`${attributeName} changed from ${oldValue} to ${newValue}`);
    if (attributeName === 'rating') {
      const newRating = Number(newValue);
      this.rating = newRating;
    } else if (attributeName === 'vote') {
      this.vote = newValue;
    }
  }

  set rating(value) {
    this._rating = value;
    if (!this.shadowRoot) {
      return;
    }

    const ratingEl = this.shadowRoot.querySelector('.rating');
    if (ratingEl) {
      ratingEl.innerText = this._rating;
    }
  }

  get rating() {
    return this._rating;
  }

  set vote(newValue) {
    const oldValue = this._vote;
    if (newValue === oldValue) {
      return;
    }
    this._vote = newValue;
    this.setAttribute('vote', newValue);
  }

  get vote() {
    return this._vote;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    const templateContent = document.getElementById(
      'rating-htmlelement-template'
    ).content;
    const clonedContent = templateContent.cloneNode(true);
    shadowRoot.appendChild(clonedContent);

    this.shadowRoot.querySelector('.rating').innerText = this.rating;

    this.shadowRoot
      .querySelector('.thumb_up')
      .addEventListener('click', this._boundOnUpClick);
    this.shadowRoot
      .querySelector('.thumb_down')
      .addEventListener('click', this._boundOnDownClick);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector('.thumb_up')
      .removeEventListener('click', this._boundOnUpClick);
    this.shadowRoot
      .querySelector('.thumb_down')
      .removeEventListener('click', this._boundOnDownClick);
  }

  _onUpClick() {
    this.vote = 'up';
    this.rating += 1;
  }

  _onDownClick() {
    this.vote = 'down';
    this.rating -= 1;
  }
}

customElements.define('rating-htmlelement', RatingHtmlelement);
