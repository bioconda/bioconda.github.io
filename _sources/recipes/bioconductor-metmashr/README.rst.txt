:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metmashr'
.. highlight: bash

bioconductor-metmashr
=====================

.. conda:recipe:: bioconductor-metmashr
   :replaces_section_title:
   :noindex:

   Metabolite Mashing with R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetMashR.html
   :license: GPL-3
   :recipe: /`bioconductor-metmashr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metmashr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metmashr/meta.yaml>`_

   A package to merge\, filter sort\, organise and otherwise mash together metabolite annotation tables. Metabolite annotations can be imported from multiple sources \(software\) and combined using workflow steps based on S4 class templates derived from the \`struct\` package. Other modular workflow steps such as filtering\, merging\, splitting\, normalisation and rest\-api queries are included.


.. conda:package:: bioconductor-metmashr

   |downloads_bioconductor-metmashr| |docker_bioconductor-metmashr|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: 
   :depends bioconductor-biocstyle: 
   :depends bioconductor-compounddb: 
   :depends bioconductor-go.db: 
   :depends bioconductor-keggrest: 
   :depends bioconductor-metabolomicsworkbenchr: 
   :depends bioconductor-mspurity: 
   :depends bioconductor-rgoslin: 
   :depends bioconductor-struct: ``>=1.18.0,<1.19.0``
   :depends bioconductor-structtoolbox: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-complexupset: 
   :depends r-covr: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-ggvenndiagram: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-magick: 
   :depends r-openxlsx: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-rsqlite: 
   :depends r-rsvg: 
   :depends r-rvenn: 
   :depends r-scales: 
   :depends r-testthat: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-tidytext: 
   :depends r-xml: 
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

      mamba install bioconductor-metmashr

   and update with::

      mamba update bioconductor-metmashr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metmashr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metmashr:<tag>

   (see `bioconductor-metmashr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metmashr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metmashr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metmashr
   :alt:   (downloads)
.. |docker_bioconductor-metmashr| image:: https://quay.io/repository/biocontainers/bioconductor-metmashr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metmashr
.. _`bioconductor-metmashr/tags`: https://quay.io/repository/biocontainers/bioconductor-metmashr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metmashr";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metmashr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metmashr/README.html