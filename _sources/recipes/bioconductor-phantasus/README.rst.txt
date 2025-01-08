:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phantasus'
.. highlight: bash

bioconductor-phantasus
======================

.. conda:recipe:: bioconductor-phantasus
   :replaces_section_title:
   :noindex:

   Visual and interactive gene expression analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/phantasus.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phantasus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phantasus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phantasus/meta.yaml>`_

   Phantasus is a web\-application for visual and interactive gene expression analysis. Phantasus is based on Morpheus – a web\-based software for heatmap visualisation and analysis\, which was integrated with an R environment via OpenCPU API. Aside from basic visualization and filtering methods\, R\-based methods such as k\-means clustering\, principal component analysis or differential expression analysis with limma package are supported.


.. conda:package:: bioconductor-phantasus

   |downloads_bioconductor-phantasus| |docker_bioconductor-phantasus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.2-0</code>,  <code>1.20.2-0</code>,  <code>1.18.2-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.2-0``,  ``1.20.2-0``,  ``1.18.2-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-apeglm: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-geoquery: ``>=2.74.0,<2.75.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-phantasuslite: ``>=1.4.0,<1.5.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rhdf5client: ``>=1.28.0,<1.29.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ccapp: 
   :depends r-config: ``>=0.3.2``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-fs: 
   :depends r-ggplot2: 
   :depends r-gtable: 
   :depends r-htmltools: 
   :depends r-httpuv: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-opencpu: 
   :depends r-pheatmap: 
   :depends r-protolite: 
   :depends r-rook: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-svglite: 
   :depends r-tidyr: 
   :depends r-xml: 
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

      mamba install bioconductor-phantasus

   and update with::

      mamba update bioconductor-phantasus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phantasus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phantasus:<tag>

   (see `bioconductor-phantasus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phantasus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phantasus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phantasus
   :alt:   (downloads)
.. |docker_bioconductor-phantasus| image:: https://quay.io/repository/biocontainers/bioconductor-phantasus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phantasus
.. _`bioconductor-phantasus/tags`: https://quay.io/repository/biocontainers/bioconductor-phantasus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phantasus";
        var versions = ["1.26.0","1.22.2","1.20.2","1.18.2","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phantasus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phantasus/README.html