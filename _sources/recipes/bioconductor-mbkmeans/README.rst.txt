:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbkmeans'
.. highlight: bash

bioconductor-mbkmeans
=====================

.. conda:recipe:: bioconductor-mbkmeans
   :replaces_section_title:
   :noindex:

   Mini\-batch K\-means Clustering for Single\-Cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mbkmeans.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mbkmeans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbkmeans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbkmeans/meta.yaml>`_
   :links: biotools: :biotools:`mbkmeans`

   Implements the mini\-batch k\-means algorithm for large datasets\, including support for on\-disk data representation.


.. conda:package:: bioconductor-mbkmeans

   |downloads_bioconductor-mbkmeans| |docker_bioconductor-mbkmeans|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.26.0,<2.27.0``
   :depends bioconductor-beachmat: ``>=2.26.0,<2.27.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-benchmarkme: 
   :depends r-clusterr: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: ``>=0.7.2``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mbkmeans

   and update with::

      mamba update bioconductor-mbkmeans

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbkmeans

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbkmeans:<tag>

   (see `bioconductor-mbkmeans/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbkmeans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbkmeans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbkmeans
   :alt:   (downloads)
.. |docker_bioconductor-mbkmeans| image:: https://quay.io/repository/biocontainers/bioconductor-mbkmeans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbkmeans
.. _`bioconductor-mbkmeans/tags`: https://quay.io/repository/biocontainers/bioconductor-mbkmeans?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbkmeans";
        var versions = ["1.26.0","1.22.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbkmeans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbkmeans/README.html