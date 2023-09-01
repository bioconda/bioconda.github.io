:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-branchpointer'
.. highlight: bash

bioconductor-branchpointer
==========================

.. conda:recipe:: bioconductor-branchpointer
   :replaces_section_title:
   :noindex:

   Prediction of intronic splicing branchpoints

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/branchpointer.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-branchpointer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-branchpointer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-branchpointer/meta.yaml>`_

   Predicts branchpoint probability for sites in intronic branchpoint windows. Queries can be supplied as intronic regions\; or to evaluate the effects of mutations\, SNPs.


.. conda:package:: bioconductor-branchpointer

   |downloads_bioconductor-branchpointer| |docker_bioconductor-branchpointer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-gbm: 
   :depends r-ggplot2: 
   :depends r-kernlab: 
   :depends r-plyr: 
   :depends r-stringr: 
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

      mamba install bioconductor-branchpointer

   and update with::

      mamba update bioconductor-branchpointer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-branchpointer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-branchpointer:<tag>

   (see `bioconductor-branchpointer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-branchpointer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-branchpointer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-branchpointer
   :alt:   (downloads)
.. |docker_bioconductor-branchpointer| image:: https://quay.io/repository/biocontainers/bioconductor-branchpointer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-branchpointer
.. _`bioconductor-branchpointer/tags`: https://quay.io/repository/biocontainers/bioconductor-branchpointer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-branchpointer";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-branchpointer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-branchpointer/README.html