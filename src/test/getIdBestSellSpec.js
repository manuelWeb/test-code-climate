import { getIdBestsellCollection } from "../helper/cmsHelper"
import { data } from '../../src/Object'
import assert from 'assert'

describe('getIdBestsellCollection', function () {
  it('shoul return ID', function () {
    assert.match(getIdBestsellCollection(data), /[0-9]{7}/)
  })
})