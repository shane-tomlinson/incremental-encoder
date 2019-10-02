export default class FrontDecoder {
  decode(encoded: string[]): string[] {
    return encoded.reduce((result: string[], current: string, index: number) => {
      const [numSharedStr, suffix] = current.split(" ");
      const numShared = parseInt(numSharedStr, 10);
      if (isNaN(numShared)) {
        throw new Error(`Invalid line: ${current}`);
      }
      if (numShared === 0) {
        return [...result, suffix];
      } else {
        const prev = result[index - 1];
        return [...result, `${prev.slice(0, numShared)}${suffix}`];
      }
    }, []);
  }
}
