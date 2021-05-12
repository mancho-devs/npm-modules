export function validateId(userId: string) {
    if (!userId) {
      throw new Error('The ID must be specified to perform this operation.');
    }
  }
  
  export function validateForPositiveNumber(param: number) {
    if (param < 0) {
      throw new Error('The parameter value must be greater than zero.');
    }
  
    if (typeof param !== 'number') {
      throw new Error('The value must be a valid number.');
    }
  }
  
  export function validateEnvironmentVariables(envVariables: string[]) {
    const { env } = process;
  
    envVariables.forEach((envVariable: string) => {
      if (!env[envVariable]) {
        throw new Error(`${envVariable} environment variable must be provided.`);
      }
    });
  }
  