:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomeprofiler'
.. highlight: bash

bioconductor-microbiomeprofiler
===============================

.. conda:recipe:: bioconductor-microbiomeprofiler
   :replaces_section_title:
   :noindex:

   An R\/shiny package for microbiome functional enrichment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MicrobiomeProfiler.html
   :license: GPL-2
   :recipe: /`bioconductor-microbiomeprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeprofiler/meta.yaml>`_

   This is an R\/shiny package to perform functional enrichment analysis for microbiome data. This package was based on clusterProfiler. Moreover\, MicrobiomeProfiler support KEGG enrichment analysis\, COG enrichment analysis\, Microbe\-Disease association enrichment analysis\, Metabo\-Pathway analysis.


.. conda:package:: bioconductor-microbiomeprofiler

   |downloads_bioconductor-microbiomeprofiler| |docker_bioconductor-microbiomeprofiler|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-enrichplot: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-config: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-golem: 
   :depends r-gson: 
   :depends r-htmltools: 
   :depends r-magrittr: 
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinycustomloader: 
   :depends r-shinywidgets: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-microbiomeprofiler

   and update with::

      mamba update bioconductor-microbiomeprofiler

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiomeprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomeprofiler:<tag>

   (see `bioconductor-microbiomeprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomeprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomeprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomeprofiler
   :alt:   (downloads)
.. |docker_bioconductor-microbiomeprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler
.. _`bioconductor-microbiomeprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomeprofiler";
        var versions = ["1.8.0","1.6.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomeprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomeprofiler/README.html