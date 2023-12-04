:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcamethods'
.. highlight: bash

bioconductor-pcamethods
=======================

.. conda:recipe:: bioconductor-pcamethods
   :replaces_section_title:
   :noindex:

   A collection of PCA methods

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pcaMethods.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pcamethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcamethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcamethods/meta.yaml>`_
   :links: biotools: :biotools:`pcamethods`, doi: :doi:`10.1093/bioinformatics/btm069`

   Provides Bayesian PCA\, Probabilistic PCA\, Nipals PCA\, Inverse Non\-Linear PCA and the conventional SVD PCA. A cluster based method for missing value estimation is included for comparison. BPCA\, PPCA and NipalsPCA may be used to perform PCA on incomplete data as well as for accurate missing value estimation. A set of methods for printing and plotting the results is also provided. All PCA methods make use of the same data structure \(pcaRes\) to provide a common interface to the PCA results. Initiated at the Max\-Planck Institute for Molecular Plant Physiology\, Golm\, Germany.


.. conda:package:: bioconductor-pcamethods

   |downloads_bioconductor-pcamethods| |docker_bioconductor-pcamethods|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.94.0-0</code>,  <code>1.92.0-0</code>,  <code>1.90.0-1</code>,  <code>1.90.0-0</code>,  <code>1.86.0-2</code>,  <code>1.86.0-1</code>,  <code>1.86.0-0</code>,  <code>1.84.0-0</code>,  <code>1.82.0-1</code>,  </span></summary>
      

      ``1.94.0-0``,  ``1.92.0-0``,  ``1.90.0-1``,  ``1.90.0-0``,  ``1.86.0-2``,  ``1.86.0-1``,  ``1.86.0-0``,  ``1.84.0-0``,  ``1.82.0-1``,  ``1.82.0-0``,  ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-rcpp: ``>=0.11.3``
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

      mamba install bioconductor-pcamethods

   and update with::

      mamba update bioconductor-pcamethods

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pcamethods

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcamethods:<tag>

   (see `bioconductor-pcamethods/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcamethods| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcamethods.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcamethods
   :alt:   (downloads)
.. |docker_bioconductor-pcamethods| image:: https://quay.io/repository/biocontainers/bioconductor-pcamethods/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcamethods
.. _`bioconductor-pcamethods/tags`: https://quay.io/repository/biocontainers/bioconductor-pcamethods?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pcamethods";
        var versions = ["1.94.0","1.92.0","1.90.0","1.90.0","1.86.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcamethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcamethods/README.html