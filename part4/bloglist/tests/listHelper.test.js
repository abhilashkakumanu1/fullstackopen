const { dummy, totalLikes, favoriteBlog } = require("../utils/list_helper.js");

const listWithOneBlog = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
];
const listWithManyBlogs = [
  {
    _id: "5fd9549030a24e0a18b67eed",
    author: "Abhilash Kakumanu",
    title: "Guide to JavaScript Closures",
    url: "https://stackabuse.com/guide-to-javascript-closures/",
    likes: 6,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
];

test("dummy returns one", () => {
  expect(dummy()).toBe(1);
});

describe("total likes", () => {
  test("of empty list is zero", () => {
    expect(totalLikes([])).toBe(0);
  });

  test("of list with one blog element is equal to the likes of that", () => {
    expect(totalLikes(listWithOneBlog)).toBe(5);
  });

  test("of a bigger list is calculated right", () => {
    expect(totalLikes(listWithManyBlogs)).toBe(11);
  });
});

describe("favorite blog", () => {
  test("of list with one blog element is that element", () => {
    expect(favoriteBlog(listWithOneBlog)).toEqual(listWithOneBlog[0]);
  });
  test("of a bigger list is the blog with most number of likes", () => {
    expect(favoriteBlog(listWithManyBlogs)).toEqual(listWithManyBlogs[1]);
  });
});
