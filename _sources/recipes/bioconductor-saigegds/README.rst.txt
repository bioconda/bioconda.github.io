:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saigegds'
.. highlight: bash

bioconductor-saigegds
=====================

.. conda:recipe:: bioconductor-saigegds
   :replaces_section_title:
   :noindex:

   Scalable Implementation of Generalized mixed models using GDS files in Phenome\-Wide Association Studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SAIGEgds.html
   :license: GPL-3
   :recipe: /`bioconductor-saigegds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saigegds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saigegds/meta.yaml>`_

   Scalable implementation of generalized mixed models with highly optimized C\+\+ implementation and integration with Genomic Data Structure \(GDS\) files. It is designed for single variant tests and set\-based aggregate tests in large\-scale Phenome\-wide Association Studies \(PheWAS\) with millions of variants and samples\, controlling for sample structure and case\-control imbalance. The implementation is based on the SAIGE R package \(v0.45\, Zhou et al. 2018 and Zhou et al. 2020\)\, and it is extended to include the state\-of\-the\-art ACAT\-O set\-based tests. Benchmarks show that SAIGEgds is significantly faster than the SAIGE R package.


.. conda:package:: bioconductor-saigegds

   |downloads_bioconductor-saigegds| |docker_bioconductor-saigegds|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``2.0.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gdsfmt: ``>=1.36.0,<1.37.0``
   :depends bioconductor-seqarray: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: ``>=5.0.0``
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

      mamba install bioconductor-saigegds

   and update with::

      mamba update bioconductor-saigegds

  To create a new environment, run::

      mamba create --name myenvname bioconductor-saigegds

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-saigegds:<tag>

   (see `bioconductor-saigegds/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-saigegds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saigegds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saigegds
   :alt:   (downloads)
.. |docker_bioconductor-saigegds| image:: https://quay.io/repository/biocontainers/bioconductor-saigegds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saigegds
.. _`bioconductor-saigegds/tags`: https://quay.io/repository/biocontainers/bioconductor-saigegds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-saigegds";
        var versions = ["2.0.1","1.12.0","1.12.0","1.8.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saigegds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saigegds/README.html