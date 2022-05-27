import {inject, injectable} from '@theia/core/shared/inversify';
import {Endpoint, FrontendApplication, FrontendApplicationContribution} from '@theia/core/lib/browser';
import {FrontendApplicationStateService} from "@theia/core/lib/browser/frontend-application-state";

@injectable()
export class HealthCheckContribution implements FrontendApplicationContribution {

    constructor(
        @inject(FrontendApplicationStateService)
        protected readonly stateService: FrontendApplicationStateService
    ) {
    }

    async onStart(app: FrontendApplication): Promise<void> {
        console.log('########################');
        const endpoint = new Endpoint();
        this.stateService.reachedState('ready').then(
            () => setInterval(() => {
                console.log('****************');
                fetch(`${endpoint.getRestUrl()}/api/keep-alive`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }, 5000)
        );
    }
}
