:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocsingular'
.. highlight: bash

bioconductor-biocsingular
=========================

.. conda:recipe:: bioconductor-biocsingular
   :replaces_section_title:
   :noindex:

   Singular Value Decomposition for Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocSingular.html
   :license: GPL-3
   :recipe: /`bioconductor-biocsingular <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsingular>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsingular/meta.yaml>`_

   Implements exact and approximate methods for singular value decomposition and principal components analysis\, in a framework that allows them to be easily switched within Bioconductor packages or workflows. Where possible\, parallelization is achieved using the BiocParallel framework.


.. conda:package:: bioconductor-biocsingular

   |downloads_bioconductor-biocsingular| |docker_bioconductor-biocsingular|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0``
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-scaledmatrix: ``>=1.10.0,<1.11.0``
   :depends bioconductor-scaledmatrix: ``>=1.10.0,<1.11.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rsvd: 
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

      mamba install bioconductor-biocsingular

   and update with::

      mamba update bioconductor-biocsingular

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocsingular

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocsingular:<tag>

   (see `bioconductor-biocsingular/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocsingular| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocsingular.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocsingular
   :alt:   (downloads)
.. |docker_bioconductor-biocsingular| image:: https://quay.io/repository/biocontainers/bioconductor-biocsingular/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocsingular
.. _`bioconductor-biocsingular/tags`: https://quay.io/repository/biocontainers/bioconductor-biocsingular?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocsingular";
        var versions = ["1.18.0","1.16.0","1.14.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocsingular/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocsingular/README.html