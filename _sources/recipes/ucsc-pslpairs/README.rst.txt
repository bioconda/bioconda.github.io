:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslpairs'
.. highlight: bash

ucsc-pslpairs
=============

.. conda:recipe:: ucsc-pslpairs
   :replaces_section_title:

   join paired ends in psl alignments

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslpairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpairs/meta.yaml>`_

   


.. conda:package:: ucsc-pslpairs

   |downloads_ucsc-pslpairs| |docker_ucsc-pslpairs|

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

      conda install ucsc-pslpairs

   and update with::

      conda update ucsc-pslpairs

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslpairs:<tag>

   (see `ucsc-pslpairs/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslpairs| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslpairs.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-pslpairs
   :alt:   (downloads)
.. |docker_ucsc-pslpairs| image:: https://quay.io/repository/biocontainers/ucsc-pslpairs/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslpairs
.. _`ucsc-pslpairs/tags`: https://quay.io/repository/biocontainers/ucsc-pslpairs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslpairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslpairs/README.html