:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asics'
.. highlight: bash

bioconductor-asics
==================

.. conda:recipe:: bioconductor-asics
   :replaces_section_title:

   Automatic Statistical Identification in Complex Spectra

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ASICS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-asics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asics/meta.yaml>`_

   With a set of pure metabolite reference spectra\, ASICS quantifies concentration of metabolites in a complex spectrum. The identification of metabolites is performed by fitting a mixture model to the spectra of the library with a sparse penalty. The method and its statistical properties are described in Tardivel et al. \(2017\) \<doi\:10.1007\/s11306\-017\-1244\-5\>.


.. conda:package:: bioconductor-asics

   |downloads_bioconductor-asics| |docker_bioconductor-asics|

   :versions: 2.4.0-0, 2.2.0-0, 2.0.1-0, 1.2.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-pepsnmr: >=1.6.0,<1.7.0
   :depends bioconductor-ropls: >=1.20.0,<1.21.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :depends r-plyr: 
   :depends r-quadprog: 
   :depends r-tsdist: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-asics

   and update with::

      conda update bioconductor-asics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asics:<tag>

   (see `bioconductor-asics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asics
   :alt:   (downloads)
.. |docker_bioconductor-asics| image:: https://quay.io/repository/biocontainers/bioconductor-asics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asics
.. _`bioconductor-asics/tags`: https://quay.io/repository/biocontainers/bioconductor-asics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asics/README.html