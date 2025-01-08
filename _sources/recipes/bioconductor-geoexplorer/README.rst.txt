:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geoexplorer'
.. highlight: bash

bioconductor-geoexplorer
========================

.. conda:recipe:: bioconductor-geoexplorer
   :replaces_section_title:
   :noindex:

   GEOexplorer\: a webserver for gene expression analysis and visualisation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GEOexplorer.html
   :license: GPL-3
   :recipe: /`bioconductor-geoexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoexplorer/meta.yaml>`_

   GEOexplorer is a webserver and R\/Bioconductor package and web application that enables users to perform gene expression analysis. The development of GEOexplorer was made possible because of the excellent code provided by GEO2R \(https\: \/\/www.ncbi.nlm.nih.gov\/geo\/geo2r\/\).


.. conda:package:: bioconductor-geoexplorer

   |downloads_bioconductor-geoexplorer| |docker_bioconductor-geoexplorer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-geoquery: ``>=2.74.0,<2.75.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-car: 
   :depends r-dt: 
   :depends r-enrichr: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-htmltools: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-r.utils: 
   :depends r-readxl: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinybusy: 
   :depends r-shinycssloaders: 
   :depends r-shinyheatmaply: 
   :depends r-stringr: 
   :depends r-umap: 
   :depends r-xfun: 
   :depends r-xml: 
   :depends r-xml2: 
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

      mamba install bioconductor-geoexplorer

   and update with::

      mamba update bioconductor-geoexplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geoexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geoexplorer:<tag>

   (see `bioconductor-geoexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geoexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geoexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geoexplorer
   :alt:   (downloads)
.. |docker_bioconductor-geoexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-geoexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geoexplorer
.. _`bioconductor-geoexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-geoexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geoexplorer";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geoexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geoexplorer/README.html