/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onCreateMovie(filter: $filter) {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onUpdateMovie(filter: $filter) {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie($filter: ModelSubscriptionMovieFilterInput) {
    onDeleteMovie(filter: $filter) {
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
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason($filter: ModelSubscriptionSeasonFilterInput) {
    onCreateSeason(filter: $filter) {
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
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason($filter: ModelSubscriptionSeasonFilterInput) {
    onUpdateSeason(filter: $filter) {
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
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason($filter: ModelSubscriptionSeasonFilterInput) {
    onDeleteSeason(filter: $filter) {
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
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
    onCreateEpisode(filter: $filter) {
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
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
    onUpdateEpisode(filter: $filter) {
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
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
    onDeleteEpisode(filter: $filter) {
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
