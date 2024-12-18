:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneexpressionsignature'
.. highlight: bash

bioconductor-geneexpressionsignature
====================================

.. conda:recipe:: bioconductor-geneexpressionsignature
   :replaces_section_title:
   :noindex:

   Gene Expression Signature based Similarity Metric

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GeneExpressionSignature.html
   :license: GPL-2
   :recipe: /`bioconductor-geneexpressionsignature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneexpressionsignature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneexpressionsignature/meta.yaml>`_

   This package gives the implementations of the gene expression signature and its distance to each. Gene expression signature is represented as a list of genes whose expression is correlated with a biological state of interest. And its distance is defined using a nonparametric\, rank\-based pattern\-matching strategy based on the Kolmogorov\-Smirnov statistic. Gene expression signature and its distance can be used to detect similarities among the signatures of drugs\, diseases\, and biological states of interest.


.. conda:package:: bioconductor-geneexpressionsignature

   |downloads_bioconductor-geneexpressionsignature| |docker_bioconductor-geneexpressionsignature|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-geneexpressionsignature

   and update with::

      mamba update bioconductor-geneexpressionsignature

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneexpressionsignature

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneexpressionsignature:<tag>

   (see `bioconductor-geneexpressionsignature/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneexpressionsignature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneexpressionsignature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneexpressionsignature
   :alt:   (downloads)
.. |docker_bioconductor-geneexpressionsignature| image:: https://quay.io/repository/biocontainers/bioconductor-geneexpressionsignature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneexpressionsignature
.. _`bioconductor-geneexpressionsignature/tags`: https://quay.io/repository/biocontainers/bioconductor-geneexpressionsignature?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneexpressionsignature";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneexpressionsignature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneexpressionsignature/README.html