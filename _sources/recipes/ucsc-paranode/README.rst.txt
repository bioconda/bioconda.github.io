:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-paranode'
.. highlight: bash

ucsc-paranode
=============

.. conda:recipe:: ucsc-paranode
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-paranode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranode/meta.yaml>`_

   


.. conda:package:: ucsc-paranode

   |downloads_ucsc-paranode| |docker_ucsc-paranode|

   :versions: 366-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-paranode

   and update with::

      conda update ucsc-paranode

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-paranode:<tag>

   (see `ucsc-paranode/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-paranode| image:: https://img.shields.io/conda/dn/bioconda/ucsc-paranode.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-paranode| image:: https://quay.io/repository/biocontainers/ucsc-paranode/status
   :target: https://quay.io/repository/biocontainers/ucsc-paranode
.. _`ucsc-paranode/tags`: https://quay.io/repository/biocontainers/ucsc-paranode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-paranode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-paranode/README.html