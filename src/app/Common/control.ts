import { Item } from './dropdown';
import { MaskText } from './mask';
export class CustomControl{
  public id?:string;
  public label?:string;
  public name?:string;
  public type?:string;
  public placeholder?:string;
  public value?:any;
  public class?:string;
  public required?:string='';
  public minLengthValidation?:number;

  public order?:number;
  public items?:Item[];
  public radiItems?:Item[];
  public maskText?:MaskText;
  public pattern?:string;
}
