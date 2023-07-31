/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      category {
        id
        title
        movies {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      seasons {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          movieSeasonsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryMoviesId
      __typename
    }
  }
`;
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      category {
        id
        title
        movies {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      seasons {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          movieSeasonsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryMoviesId
      __typename
    }
  }
`;
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      category {
        id
        title
        movies {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      seasons {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          movieSeasonsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryMoviesId
      __typename
    }
  }
`;
export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
      id
      name
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        seasons {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryMoviesId
        __typename
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          seasonEpisodesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieSeasonsId
      __typename
    }
  }
`;
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
      id
      name
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        seasons {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryMoviesId
        __typename
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          seasonEpisodesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieSeasonsId
      __typename
    }
  }
`;
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
      id
      name
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        seasons {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryMoviesId
        __typename
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          seasonEpisodesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieSeasonsId
      __typename
    }
  }
`;
export const createEpisode = /* GraphQL */ `
  mutation CreateEpisode(
    $input: CreateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    createEpisode(input: $input, condition: $condition) {
      id
      title
      poster
      duration
      plot
      video
      season {
        id
        name
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
          __typename
        }
        episodes {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieSeasonsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      seasonEpisodesId
      __typename
    }
  }
`;
export const updateEpisode = /* GraphQL */ `
  mutation UpdateEpisode(
    $input: UpdateEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    updateEpisode(input: $input, condition: $condition) {
      id
      title
      poster
      duration
      plot
      video
      season {
        id
        name
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
          __typename
        }
        episodes {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieSeasonsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      seasonEpisodesId
      __typename
    }
  }
`;
export const deleteEpisode = /* GraphQL */ `
  mutation DeleteEpisode(
    $input: DeleteEpisodeInput!
    $condition: ModelEpisodeConditionInput
  ) {
    deleteEpisode(input: $input, condition: $condition) {
      id
      title
      poster
      duration
      plot
      video
      season {
        id
        name
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryMoviesId
          __typename
        }
        episodes {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieSeasonsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      seasonEpisodesId
      __typename
    }
  }
`;
