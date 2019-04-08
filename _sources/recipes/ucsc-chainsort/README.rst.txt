:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chainsort'
.. highlight: bash

ucsc-chainsort
==============

.. conda:recipe:: ucsc-chainsort
   :replaces_section_title:

   Sort chains.  By default sorts by score.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsort/meta.yaml>`_

   


.. conda:package:: ucsc-chainsort

   |downloads_ucsc-chainsort| |docker_ucsc-chainsort|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainsort

   and update with::

      conda update ucsc-chainsort

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-chainsort:<tag>

   (see `ucsc-chainsort/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chainsort| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainsort.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainsort| image:: https://quay.io/repository/biocontainers/ucsc-chainsort/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainsort
.. _`ucsc-chainsort/tags`: https://quay.io/repository/biocontainers/ucsc-chainsort?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainsort/README.html