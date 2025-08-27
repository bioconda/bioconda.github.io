:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lea'
.. highlight: bash

bioconductor-lea
================

.. conda:recipe:: bioconductor-lea
   :replaces_section_title:
   :noindex:

   LEA\: an R package for Landscape and Ecological Association Studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LEA.html
   :license: GPL-3
   :recipe: /`bioconductor-lea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lea/meta.yaml>`_

   LEA is an R package dedicated to population genomics\, landscape genomics and genotype\-environment association tests. LEA can run analyses of population structure and genome\-wide tests for local adaptation\, and also performs imputation of missing genotypes. The package includes statistical methods for estimating ancestry coefficients from large genotypic matrices and for evaluating the number of ancestral populations \(snmf\). It performs statistical tests using latent factor mixed models for identifying genetic polymorphisms that exhibit association with environmental gradients or phenotypic traits \(lfmm2\). In addition\, LEA computes values of genetic offset statistics based on new or predicted environments \(genetic.gap\, genetic.offset\). LEA is mainly based on optimized programs that can scale with the dimensions of large data sets.


.. conda:package:: bioconductor-lea

   |downloads_bioconductor-lea| |docker_bioconductor-lea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.2-0</code>,  <code>3.10.0-1</code>,  <code>3.10.0-0</code>,  <code>3.6.0-2</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.4.0-0</code>,  </span></summary>
      

      ``3.18.0-0``,  ``3.14.0-0``,  ``3.12.2-0``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.6.0-2``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.4.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-lea

   and update with::

      mamba update bioconductor-lea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lea:<tag>

   (see `bioconductor-lea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lea
   :alt:   (downloads)
.. |docker_bioconductor-lea| image:: https://quay.io/repository/biocontainers/bioconductor-lea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lea
.. _`bioconductor-lea/tags`: https://quay.io/repository/biocontainers/bioconductor-lea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lea";
        var versions = ["3.18.0","3.14.0","3.12.2","3.10.0","3.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lea/README.html