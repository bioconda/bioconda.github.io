.. title:: Package Recipe 'bioconductor-mwastools'
.. highlight: bash


bioconductor-mwastools
======================

.. conda:recipe:: bioconductor-mwastools
   :replaces_section_title:

   MWASTools provides a complete pipeline to perform metabolome\-wide association studies. Key functionalities of the package include\: quality control analysis of metabonomic data\; MWAS using different association models \(partial correlations\; generalized linear models\)\; model validation using non\-parametric bootstrapping\; visualization of MWAS results\; NMR metabolite identification using STOCSY\; and biological interpretation of MWAS results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MWASTools.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-mwastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools/meta.yaml>`_

   


.. conda:package:: bioconductor-mwastools

   |downloads_bioconductor-mwastools| |docker_bioconductor-mwastools|

   :versions: 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-kegggraph` >=1.42.0,<1.43.0 :conda:package:`bioconductor-keggrest` >=1.22.0,<1.23.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-boot`  :conda:package:`r-car`  :conda:package:`r-ggplot2`  :conda:package:`r-glm2`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-ppcor`  :conda:package:`r-rcurl`  

   :required~by: |required_by_bioconductor-mwastools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mwastools

   and update with::

      conda update bioconductor-mwastools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mwastools


.. |required_by_bioconductor-mwastools| conda:required_by:: bioconductor-mwastools
.. |downloads_bioconductor-mwastools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mwastools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mwastools| image:: https://quay.io/repository/biocontainers/bioconductor-mwastools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mwastools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mwastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mwastools/README.html

