:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spiat'
.. highlight: bash

bioconductor-spiat
==================

.. conda:recipe:: bioconductor-spiat
   :replaces_section_title:
   :noindex:

   Spatial Image Analysis of Tissues

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SPIAT.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-spiat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiat/meta.yaml>`_

   SPIAT \(\*\*Sp\*\*atial \*\*I\*\*mage \*\*A\*\*nalysis of \*\*T\*\*issues\) is an R package with a suite of data processing\, quality control\, visualization and data analysis tools. SPIAT is compatible with data generated from single\-cell spatial proteomics platforms \(e.g. OPAL\, CODEX\, MIBI\, cellprofiler\). SPIAT reads spatial data in the form of X and Y coordinates of cells\, marker intensities and cell phenotypes. SPIAT includes six analysis modules that allow visualization\, calculation of cell colocalization\, categorization of the immune microenvironment relative to tumor areas\, analysis of cellular neighborhoods\, and the quantification of spatial heterogeneity\, providing a comprehensive toolkit for spatial data analysis.


.. conda:package:: bioconductor-spiat

   |downloads_bioconductor-spiat| |docker_bioconductor-spiat|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-dittoseq: ``>=1.18.0,<1.19.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-apcluster: ``>=1.4.7``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbscan: ``>=1.1-5``
   :depends r-dplyr: ``>=0.8.3``
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-gtools: ``>=3.8.1``
   :depends r-mmand: ``>=1.5.4``
   :depends r-pracma: ``>=2.2.5``
   :depends r-rann: ``>=2.6.1``
   :depends r-raster: 
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rlang: 
   :depends r-sp: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
   :depends r-tibble: ``>=2.1.3``
   :depends r-vroom: 
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

      mamba install bioconductor-spiat

   and update with::

      mamba update bioconductor-spiat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spiat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spiat:<tag>

   (see `bioconductor-spiat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spiat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spiat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spiat
   :alt:   (downloads)
.. |docker_bioconductor-spiat| image:: https://quay.io/repository/biocontainers/bioconductor-spiat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spiat
.. _`bioconductor-spiat/tags`: https://quay.io/repository/biocontainers/bioconductor-spiat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spiat";
        var versions = ["1.8.0","1.4.1","1.2.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spiat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spiat/README.html