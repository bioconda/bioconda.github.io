:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-desubs'
.. highlight: bash

bioconductor-desubs
===================

.. conda:recipe:: bioconductor-desubs
   :replaces_section_title:
   :noindex:

   DEsubs\: an R package for flexible identification of differentially expressed subpathways using RNA\-seq expression experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DEsubs.html
   :license: GPL-3
   :recipe: /`bioconductor-desubs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desubs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desubs/meta.yaml>`_

   DEsubs is a network\-based systems biology package that extracts disease\-perturbed subpathways within a pathway network as recorded by RNA\-seq experiments. It contains an extensive and customizable framework covering a broad range of operation modes at all stages of the subpathway analysis\, enabling a case\-specific approach. The operation modes refer to the pathway network construction and processing\, the subpathway extraction\, visualization and enrichment analysis with regard to various biological and pharmacological features. Its capabilities render it a tool\-guide for both the modeler and experimentalist for the identification of more robust systems\-level biomarkers for complex diseases.


.. conda:package:: bioconductor-desubs

   |downloads_bioconductor-desubs| |docker_bioconductor-desubs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.1-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-1``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-ebseq: ``>=2.0.0,<2.1.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-locfit: 
   :depends r-matrix: 
   :depends r-nbpseq: 
   :depends r-pheatmap: 
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

      mamba install bioconductor-desubs

   and update with::

      mamba update bioconductor-desubs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-desubs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-desubs:<tag>

   (see `bioconductor-desubs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-desubs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desubs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-desubs
   :alt:   (downloads)
.. |docker_bioconductor-desubs| image:: https://quay.io/repository/biocontainers/bioconductor-desubs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desubs
.. _`bioconductor-desubs/tags`: https://quay.io/repository/biocontainers/bioconductor-desubs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-desubs";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desubs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desubs/README.html