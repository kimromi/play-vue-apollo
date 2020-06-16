/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAppData
// ====================================================

export interface GetAppData_viewer {
  __typename: "User";
  id: string;
  /**
   * The username used to login.
   */
  login: string;
}

export interface GetAppData_repository {
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

export interface GetAppData {
  /**
   * The currently authenticated user.
   */
  viewer: GetAppData_viewer;
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GetAppData_repository | null;
}

export interface GetAppDataVariables {
  owner: string;
  name: string;
}
