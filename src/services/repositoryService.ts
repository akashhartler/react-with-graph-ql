import instance from "./axiosInstance"

export const getRepositories = async (searchQuery: string) => {
  const response = await instance.post("", {
    query: `
        {
            search(query: "${searchQuery}", type: REPOSITORY, first: 50) {
              repositoryCount
              pageInfo {
                endCursor
                startCursor
              }
              edges {
                node {
                  ... on Repository {
                    name
                    stargazerCount
                    forkCount
                    url
                  }
                }
              }
            }
          }
        `,
  });
  const { data } = response;
  const { search } = data.data;
  return search;
};

