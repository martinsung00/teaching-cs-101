/*
  The first function you will write will be called generateSampleView. The input for this function will always be an array of objects. generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. The format of this input array of objects is described below:

  const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "visits": 1
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      },
      "visits": 0
    }
  ];

  Your function should examine each user object, and add to the array return value for this function one of the following:

  A. If the value of the id property is odd, add the user's email to the return array

  B. If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array

  C. A greeting needs to be appended to the end of the output array. Based on the visited field, we need to customize a greeting for the customer.

  Case 1 - Unknown customer ( Name is not present in customerData ):
  Greeting would be: 'Welcome! Is this your first time?'

  Case 2 - Customer who has visited only once ( 'visits' value is 1 ):
  Greeting would be: 'Welcome back, <name>! We're glad you liked us the first time!'

  Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):
  Greeting would be: 'Welcome back, Carol! So glad to see you again!'

  Do not hardcode to the exact sample data. This is a BAD IDEA:

  if (firstName === 'Joe') {
    // do something
  }

  Thus, if our input was the users array listed above, our output would be:

  const output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771", "Welcome! Is this your first time?"];
*/