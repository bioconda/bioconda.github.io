:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-parahubstop'
.. highlight: bash

ucsc-parahubstop
================

.. conda:recipe:: ucsc-parahubstop
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-parahubstop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parahubstop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parahubstop/meta.yaml>`_

   


.. conda:package:: ucsc-parahubstop

   |downloads_ucsc-parahubstop| |docker_ucsc-parahubstop|

   :versions: 377-0, 366-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-parahubstop

   and update with::

      conda update ucsc-parahubstop

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-parahubstop:<tag>

   (see `ucsc-parahubstop/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-parahubstop| image:: https://img.shields.io/conda/dn/bioconda/ucsc-parahubstop.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-parahubstop
   :alt:   (downloads)
.. |docker_ucsc-parahubstop| image:: https://quay.io/repository/biocontainers/ucsc-parahubstop/status
   :target: https://quay.io/repository/biocontainers/ucsc-parahubstop
.. _`ucsc-parahubstop/tags`: https://quay.io/repository/biocontainers/ucsc-parahubstop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-parahubstop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-parahubstop/README.html