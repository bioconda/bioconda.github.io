:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichplot'
.. highlight: bash

bioconductor-enrichplot
=======================

.. conda:recipe:: bioconductor-enrichplot
   :replaces_section_title:
   :noindex:

   Visualization of Functional Enrichment Result

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/enrichplot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enrichplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichplot/meta.yaml>`_

   The \'enrichplot\' package implements several visualization methods for interpreting functional enrichment results obtained from ORA or GSEA analysis. It is mainly designed to work with the \'clusterProfiler\' package suite. All the visualization methods are developed based on \'ggplot2\' graphics.


.. conda:package:: bioconductor-enrichplot

   |downloads_bioconductor-enrichplot| |docker_bioconductor-enrichplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.2-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.26.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dose: ``>=4.0.0,<4.1.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends bioconductor-gosemsim: ``>=2.32.0,<2.33.0``
   :depends r-aplot: ``>=0.2.1``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggfun: ``>=0.1.7``
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggrepel: ``>=0.9.0``
   :depends r-ggtangle: ``>=0.0.4``
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scatterpie: 
   :depends r-yulab.utils: ``>=0.1.6``
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

      mamba install bioconductor-enrichplot

   and update with::

      mamba update bioconductor-enrichplot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enrichplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichplot:<tag>

   (see `bioconductor-enrichplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichplot
   :alt:   (downloads)
.. |docker_bioconductor-enrichplot| image:: https://quay.io/repository/biocontainers/bioconductor-enrichplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichplot
.. _`bioconductor-enrichplot/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichplot";
        var versions = ["1.26.1","1.22.0","1.20.0","1.18.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html