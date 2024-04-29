const { gql } = require("@apollo/client");

const ADD_PROJECT = gql`
  mutation AddProject($name: String!, $description: String!, $status: String!) {
    addProject(name: $name, description: $description, status: $status) {
      id
      name
      description
      status
    }
  }
`

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
      status
    }
  }
`

export { ADD_PROJECT, DELETE_PROJECT }