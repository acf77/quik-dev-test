import faker from "@faker-js/faker";

const avatar1 =
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/776.jpg";
const avatar2 =
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/827.jpg";
const avatar3 =
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg";
const avatar4 =
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg";

export const postData = [
  {
    id: 1,
    avatar: "",
    name: "Antonio Filho",
    username: "acfilho",
    post: "This is working great so far!",
    date: "2022-02-05",
    comments: [
      {
        id: 1,
        content: "Pizza?!",
        date: "2022-02-06",
        username: "@KrazyKarls",
      },
    ],
  },
  {
    id: 2,
    avatar: "",
    name: "Antonio Filho",
    username: "acfilho",
    post: "This is working!",
    date: "2022-02-05",
    comments: [
      { id: 1, content: "I can see!", date: "2022-02-06", username: "@julian" },
      {
        id: 2,
        content: "Keep rocking!",
        date: "2022-02-07",
        username: "@elMachon",
      },
    ],
  },
  {
    id: 2,
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/584.jpg",
    name: "Shanon",
    username: "Camron80",
    post: faker.lorem.paragraph(),
    date: "2019-11-25",
    comments: [
      {
        id: 1,
        content: faker.lorem.sentence(),
        date: "2022-02-06",
        username: "@julian",
      },
    ],
  },
];
// {
//   avatar:
//     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/584.jpg",
//   name: "Shanon",
//   username: "Camron80",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: false,
//   following: [
//     { username: "Myrna_Botsford97" },
//     { username: "Alysson81" },
//     { username: "acfilho" },
//   ],
//   followers: 4,
//   joined: "March 3, 2019",
// },
// {
//   avatar:
//     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1079.jpg",
//   name: "Clemens",
//   username: "Alysson81",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: false,
//   following: [
//     { username: "Myrna_Botsford97" },
//     { username: "Abdul93" },
//     { username: "Camron80" },
//   ],
//   followers: 4,
//   joined: "April 23, 2021",
// },
// {
//   avatar:
//     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg",
//   name: "Abdul",
//   username: "Abdul93",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: false,
//   following: [{ username: "Myrna_Botsford97" }, { username: "jramal" }],
//   followers: 4,
//   joined: "May 1, 2019",
// },
// {
//   avatar: avatar1,
//   name: "Jey Ramalingan",
//   username: "jramal",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: true,
//   following: [
//     { username: "Myrna_Botsford97" },
//     { username: "jkalita" },
//     { username: "Camron80" },
//   ],
//   followers: 3,
//   joined: "January 3, 2019",
// },
// {
//   avatar: avatar2,
//   name: "Jay Kalita",
//   username: "jkalita",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: true,
//   following: [{ username: "Myrna_Botsford97" }],
//   followers: 6,
//   joined: "August 3, 2019",
// },
// {
//   avatar: avatar3,
//   name: "Bryan Bukowski",
//   username: "bbuk",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: true,
//   following: 3,
//   followers: [
//     { username: "hohoho" },
//     { username: "jkalita" },
//     { username: "Camron80" },
//     { username: "jramal" },
//   ],
//   joined: "August 2, 2021",
// },
// {
//   avatar: avatar4,
//   name: "Mary Christmas",
//   username: "hohoho",
//   content: [{ post: faker.lorem.paragraph() }],
//   reposts: "",
//   quote: false,
//   isFollowing: true,
//   following: [
//     { username: "jkalita" },
//     { username: "Camron80" },
//     { username: "jramal" },
//   ],
//   followers: 4,
//   joined: "January 31, 2021",
// },
