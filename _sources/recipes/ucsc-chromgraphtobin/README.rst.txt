:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chromgraphtobin'
.. highlight: bash

ucsc-chromgraphtobin
====================

.. conda:recipe:: ucsc-chromgraphtobin
   :replaces_section_title:

   Make binary version of chromGraph.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chromgraphtobin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chromgraphtobin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chromgraphtobin/meta.yaml>`_

   


.. conda:package:: ucsc-chromgraphtobin

   |downloads_ucsc-chromgraphtobin| |docker_ucsc-chromgraphtobin|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chromgraphtobin

   and update with::

      conda update ucsc-chromgraphtobin

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-chromgraphtobin:<tag>

   (see `ucsc-chromgraphtobin/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chromgraphtobin| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chromgraphtobin.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-chromgraphtobin
   :alt:   (downloads)
.. |docker_ucsc-chromgraphtobin| image:: https://quay.io/repository/biocontainers/ucsc-chromgraphtobin/status
   :target: https://quay.io/repository/biocontainers/ucsc-chromgraphtobin
.. _`ucsc-chromgraphtobin/tags`: https://quay.io/repository/biocontainers/ucsc-chromgraphtobin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chromgraphtobin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chromgraphtobin/README.html