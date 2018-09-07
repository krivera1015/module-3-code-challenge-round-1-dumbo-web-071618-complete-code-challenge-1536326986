class Comment {
  constructor(commentData) {
    this.id = commentData.id
    this.text = commentData.content
  }

  render() {
    const li = document.createElement('li')
    li.setAttribute('data-id', this.id)
    li.innerHTML = `
      ${this.text} <button> x </button>
    `
    return li
  }
}
