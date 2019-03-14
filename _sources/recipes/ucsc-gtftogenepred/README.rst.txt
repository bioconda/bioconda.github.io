:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-gtftogenepred'
.. highlight: bash

ucsc-gtftogenepred
==================

.. conda:recipe:: ucsc-gtftogenepred
   :replaces_section_title:

   convert a GTF file to a genePred

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-gtftogenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gtftogenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gtftogenepred/meta.yaml>`_

   


.. conda:package:: ucsc-gtftogenepred

   |downloads_ucsc-gtftogenepred| |docker_ucsc-gtftogenepred|

   :versions: 377-1, 366-1, 366-0, 357-1, 357-0, 332-0, 324-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-gtftogenepred

   and update with::

      conda update ucsc-gtftogenepred

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-gtftogenepred:<tag>

   (see `ucsc-gtftogenepred/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-gtftogenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-gtftogenepred.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-gtftogenepred| image:: https://quay.io/repository/biocontainers/ucsc-gtftogenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-gtftogenepred
.. _`ucsc-gtftogenepred/tags`: https://quay.io/repository/biocontainers/ucsc-gtftogenepred?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-gtftogenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-gtftogenepred/README.html