const imageId = 78 //Enter your assigned imageId here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

const likeURL = `https://randopic.herokuapp.com/likes/`

const commentsURL = `https://randopic.herokuapp.com/comments/`

class PicAdapter{
  static getPic(){
    return fetch(imageURL)
    .then(res => res.json())
  }
  static updateLikes(data){
    return fetch(likeURL, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
  static updateComment(data){
    return fetch(commentsURL, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
  static deleteComment(id){
    return fetch(`${commentsURL}/${id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
  }
}
