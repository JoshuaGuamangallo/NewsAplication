
export interface ApiGNews {
    totalArticles: number,
    articles: articles[]
}

export interface articles {
    title:string,
    description: string,
    publishedAt: string,
    image: string,
}