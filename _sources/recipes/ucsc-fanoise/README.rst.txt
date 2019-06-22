:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fanoise'
.. highlight: bash

ucsc-fanoise
============

.. conda:recipe:: ucsc-fanoise
   :replaces_section_title:

   Add noise to .fa file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fanoise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fanoise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fanoise/meta.yaml>`_

   


.. conda:package:: ucsc-fanoise

   |downloads_ucsc-fanoise| |docker_ucsc-fanoise|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fanoise

   and update with::

      conda update ucsc-fanoise

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fanoise:<tag>

   (see `ucsc-fanoise/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fanoise| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fanoise.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fanoise
   :alt:   (downloads)
.. |docker_ucsc-fanoise| image:: https://quay.io/repository/biocontainers/ucsc-fanoise/status
   :target: https://quay.io/repository/biocontainers/ucsc-fanoise
.. _`ucsc-fanoise/tags`: https://quay.io/repository/biocontainers/ucsc-fanoise?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fanoise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fanoise/README.html