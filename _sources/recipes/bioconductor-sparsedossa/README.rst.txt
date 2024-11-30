:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsedossa'
.. highlight: bash

bioconductor-sparsedossa
========================

.. conda:recipe:: bioconductor-sparsedossa
   :replaces_section_title:
   :noindex:

   Sparse Data Observations for Simulating Synthetic Abundance

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sparseDOSSA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sparsedossa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsedossa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsedossa/meta.yaml>`_

   The package is to provide a model based Bayesian method to characterize and simulate microbiome data. sparseDOSSA\'s model captures the marginal distribution of each microbial feature as a truncated\, zero\-inflated log\-normal distribution\, with parameters distributed as a parent log\-normal distribution. The model can be effectively fit to reference microbial datasets in order to parameterize their microbes and communities\, or to simulate synthetic datasets of similar population structure. Most importantly\, it allows users to include both known feature\-feature and feature\-metadata correlation structures and thus provides a gold standard to enable benchmarking of statistical methods for metagenomic data analysis.


.. conda:package:: bioconductor-sparsedossa

   |downloads_bioconductor-sparsedossa| |docker_bioconductor-sparsedossa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-mcmcpack: 
   :depends r-optparse: 
   :depends r-tmvtnorm: ``>=1.4.10``
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

      mamba install bioconductor-sparsedossa

   and update with::

      mamba update bioconductor-sparsedossa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sparsedossa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparsedossa:<tag>

   (see `bioconductor-sparsedossa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsedossa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsedossa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsedossa
   :alt:   (downloads)
.. |docker_bioconductor-sparsedossa| image:: https://quay.io/repository/biocontainers/bioconductor-sparsedossa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsedossa
.. _`bioconductor-sparsedossa/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsedossa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsedossa";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsedossa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsedossa/README.html