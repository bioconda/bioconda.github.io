:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mysql-connector-c'
.. highlight: bash

mysql-connector-c
=================

.. conda:recipe:: mysql-connector-c
   :replaces_section_title:

   MySQL Connector\/C\, the C interface for communicating with MySQL servers.

   :homepage: https://dev.mysql.com/downloads/connector/c/
   :license: LGPL
   :recipe: /`mysql-connector-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mysql-connector-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mysql-connector-c/meta.yaml>`_

   


.. conda:package:: mysql-connector-c

   |downloads_mysql-connector-c| |docker_mysql-connector-c|

   :versions: 6.1.6-2, 6.1.6-1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mysql-connector-c

   and update with::

      conda update mysql-connector-c

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mysql-connector-c:<tag>

   (see `mysql-connector-c/tags`_ for valid values for ``<tag>``)


.. |downloads_mysql-connector-c| image:: https://img.shields.io/conda/dn/bioconda/mysql-connector-c.svg?style=flat
   :alt:   (downloads)
.. |docker_mysql-connector-c| image:: https://quay.io/repository/biocontainers/mysql-connector-c/status
   :target: https://quay.io/repository/biocontainers/mysql-connector-c
.. _`mysql-connector-c/tags`: https://quay.io/repository/biocontainers/mysql-connector-c?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mysql-connector-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mysql-connector-c/README.html