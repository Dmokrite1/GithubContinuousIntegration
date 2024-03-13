import { it, expect } from 'vitest';
import { getUnixTime } from '../src';

// Little test unit
it('gets unix timestamp', () => {
    expect(getUnixTime()).toStrictEqual();
});