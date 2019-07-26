:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredtomafframes'
.. highlight: bash

ucsc-genepredtomafframes
========================

.. conda:recipe:: ucsc-genepredtomafframes
   :replaces_section_title:

   create mafFrames tables from a genePreds

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtomafframes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtomafframes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtomafframes/meta.yaml>`_

   


.. conda:package:: ucsc-genepredtomafframes

   |downloads_ucsc-genepredtomafframes| |docker_ucsc-genepredtomafframes|

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

      conda install ucsc-genepredtomafframes

   and update with::

      conda update ucsc-genepredtomafframes

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-genepredtomafframes:<tag>

   (see `ucsc-genepredtomafframes/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredtomafframes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtomafframes.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-genepredtomafframes
   :alt:   (downloads)
.. |docker_ucsc-genepredtomafframes| image:: https://quay.io/repository/biocontainers/ucsc-genepredtomafframes/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtomafframes
.. _`ucsc-genepredtomafframes/tags`: https://quay.io/repository/biocontainers/ucsc-genepredtomafframes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtomafframes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtomafframes/README.html