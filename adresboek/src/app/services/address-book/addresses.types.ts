export interface Address {
    straatnaam: string;
    huisnummer: number;
    huisnummerToevoeging?: string;
    plaatsnaam: string;
    postcode: string;
    contactpersoon: Contactperson;
}

export interface Contactperson {
    voornaam: string;
    achternaam: string;
    leeftijd?: number;
    telefoonnummer: string;
    partner?: Contactperson;
}
