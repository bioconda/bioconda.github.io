:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosummaries'
.. highlight: bash

bioconductor-gosummaries
========================

.. conda:recipe:: bioconductor-gosummaries
   :replaces_section_title:
   :noindex:

   Word cloud summaries of GO enrichment analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GOsummaries.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gosummaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries/meta.yaml>`_

   A package to visualise Gene Ontology \(GO\) enrichment analysis results on gene lists arising from different analyses such clustering or PCA. The significant GO categories are visualised as word clouds that can be combined with different plots summarising the underlying data.


.. conda:package:: bioconductor-gosummaries

   |downloads_bioconductor-gosummaries| |docker_bioconductor-gosummaries|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.37.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.30.0-2</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  </span></summary>
      

      ``2.37.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.30.0-2``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gprofiler: 
   :depends r-gtable: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-reshape2: 
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

      mamba install bioconductor-gosummaries

   and update with::

      mamba update bioconductor-gosummaries

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gosummaries

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosummaries:<tag>

   (see `bioconductor-gosummaries/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosummaries| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosummaries.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosummaries
   :alt:   (downloads)
.. |docker_bioconductor-gosummaries| image:: https://quay.io/repository/biocontainers/bioconductor-gosummaries/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosummaries
.. _`bioconductor-gosummaries/tags`: https://quay.io/repository/biocontainers/bioconductor-gosummaries?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gosummaries";
        var versions = ["2.37.0","2.36.0","2.34.0","2.34.0","2.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html