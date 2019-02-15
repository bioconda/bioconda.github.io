:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tofsims'
.. highlight: bash

bioconductor-tofsims
====================

.. conda:recipe:: bioconductor-tofsims
   :replaces_section_title:

   This packages offers a pipeline for import\, processing and analysis of ToF\-SIMS 2D image data. Import of Iontof and Ulvac\-Phi raw or preprocessed data is supported. For rawdata\, mass calibration\, peak picking and peak integration exist. General funcionality includes data binning\, scaling\, image subsetting and visualization. A range of multivariate tools common in the ToF\-SIMS community are implemented \(PCA\, MCR\, MAF\, MNF\). An interface to the bioconductor image processing package EBImage offers image segmentation functionality.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tofsims.html
   :license: GPL-3
   :recipe: /`bioconductor-tofsims <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tofsims>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tofsims/meta.yaml>`_

   


.. conda:package:: bioconductor-tofsims

   |downloads_bioconductor-tofsims| |docker_bioconductor-tofsims|

   :versions: 1.10.0-0
   
   :depends bioconductor-protgenerics: >=1.14.0,<1.15.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends openblas: >=0.3.3,<0.3.4.0a0
   
   :depends r-als: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-chemometricswithr: 
   
   :depends r-kernsmooth: 
   
   :depends r-rcpp: >=0.11.2
   
   :depends r-rcpparmadillo: 
   
   :depends r-signal: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tofsims

   and update with::

      conda update bioconductor-tofsims

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tofsims:<tag>

   (see `bioconductor-tofsims/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tofsims| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tofsims.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tofsims| image:: https://quay.io/repository/biocontainers/bioconductor-tofsims/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tofsims
.. _`bioconductor-tofsims/tags`: https://quay.io/repository/biocontainers/bioconductor-tofsims?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tofsims/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tofsims/README.html