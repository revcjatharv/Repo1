/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1beta1CertificateSigningRequestCondition } from './v1beta1CertificateSigningRequestCondition';

export class V1beta1CertificateSigningRequestStatus {
    /**
    * If request was approved, the controller will place the issued certificate here.
    */
    'certificate'?: string;
    /**
    * Conditions applied to the request, such as approval or denial.
    */
    'conditions'?: Array<V1beta1CertificateSigningRequestCondition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "string"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1beta1CertificateSigningRequestCondition>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CertificateSigningRequestStatus.attributeTypeMap;
    }
}

