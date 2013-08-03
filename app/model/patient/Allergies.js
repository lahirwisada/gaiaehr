/**
 * GaiaEHR (Electronic Health Records)
 * Copyright (C) 2013 Certun, inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('App.model.patient.Allergies', {
	extend: 'Ext.data.Model',
	table: {
		name:'patient_allergies',
		comment:'Patient Allergies'
	},
	fields: [
		{
			name: 'id',
			type: 'int',
			comment: 'Patient Allergies ID'
		},
		{
			name: 'eid',
			type: 'int'
		},
		{
			name: 'pid',
			type: 'int'
		},
		{
			name: 'allergy_type',
			type: 'string'
		},
		{
			name: 'allergy_code',
			type: 'string',
			comment: 'RxNORM RXCUI code if food allergy'
		},
		{
			name: 'location',
			type: 'string'
		},
		{
			name: 'allergy',
			type: 'string'
		},
		{
			name: 'begin_date',
			type: 'date',
			dateFormat: 'Y-m-d H:i:s'
		},
		{
			name: 'end_date',
			type: 'date',
			dateFormat: 'Y-m-d H:i:s'
		},
		{
			name: 'reaction',
			type: 'string'
		},
		{
			name: 'location',
			type: 'string'
		},
		{
			name: 'severity',
			type: 'string'
		},
        {
	        name: 'active',
	        type: 'bool',
	        store: false,
	        convert: function(v, record){
				return record.data.end_date == '';
	        }
        },
		{
			name: 'created_uid',
			type: 'int'
		},
		{
			name: 'updated_uid',
			type: 'int'
		},
		{
			name: 'create_date',
			type: 'date',
			dateFormat: 'Y-m-d H:i:s'},
		{
			name: 'update_date',
			type: 'date',
			dateFormat: 'Y-m-d H:i:s',
			defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
		}
	],
	proxy : {
		type: 'direct',
		api : {
			read  : Medical.getPatientAllergies,
			create: Medical.addPatientAllergies,
			update: Medical.updatePatientAllergies
		}
	}
});