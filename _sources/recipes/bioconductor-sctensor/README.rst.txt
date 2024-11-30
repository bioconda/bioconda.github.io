:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctensor'
.. highlight: bash

bioconductor-sctensor
=====================

.. conda:recipe:: bioconductor-sctensor
   :replaces_section_title:
   :noindex:

   Detection of cell\-cell interaction from single\-cell RNA\-seq dataset by tensor decomposition

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scTensor.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctensor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctensor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctensor/meta.yaml>`_

   The algorithm is based on the non\-negative tucker decomposition \(NTD2\) of nnTensor.


.. conda:package:: bioconductor-sctensor

   |downloads_bioconductor-sctensor| |docker_bioconductor-sctensor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-category: ``>=2.68.0,<2.69.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-gostats: ``>=2.68.0,<2.69.0``
   :depends bioconductor-meshdbi: ``>=1.38.0,<1.39.0``
   :depends bioconductor-meshr: ``>=2.8.0,<2.9.0``
   :depends bioconductor-reactome.db: ``>=1.86.0,<1.87.0``
   :depends bioconductor-reactomepa: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-schex: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-cctensor: ``>=1.0.2``
   :depends r-checkmate: 
   :depends r-crayon: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-nntensor: ``>=1.1.5``
   :depends r-outliers: 
   :depends r-plotly: 
   :depends r-plotrix: 
   :depends r-rmarkdown: 
   :depends r-rsqlite: 
   :depends r-rtensor: ``>=1.4.8``
   :depends r-tagcloud: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-sctensor

   and update with::

      mamba update bioconductor-sctensor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sctensor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sctensor:<tag>

   (see `bioconductor-sctensor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sctensor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sctensor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sctensor
   :alt:   (downloads)
.. |docker_bioconductor-sctensor| image:: https://quay.io/repository/biocontainers/bioconductor-sctensor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sctensor
.. _`bioconductor-sctensor/tags`: https://quay.io/repository/biocontainers/bioconductor-sctensor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sctensor";
        var versions = ["2.12.0","2.10.0","2.8.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sctensor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sctensor/README.html