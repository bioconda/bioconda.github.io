:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deepsnv'
.. highlight: bash

bioconductor-deepsnv
====================

.. conda:recipe:: bioconductor-deepsnv
   :replaces_section_title:
   :noindex:

   Detection of subclonal SNVs in deep sequencing data.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/deepSNV.html
   :license: GPL-3
   :recipe: /`bioconductor-deepsnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv/meta.yaml>`_
   :links: biotools: :biotools:`deepsnv`

   This package provides provides quantitative variant callers for detecting subclonal mutations in ultra\-deep \(\>\=100x coverage\) sequencing experiments. The deepSNV algorithm is used for a comparative setup with a control experiment of the same loci and uses a beta\-binomial model and a likelihood ratio test to discriminate sequencing errors and subclonal SNVs. The shearwater algorithm computes a Bayes classifier based on a beta\-binomial model for variant calling with multiple samples for precisely estimating model parameters \- such as local error rates and dispersion \- and prior knowledge\, e.g. from variation data bases such as COSMIC.


.. conda:package:: bioconductor-deepsnv

   |downloads_bioconductor-deepsnv| |docker_bioconductor-deepsnv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends bioconductor-variantannotation: ``>=1.48.1,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-vgam: 
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

      mamba install bioconductor-deepsnv

   and update with::

      mamba update bioconductor-deepsnv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deepsnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deepsnv:<tag>

   (see `bioconductor-deepsnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deepsnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deepsnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deepsnv
   :alt:   (downloads)
.. |docker_bioconductor-deepsnv| image:: https://quay.io/repository/biocontainers/bioconductor-deepsnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deepsnv
.. _`bioconductor-deepsnv/tags`: https://quay.io/repository/biocontainers/bioconductor-deepsnv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deepsnv";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html