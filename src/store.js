import Vue  from 'vue';
import Vuex from 'vuex';

import allThreads  from './mocks/data';

Vue.use(Vuex);

/**
 * Состояние.
 *
 * @type {Object}
 */
export const stateData = {
    currentUser: {
        name: 'vasya'
    },
    threadsList:        [],
    currentThread:      {},
    threadLoading:      false,
    messageSendLoading: false,
    message:            {},
};

/**
 * Геттеры.
 *
 * @type {Object}
 */
export const getters = {
    /**
     * Возвращает вложенный массив регионов.
     *
     * @param  {Array<Object>} items
     * @return {Array<Object>}
     */
    messagesList({ currentThread }) {
        return currentThread.parts;
    },
};

/**
 * Действия.
 *
 * @type {Object}
 */
export const actions = {
    /**
     * Выполняет загрузку начальных данных.
     *
     * @param {Function} commit
     * @param {Function} dispatch
     * @param {number}   threadId - id открытого треда (диалога)
     */
    loadInitialState({ commit, dispatch }, threadId = 1) {
        commit('setThreadList', {
            threadsList: allThreads,
        });

        dispatch('setCurrentThread', threadId);
    },

    /**
     * Выполняет установку текущего треда.
     *
     * @param {Object}   state
     * @param {Function} commit
     * @param {number}   threadId - id открытого треда (диалога)
     */
    setCurrentThread({ state, commit }, threadId) {
        const currentThread = state.threadsList.find(thread => +thread.id === +threadId);

        commit('setThreadLoading', true);

        commit('setCurrentThread', {
            currentThread
        });

        setTimeout(() => {
            commit('setThreadLoading', false);
        }, 1500)
    },

    /**
     * Выполняет установку нового сообщения.
     *
     * @param {Function} commit
     * @param {Object}   message
     */
    setNewMessage({ commit }, { message }) {
        commit('setNewMessage', {
            message,
        });
    },
};

/**
 * Мутации.
 *
 * @type {Object}
 */
export const mutations = {
    /**
     * Выполняет установку всего списка тредов.
     *
     * @param {Object} state
     * @param {Object} threadsList
     */
    setThreadList(state, { threadsList }) {
        state.threadsList = threadsList;
    },

    /**
     * Выполняет установку текущего треда.
     *
     * @param {Object} state
     * @param {Object} currentThread
     */
    setCurrentThread(state, { currentThread }) {
        state.currentThread = currentThread;
    },

    /**
     * Выполняет установку нового сообщения.
     *
     * @param {Object} state
     * @param {number} message
     */
    setNewMessage(state, { message }) {
        state.currentThread.parts = [...state.currentThread.parts, message];
    },

    /**
     * Выполняет установку состояния загрузки треда.
     *
     * @param {Object} state
     * @param {boolean} value
     */
    setThreadLoading(state, value) {
        console.log(value)
        state.threadLoading = value;
    },

    /**
     * Выполняет установку состояния загрузки отправки сообщения.
     *
     * @param {Object} state
     * @param {boolean} value
     */
    setMessageSendLoading(state, value) {
        state.messageSendLoading = value;
    },
};

export default () => new Vuex.Store({
    state: stateData,
    getters,
    actions,
    mutations,
});
