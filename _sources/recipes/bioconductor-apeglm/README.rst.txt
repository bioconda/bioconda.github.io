:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apeglm'
.. highlight: bash

bioconductor-apeglm
===================

.. conda:recipe:: bioconductor-apeglm
   :replaces_section_title:
   :noindex:

   Approximate posterior estimation for GLM coefficients

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/apeglm.html
   :license: GPL-2
   :recipe: /`bioconductor-apeglm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apeglm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apeglm/meta.yaml>`_

   apeglm provides Bayesian shrinkage estimators for effect sizes for a variety of GLM models\, using approximation of the posterior for individual coefficients.


.. conda:package:: bioconductor-apeglm

   |downloads_bioconductor-apeglm| |docker_bioconductor-apeglm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.2.1-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-emdbook: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-rcppnumerical: 
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

      mamba install bioconductor-apeglm

   and update with::

      mamba update bioconductor-apeglm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-apeglm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-apeglm:<tag>

   (see `bioconductor-apeglm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apeglm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apeglm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apeglm
   :alt:   (downloads)
.. |docker_bioconductor-apeglm| image:: https://quay.io/repository/biocontainers/bioconductor-apeglm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apeglm
.. _`bioconductor-apeglm/tags`: https://quay.io/repository/biocontainers/bioconductor-apeglm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-apeglm";
        var versions = ["1.24.0","1.24.0","1.22.1","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apeglm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apeglm/README.html