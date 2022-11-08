:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fcoex'
.. highlight: bash

bioconductor-fcoex
==================

.. conda:recipe:: bioconductor-fcoex
   :replaces_section_title:
   :noindex:

   FCBF\-based Co\-Expression Networks for Single Cells

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/fcoex.html
   :license: GPL-3
   :recipe: /`bioconductor-fcoex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcoex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcoex/meta.yaml>`_

   The fcoex package implements an easy\-to use interface to co\-expression analysis based on the FCBF \(Fast Correlation\-Based Filter\) algorithm. it was implemented especifically to deal with single\-cell data. The modules found can be used to redefine cell populations\, unrevel novel gene associations and predict gene function by guilt\-by\-association. The package structure is adapted from the CEMiTool package\, relying on visualizations and code designed and written by CEMiTool\'s authors.


.. conda:package:: bioconductor-fcoex

   |downloads_bioconductor-fcoex| |docker_bioconductor-fcoex|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.6.0,<4.7.0``
   :depends bioconductor-fcbf: ``>=2.6.0,<2.7.0``
   :depends bioconductor-pathwaypca: ``>=1.14.0,<1.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-matrix: 
   :depends r-network: 
   :depends r-progress: 
   :depends r-scales: 
   :depends r-sna: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fcoex

   and update with::

      conda update bioconductor-fcoex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fcoex:<tag>

   (see `bioconductor-fcoex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fcoex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fcoex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fcoex
   :alt:   (downloads)
.. |docker_bioconductor-fcoex| image:: https://quay.io/repository/biocontainers/bioconductor-fcoex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fcoex
.. _`bioconductor-fcoex/tags`: https://quay.io/repository/biocontainers/bioconductor-fcoex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fcoex";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fcoex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fcoex/README.html