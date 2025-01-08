:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcaexplorer'
.. highlight: bash

bioconductor-pcaexplorer
========================

.. conda:recipe:: bioconductor-pcaexplorer
   :replaces_section_title:
   :noindex:

   Interactive Visualization of RNA\-seq Data Using a Principal Components Approach

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pcaExplorer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcaexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcaexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcaexplorer/meta.yaml>`_
   :links: biotools: :biotools:`pcaexplorer`, doi: :doi:`10.18547/gcb.2017.vol3.iss1.e39`

   This package provides functionality for interactive visualization of RNA\-seq datasets based on Principal Components Analysis. The methods provided allow for quick information extraction and effective data exploration. A Shiny application encapsulates the whole analysis.


.. conda:package:: bioconductor-pcaexplorer

   |downloads_bioconductor-pcaexplorer| |docker_bioconductor-pcaexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.1-0</code>,  <code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.28.0-0``,  ``2.26.1-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-gostats: ``>=2.72.0,<2.73.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-mosdef: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-topgo: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-dt: 
   :depends r-ggplot2: ``>=2.0.0``
   :depends r-ggrepel: 
   :depends r-heatmaply: 
   :depends r-knitr: 
   :depends r-nmf: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-shiny: ``>=0.12.0``
   :depends r-shinyace: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-threejs: 
   :depends r-tidyr: 
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

      mamba install bioconductor-pcaexplorer

   and update with::

      mamba update bioconductor-pcaexplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pcaexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcaexplorer:<tag>

   (see `bioconductor-pcaexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcaexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcaexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcaexplorer
   :alt:   (downloads)
.. |docker_bioconductor-pcaexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-pcaexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcaexplorer
.. _`bioconductor-pcaexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-pcaexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pcaexplorer";
        var versions = ["3.0.0","2.28.0","2.26.1","2.24.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcaexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcaexplorer/README.html