// Gatsby defines a global called ___loader
// to prevent its method calls from creating console errors it requires overriding

// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
  hovering: jest.fn(),
};
