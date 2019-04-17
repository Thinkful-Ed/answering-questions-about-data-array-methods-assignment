describe(`Array methods`, () => {
  describe(`arrayIncludes2(array, thingToFind)`, () => {
    it(`returns false by default`, () => {
      const actual = arrayIncludes2([])
      const expected = false
      expect(actual).to.eql(expected)
    })

    it(`returns true if item is first item in array`, () => {
      const actual = arrayIncludes2([123], 123)
      const expected = true
      expect(actual).to.eql(expected)
    })

    it(`returns false if item isn't in array`, () => {
      const actual = arrayIncludes2([123, 231, 234, 345], 999)
      const expected = false
      expect(actual).to.eql(expected)
    })

    it(`returns false if item is in array`, () => {
      const actual = arrayIncludes2([123, 231, 234, 999, 345], 999)
      const expected = true
      expect(actual).to.eql(expected)
    })
  })

  describe(`head(array, howManyItems)`, () => {
    it(`returns an empty array by default`, () => {
      const actual = head([])
      const expected = []
      expect(actual).to.eql(expected)
    })

    it(`returns the same array if no position supplied`, () => {
      const actual = head([123, 456, 789])
      const expected = [123, 456, 789]
      expect(actual).to.eql(expected)
    })

    it(`returns a sub array of the first item if firstXItems is 1`, () => {
      const actual = head([123, 456, 789], 1)
      const expected = [123]
      expect(actual).to.eql(expected)
    })

    it(`returns a sub array of the first X items given X`, () => {
      const actual = head([123, 456, 789, 101112, 131415], 4)
      const expected = [123, 456, 789, 101112]
      expect(actual).to.eql(expected)
    })
  })

  describe(`squareItems(array)`, () => {
    it(`returns empty array by default`, () => {
      expect(squareItems([])).to.eql([])
    })

    it(`returns array with square of only item in array`, () => {
      expect(squareItems([1])).to.eql([1])
      expect(squareItems([2])).to.eql([4])
      expect(squareItems([3])).to.eql([9])
      expect(squareItems([9])).to.eql([81])
      expect(squareItems([321])).to.eql([103041])
    })

    it(`returns array with square of each item in array`, () => {
      const actual = squareItems([1, 2, 3, 0, 4, 5, 99])
      const expected = [1, 4, 9, 0, 16, 25, 9801]
      expect(actual).to.eql(expected)
    })
  })

  describe(`arrayContainsOddNumbers(array)`, () => {
    it(`returns false by default`, () => {
      expect(arrayContainsOddNumbers([])).to.eql(false)
    })

    it(`returns true when the array contains an odd number`, () => {
      expect(arrayContainsOddNumbers([1])).to.eql(true)
    })

    it(`returns false when the array contains only even numbers`, () => {
      expect(arrayContainsOddNumbers([2, 2, 4, 100, 18])).to.eql(false)
    })

    it(`returns true when the array contains any odd numbers`, () => {
      expect(arrayContainsOddNumbers([2, 2, 4, 100, 7, 18])).to.eql(true)
    })
  })

  describe(`compact(array)`, () => {
    it(`returns empty array by default`, () => {
      expect(compact([])).to.eql([])
    })

    it(`keeps values in array when truthy`, () => {
      const actual = compact([true, 1, '1', [], {}])
      const expected = [true, 1, '1', [], {}]
      expect(actual).to.eql(expected)
    })

    it(`removes values in array when falsey`, () => {
      const actual = compact([false, 0, '', undefined, null])
      const expected = []
      expect(actual).to.eql(expected)
    })

    it(`compacts the array down to truthy values`, () => {
      const actual = compact([false, true, 1, 0, '', '1', undefined, null])
      const expected = [true, 1, '1']
      expect(actual).to.eql(expected)
    })
  })

  describe(`drop(array, numberOfItemsToDrop)`, () => {
    it(`returns an empty array by default`, () => {
      const actual = drop([])
      const expected = []
      expect(actual).to.eql(expected)
    })

    it(`returns the same array if no position supplied`, () => {
      const actual = drop([123, 456, 789])
      const expected = [123, 456, 789]
      expect(actual).to.eql(expected)
    })

    it(`returns a sub array of the last item if last X items is 1`, () => {
      const actual = drop([123, 456, 789], 1)
      const expected = [456, 789]
      expect(actual).to.eql(expected)
    })

    it(`returns a sub array of the last X items given X`, () => {
      const actual = drop([123, 456, 789, 101112, 131415], 3)
      const expected = [101112, 131415]
      expect(actual).to.eql(expected)
    })
  })

  describe(`findFirstEvenNumber(array)`, () => {
    it(`returns undefined by default`, () => {
      expect(findFirstEvenNumber([])).to.eql(undefined)
    })

    it(`returns the odd number in array`, () => {
      expect(findFirstEvenNumber([4])).to.eql(4)
    })

    it(`returns undefined when the array contains only even numbers`, () => {
      expect(findFirstEvenNumber([1, 1, 5, 101, 17])).to.eql(undefined)
    })

    it(`returns the first odd number when the array contains a mix`, () => {
      expect(findFirstEvenNumber([3, 3, 4, 99, 7, 18, 1])).to.eql(4)
    })
  })

  describe(`tail(array, howManyItems)`, () => {
    it(`returns an empty array by default`, () => {
      const actual = tail([])
      const expected = []
      expect(actual).to.eql(expected)
    })

    it(`returns the same array if no position supplied`, () => {
      const actual = tail([123, 456, 789])
      const expected = [123, 456, 789]
      expect(actual).to.eql(expected)
    })

    it(`returns a sub array of the last item if last X items is 1`, () => {
      const actual = tail([123, 456, 789], 1)
      const expected = [789]
      expect(actual).to.eql(expected)
    })

    it(`returns a sub array of the last X items given X`, () => {
      const actual = tail([123, 456, 789, 101112, 131415], 4)
      const expected = [456, 789, 101112, 131415]
      expect(actual).to.eql(expected)
    })
  })

  describe(`findMatchingIndex2(array, itemToFind)`, () => {
    it(`returns -1 by default`, () => {
      expect(findMatchingIndex2([])).to.eql(-1)
    })

    it(`returns 0 when item is at first position`, () => {
      expect(findMatchingIndex2(['foo'], 'foo')).to.eql(0)
      expect(findMatchingIndex2([9], 9)).to.eql(0)
      expect(findMatchingIndex2([321], 321)).to.eql(0)
    })

    it(`returns 2 when item is at third position`, () => {
      expect(findMatchingIndex2([0, 1, 'foo'], 'foo')).to.eql(2)
      expect(findMatchingIndex2([11, 10, 9], 9)).to.eql(2)
      expect(findMatchingIndex2([123, 456, 321, 890, 567], 321)).to.eql(2)
    })
  })

  describe(`multiplyItemsBy(array, multiplier)`, () => {
    it(`returns empty array by default`, () => {
      expect(multiplyItemsBy([])).to.eql([])
    })

    it(`returns array with multiple of only item in array`, () => {
      expect(multiplyItemsBy([1], 2)).to.eql([2])
      expect(multiplyItemsBy([2], 3)).to.eql([6])
      expect(multiplyItemsBy([3], 10)).to.eql([30])
      expect(multiplyItemsBy([9], 2)).to.eql([18])
      expect(multiplyItemsBy([321], 12)).to.eql([3852])
    })

    it(`returns array with square of each item in array`, () => {
      const actual = multiplyItemsBy([1, 2, 3, 0, 4, 5, 99], 3)
      const expected = [3, 6, 9, 0, 12, 15, 297]
      expect(actual).to.eql(expected)
    })
  })

  describe(`sortWordsByLength(array)`, () => {
    it(`returns an empty array by default`, () => {
      const actual = sortWordsByLength([])
      const expected = []
      expect(actual).to.eql(expected)
    })

    it(`returns the same array items are same length`, () => {
      const actual = sortWordsByLength(['a', 'b', 'c', 'd'])
      const expected = ['a', 'b', 'c', 'd']
      expect(actual).to.eql(expected)
    })

    it(`swaps items if largest comes first`, () => {
      const actual = sortWordsByLength(['aa', 'a'])
      const expected = ['a', 'aa']
      expect(actual).to.eql(expected)
    })

    it(`moves long item in the middle to the end`, () => {
      const actual = sortWordsByLength(['a', 'b', 'zz', 'c', 'd'])
      const expected = ['a', 'b', 'c', 'd', 'zz']
      expect(actual).to.eql(expected)
    })

    it(`sorts words by length`, () => {
      const actual = sortWordsByLength(['ccc', 'a', 'dddd', 'bb', 'eeeee'])
      const expected = ['a', 'bb', 'ccc', 'dddd', 'eeeee']
      expect(actual).to.eql(expected)
    })
  })

  describe(`all2(array, thingToMatch)`, () => {
    it(`returns false by default`, () => {
      expect(all2([])).to.eql(true)
    })

    it(`returns true when item is in the array`, () => {
      expect(all2(['foo'], 'foo')).to.eql(true)
      expect(all2([9], 9)).to.eql(true)
      expect(all2([321], 321)).to.eql(true)
    })

    it(`returns false when some items aren't the same as item to check`, () => {
      expect(all2([0, 1, 'foo'], 'foo')).to.eql(false)
      expect(all2([11, 10, 9], 9)).to.eql(false)
      expect(all2([123, 456, 321], 321)).to.eql(false)
    })

    it(`returns true when all items are the same as item to check`, () => {
      expect(all2(['foo', 'foo', 'foo'], 'foo')).to.eql(true)
      expect(all2([9, 9, 9], 9)).to.eql(true)
      expect(all2([321, 321, 321], 321)).to.eql(true)
    })
  })

  describe(`omit(array, itemToOmit)`, () => {
    it(`returns empty array by default`, () => {
      expect(omit([])).to.eql([])
    })

    it(`returns same array when no item to omit supplied`, () => {
      expect(omit(['foo', 'bar', 'herp', 'derp'])).to.eql(
        ['foo', 'bar', 'herp', 'derp']
      )
      expect(omit([9, 10, 1, 23, 54])).to.eql(
        [9, 10, 1, 23, 54]
      )
    })

    it(`removes items matching the item to omit`, () => {
      expect(omit(['foo', 'bar', 'herp', 'derp', 'herp'], 'herp')).to.eql(
        ['foo', 'bar', 'derp']
      )
      expect(omit([9, 10, 1, 4, 23, 4, 4, 54], 4)).to.eql(
        [9, 10, 1, 23, 54]
      )
    })
  })

  describe(`getStringOfDivs2(array)`, () => {
    it(`returns '' by default with an empty array`, () => {
      expect(getStringOfDivs2([])).to.eql('')
    })

    it(`returns '<div>' around supplied item`, () => {
      expect(getStringOfDivs2(['foo'])).to.eql('<div>foo</div>')
    })

    it(`returns '<div>' around multiple supplied items`, () => {
      expect(
        getStringOfDivs2(['foo', 'bar', 'herp', 'derp'])
      ).to.eql(
        '<div>foo</div>' +
        '<div>bar</div>' +
        '<div>herp</div>' +
        '<div>derp</div>'
      )
    })
  })

  describe(`getArrayTotal2(array)`, () => {
    it(`returns 0 by default with an empty array`, () => {
      expect(getArrayTotal2([])).to.eql(0)
    })

    it(`if only 1 item, returns it`, () => {
      expect(getArrayTotal2([1])).to.eql(1)
      expect(getArrayTotal2([6])).to.eql(6)
      expect(getArrayTotal2([8])).to.eql(8)
      expect(getArrayTotal2([800])).to.eql(800)
      expect(getArrayTotal2([123])).to.eql(123)
    })

    it(`returns total of two items`, () => {
      expect(getArrayTotal2([1, 1])).to.eql(2)
      expect(getArrayTotal2([4, 5])).to.eql(9)
      expect(getArrayTotal2([10000, 10000])).to.eql(20000)
    })

    it(`returns total of multiple items`, () => {
      expect(getArrayTotal2([1, 1, 2, 3, 5, 6])).to.eql(18)
      expect(getArrayTotal2([10, 10, 10, 10])).to.eql(40)
    })
  })

  describe(`pick(arrayOfObjects, property)`, () => {
    it(`returns an empty array by default`, () => {
      expect(pick([])).to.eql([])
    })

    it(`returns an array of nulls if no property supplied`, () => {
      const actual = pick(
        [{ foo: 'foo' }, { bar: 'bar' }, { herp: 'herp' }],
        'not-the-same-as-any-keys'
      )
      const expected = [null, null, null]
      expect(actual).to.eql(expected)
    })

    it(`returns an array of values of property supplied`, () => {
      const actual1 = pick(
        [{ foo: 'foo1' }, { foo: 'foo2' }, { foo: 'foo3' }],
        'foo'
      )
      const expected1 = ['foo1', 'foo2', 'foo3']
      expect(actual1).to.eql(expected1)

      const actual2 = pick(
        [{ something: 'foo2' }, { something: 'foo2' }, { something: 'foo3' }],
        'something'
      )
      const expected2 = ['foo2', 'foo2', 'foo3']
      expect(actual2).to.eql(expected2)
    })

    it(`places nulls when property doesn't exist`, () => {
      const actual = pick(
        [{ foo: 'foo1' }, { bar: 'bar' }, { foo: 'foo3' }],
        'foo'
      )
      const expected = ['foo1', null, 'foo3']
      expect(actual).to.eql(expected)
    })
  })

  describe(`getShoppingListTotalPrice2(shoppingListArray)`, () => {
    it(`returns 0 by default with an empty array`, () => {
      expect(getShoppingListTotalPrice2([])).to.eql(0)
    })

    it(`returns item price when only one item`, () => {
      const items = [{ price: 999 }]
      expect(getShoppingListTotalPrice2(items)).to.eql(999)
    })

    it(`returns total of all item's prices`, () => {
      const items = [
        { price: 999 },
        { price: 123 },
        { price: 321 }
      ]
      expect(getShoppingListTotalPrice2(items)).to.eql(1443)
    })
  })

  describe(`getStringOfElements(array, element)`, () => {
    it(`returns '' by default with an empty array`, () => {
      expect(getStringOfElements([])).to.eql('')
    })

    it(`returns '<element>' around supplied item`, () => {
      const actual = getStringOfElements(['foo'], 'element')
      const expected = '<element>foo</element>'
      expect(actual).to.eql(expected)
    })

    it(`returns '<div>' around multiple supplied items`, () => {
      const actual = getStringOfElements(
        ['foo', 'bar', 'herp', 'derp'],
        'li'
      )
      const expected = '<li>foo</li><li>bar</li><li>herp</li><li>derp</li>'
      expect(actual).to.eql(expected)
    })
  })

  describe(`getMeanAverage2(array)`, () => {
    it(`returns 0 by default`, () => {
      expect(getMeanAverage2([])).to.eql(0)
    })

    it(`returns item when an array of 1 item`, () => {
      expect(getMeanAverage2([1])).to.eql(1)
      expect(getMeanAverage2([3])).to.eql(3)
      expect(getMeanAverage2([99])).to.eql(99)
      expect(getMeanAverage2([104])).to.eql(104)
    })

    it(`returns mean average when an array of multiple items`, () => {
      expect(getMeanAverage2([0, 1])).to.eql(0.5)
      expect(getMeanAverage2([1, 1, 1, 1])).to.eql(1)
      expect(getMeanAverage2([3, 4, 5, 6, 7])).to.eql(5)
      expect(getMeanAverage2([150, 0, 200, 100, 50])).to.eql(100)
    })
  })

  describe(`countItemsMatching(array, thingToCountBy)`, () => {
    it(`returns 0 by default`, () => {
      expect(countItemsMatching([])).to.eql(0)
    })

    it(`returns 0 when no thin to count by supplied`, () => {
      expect(
        countItemsMatching([1, 2, 3, 4, 5])
      ).to.eql(0)
    })

    it(`returns 1 when thing to count by is the same as array item`, () => {
      expect(
        countItemsMatching(['test-value'], 'test-value')
      ).to.eql(1)
    })

    it(`returns count of things matching thing to count by`, () => {
      expect(
        countItemsMatching([9, 1, 9, 9, 2, 3, 4, 9], 9)
      ).to.eql(4)
    })
  })

  describe(`areAllItemsUnique(array)`, () => {
    it(`returns true by default`, () => {
      expect(areAllItemsUnique([])).to.eql(true)
    })

    it(`returns true when all items are unique`, () => {
      expect(
        areAllItemsUnique([1, 2, 3, 4, 5])
      ).to.eql(true)
    })

    it(`returns false when any items have duplicates`, () => {
      expect(
        areAllItemsUnique([1, 2, 2, 3, 4, 5])
      ).to.eql(false)
    })
  })
})
