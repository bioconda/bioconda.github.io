:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicaggr'
.. highlight: bash

bioconductor-hicaggr
====================

.. conda:recipe:: bioconductor-hicaggr
   :replaces_section_title:
   :noindex:

   Set of 3D genomic interaction analysis tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HicAggR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicaggr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicaggr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicaggr/meta.yaml>`_

   This package provides a set of functions useful in the analysis of 3D genomic interactions. It includes the import of standard HiC data formats into R and HiC normalisation procedures. The main objective of this package is to improve the visualization and quantification of the analysis of HiC contacts through aggregation. The package allows to import 1D genomics data\, such as peaks from ATACSeq\, ChIPSeq\, to create potential couples between features of interest under user\-defined parameters such as distance between pairs of features of interest. It allows then the extraction of contact values from the HiC data for these couples and to perform Aggregated Peak Analysis \(APA\) for visualization\, but also to compare normalized contact values between conditions. Overall the package allows to integrate 1D genomics data with 3D genomics data\, providing an easy access to HiC contact values.


.. conda:package:: bioconductor-hicaggr

   |downloads_bioconductor-hicaggr| |docker_bioconductor-hicaggr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-reshape: 
   :depends r-rlang: 
   :depends r-strawr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-withr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hicaggr

   and update with::

      mamba update bioconductor-hicaggr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicaggr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicaggr:<tag>

   (see `bioconductor-hicaggr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicaggr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicaggr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicaggr
   :alt:   (downloads)
.. |docker_bioconductor-hicaggr| image:: https://quay.io/repository/biocontainers/bioconductor-hicaggr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicaggr
.. _`bioconductor-hicaggr/tags`: https://quay.io/repository/biocontainers/bioconductor-hicaggr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicaggr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicaggr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicaggr/README.html