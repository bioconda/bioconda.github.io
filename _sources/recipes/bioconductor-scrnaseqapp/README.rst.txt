:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrnaseqapp'
.. highlight: bash

bioconductor-scrnaseqapp
========================

.. conda:recipe:: bioconductor-scrnaseqapp
   :replaces_section_title:
   :noindex:

   A single\-cell RNAseq Shiny app\-package

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scRNAseqApp.html
   :license: GPL-3
   :recipe: /`bioconductor-scrnaseqapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseqapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseqapp/meta.yaml>`_

   The scRNAseqApp is a Shiny app package designed for interactive visualization of single\-cell data. It is an enhanced version derived from the ShinyCell\, repackaged to accommodate multiple datasets. The app enables users to visualize data containing various types of information simultaneously\, facilitating comprehensive analysis. Additionally\, it includes a user management system to regulate database accessibility for different users.


.. conda:package:: bioconductor-scrnaseqapp

   |downloads_bioconductor-scrnaseqapp| |docker_bioconductor-scrnaseqapp|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-slingshot: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bibtex: 
   :depends r-bslib: 
   :depends r-circlize: 
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-dt: 
   :depends r-ggdendro: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-htmltools: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-refmanager: 
   :depends r-rsqlite: 
   :depends r-scales: 
   :depends r-scrypt: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-shiny: 
   :depends r-shinyhelper: 
   :depends r-shinymanager: 
   :depends r-sortable: 
   :depends r-xfun: 
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

      mamba install bioconductor-scrnaseqapp

   and update with::

      mamba update bioconductor-scrnaseqapp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scrnaseqapp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scrnaseqapp:<tag>

   (see `bioconductor-scrnaseqapp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scrnaseqapp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scrnaseqapp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scrnaseqapp
   :alt:   (downloads)
.. |docker_bioconductor-scrnaseqapp| image:: https://quay.io/repository/biocontainers/bioconductor-scrnaseqapp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scrnaseqapp
.. _`bioconductor-scrnaseqapp/tags`: https://quay.io/repository/biocontainers/bioconductor-scrnaseqapp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scrnaseqapp";
        var versions = ["1.6.0","1.2.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scrnaseqapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scrnaseqapp/README.html