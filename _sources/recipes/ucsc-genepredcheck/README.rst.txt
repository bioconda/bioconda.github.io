:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredcheck'
.. highlight: bash

ucsc-genepredcheck
==================

.. conda:recipe:: ucsc-genepredcheck
   :replaces_section_title:

   validate genePred files or tables

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredcheck/meta.yaml>`_

   


.. conda:package:: ucsc-genepredcheck

   |downloads_ucsc-genepredcheck| |docker_ucsc-genepredcheck|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredcheck

   and update with::

      conda update ucsc-genepredcheck

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-genepredcheck:<tag>

   (see `ucsc-genepredcheck/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredcheck| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredcheck.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredcheck| image:: https://quay.io/repository/biocontainers/ucsc-genepredcheck/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredcheck
.. _`ucsc-genepredcheck/tags`: https://quay.io/repository/biocontainers/ucsc-genepredcheck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredcheck/README.html