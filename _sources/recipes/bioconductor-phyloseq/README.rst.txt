:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phyloseq'
.. highlight: bash

bioconductor-phyloseq
=====================

.. conda:recipe:: bioconductor-phyloseq
   :replaces_section_title:

   phyloseq provides a set of classes and tools to facilitate the import\, storage\, analysis\, and graphical display of microbiome census data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/phyloseq.html
   :license: AGPL-3
   :recipe: /`bioconductor-phyloseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloseq/meta.yaml>`_
   :links: biotools: :biotools:`phyloseq`

   


.. conda:package:: bioconductor-phyloseq

   |downloads_bioconductor-phyloseq| |docker_bioconductor-phyloseq|

   :versions: 1.26.1-0, 1.26.0-0, 1.24.2-0, 1.22.3-0, 1.20.0-1, 1.20.0-0, 1.19.1-0, 1.16.2-1, 1.14.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biomformat: >=1.10.0,<1.11.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends r-ade4: >=1.7.4
   :depends r-ape: >=5.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: >=2.0.4
   :depends r-data.table: >=1.10.4
   :depends r-foreach: >=1.4.3
   :depends r-ggplot2: >=2.1.0
   :depends r-igraph: >=1.0.1
   :depends r-plyr: >=1.8.3
   :depends r-reshape2: >=1.4.1
   :depends r-scales: >=0.4.0
   :depends r-vegan: >=2.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phyloseq

   and update with::

      conda update bioconductor-phyloseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phyloseq:<tag>

   (see `bioconductor-phyloseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phyloseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phyloseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phyloseq
   :alt:   (downloads)
.. |docker_bioconductor-phyloseq| image:: https://quay.io/repository/biocontainers/bioconductor-phyloseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phyloseq
.. _`bioconductor-phyloseq/tags`: https://quay.io/repository/biocontainers/bioconductor-phyloseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phyloseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phyloseq/README.html