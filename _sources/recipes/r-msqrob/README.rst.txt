:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-msqrob'
.. highlight: bash

r-msqrob
========

.. conda:recipe:: r-msqrob
   :replaces_section_title:
   :noindex:

   Robust statistical inference for quantitative LC\-MS proteomics.

   :homepage: https://github.com/statOmics/MSqRob
   :license: GPL (>= 2)
   :recipe: /`r-msqrob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-msqrob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-msqrob/meta.yaml>`_

   


.. conda:package:: r-msqrob

   |downloads_r-msqrob| |docker_r-msqrob|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-4</code>,  <code>0.7.7-3</code>,  <code>0.7.7-2</code>,  <code>0.7.7-1</code>,  <code>0.7.7-0</code>,  <code>0.7.6-3</code>,  <code>0.7.6-2</code>,  <code>0.7.6-1</code>,  <code>0.7.6-0</code>,  </span></summary>
      

      ``0.7.7-4``,  ``0.7.7-3``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.6-3``,  ``0.7.6-2``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-1``,  ``0.7.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affyio: 
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biocinstaller: 
   :depends bioconductor-biocparallel: 
   :depends bioconductor-limma: 
   :depends bioconductor-msnbase: 
   :depends bioconductor-mzid: 
   :depends bioconductor-mzr: 
   :depends bioconductor-protgenerics: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colorspace: 
   :depends r-dichromat: 
   :depends r-dt: 
   :depends r-fdrtool: 
   :depends r-ggplot2: 
   :depends r-gtable: 
   :depends r-htmlwidgets: 
   :depends r-httpuv: 
   :depends r-labeling: 
   :depends r-lazyeval: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-maldiquant: 
   :depends r-miniui: 
   :depends r-minqa: 
   :depends r-munsell: 
   :depends r-nloptr: 
   :depends r-numderiv: 
   :depends r-openxlsx: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-snow: 
   :depends r-statmod: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-svdialogs: 
   :depends r-tibble: 
   :depends r-xml: 
   :depends r-xtable: 
   :depends r-yaml: 
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

      mamba install r-msqrob

   and update with::

      mamba update r-msqrob

  To create a new environment, run::

      mamba create --name myenvname r-msqrob

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-msqrob:<tag>

   (see `r-msqrob/tags`_ for valid values for ``<tag>``)


.. |downloads_r-msqrob| image:: https://img.shields.io/conda/dn/bioconda/r-msqrob.svg?style=flat
   :target: https://anaconda.org/bioconda/r-msqrob
   :alt:   (downloads)
.. |docker_r-msqrob| image:: https://quay.io/repository/biocontainers/r-msqrob/status
   :target: https://quay.io/repository/biocontainers/r-msqrob
.. _`r-msqrob/tags`: https://quay.io/repository/biocontainers/r-msqrob?tab=tags


.. raw:: html

    <script>
        var package = "r-msqrob";
        var versions = ["0.7.7","0.7.7","0.7.7","0.7.7","0.7.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-msqrob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-msqrob/README.html