:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-barcodetrackr'
.. highlight: bash

bioconductor-barcodetrackr
==========================

.. conda:recipe:: bioconductor-barcodetrackr
   :replaces_section_title:
   :noindex:

   Functions for Analyzing Cellular Barcoding Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/barcodetrackR.html
   :license: file LICENSE
   :recipe: /`bioconductor-barcodetrackr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-barcodetrackr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-barcodetrackr/meta.yaml>`_

   barcodetrackR is an R package developed for the analysis and visualization of clonal tracking data. Data required is samples and tag abundances in matrix form. Usually from cellular barcoding experiments\, integration site retrieval analyses\, or similar technologies.


.. conda:package:: bioconductor-barcodetrackr

   |downloads_bioconductor-barcodetrackr| |docker_bioconductor-barcodetrackr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-proxy: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-barcodetrackr

   and update with::

      conda update bioconductor-barcodetrackr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-barcodetrackr:<tag>

   (see `bioconductor-barcodetrackr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-barcodetrackr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-barcodetrackr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-barcodetrackr
   :alt:   (downloads)
.. |docker_bioconductor-barcodetrackr| image:: https://quay.io/repository/biocontainers/bioconductor-barcodetrackr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-barcodetrackr
.. _`bioconductor-barcodetrackr/tags`: https://quay.io/repository/biocontainers/bioconductor-barcodetrackr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-barcodetrackr";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-barcodetrackr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-barcodetrackr/README.html