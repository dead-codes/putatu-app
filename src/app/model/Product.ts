/**
 * Created by anhvudhcn on 4/6/17.
 */
export class Product {
  public _id: number;
  public _source: number;
  public _image: string;
  public _oldPrice: number;
  public _newPrice: number;
  public _description: string;
  public _cashBackRate: number;

  constructor(id: number, source: number, image: string, oldPrice: number, newPrice: number, description: string, cashBackRate: number) {
    this._id = id;
    this._source = source;
    this._image = image;
    this._oldPrice = oldPrice;
    this._newPrice = newPrice;
    this._description = description;
    this._cashBackRate = cashBackRate;
  }

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set source(source: number) {
    this._source = source
  }

  get source(): number {
    return this._source
  }

  set image(image: string) {
    this._image = image;
  }

  get image(): string {
    return this._image;
  }

  set oldPrice(oldPrice: number) {
    this._oldPrice = oldPrice;
  }

  get oldPrice(): number {
    return this._oldPrice;
  }

  set newPrice(newPrice: number) {
    this._newPrice = newPrice;
  }

  get newPrice(): number {
    return this._newPrice;
  }

  set description(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  set cashBackRate(cashBackRate: number) {
    this._cashBackRate = cashBackRate;
  }

  get cashBackRate(): number {
    return this._cashBackRate;
  }
}
