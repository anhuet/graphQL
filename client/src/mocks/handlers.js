import { graphql } from "msw";

export const handlers = [
  graphql.query("getAllBooks", (req, res, ctx) => {
    return res(
      ctx.data({
        books: [
          {
            name: "ansh",
            author: {
              name: "test",
              age: 130,
            },
            genre: "test",
          },
        ],
      })
    );
  }),
];
