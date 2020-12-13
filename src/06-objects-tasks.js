/* ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, heigh) {
  return {
    getArea() {
      return width * heigh;
    },

    get width() {
      return width;
    },

    get height() {
      return heigh;
    },
  };
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = Object.create(proto);
  return Object.assign(obj, JSON.parse(json));
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class SelectorBuilder {
  constructor(element) {
    this.selector = element;
  }

  createID(id) {
    this.selector = this.selector.concat(`#${id}`);
  }

  createClass(newClass) {
    this.selector = this.selector.concat(`.${newClass}`);
  }

  createAttr(attr) {
    this.selector = this.selector.concat(`[${attr}]`);
  }

  createPseudoClass(pClass) {
    this.selector = this.selector.concat(`:${pClass}`);
  }

  createPseudoElement(pElement) {
    this.selector = this.selector.concat(`::${pElement}`);
  }

  stringify() {
    const result = this.selector;
    this.selector = '';
    return result;
  }
}

const cssSelectorBuilder = {
  elems: [],

  element(value) {
    this.elem = new SelectorBuilder(value);
    this.elems.push(this.elem);
    return this;
  },

  id(value) {
    // this.ID = value;
    this.elem.createID(value);
    return this;
  },

  class(value) {
    this.elem.createClass(value);
    return this;
  },

  attr(value) {
    this.elem.createAttr(value);
    return this;
  },

  pseudoClass(value) {
    this.elem.createPseudoClass(value);
    return this;
  },

  pseudoElement(value) {
    this.elem.createPseudoElement(value);
    return this;
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },

  stringify() {
    return this.elem.stringify();
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
