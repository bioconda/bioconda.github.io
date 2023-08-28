:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsshiny'
.. highlight: bash

bioconductor-msstatsshiny
=========================

.. conda:recipe:: bioconductor-msstatsshiny
   :replaces_section_title:
   :noindex:

   MSstats GUI for Statistical Anaylsis of Proteomics Experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MSstatsShiny.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsshiny/meta.yaml>`_

   MSstatsShiny is an R\-Shiny graphical user interface \(GUI\) integrated with the R packages MSstats\, MSstatsTMT\, and MSstatsPTM. It provides a point and click end\-to\-end analysis pipeline applicable to a wide variety of experimental designs. These include data\-dependedent acquisitions \(DDA\) which are label\-free or tandem mass tag \(TMT\)\-based\, as well as DIA\, SRM\, and PRM acquisitions and those targeting post\-translational modifications \(PTMs\). The application automatically saves users selections and builds an R script that recreates their analysis\, supporting reproducible data analysis.


.. conda:package:: bioconductor-msstatsshiny

   |downloads_bioconductor-msstatsshiny| |docker_bioconductor-msstatsshiny|

   :versions:
      
      

      ``1.2.3-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-marray: ``>=1.78.0,<1.79.0``
   :depends bioconductor-msstats: ``>=4.8.0,<4.9.0``
   :depends bioconductor-msstatsconvert: ``>=1.10.0,<1.11.0``
   :depends bioconductor-msstatsptm: ``>=2.2.0,<2.3.0``
   :depends bioconductor-msstatstmt: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-htmltools: 
   :depends r-readxl: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinybusy: 
   :depends r-shinyjs: 
   :depends r-tidyr: 
   :depends r-uuid: 
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

      mamba install bioconductor-msstatsshiny

   and update with::

      mamba update bioconductor-msstatsshiny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatsshiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsshiny:<tag>

   (see `bioconductor-msstatsshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsshiny
   :alt:   (downloads)
.. |docker_bioconductor-msstatsshiny| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsshiny
.. _`bioconductor-msstatsshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsshiny";
        var versions = ["1.2.3","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsshiny/README.html