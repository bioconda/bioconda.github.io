.. title:: Package Recipe 'bioconductor-meal'
.. highlight: bash


bioconductor-meal
=================

.. conda:recipe:: bioconductor-meal
   :replaces_section_title:

   Package to integrate methylation and expression data. It can also perform methylation or expression analysis alone. Several plotting functionalities are included as well as a new region analysis based on redundancy analysis. Effect of SNPs on a region can also be estimated.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MEAL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meal/meta.yaml>`_

   


.. conda:package:: bioconductor-meal

   |downloads_bioconductor-meal| |docker_bioconductor-meal|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-dmrcate` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-missmethyl` >=1.16.0,<1.17.0 :conda:package:`bioconductor-multidataset` >=1.10.0,<1.11.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=2.0.0 :conda:package:`r-isva`  :conda:package:`r-matrixstats`  :conda:package:`r-permute`  :conda:package:`r-smartsva`  :conda:package:`r-vegan`  

   :required~by: |required_by_bioconductor-meal|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meal

   and update with::

      conda update bioconductor-meal

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-meal


.. |required_by_bioconductor-meal| conda:required_by:: bioconductor-meal
.. |downloads_bioconductor-meal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meal.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-meal| image:: https://quay.io/repository/biocontainers/bioconductor-meal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meal







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meal/README.html

