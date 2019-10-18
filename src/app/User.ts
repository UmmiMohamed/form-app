export class User {
    constructor(
        public name: string,
        public email: string,
        public tel: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) { }
}
