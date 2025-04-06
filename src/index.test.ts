import { describe, it, expect } from '@jest/globals';
import { exec } from 'child_process';

describe('Sample Test', () => {
  it('should pass this test', () => {
    expect(true).toBe(true);
  });
});

describe('End-to-End Test', () => {
  it('should run the app, print output, and exit', (done) => {
    const greeting = 'Hello, CounTUI!'
    exec('npx ts-node ./src/index.ts', (error, stdout, stderr) => {
      if (error) {
        done(new Error(`Execution failed: ${error.message}`));
        return;
      }
      expect(stderr).toBe('');
      expect(stdout).toContain(greeting);
      done();
    });
  });
});