:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-twilight'
.. highlight: bash

bioconductor-twilight
=====================

.. conda:recipe:: bioconductor-twilight
   :replaces_section_title:
   :noindex:

   Estimation of local false discovery rate

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/twilight.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-twilight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight/meta.yaml>`_
   :links: biotools: :biotools:`twilight`, doi: :doi:`10.1093/bioinformatics/bti436`

   In a typical microarray setting with gene expression data observed under two conditions\, the local false discovery rate describes the probability that a gene is not differentially expressed between the two conditions given its corrresponding observed score or p\-value level. The resulting curve of p\-values versus local false discovery rate offers an insight into the twilight zone between clear differential and clear non\-differential gene expression. Package \'twilight\' contains two main functions\: Function twilight.pval performs a two\-condition test on differences in means for a given input matrix or expression set and computes permutation based p\-values. Function twilight performs a stochastic downhill search to estimate local false discovery rates and effect size distributions. The package further provides means to filter for permutations that describe the null distribution correctly. Using filtered permutations\, the influence of hidden confounders could be diminished.


.. conda:package:: bioconductor-twilight

   |downloads_bioconductor-twilight| |docker_bioconductor-twilight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-twilight

   and update with::

      mamba update bioconductor-twilight

  To create a new environment, run::

      mamba create --name myenvname bioconductor-twilight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-twilight:<tag>

   (see `bioconductor-twilight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-twilight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-twilight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-twilight
   :alt:   (downloads)
.. |docker_bioconductor-twilight| image:: https://quay.io/repository/biocontainers/bioconductor-twilight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-twilight
.. _`bioconductor-twilight/tags`: https://quay.io/repository/biocontainers/bioconductor-twilight?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-twilight";
        var versions = ["1.76.0","1.74.0","1.74.0","1.70.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-twilight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-twilight/README.html