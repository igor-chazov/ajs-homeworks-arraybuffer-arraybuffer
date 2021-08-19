import ArrayBufferConverter from '../arraybufferconverter';
import getBuffer from '../getbuffer';

test('должна загружать данные в буфер', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('должна возвращать строку из буфера', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
