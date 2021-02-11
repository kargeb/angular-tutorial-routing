export interface Hero {
  id: number;
  name: String;
}

export class FormHero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}
