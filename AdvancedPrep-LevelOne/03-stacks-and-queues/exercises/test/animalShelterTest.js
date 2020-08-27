const assert = require('chai').assert;
const AnimalShelter = require('../03-animal-shelter');

describe('Animal Shelter', function(){
  const newShelter = new AnimalShelter();

  it('Enqueue cat should add node to cats queue', function(){
    newShelter.enqueueAny('cat');
    const value = newShelter.cats.head.data;
    assert.equal(value, 'cat');
  });

  it('Enqueue dog should add node to dogs queue', function(){
    newShelter.enqueueAny('dog');
    const value = newShelter.dogs.head.data;
    assert.equal(value, 'dog')
  });

  it('Dequeue cat should remove a node from the cats queue', function(){
    const newShelterHome = new AnimalShelter();
    newShelterHome.enqueueAny('cat');
    newShelterHome.enqueueAny('cat');
    newShelterHome.enqueueAny('dog');
    newShelterHome.dequeueCat();
    assert.equal(newShelter.cats.size(), 1);
  });

  it('Dequeue dog should remove a node from the dogs queue', function(){
    const newShelterHome = new AnimalShelter();
    newShelterHome.enqueueAny('dog');
    newShelterHome.enqueueAny('dog');
    newShelterHome.enqueueAny('cat');
    newShelterHome.dequeueDog();
    assert.equal(newShelter.dogs.size(), 1);
  });
})