:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quaternaryprod'
.. highlight: bash

bioconductor-quaternaryprod
===========================

.. conda:recipe:: bioconductor-quaternaryprod
   :replaces_section_title:
   :noindex:

   Computes the Quaternary Dot Product Scoring Statistic for Signed and Unsigned Causal Graphs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/QuaternaryProd.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-quaternaryprod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quaternaryprod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quaternaryprod/meta.yaml>`_
   :links: biotools: :biotools:`quaternaryprod`

   QuaternaryProd is an R package that performs causal reasoning on biological networks\, including publicly available networks such as STRINGdb. QuaternaryProd is an open\-source alternative to commercial products such as Inginuity Pathway Analysis. For a given a set of differentially expressed genes\, QuaternaryProd computes the significance of upstream regulators in the network by performing causal reasoning using the Quaternary Dot Product Scoring Statistic \(Quaternary Statistic\)\, Ternary Dot product Scoring Statistic \(Ternary Statistic\) and Fisher\'s exact test \(Enrichment test\). The Quaternary Statistic handles signed\, unsigned and ambiguous edges in the network. Ambiguity arises when the direction of causality is unknown\, or when the source node \(e.g.\, a protein\) has edges with conflicting signs for the same target gene. On the other hand\, the Ternary Statistic provides causal reasoning using the signed and unambiguous edges only. The Vignette provides more details on the Quaternary Statistic and illustrates an example of how to perform causal reasoning using STRINGdb.


.. conda:package:: bioconductor-quaternaryprod

   |downloads_bioconductor-quaternaryprod| |docker_bioconductor-quaternaryprod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-rcpp: ``>=0.11.3``
   :depends r-yaml: ``>=2.1.18``
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

      mamba install bioconductor-quaternaryprod

   and update with::

      mamba update bioconductor-quaternaryprod

  To create a new environment, run::

      mamba create --name myenvname bioconductor-quaternaryprod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quaternaryprod:<tag>

   (see `bioconductor-quaternaryprod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quaternaryprod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quaternaryprod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quaternaryprod
   :alt:   (downloads)
.. |docker_bioconductor-quaternaryprod| image:: https://quay.io/repository/biocontainers/bioconductor-quaternaryprod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quaternaryprod
.. _`bioconductor-quaternaryprod/tags`: https://quay.io/repository/biocontainers/bioconductor-quaternaryprod?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-quaternaryprod";
        var versions = ["1.34.0","1.32.0","1.32.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quaternaryprod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quaternaryprod/README.html