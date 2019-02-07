.. title:: Package Recipe 'bioconductor-cicero'
.. highlight: bash


bioconductor-cicero
===================

.. conda:recipe:: bioconductor-cicero
   :replaces_section_title:

   Cicero computes putative cis\-regulatory maps from single\-cell chromatin accessibility data. It also extends monocle 2 for use in chromatin accessibility data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cicero.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cicero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cicero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cicero/meta.yaml>`_

   


.. conda:package:: bioconductor-cicero

   |downloads_bioconductor-cicero| |docker_bioconductor-cicero|

   :versions: 1.0.14

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-monocle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-assertthat` >=0.2.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.10.4 :conda:package:`r-dplyr` >=0.7.4 :conda:package:`r-fnn` >=1.1 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-glasso` >=1.8 :conda:package:`r-igraph` >=1.1.0 :conda:package:`r-matrix` >=1.2-12 :conda:package:`r-plyr` >=1.8.4 :conda:package:`r-reshape2` >=1.4.3 :conda:package:`r-stringr` >=1.2.0 :conda:package:`r-tibble` >=1.4.2 :conda:package:`r-vgam` >=1.0-5 

   :required~by: |required_by_bioconductor-cicero|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cicero

   and update with::

      conda update bioconductor-cicero

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cicero


.. |required_by_bioconductor-cicero| conda:required_by:: bioconductor-cicero
.. |downloads_bioconductor-cicero| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cicero.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cicero| image:: https://quay.io/repository/biocontainers/bioconductor-cicero/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cicero







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cicero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cicero/README.html

