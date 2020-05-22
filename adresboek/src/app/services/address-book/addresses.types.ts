export interface Address {
    straatnaam: string;
    huisnummer: number;
    huisnummerToevoeging?: string;
    plaatsnaam: string;
    postcode: string;
    contactpersonen: Contactperson[];
}

interface Contactperson {
    voornaam: string;
    achternaam: string;
    leeftijd?: number;
    telefoonnummer: string;
    partner?: Contactperson;
}