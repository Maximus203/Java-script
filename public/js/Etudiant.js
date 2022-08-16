class Etudiant {
    constructor(numEtudiant, nomEtudiant, prenomEtudiant, sectionEtudiant, projetEtudiant) {
        this.numEtudiant = numEtudiant;
        this.nomEtudiant = nomEtudiant;
        this.prenomEtudiant = prenomEtudiant;
        this.sectionEtudiant = sectionEtudiant;
        this.projetEtudiant = projetEtudiant;
    }

    getNumEtudiant() {
        return this.numEtudiant;
    }
    getNomEtudiant() {
        return this.nomEtudiant;
    }
    getPrenomEtudiant() {
        return this.prenomEtudiant;
    }
    getSectionEtudiant() {
        return this.sectionEtudiant;
    }
    getProjetEtudiant() {
        return this.projetEtudiant;
    }
}