.. title:: Package Recipe 'bioconductor-scde'
.. highlight: bash


bioconductor-scde
=================

.. conda:recipe:: bioconductor-scde
   :replaces_section_title:

   The scde package implements a set of statistical methods for analyzing single\-cell RNA\-seq data. scde fits individual error models for single\-cell RNA\-seq measurements. These models can then be used for assessment of differential expression between groups of cells\, as well as other types of analysis. The scde package also contains the pagoda framework which applies pathway and gene set overdispersion analysis to identify and characterize putative cell subpopulations based on transcriptional signatures. The overall approach to the differential expression analysis is detailed in the following publication\: \"Bayesian approach to single\-cell differential expression analysis\" \(Kharchenko PV\, Silberstein L\, Scadden DT\, Nature Methods\, doi\: 10.1038\/nmeth.2967\). The overall approach to subpopulation identification and characterization is detailed in the following pre\-print\: \"Characterizing transcriptional heterogeneity through pathway and gene set overdispersion analysis\" \(Fan J\, Salathia N\, Liu R\, Kaeser G\, Yung Y\, Herman J\, Kaper F\, Fan JB\, Zhang K\, Chun J\, and Kharchenko PV\, Nature Methods\, doi\:10.1038\/nmeth.3734\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scde.html
   :license: GPL-2
   :recipe: /`bioconductor-scde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde/meta.yaml>`_
   :links: biotools: :biotools:`scde`, doi: :doi:`10.1038/nmeth.2967`

   


.. conda:package:: bioconductor-scde

   |downloads_bioconductor-scde| |docker_bioconductor-scde|

   :versions: 2.10.0, 2.8.0, 2.6.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-pcamethods` >=1.74.0,<1.75.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cairo`  :conda:package:`r-extremes`  :conda:package:`r-flexmix`  :conda:package:`r-mass`  :conda:package:`r-mgcv`  :conda:package:`r-nnet`  :conda:package:`r-quantreg`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp` >=0.10.4 :conda:package:`r-rcpparmadillo` >=0.5.400.2.0 :conda:package:`r-rjson`  :conda:package:`r-rmtstat`  :conda:package:`r-rook`  

   :required~by: |required_by_bioconductor-scde|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scde

   and update with::

      conda update bioconductor-scde

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scde


.. |required_by_bioconductor-scde| conda:required_by:: bioconductor-scde
.. |downloads_bioconductor-scde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scde.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scde| image:: https://quay.io/repository/biocontainers/bioconductor-scde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scde







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scde/README.html

