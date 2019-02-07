.. title:: Package Recipe 'bioconductor-philr'
.. highlight: bash


bioconductor-philr
==================

.. conda:recipe:: bioconductor-philr
   :replaces_section_title:

   PhILR is short for Phylogenetic Isometric Log\-Ratio Transform. This package provides functions for the analysis of compositional data \(e.g.\, data representing proportions of different variables\/parts\). Specifically this package allows analysis of compositional data where the parts can be related through a phylogenetic tree \(as is common in microbiota survey data\) and makes available the Isometric Log Ratio transform built from the phylogenetic tree and utilizing a weighted reference measure.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/philr.html
   :license: GPL-3
   :recipe: /`bioconductor-philr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-philr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-philr/meta.yaml>`_
   :links: biotools: :biotools:`philr`

   


.. conda:package:: bioconductor-philr

   |downloads_bioconductor-philr| |docker_bioconductor-philr|

   :versions: 1.8.1, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-ggtree` >=1.14.0,<1.15.0 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-phangorn`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-philr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-philr

   and update with::

      conda update bioconductor-philr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-philr


.. |required_by_bioconductor-philr| conda:required_by:: bioconductor-philr
.. |downloads_bioconductor-philr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-philr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-philr| image:: https://quay.io/repository/biocontainers/bioconductor-philr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-philr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-philr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-philr/README.html

