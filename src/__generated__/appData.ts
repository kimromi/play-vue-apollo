/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: appData
// ====================================================

export interface appData_viewer {
  __typename: "User";
  id: string;
  /**
   * The username used to login.
   */
  login: string;
}

export interface appData_repository {
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

export interface appData {
  /**
   * The currently authenticated user.
   */
  viewer: appData_viewer;
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: appData_repository | null;
}

export interface appDataVariables {
  owner: string;
  name: string;
}
