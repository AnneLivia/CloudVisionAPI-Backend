import { BadRequest, NotFound } from './CustomErrors.js';

/*
    Factory pattern provides an interface/abstract class for creating objects.
    The creating is by calling the factory function and specifying the type of class we want
    inside the factory method, we use new operator to create objects
    You can create different objects by using the same interface/abstract class.
    Objects returned by a factory method are often referred to as products.

    limitation: subclasses may return different types of products only if these products
        have a common base class or interface.

    Application: The Factory Method separates product construction code from the code that actually
        uses the product. Therefore it’s easier to extend the product construction code
        independently from the rest of the code.

        For example, to add a new product type to the app, you’ll only need to create a
        new creator subclass and override the factory method in it.

*/

const ErrorFactory = (type, message, additionalInformation) => {
  switch (type) {
    case 'BadRequest': return new BadRequest(message, additionalInformation);
    case 'NotFound': return new NotFound(message, additionalInformation);
    default: {
      throw new Error('Invalid Error Option');
    }
  }
};

export default ErrorFactory;
