:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xina'
.. highlight: bash

bioconductor-xina
=================

.. conda:recipe:: bioconductor-xina
   :replaces_section_title:

   Multiplexes isobaric mass tagged\-based kinetics data for network analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/XINA.html
   :license: GPL-3
   :recipe: /`bioconductor-xina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xina/meta.yaml>`_

   An intuitive R package simplifies network analyses output from multiplexed high\-dimensional proteomics\/trascriptomics kinetics data.


.. conda:package:: bioconductor-xina

   |downloads_bioconductor-xina| |docker_bioconductor-xina|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.1-0, 1.0.0-0
   
   :depends bioconductor-stringdb: >=2.0.0,<2.1.0
   :depends r-alluvial: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-mclust: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xina

   and update with::

      conda update bioconductor-xina

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xina:<tag>

   (see `bioconductor-xina/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xina.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xina
   :alt:   (downloads)
.. |docker_bioconductor-xina| image:: https://quay.io/repository/biocontainers/bioconductor-xina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xina
.. _`bioconductor-xina/tags`: https://quay.io/repository/biocontainers/bioconductor-xina?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xina/README.html