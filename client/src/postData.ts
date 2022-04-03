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
    name: "Antonio Filho",
    username: "acfilho",
    content: "This is working great so far!",
    reposts: "",
    quote: true,
    isFollowing: "self",
    following: [
      { username: "jkalita" },
      { username: "Camron80" },
      { username: "jramal" },
      { username: "hohoho" },
    ],
    followers: 6,
    joined: "January 7, 2021",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/349.jpg",
    name: "Naomi",
    username: "Myrna_Botsford97",
    content: faker.lorem.paragraph(),
    reposts: "",
    quote: false,
    isFollowing: false,
    following: [{ username: "Alivia60" }, { username: "Clementine96" }],
    followers: 4,
    joined: "January 3, 2019",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/428.jpg",
    name: "Florian",
    username: "Alivia60",
    content: faker.lorem.paragraph(),
    reposts: "",
    quote: false,
    isFollowing: false,
    following: [
      { username: "Myrna_Botsford97" },
      { username: "Clementine96" },
      { username: "OranKuvalis" },
    ],
    followers: 3,
    joined: "December 4, 2020",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/894.jpg",
    name: "Noemi",
    username: "OranKuvalis",
    content: faker.lorem.paragraph(),
    reposts: "",
    quote: false,
    isFollowing: false,
    following: [
      { username: "Myrna_Botsford97" },
      { username: "Bradley_Cummings" },
      { username: "OranKuvalis" },
    ],
    followers: 3,
    joined: "September 3, 2019",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg",
    name: "Deontae",
    username: "Clementine96",
    content: faker.lorem.paragraph(),
    reposts: "",
    quote: false,
    isFollowing: false,
    following: [
      { username: "Myrna_Botsford97" },
      { username: "Bradley_Cummings" },
      { username: "Camron80" },
    ],
    followers: 3,
    joined: "October 13, 2019",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1043.jpg",
    name: "Bradley",
    username: "Bradley_Cummings",
    content: faker.lorem.paragraph(),
    reposts: "",
    quote: false,
    isFollowing: false,
    following: [
      { username: "Myrna_Botsford97" },
      { username: "Alysson81" },
      { username: "Camron80" },
    ],
    followers: 3,
    joined: "February 26, 2021",
  },
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
];
