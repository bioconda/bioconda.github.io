:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionetstat'
.. highlight: bash

bioconductor-bionetstat
=======================

.. conda:recipe:: bioconductor-bionetstat
   :replaces_section_title:
   :noindex:

   Biological Network Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BioNetStat.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-bionetstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionetstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionetstat/meta.yaml>`_

   A package to perform differential network analysis\, differential node analysis \(differential coexpression analysis\)\, network and metabolic pathways view.


.. conda:package:: bioconductor-bionetstat

   |downloads_bioconductor-bionetstat| |docker_bioconductor-bionetstat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.2-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-pathview: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-psych: 
   :depends r-rcolorbrewer: 
   :depends r-rjsonio: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-whisker: 
   :depends r-yaml: 
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

      mamba install bioconductor-bionetstat

   and update with::

      mamba update bioconductor-bionetstat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bionetstat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bionetstat:<tag>

   (see `bioconductor-bionetstat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bionetstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionetstat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionetstat
   :alt:   (downloads)
.. |docker_bioconductor-bionetstat| image:: https://quay.io/repository/biocontainers/bioconductor-bionetstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionetstat
.. _`bioconductor-bionetstat/tags`: https://quay.io/repository/biocontainers/bioconductor-bionetstat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionetstat";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionetstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionetstat/README.html