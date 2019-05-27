/* tslint:disable */

declare var Object: any;
export interface MessageInterface {
  "content": string;
  "senderId": string;
  "senderName": string;
  "sentOn": Date;
  "id"?: any;
}

export class Message implements MessageInterface {
  "content": string;
  "senderId": string;
  "senderName": string;
  "sentOn": Date;
  "id": any;
  constructor(data?: MessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Message`.
   */
  public static getModelName() {
    return "Message";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Message for dynamic purposes.
  **/
  public static factory(data: MessageInterface): Message{
    return new Message(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Message',
      plural: 'messages',
      path: 'messages',
      idName: 'id',
      properties: {
        "content": {
          name: 'content',
          type: 'string'
        },
        "senderId": {
          name: 'senderId',
          type: 'string'
        },
        "senderName": {
          name: 'senderName',
          type: 'string'
        },
        "sentOn": {
          name: 'sentOn',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
