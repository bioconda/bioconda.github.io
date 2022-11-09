:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparrow'
.. highlight: bash

bioconductor-sparrow
====================

.. conda:recipe:: bioconductor-sparrow
   :replaces_section_title:
   :noindex:

   Take command of set enrichment analyses through a unified interface

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sparrow.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sparrow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparrow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparrow/meta.yaml>`_

   Provides a unified interface to a variety of GSEA techniques from different bioconductor packages. Results are harmonized into a single object and can be interrogated uniformly for quick exploration and interpretation of results. Interactive exploration of GSEA results is enabled through a shiny app provided by a sparrow.shiny sibling package.


.. conda:package:: bioconductor-sparrow

   |downloads_bioconductor-sparrow| |docker_bioconductor-sparrow|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocset: ``>=1.12.0,<1.13.0``
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.20.0,<1.21.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-gseabase: ``>=1.60.0,<1.61.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends r-babelgene: ``>=21.4``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-checkmate: 
   :depends r-circlize: 
   :depends r-data.table: ``>=1.10.4``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-plotly: ``>=4.9.0``
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sparrow

   and update with::

      conda update bioconductor-sparrow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparrow:<tag>

   (see `bioconductor-sparrow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparrow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparrow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparrow
   :alt:   (downloads)
.. |docker_bioconductor-sparrow| image:: https://quay.io/repository/biocontainers/bioconductor-sparrow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparrow
.. _`bioconductor-sparrow/tags`: https://quay.io/repository/biocontainers/bioconductor-sparrow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparrow";
        var versions = ["1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparrow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparrow/README.html