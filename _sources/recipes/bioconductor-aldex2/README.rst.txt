:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aldex2'
.. highlight: bash

bioconductor-aldex2
===================

.. conda:recipe:: bioconductor-aldex2
   :replaces_section_title:
   :noindex:

   Analysis Of Differential Abundance Taking Sample Variation Into Account

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ALDEx2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-aldex2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2/meta.yaml>`_
   :links: biotools: :biotools:`aldex2`

   A differential abundance analysis for the comparison of two or more conditions. Useful for analyzing data from standard RNA\-seq or meta\-RNA\-seq assays as well as selected and unselected values from in\-vitro sequence selections. Uses a Dirichlet\-multinomial model to infer abundance from counts\, optimized for three or more experimental replicates. The method infers biological and sampling variation to calculate the expected false discovery rate\, given the variation\, based on a Wilcoxon Rank Sum test and Welch\'s t\-test \(via aldex.ttest\)\, a Kruskal\-Wallis test \(via aldex.kw\)\, a generalized linear model \(via aldex.glm\)\, or a correlation test \(via aldex.corr\). All tests report p\-values and Benjamini\-Hochberg corrected p\-values. ALDEx2 also calculates expected standardized effect sizes for paired or unpaired study designs.


.. conda:package:: bioconductor-aldex2

   |downloads_bioconductor-aldex2| |docker_bioconductor-aldex2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rfast: 
   :depends r-zcompositions: 
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

      mamba install bioconductor-aldex2

   and update with::

      mamba update bioconductor-aldex2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aldex2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aldex2:<tag>

   (see `bioconductor-aldex2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aldex2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aldex2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aldex2
   :alt:   (downloads)
.. |docker_bioconductor-aldex2| image:: https://quay.io/repository/biocontainers/bioconductor-aldex2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aldex2
.. _`bioconductor-aldex2/tags`: https://quay.io/repository/biocontainers/bioconductor-aldex2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aldex2";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aldex2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aldex2/README.html