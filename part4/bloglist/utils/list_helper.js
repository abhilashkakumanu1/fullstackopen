const dummy = (blogs) => 1;

const totalLikes = (blogs) => {
  return blogs ? blogs.reduce((total, curr) => total + curr.likes, 0) : 0;
};

const favoriteBlog = (blogs) => {
  return blogs.sort((a, b) => a.likes - b.likes)[blogs.length - 1];
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
