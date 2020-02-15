/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepository
// ====================================================

export interface GetRepository_repository {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
}

export interface GetRepository {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GetRepository_repository | null;
}

export interface GetRepositoryVariables {
  owner: string;
  name: string;
}
