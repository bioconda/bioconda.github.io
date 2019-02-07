.. title:: Package Recipe 'bioconductor-celltrails'
.. highlight: bash


bioconductor-celltrails
=======================

.. conda:recipe:: bioconductor-celltrails
   :replaces_section_title:

   CellTrails is an unsupervised algorithm for the de novo chronological ordering\, visualization and analysis of single\-cell expression data. CellTrails makes use of a geometrically motivated concept of lower\-dimensional manifold learning\, which exhibits a multitude of virtues that counteract intrinsic noise of single cell data caused by drop\-outs\, technical variance\, and redundancy of predictive variables. CellTrails enables the reconstruction of branching trajectories and provides an intuitive graphical representation of expression patterns along all branches simultaneously. It allows the user to define and infer the expression dynamics of individual and multiple pathways towards distinct phenotypes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CellTrails.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celltrails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails/meta.yaml>`_

   


.. conda:package:: bioconductor-celltrails

   |downloads_bioconductor-celltrails| |docker_bioconductor-celltrails|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cba`  :conda:package:`r-dendextend`  :conda:package:`r-dtw`  :conda:package:`r-envstats`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-igraph`  :conda:package:`r-maptree`  :conda:package:`r-mgcv`  :conda:package:`r-reshape2`  :conda:package:`r-rtsne`  

   :required~by: |required_by_bioconductor-celltrails|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celltrails

   and update with::

      conda update bioconductor-celltrails

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-celltrails


.. |required_by_bioconductor-celltrails| conda:required_by:: bioconductor-celltrails
.. |downloads_bioconductor-celltrails| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celltrails.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-celltrails| image:: https://quay.io/repository/biocontainers/bioconductor-celltrails/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celltrails







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celltrails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celltrails/README.html

