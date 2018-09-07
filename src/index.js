document.addEventListener('DOMContentLoaded', function() {

  //finding my elements
  const image = document.querySelector('#image')
  const name = document.querySelector('#name')
  const likes = document.querySelector('#likes')
  const commentUl = document.querySelector('#comments')
  const likeButton = document.querySelector('#like_button')
  const commentForm = document.querySelector('#comment_form')

  //getting pic and its content on screen
  PicAdapter.getPic()
    .then(pic => {
      console.log(pic)
      image.src = pic.url
      name.innerText = pic.name
      likes.innerText = pic.like_count
      //getting listed comments
      pic.comments.forEach(comment => {
        //create li element
        const li = document.createElement('li')
        //create deletebutton
        li.innerText = comment.content
        const deletebutton = document.createElement('button')
        deletebutton.innerText = 'x'
        li.append(deletebutton)
        commentUl.append(li)
      })
    })


  //making like button work and posting to backend
  likeButton.addEventListener('click', (e) => {
    //console.log(e.target.parentNode)
    const likesId = e.target.parentNode.querySelector('#likes')
    const likeCount = parseInt(likesId.innerText) + 1
      PicAdapter.updateLikes({
        image_id: 78,
        like_count: likeCount
      })
        .then(pic => {
          likesId.innerText = likeCount
          // console.log(pic)
        })
  })

  //get comments and updating backend
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentInput = document.querySelector('#comment_input')
        PicAdapter.updateComment({
          image_id: 78,
          content: commentInput.value
        })
        .then(comment => {
          const li = document.createElement('li')
          li.innerText = commentInput.value
          const deletebutton = document.createElement('button')
          deletebutton.innerText = 'x'
          li.append(deletebutton)
          commentUl.append(li)
          commentInput.value = ""
        })
  })
})
