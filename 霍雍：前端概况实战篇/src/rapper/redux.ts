/* md5: 7ac6cb89c036bb7578e4a2a635a2a9a8 */
/* Rap仓库id: 275829 */
/* Rapper版本: 1.1.6-beta.0 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=275829
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'GET/todo/list': ['GET/todo/list_REQUEST', 'GET/todo/list_SUCCESS', 'GET/todo/list_FAILURE'],

  'DELETE/todo': ['DELETE/todo_REQUEST', 'DELETE/todo_SUCCESS', 'DELETE/todo_FAILURE'],

  'PUT/todo': ['PUT/todo_REQUEST', 'PUT/todo_SUCCESS', 'PUT/todo_FAILURE'],

  'POST/todo/fav': ['POST/todo/fav_REQUEST', 'POST/todo/fav_SUCCESS', 'POST/todo/fav_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/todo/list': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/list']['Req']
      response: IResponseTypes['GET/todo/list']
    }
  >

  'DELETE/todo': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['DELETE/todo']['Req']
      response: IResponseTypes['DELETE/todo']
    }
  >

  'PUT/todo': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['PUT/todo']['Req']
      response: IResponseTypes['PUT/todo']
    }
  >

  'POST/todo/fav': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/todo/fav']['Req']
      response: IResponseTypes['POST/todo/fav']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857324
   */
  'GET/todo/list': function useData(
    filter?: {request?: IModels['GET/todo/list']['Req']} | {(storeData: IRapperStore['GET/todo/list'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/list']['Req']
    type Item = IRapperStore['GET/todo/list'][0]
    type Res = IResponseTypes['GET/todo/list']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/list', filter)
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857330
   */
  'DELETE/todo': function useData(
    filter?: {request?: IModels['DELETE/todo']['Req']} | {(storeData: IRapperStore['DELETE/todo'][0]): boolean}
  ) {
    type Req = IModels['DELETE/todo']['Req']
    type Item = IRapperStore['DELETE/todo'][0]
    type Res = IResponseTypes['DELETE/todo']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('DELETE/todo', filter)
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857334
   */
  'PUT/todo': function useData(
    filter?: {request?: IModels['PUT/todo']['Req']} | {(storeData: IRapperStore['PUT/todo'][0]): boolean}
  ) {
    type Req = IModels['PUT/todo']['Req']
    type Item = IRapperStore['PUT/todo'][0]
    type Res = IResponseTypes['PUT/todo']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('PUT/todo', filter)
  },

  /**
   * 接口名：收藏TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857696
   */
  'POST/todo/fav': function useData(
    filter?: {request?: IModels['POST/todo/fav']['Req']} | {(storeData: IRapperStore['POST/todo/fav'][0]): boolean}
  ) {
    type Req = IModels['POST/todo/fav']['Req']
    type Item = IRapperStore['POST/todo/fav'][0]
    type Res = IResponseTypes['POST/todo/fav']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/todo/fav', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857324
   */
  'GET/todo/list': function useData(
    requestParams?: IModels['GET/todo/list']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/list']['Req']>
  ) {
    type Req = IModels['GET/todo/list']['Req']
    type Res = IResponseTypes['GET/todo/list']
    type IFetcher = typeof fetch['GET/todo/list']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/list',
      fetcher: fetch['GET/todo/list'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857330
   */
  'DELETE/todo': function useData(
    requestParams?: IModels['DELETE/todo']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['DELETE/todo']['Req']>
  ) {
    type Req = IModels['DELETE/todo']['Req']
    type Res = IResponseTypes['DELETE/todo']
    type IFetcher = typeof fetch['DELETE/todo']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'DELETE/todo',
      fetcher: fetch['DELETE/todo'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857334
   */
  'PUT/todo': function useData(
    requestParams?: IModels['PUT/todo']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['PUT/todo']['Req']>
  ) {
    type Req = IModels['PUT/todo']['Req']
    type Res = IResponseTypes['PUT/todo']
    type IFetcher = typeof fetch['PUT/todo']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'PUT/todo',
      fetcher: fetch['PUT/todo'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：收藏TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857696
   */
  'POST/todo/fav': function useData(
    requestParams?: IModels['POST/todo/fav']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/todo/fav']['Req']>
  ) {
    type Req = IModels['POST/todo/fav']['Req']
    type Res = IResponseTypes['POST/todo/fav']
    type IFetcher = typeof fetch['POST/todo/fav']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/todo/fav',
      fetcher: fetch['POST/todo/fav'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857324
   */
  'GET/todo/list': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/list']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/list']['Req']
        response?: IResponseTypes['GET/todo/list']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857330
   */
  'DELETE/todo': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/todo']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['DELETE/todo']['Req']
        response?: IResponseTypes['DELETE/todo']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857334
   */
  'PUT/todo': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/todo']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['PUT/todo']['Req']
        response?: IResponseTypes['PUT/todo']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：收藏TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857696
   */
  'POST/todo/fav': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/todo/fav']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/todo/fav']['Req']
        response?: IResponseTypes['POST/todo/fav']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857324
   */
  'GET/todo/list': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/list': undefined},
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857330
   */
  'DELETE/todo': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/todo': undefined},
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857334
   */
  'PUT/todo': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/todo': undefined},
    })
  },

  /**
   * 接口名：收藏TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275829&mod=436156&itf=1857696
   */
  'POST/todo/fav': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/todo/fav': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'GET/todo/list': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/todo/list']['Req']} | {(storeData: IRapperStore['GET/todo/list'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/list']['Req']
    type Res = IResponseTypes['GET/todo/list']
    type Item = IRapperStore['GET/todo/list'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/list', filter)
  },
  'DELETE/todo': (
    state: reduxLib.IState,
    filter?: {request?: IModels['DELETE/todo']['Req']} | {(storeData: IRapperStore['DELETE/todo'][0]): boolean}
  ) => {
    type Req = IModels['DELETE/todo']['Req']
    type Res = IResponseTypes['DELETE/todo']
    type Item = IRapperStore['DELETE/todo'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'DELETE/todo', filter)
  },
  'PUT/todo': (
    state: reduxLib.IState,
    filter?: {request?: IModels['PUT/todo']['Req']} | {(storeData: IRapperStore['PUT/todo'][0]): boolean}
  ) => {
    type Req = IModels['PUT/todo']['Req']
    type Res = IResponseTypes['PUT/todo']
    type Item = IRapperStore['PUT/todo'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'PUT/todo', filter)
  },
  'POST/todo/fav': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/todo/fav']['Req']} | {(storeData: IRapperStore['POST/todo/fav'][0]): boolean}
  ) => {
    type Req = IModels['POST/todo/fav']['Req']
    type Res = IResponseTypes['POST/todo/fav']
    type Item = IRapperStore['POST/todo/fav'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/todo/fav', filter)
  },
}

export const rapperDataSelector = {
  'GET/todo/list': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/list']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/list')
  },
  'DELETE/todo': (state: reduxLib.IState) => {
    type Res = IResponseTypes['DELETE/todo']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'DELETE/todo')
  },
  'PUT/todo': (state: reduxLib.IState) => {
    type Res = IResponseTypes['PUT/todo']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'PUT/todo')
  },
  'POST/todo/fav': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/todo/fav']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/todo/fav')
  },
}

export const rapperActions = RequestTypes || []
