type Idea = {
  name: string;
  description?: string;
  link?: string;
  tags?: Tag[];
}

type Tag = {
  name: string;
}

type IdeaListDB = {
  addIdea: (idea: Idea) => boolean;
  getIdeas: (tags?:Tag[]) => Idea[];
}