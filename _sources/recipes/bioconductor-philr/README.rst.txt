:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-philr'
.. highlight: bash

bioconductor-philr
==================

.. conda:recipe:: bioconductor-philr
   :replaces_section_title:

   PhILR is short for Phylogenetic Isometric Log\-Ratio Transform. This package provides functions for the analysis of compositional data \(e.g.\, data representing proportions of different variables\/parts\). Specifically this package allows analysis of compositional data where the parts can be related through a phylogenetic tree \(as is common in microbiota survey data\) and makes available the Isometric Log Ratio transform built from the phylogenetic tree and utilizing a weighted reference measure.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/philr.html
   :license: GPL-3
   :recipe: /`bioconductor-philr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-philr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-philr/meta.yaml>`_
   :links: biotools: :biotools:`philr`

   


.. conda:package:: bioconductor-philr

   |downloads_bioconductor-philr| |docker_bioconductor-philr|

   :versions: 1.10.0-1, 1.10.0-0, 1.8.1-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-ggtree: >=1.16.0,<1.17.0
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-phangorn: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-philr

   and update with::

      conda update bioconductor-philr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-philr:<tag>

   (see `bioconductor-philr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-philr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-philr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-philr
   :alt:   (downloads)
.. |docker_bioconductor-philr| image:: https://quay.io/repository/biocontainers/bioconductor-philr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-philr
.. _`bioconductor-philr/tags`: https://quay.io/repository/biocontainers/bioconductor-philr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-philr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-philr/README.html