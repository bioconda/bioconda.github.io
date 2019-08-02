:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mwastools'
.. highlight: bash

bioconductor-mwastools
======================

.. conda:recipe:: bioconductor-mwastools
   :replaces_section_title:

   MWASTools provides a complete pipeline to perform metabolome\-wide association studies. Key functionalities of the package include\: quality control analysis of metabonomic data\; MWAS using different association models \(partial correlations\; generalized linear models\)\; model validation using non\-parametric bootstrapping\; visualization of MWAS results\; NMR metabolite identification using STOCSY\; and biological interpretation of MWAS results.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MWASTools.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-mwastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools/meta.yaml>`_

   


.. conda:package:: bioconductor-mwastools

   |downloads_bioconductor-mwastools| |docker_bioconductor-mwastools|

   :versions: 1.8.0-1, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-complexheatmap: >=2.0.0,<2.1.0
   :depends bioconductor-kegggraph: >=1.44.0,<1.45.0
   :depends bioconductor-keggrest: >=1.24.0,<1.25.0
   :depends bioconductor-qvalue: >=2.16.0,<2.17.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-boot: 
   :depends r-car: 
   :depends r-ggplot2: 
   :depends r-glm2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-ppcor: 
   :depends r-rcurl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mwastools

   and update with::

      conda update bioconductor-mwastools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mwastools:<tag>

   (see `bioconductor-mwastools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mwastools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mwastools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mwastools
   :alt:   (downloads)
.. |docker_bioconductor-mwastools| image:: https://quay.io/repository/biocontainers/bioconductor-mwastools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mwastools
.. _`bioconductor-mwastools/tags`: https://quay.io/repository/biocontainers/bioconductor-mwastools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mwastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mwastools/README.html