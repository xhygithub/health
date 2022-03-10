/**
 * Generated using theia-extension-generator
 */

import {ContainerModule} from '@theia/core/shared/inversify';
import {FrontendApplicationContribution} from "@theia/core/lib/browser";
import {HealthCheckContribution} from "./heath-contribution";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(FrontendApplicationContribution).to(HealthCheckContribution);
});
