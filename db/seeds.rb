# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create!([
  {
  username: "BigJohn97",
  password: "1234"
},
{
  username: "Boi",
  password: "5678"
}
])

music = Music.create!([
  {
    title: "One More Time",
    img_url: "https://res.cloudinary.com/dvysqqdqe/image/upload/v1579037015/220px-Daft_Punk_-_Discovery_uv58x9.jpg",
    song: "https://www.youtube.com/watch?v=n6RTF4OPzf8",
    user: users[0],
    text_link: ""
  },{
    title: "Poké & Chill",
    img_url: "https://res.cloudinary.com/dvysqqdqe/image/upload/v1579037796/maxresdefault_yc8xik.jpg",
    song: "https://www.youtube.com/watch?v=2DVpys50LVE",
    user: users[0],
    text_link: ""
  },
  title: "1 A.M Study Session",
  img_url: "https://res.cloudinary.com/dvysqqdqe/image/upload/v1579038957/maxresdefault_hpmer8.jpg",
  song: "https://www.youtube.com/watch?v=lTRiuFIWV54", 
  user: users[1],
  text_link: ""
])

comments = Comment.create!([
  {
  
  music: music[0],
  user: users[0],
  post: "Keep listening one more time while you do any type of work."
  },
  {
    
    music: music[1],
    user: users[0],
    post: "Pokemon nostalgia and good beats."
  },{
    
    music: music[2],
    user: users[1],
    post:"How I stay focused on coding and/or reviewing work."
  }
])
