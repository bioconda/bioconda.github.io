:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-standr'
.. highlight: bash

bioconductor-standr
===================

.. conda:recipe:: bioconductor-standr
   :replaces_section_title:
   :noindex:

   Spatial transcriptome analyses of Nanostring\'s DSP data in R

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/standR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-standr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-standr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-standr/meta.yaml>`_

   standR is an user\-friendly R package providing functions to assist conducting good\-practice analysis of Nanostring\'s GeoMX DSP data. All functions in the package are built based on the SpatialExperiment object\, allowing integration into various spatial transcriptomics\-related packages from Bioconductor. standR allows data inspection\, quality control\, normalization\, batch correction and evaluation with informative visualizations.


.. conda:package:: bioconductor-standr

   |downloads_bioconductor-standr| |docker_bioconductor-standr|

   :versions:
      
      

      ``1.4.2-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-ruvseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggalluvial: 
   :depends r-ggplot2: 
   :depends r-mclustcomp: 
   :depends r-patchwork: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-ruv: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-standr

   and update with::

      conda update bioconductor-standr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-standr:<tag>

   (see `bioconductor-standr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-standr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-standr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-standr
   :alt:   (downloads)
.. |docker_bioconductor-standr| image:: https://quay.io/repository/biocontainers/bioconductor-standr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-standr
.. _`bioconductor-standr/tags`: https://quay.io/repository/biocontainers/bioconductor-standr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-standr";
        var versions = ["1.4.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-standr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-standr/README.html