import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects($page: Int, $perPage: Int) {
    projects(page: $page, perPage: $perPage) {
      totalCount
      projectsList {
        id
        name
        status
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`

export { GET_PROJECTS, GET_PROJECT }