const dummy = (blogs) => 1;

const totalLikes = (blogs) => {
  return blogs ? blogs.reduce((total, curr) => total + curr.likes, 0) : 0;
};

module.exports = {
  dummy,
  totalLikes,
};
