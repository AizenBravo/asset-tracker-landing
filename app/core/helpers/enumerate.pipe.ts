export const EnumeratePipe = {
  transform: (items: string[]) => {
    const numberOfTerms = items.length;
    if (numberOfTerms <= 1) {
      return items.join('');
    }
    const editedLastTerm = `and ${items[numberOfTerms - 1]}`;
    items[numberOfTerms - 1] = editedLastTerm;
    return items.join(', ');
  },
};
