class TypeText {
  constructor(words, element) {
    this.words = words;
    this.element = element;
    this.index = 0;
    this.text = "";
    this.isDelete = false;
    this.type();
  }

  type() {
    const wordIndex = this.index % this.words.length;
    const word = this.words[wordIndex];
    let typeSpeed = this.isDelete ? 100 : 200;

    if (this.isDelete) {
      this.text = word.substring(0, this.text.length - 1);
    } else {
      this.text = word.substring(0, this.text.length + 1);
    }

    this.element.innerText = this.text;

    if (!this.isDelete && this.text === word) {
      this.isDelete = true;
      typeSpeed = 2000;
    } else if (this.isDelete && this.text === "") {
      this.isDelete = false;
      this.index += 1;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
