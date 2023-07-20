:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spotclean'
.. highlight: bash

bioconductor-spotclean
======================

.. conda:recipe:: bioconductor-spotclean
   :replaces_section_title:
   :noindex:

   SpotClean adjusts for spot swapping in spatial transcriptomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SpotClean.html
   :license: GPL-3
   :recipe: /`bioconductor-spotclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spotclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spotclean/meta.yaml>`_

   SpotClean is a computational method to adjust for spot swapping in spatial transcriptomics data. Recent spatial transcriptomics experiments utilize slides containing thousands of spots with spot\-specific barcodes that bind mRNA. Ideally\, unique molecular identifiers at a spot measure spot\-specific expression\, but this is often not the case due to bleed from nearby spots\, an artifact we refer to as spot swapping. SpotClean is able to estimate the contamination rate in observed data and decontaminate the spot swapping effect\, thus increase the sensitivity and precision of downstream analyses.


.. conda:package:: bioconductor-spotclean

   |downloads_bioconductor-spotclean| |docker_bioconductor-spotclean|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-readbitmap: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-seurat: 
   :depends r-tibble: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spotclean

   and update with::

      conda update bioconductor-spotclean

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spotclean:<tag>

   (see `bioconductor-spotclean/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spotclean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spotclean.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spotclean
   :alt:   (downloads)
.. |docker_bioconductor-spotclean| image:: https://quay.io/repository/biocontainers/bioconductor-spotclean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spotclean
.. _`bioconductor-spotclean/tags`: https://quay.io/repository/biocontainers/bioconductor-spotclean?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spotclean";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spotclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spotclean/README.html