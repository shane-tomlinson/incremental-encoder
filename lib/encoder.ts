
export default class FrontEncoder {
  encode(dictionary: string[]) {
    return dictionary.reduce((result: string[], curr: string, index: number) => {
      if (index === 0) {
        result.push(`0 ${curr}`);
      } else {
        const prev: string = dictionary[index - 1];
        const commonPrefix = this.findCommonPrefix(prev, curr);
        result.push(`${commonPrefix.length} ${curr.slice(commonPrefix.length)}`);
      }
      return result;
    }, []);
  }

  private findCommonPrefix(first: string, second: string): string {
    let prefix = '';
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
