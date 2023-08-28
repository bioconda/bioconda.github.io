:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrnaseqapp'
.. highlight: bash

bioconductor-scrnaseqapp
========================

.. conda:recipe:: bioconductor-scrnaseqapp
   :replaces_section_title:
   :noindex:

   A single\-cell RNAseq Shiny app\-package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scRNAseqApp.html
   :license: GPL-3
   :recipe: /`bioconductor-scrnaseqapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseqapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseqapp/meta.yaml>`_

   scRNAseqApp is a Shiny app package that allows users to visualize single cell data interactively. It was modified from ShinyCell and repackaged to a tool to show multiple data. It can visulize the data with multiple information side by side.


.. conda:package:: bioconductor-scrnaseqapp

   |downloads_bioconductor-scrnaseqapp| |docker_bioconductor-scrnaseqapp|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-slingshot: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bibtex: 
   :depends r-bslib: 
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-ggdendro: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-hdf5r: 
   :depends r-htmltools: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-refmanager: 
   :depends r-scales: 
   :depends r-scrypt: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-shiny: 
   :depends r-shinyhelper: 
   :depends r-shinymanager: 
   :depends r-xfun: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
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
        var versions = ["1.0.1"];
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