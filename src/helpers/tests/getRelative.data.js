export const relativeModes = [
  {
    description: 'G lydian -> Eb major',
    input: [{ root: "G", mode: "lydian" }, { root: "Eb", mode: "major" }],
    output: { root: "Ab", signature: 'b3' }
  },
  {
    description: 'F major -> Bb major',
    input: [{ root: "F", mode: "major" }, { root: "Bb", mode: "major" }],
    output: { root: "Bb", signature: "b2" }
  },
  {
    description: 'G minor -> Eb major',
    input: [{ root: "G", mode: "minor" }, { root: "Eb", mode: "major" }],
    output: { root: "C", signature: "b3" }
  },
  {
    description: 'D dorian -> D major',
    input: [{ root: "D", mode: "dorian" }, { root: "D", mode: "major" }],
    output: { root: "E", signature: "#2" }
  },
  {
    description: 'G major -> G minor',
    input: [{ root: "G", mode: "major" }, { root: "G", mode: "minor" }],
    output: { root: "Bb", signature: "b2" }
  }
];