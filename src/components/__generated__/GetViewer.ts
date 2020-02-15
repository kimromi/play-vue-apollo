/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewer
// ====================================================

export interface GetViewer_viewer {
  __typename: "User";
  id: string;
  /**
   * The username used to login.
   */
  login: string;
}

export interface GetViewer {
  /**
   * The currently authenticated user.
   */
  viewer: GetViewer_viewer;
}
