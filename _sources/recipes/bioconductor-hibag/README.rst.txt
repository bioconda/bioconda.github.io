:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hibag'
.. highlight: bash

bioconductor-hibag
==================

.. conda:recipe:: bioconductor-hibag
   :replaces_section_title:
   :noindex:

   HLA Genotype Imputation with Attribute Bagging

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HIBAG.html
   :license: GPL-3
   :recipe: /`bioconductor-hibag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hibag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hibag/meta.yaml>`_
   :links: biotools: :biotools:`hibag`

   Imputes HLA classical alleles using GWAS SNP data\, and it relies on a training set of HLA and SNP genotypes. HIBAG can be used by researchers with published parameter estimates instead of requiring access to large training sample datasets. It combines the concepts of attribute bagging\, an ensemble classifier method\, with haplotype inference for SNPs and HLA types. Attribute bagging is a technique which improves the accuracy and stability of classifier ensembles using bootstrap aggregating and random variable selection.


.. conda:package:: bioconductor-hibag

   |downloads_bioconductor-hibag| |docker_bioconductor-hibag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.2-1</code>,  <code>1.30.2-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.1-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.2-1``,  ``1.30.2-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcppparallel: ``>=5.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hibag

   and update with::

      mamba update bioconductor-hibag

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hibag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hibag:<tag>

   (see `bioconductor-hibag/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hibag| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hibag.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hibag
   :alt:   (downloads)
.. |docker_bioconductor-hibag| image:: https://quay.io/repository/biocontainers/bioconductor-hibag/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hibag
.. _`bioconductor-hibag/tags`: https://quay.io/repository/biocontainers/bioconductor-hibag?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hibag";
        var versions = ["1.36.0","1.34.0","1.34.0","1.30.2","1.30.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hibag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hibag/README.html