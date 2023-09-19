import { FrameworkEnum, VALID_FRAMEWORKS } from '../types/framework';

export const ensureIsValidFramework = (value: string | undefined): FrameworkEnum | null => {
    if (typeof value !== 'undefined' && VALID_FRAMEWORKS.includes(value)) {
        return value as FrameworkEnum;
    }

    return null;
};
