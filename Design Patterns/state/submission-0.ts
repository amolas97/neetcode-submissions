class State {
    /**
     * @param {Document} doc
     */
    handleRequest(doc: Document): void {
        throw new Error("Method 'handleRequest()' must be implemented.");
    }
}

class Document {

    private approved: boolean;

    constructor(private state: Draft = new Draft()) {
        this.approved = false;
    }

    /**
     * @return {State}
     */
    getState(): State {
        return this.state;
    }

    /**
     * @param {State} state
     */
    setState(state: State): void {
        this.state = state;
    }

    publish(): void {
        this.state.handleRequest(this);
    }

    /**
     * @param {boolean} approved
     */
    setApproval(approved: boolean): void {
        this.approved = approved;
    }

    /**
     * @return {boolean}
     */
    isApproved(): boolean {
        return this.approved;
    }
}

class Draft extends State {
    /**
     * @param {Document} doc
     * @return {void}
     */
    handleRequest(doc: Document): void {
        doc.setState(new Review());      
    }  

}

class Review extends State {
    /**
     * @param {Document} doc
     * @return {void}
     */
    handleRequest(doc: Document): void {
        if(doc.isApproved()) doc.setState(new Published());
        else doc.setState(new Draft());        
    }
}

class Published extends State {
    /**
     * @param {Document} doc
     * @return {void}
     */
    handleRequest(doc: Document): void {
        return;
    }
}
