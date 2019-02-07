.. title:: Package Recipe 'bioconductor-mlinterfaces'
.. highlight: bash


bioconductor-mlinterfaces
=========================

.. conda:recipe:: bioconductor-mlinterfaces
   :replaces_section_title:

   This package provides uniform interfaces to machine learning code for data in R and Bioconductor containers.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MLInterfaces.html
   :license: LGPL
   :recipe: /`bioconductor-mlinterfaces <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlinterfaces>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlinterfaces/meta.yaml>`_
   :links: biotools: :biotools:`mlinterfaces`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mlinterfaces

   |downloads_bioconductor-mlinterfaces| |docker_bioconductor-mlinterfaces|

   :versions: 1.62.0, 1.60.1, 1.58.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-fpc`  :conda:package:`r-gbm`  :conda:package:`r-gdata`  :conda:package:`r-ggvis`  :conda:package:`r-hwriter`  :conda:package:`r-mass`  :conda:package:`r-mlbench`  :conda:package:`r-pls`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rda`  :conda:package:`r-rpart`  :conda:package:`r-sfsmisc`  :conda:package:`r-shiny`  :conda:package:`r-threejs` >=0.2.2 

   :required~by: |required_by_bioconductor-mlinterfaces|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlinterfaces

   and update with::

      conda update bioconductor-mlinterfaces

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mlinterfaces


.. |required_by_bioconductor-mlinterfaces| conda:required_by:: bioconductor-mlinterfaces
.. |downloads_bioconductor-mlinterfaces| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlinterfaces.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mlinterfaces| image:: https://quay.io/repository/biocontainers/bioconductor-mlinterfaces/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlinterfaces







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlinterfaces/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlinterfaces/README.html

