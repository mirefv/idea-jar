class TempDB implements IdeaListDB{
  static ideas: Idea[] = [];

  constructor(){}

  addIdea(idea: Idea) {
    TempDB.ideas.push(idea);
    return true;
  }

  getIdeas(tags?:Tag[]){
    if(tags){
      return TempDB.ideas.filter((idea) => {
        if (idea.tags){
          return tags.some((tag) => idea.tags?.includes(tag))
        } else {
          return false;
        }
      });
    }
    else{
      return TempDB.ideas;
    }
  }

  deleteIdea(idea:Idea) {
    let index = TempDB.ideas.findIndex((element) => element.name===idea.name);
    if(index !== -1) {
      let removed = TempDB.ideas.splice(index, 1);
      alert("Succesfully removed idea "+removed[0].name);
    }
    return true;
  }

}