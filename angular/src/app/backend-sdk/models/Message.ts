/* tslint:disable */

declare var Object: any;
export interface MessageInterface {
  "content": string;
  "senderName": string;
  "datetime": Date;
  "id"?: any;
}

export class Message implements MessageInterface {
  "content": string;
  "senderName": string;
  "datetime": Date;
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
        "senderName": {
          name: 'senderName',
          type: 'string'
        },
        "datetime": {
          name: 'datetime',
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
