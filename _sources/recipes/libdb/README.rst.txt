:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libdb'
.. highlight: bash

libdb
=====

.. conda:recipe:: libdb
   :replaces_section_title:

   The Berkeley DB embedded database system.

   :homepage: http://www.oracle.com/technology/software/products/berkeley-db/index.html
   :license: AGPLv3
   :recipe: /`libdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdb/meta.yaml>`_

   


.. conda:package:: libdb

   |downloads_libdb| |docker_libdb|

   :versions: 6.1.26-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libdb

   and update with::

      conda update libdb

   or use the docker container::

      docker pull quay.io/biocontainers/libdb:<tag>

   (see `libdb/tags`_ for valid values for ``<tag>``)


.. |downloads_libdb| image:: https://img.shields.io/conda/dn/bioconda/libdb.svg?style=flat
   :alt:   (downloads)
.. |docker_libdb| image:: https://quay.io/repository/biocontainers/libdb/status
   :target: https://quay.io/repository/biocontainers/libdb
.. _`libdb/tags`: https://quay.io/repository/biocontainers/libdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libdb/README.html