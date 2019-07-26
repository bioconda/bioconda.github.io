:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scde'
.. highlight: bash

bioconductor-scde
=================

.. conda:recipe:: bioconductor-scde
   :replaces_section_title:

   The scde package implements a set of statistical methods for analyzing single\-cell RNA\-seq data. scde fits individual error models for single\-cell RNA\-seq measurements. These models can then be used for assessment of differential expression between groups of cells\, as well as other types of analysis. The scde package also contains the pagoda framework which applies pathway and gene set overdispersion analysis to identify and characterize putative cell subpopulations based on transcriptional signatures. The overall approach to the differential expression analysis is detailed in the following publication\: \"Bayesian approach to single\-cell differential expression analysis\" \(Kharchenko PV\, Silberstein L\, Scadden DT\, Nature Methods\, doi\: 10.1038\/nmeth.2967\). The overall approach to subpopulation identification and characterization is detailed in the following pre\-print\: \"Characterizing transcriptional heterogeneity through pathway and gene set overdispersion analysis\" \(Fan J\, Salathia N\, Liu R\, Kaeser G\, Yung Y\, Herman J\, Kaper F\, Fan JB\, Zhang K\, Chun J\, and Kharchenko PV\, Nature Methods\, doi\:10.1038\/nmeth.3734\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/scde.html
   :license: GPL-2
   :recipe: /`bioconductor-scde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde/meta.yaml>`_
   :links: biotools: :biotools:`scde`, doi: :doi:`10.1038/nmeth.2967`

   


.. conda:package:: bioconductor-scde

   |downloads_bioconductor-scde| |docker_bioconductor-scde|

   :versions: 2.12.0-1, 2.10.0-0, 2.8.0-0, 2.6.0-1, 2.6.0-0
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-pcamethods: >=1.76.0,<1.77.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cairo: 
   :depends r-extremes: 
   :depends r-flexmix: 
   :depends r-mass: 
   :depends r-mgcv: 
   :depends r-nnet: 
   :depends r-quantreg: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: >=0.10.4
   :depends r-rcpparmadillo: >=0.5.400.2.0
   :depends r-rjson: 
   :depends r-rmtstat: 
   :depends r-rook: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scde

   and update with::

      conda update bioconductor-scde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scde:<tag>

   (see `bioconductor-scde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scde
   :alt:   (downloads)
.. |docker_bioconductor-scde| image:: https://quay.io/repository/biocontainers/bioconductor-scde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scde
.. _`bioconductor-scde/tags`: https://quay.io/repository/biocontainers/bioconductor-scde?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scde/README.html