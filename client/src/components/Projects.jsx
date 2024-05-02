import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects() {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: { page, perPage: 2 },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  function handlePage(value) {
    setPage((prevPage) => value + prevPage);
  }

  return (
    <>
      {data?.projects?.projectsList.length > 0 ? (
        <div>
          <div className="row mt-4">
            {data?.projects?.projectsList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {page > 1 && (
              <button
                type="button"
                className="btn btn-dark m-2"
                onClick={() => handlePage(-1)}
              >
                {`< back`}
              </button>
            )}
            {data?.projects?.pageInfo?.hasNextPage && (
              <button
                type="button"
                className="btn btn-dark m-2"
                onClick={() => handlePage(1)}
              >
                {`next >`}
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
