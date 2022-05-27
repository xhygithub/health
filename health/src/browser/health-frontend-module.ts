/**
 * Generated using theia-extension-generator
 */

import {ContainerModule} from '@theia/core/shared/inversify';
import {FrontendApplicationContribution} from "@theia/core/lib/browser";
import {HealthCheckContribution} from "./health-contribution";

export default new ContainerModule(bind => {
    bind(FrontendApplicationContribution).to(HealthCheckContribution);
});
