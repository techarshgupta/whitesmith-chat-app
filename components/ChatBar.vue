<template>
  <div class="chat-wrap" :class="$store.state?.sidebar?.open ? 'expanded' : 'collapsed'">
    <div class="members-btn-wrap" @click="onClickMembers">
      <svg width="18" height="18" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$store.state?.sidebar?.open ? 'iconExpand' : 'iconCollapse'">
        <path d="M0 18.5C0 8.28273 8.28273 0 18.5 0C28.7172 0 37 8.28273 37 18.5C37 28.7172 28.7172 37 18.5 37C8.28273 37 0 28.7172 0 18.5ZM2.775 18.5C2.775 27.1846 9.81532 34.225 18.5 34.225C27.1846 34.225 34.225 27.1846 34.225 18.5C34.225 9.81532 27.1846 2.775 18.5 2.775C9.81532 2.775 2.775 9.81532 2.775 18.5ZM14.7439 26.8811C14.202 26.3392 14.202 25.4608 14.7439 24.9189L21.1627 18.5L14.7439 12.0811C14.202 11.5393 14.202 10.6607 14.7439 10.1189C15.2858 9.57704 16.1642 9.57704 16.7061 10.1189L24.1061 17.5189C24.6479 18.0608 24.6479 18.9392 24.1061 19.4811L16.7061 26.8811C16.1642 27.4229 15.2858 27.4229 14.7439 26.8811Z" fill="#fff"/>
      </svg>
      <div class="btn">Members</div>
    </div>
    <div class="members-body">
      <template v-for="(role,i) in getUserRoles">
        <div :key="i" class="role-wrap">
          <div class="name-wrap">
            <div>{{role.name}}</div>
            <div class="count">{{ getUserByRole(role).length }}</div>
          </div>
          <template v-for="(user,idx) in getUserByRole(role)">
            <div :key="`${i}-${user.name}-${idx}`" class="profile-wrap" :class="getClass">
              <div class="body">
                <div class="img-wrap">
                  <img v-if="$store.state?.sidebar?.open" :src="require(`../assets/profileIcons/${user.name}.svg`)" />
                  <img v-else v-b-tooltip.hover :title="user.name" :src="require(`../assets/profileIcons/${user.name}.svg`)" />
                  <span
                    v-b-tooltip.hover
                    class="status-pin"
                    :class="[user.online ? 'online': 'offline', user.status.toLowerCase().replace(' ', '-')]"
                    :title="user.status"
                  ></span>
                </div>
                <div class="content" :class="getClass">
                  <div>{{user.name}}
                    <span class="location-pin">
                      <svg
                        v-if="user.location === 'home'"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="14px"
                        height="14px"
                      >
                        <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"/>
                      </svg>
                      <svg
                        v-if="user.location === 'office'"
                        fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="14px" height="14px" viewBox="0 0 495.545 495.545"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M364.374,207.697V25.508H156.687v100.57H0v343.717h156.687v0.241h338.858V207.69H364.374V207.697z M103.291,455.226
                            v-82.651H67.976v82.651H14.579V140.65h142.108v314.576H103.291z M480.968,455.464H296.352V308.503h-63.158v146.961h-61.937V126.078
                            v-85.99h178.536v182.188h131.175V455.464z M190.144,75.303h30.369v67.539h-30.369V75.303z M248.334,75.303h30.358v67.539h-30.358
                            V75.303z M304.308,75.303h30.371v67.539h-30.371V75.303z M190.144,179.022h30.369v74.828h-30.369V179.022z M248.334,179.022h30.358
                            v74.828h-30.358V179.022z M304.308,179.022h30.371v74.828h-30.371V179.022z M388.721,324.421h-30.359v-69.362h30.359V324.421z
                            M388.721,435.426h-30.359v-71.18h30.359V435.426z M452.478,324.421h-30.358v-69.362h30.358V324.421z M452.478,435.426h-30.358
                            v-71.18h30.358V435.426z M38.569,164.88h30.359v69.357H38.569V164.88z M38.569,274.058h30.359v71.179H38.569V274.058z
                            M102.329,164.88h30.358v69.357h-30.358V164.88z M102.329,274.058h30.358v71.179h-30.358V274.058z"/>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div class="dept">{{user.department}}</div>
                </div>
              </div>
              <div class="msg-icon" :class="$store.state?.sidebar?.open ? 'expanded' : 'collapsed'">
                <img data-v-5dde0f71="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNOC4wMDM1NiAwQzMuNTg2MSAtMS43NDU1N2UtMDYgMC4wMDM5NDIyMyAzLjU3OTggMS41NTk4OGUtMDUgNy45OTgyN0MtMC4wMDI1MzQwMyA5LjI4NjY0IDAuMzA3NTA3IDEwLjU1NjQgMC45MDM1MjcgMTEuNjk4NUMwLjk2MDQ0MiAxMS44MDUzIDEuMDEwMjQgMTEuOTEyIDEuMDY3MTYgMTIuMDExNkMxLjE5NDc3IDEyLjI1NzYgMS4yMjAzMyAxMi41NDM5IDEuMTM4MyAxMi44MDg2QzAuOTEwMDQ4IDEzLjQxNzYgMC43MTk5NjYgMTQuMDQwMyAwLjU2OTE1NyAxNC42NzNDMC41NjkxNTcgMTQuOTg2MSAwLjY2MTY0MiAxNS4xNzExIDAuOTk2MDEzIDE1LjE3MTFDMS42MDM2NiAxNS4wMzQ3IDIuMjAyMzggMTQuODYxMyAyLjc4ODgxIDE0LjY1MTZDMy4wNDM2MSAxNC41ODUxIDMuMzEzMDcgMTQuNjAyNiAzLjU1NzE1IDE0LjcwMTRDMy43Nzc2OSAxNC44MTUzIDMuOTc2ODkgMTQuOTc5IDQuMTk3NDMgMTUuMDc4Nkg0LjI2ODU4QzYuNzQ4OSAxNi4zODQ0IDkuNzMxNDUgMTYuMjk3MyAxMi4xMzEzIDE0Ljg0ODlDMTQuNTMxMiAxMy40MDA1IDE1Ljk5ODcgMTAuODAxOCAxNiA3Ljk5ODI3QzE1Ljk5NjEgMy41ODI1NyAxMi40MTgyIDAuMDAzOTIzMzIgOC4wMDM1NiAwWiIgZmlsbD0iIzIxOTY1MyIvPgo8L3N2Zz4K" alt="" class="">
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBar',
  data() {
    return {
      profile: {

      },
    }
  },
  computed: {
    getClass() {
      return this.$store.state?.sidebar?.open ? 'expanded' : 'collapsed';
    },
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUserRoles() {
      return this.$store.getters.getUserRoles;
    },
  },
  methods: {
    getUserByRole(role) {
      return this.getUsers.filter(user => user.role === role.name);
    },
    onClickMembers() {
      this.$store.commit('toggleSidebar');
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-wrap {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 56px;
  right: 0;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  margin: 0;
  outline: 0;
  border-left: 1px solid #f0f0f0;
  transition: width .15s ease-out;
  &.collapsed {
    width: 150px;
  }
  &.expanded {
    width: 300px;
  }
}
.members-btn-wrap {
  height: 50px;
  background: $blue-light;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-primary;
  cursor: pointer;
  &:hover {
    background: $blue-dark;
  }
  .btn {
    color: white;
  }
  .iconExpand {
    transform: rotate(0deg);
  }
  .iconCollapse {
    transform: rotate(180deg);
  }
}
.members-body {
  overflow-y: auto;
  height: 100vh;
  padding-bottom: 4rem;
}
.role-wrap {
  .name-wrap {
    display: flex;
    color: $text-secondary;
    font-size: $font-primary;
    padding: 12px;
    justify-content: center;
    align-items: center;
    .count {
      padding: 2px 7px;
      text-align: center;
      border-radius: 100%;
      background: $gray-dark;
      font-size: $font-tiny;
      margin-left: 8px;
      color: #fff;
    }
  }
  .profile-wrap {
    display: flex;
    align-items: center;
    position: relative;
    padding: 16px;
    justify-content: space-between;
    .body {
      display: flex;
      align-items: center;
      .content {
        position: relative;
        padding-left: 12px;
        .dept {
          text-transform: capitalize;
          color: $text-secondary;
          font-size: $font-secondary;
        }
        &.collapsed {
          display: none;
        }
        &.expanded {
          display: block;
        }
        .location-pin {
          z-index: 10;
          position: absolute;
          top: -4px;
          right: -20px;
        }
      }
      .img-wrap {
        position: relative;
        .status-pin {
          z-index: 10;
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: $text-secondary;
          top: -3px;
          right: -3px;
          border-radius: 100%;
          border: 1px solid $gray-dark;
          border: 2px solid #fff;
          &.offline {
            background-color: $text-secondary !important;
          }
          &.troubleshooting {
            background-color: orange;
          }
          &.in-meeting {
            background-color: red;
          }
        }
      }
    }
    .msg-icon {
      height: 45px;
      width: 45px;
      border-radius: 20%;
      border-width: 1px;
      border: 1px solid $gray-dark;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 20px;
        width: 20px;
      }
      &.collapsed {
        display: none;
      }
      &.expanded {
        display: flex;
      }
    }
    &.collapsed {
      justify-content: center;
    }
    &.expanded {
      justify-content: space-between;
    }
  }
}
</style>
