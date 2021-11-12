:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celltrails'
.. highlight: bash

bioconductor-celltrails
=======================

.. conda:recipe:: bioconductor-celltrails
   :replaces_section_title:
   :noindex:

   Reconstruction\, visualization and analysis of branching trajectories

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CellTrails.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celltrails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails/meta.yaml>`_

   CellTrails is an unsupervised algorithm for the de novo chronological ordering\, visualization and analysis of single\-cell expression data. CellTrails makes use of a geometrically motivated concept of lower\-dimensional manifold learning\, which exhibits a multitude of virtues that counteract intrinsic noise of single cell data caused by drop\-outs\, technical variance\, and redundancy of predictive variables. CellTrails enables the reconstruction of branching trajectories and provides an intuitive graphical representation of expression patterns along all branches simultaneously. It allows the user to define and infer the expression dynamics of individual and multiple pathways towards distinct phenotypes.


.. conda:package:: bioconductor-celltrails

   |downloads_bioconductor-celltrails| |docker_bioconductor-celltrails|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cba: 
   :depends r-dendextend: 
   :depends r-dtw: 
   :depends r-envstats: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-maptree: 
   :depends r-mgcv: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celltrails

   and update with::

      conda update bioconductor-celltrails

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celltrails:<tag>

   (see `bioconductor-celltrails/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celltrails| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celltrails.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celltrails
   :alt:   (downloads)
.. |docker_bioconductor-celltrails| image:: https://quay.io/repository/biocontainers/bioconductor-celltrails/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celltrails
.. _`bioconductor-celltrails/tags`: https://quay.io/repository/biocontainers/bioconductor-celltrails?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celltrails";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celltrails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celltrails/README.html