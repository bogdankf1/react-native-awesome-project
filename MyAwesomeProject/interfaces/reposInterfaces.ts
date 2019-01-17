export interface Repo {
    html_url: string,
    name: string,
    id: number
}

export interface RRepos {
    reposList: Repo[]
}