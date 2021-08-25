:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-schex'
.. highlight: bash

bioconductor-schex
==================

.. conda:recipe:: bioconductor-schex
   :replaces_section_title:
   :noindex:

   Hexbin plots for single cell omics data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/schex.html
   :license: GPL-3
   :recipe: /`bioconductor-schex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schex/meta.yaml>`_

   Builds hexbin plots for variables and dimension reduction stored in single cell omics data such as SingleCellExperiment and SeuratObject. The ideas used in this package are based on the excellent work of Dan Carr\, Nicholas Lewin\-Koh\, Martin Maechler and Thomas Lumley.


.. conda:package:: bioconductor-schex

   |downloads_bioconductor-schex| |docker_bioconductor-schex|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-concaveman: 
   :depends r-dplyr: 
   :depends r-entropy: 
   :depends r-ggforce: 
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-hexbin: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-schex

   and update with::

      conda update bioconductor-schex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-schex:<tag>

   (see `bioconductor-schex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-schex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-schex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-schex
   :alt:   (downloads)
.. |docker_bioconductor-schex| image:: https://quay.io/repository/biocontainers/bioconductor-schex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-schex
.. _`bioconductor-schex/tags`: https://quay.io/repository/biocontainers/bioconductor-schex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-schex";
        var versions = ["1.5.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-schex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-schex/README.html