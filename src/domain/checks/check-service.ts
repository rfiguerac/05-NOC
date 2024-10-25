interface CheckServiceUsecase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ( error: string) => void;

export class CheckService implements CheckServiceUsecase {

    constructor(
        private readonly successCallback : SuccessCallback,
        private readonly errorCallback : ErrorCallback
    ){

    }

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`error on check service ${url}`);
      }
      this.successCallback();
      return true;
    } catch (error) {
        this.errorCallback(`${error}`);
        return false;
    }

  }
}
