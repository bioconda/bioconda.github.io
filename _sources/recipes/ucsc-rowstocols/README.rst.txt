:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-rowstocols'
.. highlight: bash

ucsc-rowstocols
===============

.. conda:recipe:: ucsc-rowstocols
   :replaces_section_title:

   Convert rows to columns and vice versa in a text file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-rowstocols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rowstocols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-rowstocols/meta.yaml>`_

   


.. conda:package:: ucsc-rowstocols

   |downloads_ucsc-rowstocols| |docker_ucsc-rowstocols|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-rowstocols

   and update with::

      conda update ucsc-rowstocols

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-rowstocols:<tag>

   (see `ucsc-rowstocols/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-rowstocols| image:: https://img.shields.io/conda/dn/bioconda/ucsc-rowstocols.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-rowstocols| image:: https://quay.io/repository/biocontainers/ucsc-rowstocols/status
   :target: https://quay.io/repository/biocontainers/ucsc-rowstocols
.. _`ucsc-rowstocols/tags`: https://quay.io/repository/biocontainers/ucsc-rowstocols?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-rowstocols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-rowstocols/README.html