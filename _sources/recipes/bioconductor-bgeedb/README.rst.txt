:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgeedb'
.. highlight: bash

bioconductor-bgeedb
===================

.. conda:recipe:: bioconductor-bgeedb
   :replaces_section_title:

   A package for the annotation and gene expression data download from Bgee database\, and TopAnat analysis\: GO\-like enrichment of anatomical terms\, mapped to genes by expression patterns.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BgeeDB.html
   :license: GPL-3
   :recipe: /`bioconductor-bgeedb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeedb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeedb/meta.yaml>`_
   :links: biotools: :biotools:`bgeedb`, doi: :doi:`10.12688/f1000research.9973.1`

   


.. conda:package:: bioconductor-bgeedb

   |downloads_bioconductor-bgeedb| |docker_bioconductor-bgeedb|

   :versions: 2.8.0-0, 2.6.2-0, 2.4.0-0, 2.2.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-rcurl: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bgeedb

   and update with::

      conda update bioconductor-bgeedb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgeedb:<tag>

   (see `bioconductor-bgeedb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgeedb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgeedb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bgeedb| image:: https://quay.io/repository/biocontainers/bioconductor-bgeedb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgeedb
.. _`bioconductor-bgeedb/tags`: https://quay.io/repository/biocontainers/bioconductor-bgeedb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgeedb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgeedb/README.html