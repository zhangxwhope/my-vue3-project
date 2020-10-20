import { createDecorator } from 'vue-class-component';

export const Log = createDecorator((options, key) => {
  const originalMethod = options.methods[key];

  options.methods[key] = function wrapperMethod(...args: any[]) {
    // console.log(`Invoked: ${key}(`, ...args, ')');

    originalMethod.apply(this, args);
  };
});
