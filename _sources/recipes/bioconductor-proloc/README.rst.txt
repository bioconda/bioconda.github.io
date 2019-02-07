.. title:: Package Recipe 'bioconductor-proloc'
.. highlight: bash


bioconductor-proloc
===================

.. conda:recipe:: bioconductor-proloc
   :replaces_section_title:

   The pRoloc package implements machine learning and visualisation methods for the analysis and interogation of quantitiative mass spectrometry data to reliably infer protein sub\-cellular localisation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pRoloc.html
   :license: GPL-2
   :recipe: /`bioconductor-proloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proloc/meta.yaml>`_
   :links: biotools: :biotools:`proloc`

   


.. conda:package:: bioconductor-proloc

   |downloads_bioconductor-proloc| |docker_bioconductor-proloc|

   :versions: 1.22.1, 1.22.0, 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-mlinterfaces` >=1.62.0,<1.63.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caret`  :conda:package:`r-class`  :conda:package:`r-coda`  :conda:package:`r-dendextend`  :conda:package:`r-e1071`  :conda:package:`r-fnn`  :conda:package:`r-ggplot2`  :conda:package:`r-gtools`  :conda:package:`r-hexbin`  :conda:package:`r-kernlab`  :conda:package:`r-knitr`  :conda:package:`r-laplacesdemon`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-mclust` >=4.3 :conda:package:`r-mixtools`  :conda:package:`r-mvtnorm`  :conda:package:`r-nnet`  :conda:package:`r-plyr`  :conda:package:`r-proxy`  :conda:package:`r-randomforest`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp` >=0.10.3 :conda:package:`r-rcpparmadillo`  :conda:package:`r-sampling`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-proloc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proloc

   and update with::

      conda update bioconductor-proloc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-proloc


.. |required_by_bioconductor-proloc| conda:required_by:: bioconductor-proloc
.. |downloads_bioconductor-proloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proloc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-proloc| image:: https://quay.io/repository/biocontainers/bioconductor-proloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proloc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proloc/README.html

