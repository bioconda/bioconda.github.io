:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-enchantr'
.. highlight: bash

r-enchantr
==========

.. conda:recipe:: r-enchantr
   :replaces_section_title:
   :noindex:

   Analysis of immune repertoires. QC and reports for the analysis of AIRR\-seq data with Immcantation

   :homepage: https://bitbucket.org/kleinstein/enchantr
   :license: AGPL / AGPL-3
   :recipe: /`r-enchantr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-enchantr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-enchantr/meta.yaml>`_

   


.. conda:package:: r-enchantr

   |downloads_r-enchantr| |docker_r-enchantr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  <code>0.1.0-2</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.14.0``
   :depends igphyml: ``1.1.5.*``
   :depends r-airr: ``>=1.4.1``
   :depends r-alakazam: ``>=1.2.1``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bookdown: ``>=0.29``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dowser: ``>=1.1.0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-scoper: ``>=1.2.1``
   :depends r-shazam: ``>1.1.0``
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-tidyr: 
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

      mamba install r-enchantr

   and update with::

      mamba update r-enchantr

  To create a new environment, run::

      mamba create --name myenvname r-enchantr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-enchantr:<tag>

   (see `r-enchantr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-enchantr| image:: https://img.shields.io/conda/dn/bioconda/r-enchantr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-enchantr
   :alt:   (downloads)
.. |docker_r-enchantr| image:: https://quay.io/repository/biocontainers/r-enchantr/status
   :target: https://quay.io/repository/biocontainers/r-enchantr
.. _`r-enchantr/tags`: https://quay.io/repository/biocontainers/r-enchantr?tab=tags


.. raw:: html

    <script>
        var package = "r-enchantr";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-enchantr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-enchantr/README.html