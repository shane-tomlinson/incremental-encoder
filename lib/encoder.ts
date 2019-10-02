export default class FrontEncoder {
  encode(dictionary: string[]) {
    return dictionary
      .map(entry => entry.trim())
      .filter(entry => !!entry.length)
      .sort()
      .reduce(
        (
          result: string[],
          entry: string,
          index: number,
          dictionary: string[]
        ) => {
          if (index === 0) {
            result.push(`0 ${entry}`);
          } else {
            const prev: string = dictionary[index - 1];
            const commonPrefix = this.findCommonPrefix(prev, entry);
            result.push(
              `${commonPrefix.length} ${entry.slice(commonPrefix.length)}`
            );
          }
          return result;
        },
        []
      );
  }

  private findCommonPrefix(first: string, second: string): string {
    let prefix = "";
    let max = Math.min(first.length, second.length);
    for (let i = 0; i < max; ++i) {
      if (first.charAt(i) === second.charAt(i)) {
        prefix += first.charAt(i);
      } else {
        return prefix;
      }
    }
    return prefix;
  }
}
