:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribocrypt'
.. highlight: bash

bioconductor-ribocrypt
======================

.. conda:recipe:: bioconductor-ribocrypt
   :replaces_section_title:
   :noindex:

   Interactive visualization in genomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RiboCrypt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ribocrypt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribocrypt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribocrypt/meta.yaml>`_

   R Package for interactive visualization and browsing NGS data. It contains a browser for both transcript and genomic coordinate view. In addition a QC and general metaplots are included\, among others differential translation plots and gene expression plots. The package is still under development.


.. conda:package:: bioconductor-ribocrypt

   |downloads_bioconductor-ribocrypt| |docker_bioconductor-ribocrypt|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-orfik: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bslib: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-nglviewer: 
   :depends r-plotly: 
   :depends r-rcurl: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinyhelper: 
   :depends r-shinyjqui: 
   :depends r-stringr: 
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

      mamba install bioconductor-ribocrypt

   and update with::

      mamba update bioconductor-ribocrypt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ribocrypt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribocrypt:<tag>

   (see `bioconductor-ribocrypt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribocrypt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribocrypt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribocrypt
   :alt:   (downloads)
.. |docker_bioconductor-ribocrypt| image:: https://quay.io/repository/biocontainers/bioconductor-ribocrypt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribocrypt
.. _`bioconductor-ribocrypt/tags`: https://quay.io/repository/biocontainers/bioconductor-ribocrypt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribocrypt";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribocrypt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribocrypt/README.html