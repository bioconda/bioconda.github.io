:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-mafspecieslist'
.. highlight: bash

ucsc-mafspecieslist
===================

.. conda:recipe:: ucsc-mafspecieslist
   :replaces_section_title:

   Scan maf and output all species used in it.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafspecieslist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafspecieslist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafspecieslist/meta.yaml>`_

   


.. conda:package:: ucsc-mafspecieslist

   |downloads_ucsc-mafspecieslist| |docker_ucsc-mafspecieslist|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafspecieslist

   and update with::

      conda update ucsc-mafspecieslist

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-mafspecieslist:<tag>

   (see `ucsc-mafspecieslist/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-mafspecieslist| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafspecieslist.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-mafspecieslist
   :alt:   (downloads)
.. |docker_ucsc-mafspecieslist| image:: https://quay.io/repository/biocontainers/ucsc-mafspecieslist/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafspecieslist
.. _`ucsc-mafspecieslist/tags`: https://quay.io/repository/biocontainers/ucsc-mafspecieslist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafspecieslist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafspecieslist/README.html