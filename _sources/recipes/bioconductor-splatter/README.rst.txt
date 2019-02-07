.. title:: Package Recipe 'bioconductor-splatter'
.. highlight: bash


bioconductor-splatter
=====================

.. conda:recipe:: bioconductor-splatter
   :replaces_section_title:

   Splatter is a package for the simulation of single\-cell RNA sequencing count data. It provides a simple interface for creating complex simulations that are reproducible and well\-documented. Parameters can be estimated from real data and functions are provided for comparing real and simulated datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/splatter.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-splatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splatter/meta.yaml>`_

   


.. conda:package:: bioconductor-splatter

   |downloads_bioconductor-splatter| |docker_bioconductor-splatter|

   :versions: 1.6.1, 1.4.3, 1.2.1

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-scater` >=1.10.0,<1.11.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-akima`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-checkmate`  :conda:package:`r-crayon`  :conda:package:`r-fitdistrplus`  :conda:package:`r-ggplot2`  :conda:package:`r-locfit`  :conda:package:`r-matrixstats`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-splatter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splatter

   and update with::

      conda update bioconductor-splatter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-splatter


.. |required_by_bioconductor-splatter| conda:required_by:: bioconductor-splatter
.. |downloads_bioconductor-splatter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splatter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-splatter| image:: https://quay.io/repository/biocontainers/bioconductor-splatter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splatter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splatter/README.html

