:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdd'
.. highlight: bash

bioconductor-scdd
=================

.. conda:recipe:: bioconductor-scdd
   :replaces_section_title:
   :noindex:

   Mixture modeling of single\-cell RNA\-seq data to identify genes with differential distributions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDD.html
   :license: GPL-2
   :recipe: /`bioconductor-scdd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdd/meta.yaml>`_

   This package implements a method to analyze single\-cell RNA\- seq Data utilizing flexible Dirichlet Process mixture models. Genes with differential distributions of expression are classified into several interesting patterns of differences between two conditions. The package also includes functions for simulating data with these patterns from negative binomial distributions.


.. conda:package:: bioconductor-scdd

   |downloads_bioconductor-scdd| |docker_bioconductor-scdd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-ebseq: ``>=2.4.0,<2.5.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-arm: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-outliers: 
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

      mamba install bioconductor-scdd

   and update with::

      mamba update bioconductor-scdd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdd:<tag>

   (see `bioconductor-scdd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdd
   :alt:   (downloads)
.. |docker_bioconductor-scdd| image:: https://quay.io/repository/biocontainers/bioconductor-scdd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdd
.. _`bioconductor-scdd/tags`: https://quay.io/repository/biocontainers/bioconductor-scdd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdd";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdd/README.html