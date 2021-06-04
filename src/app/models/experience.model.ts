export class Experience {
  constructor(
    public title: string,
    public organization: string,
    public highlights: string[],
    public links: { title: string; link: string }[]
  ) {}
}
