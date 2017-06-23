
import { Thing } from './index';

export class Mocks {
    public static thing(): Thing {
        const thing = new Thing();
        thing.name = `Lukka`;
        thing.age = 2.5;
        thing.description = `Lukka is a happy Siberian Husky.`;
        thing.purchaseDate = new Date();
        thing.isInUse = true;

        return thing;
    }
}