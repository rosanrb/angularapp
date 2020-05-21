export interface Adres {
    straatnaam: string;
    huisnummer: number;
    huisnummerToevoeging?: string;
    plaatsnaam: string;
    postcode: string;
    contactpersonen: Contactpersoon[];
}

interface Contactpersoon {
    voornaam: string;
    achternaam: string;
    leeftijd?: number;
    telefoonnummer: string;
    partner?: Contactpersoon;
}
