:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adacgh2'
.. highlight: bash

bioconductor-adacgh2
====================

.. conda:recipe:: bioconductor-adacgh2
   :replaces_section_title:
   :noindex:

   Analysis of big data from aCGH experiments using parallel computing and ff objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ADaCGH2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-adacgh2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adacgh2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adacgh2/meta.yaml>`_

   Analysis and plotting of array CGH data. Allows usage of Circular Binary Segementation\, wavelet\-based smoothing \(both as in Liu et al.\, and HaarSeg as in Ben\-Yaacov and Eldar\)\, HMM\, BioHMM\, GLAD\, CGHseg. Most computations are parallelized \(either via forking or with clusters\, including MPI and sockets clusters\) and use ff for storing data.


.. conda:package:: bioconductor-adacgh2

   |downloads_bioconductor-adacgh2| |docker_bioconductor-adacgh2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.34.0-2</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-1</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.34.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-acgh: ``>=1.80.0,<1.81.0``
   :depends bioconductor-acgh: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-snapcgh: ``>=1.72.0,<1.73.0``
   :depends bioconductor-snapcgh: ``>=1.72.0,<1.73.0a0``
   :depends bioconductor-tilingarray: ``>=1.80.0,<1.81.0``
   :depends bioconductor-tilingarray: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit: 
   :depends r-cluster: 
   :depends r-ff: 
   :depends r-waveslim: 
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

      mamba install bioconductor-adacgh2

   and update with::

      mamba update bioconductor-adacgh2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adacgh2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adacgh2:<tag>

   (see `bioconductor-adacgh2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adacgh2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adacgh2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adacgh2
   :alt:   (downloads)
.. |docker_bioconductor-adacgh2| image:: https://quay.io/repository/biocontainers/bioconductor-adacgh2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adacgh2
.. _`bioconductor-adacgh2/tags`: https://quay.io/repository/biocontainers/bioconductor-adacgh2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adacgh2";
        var versions = ["2.42.0","2.40.0","2.38.0","2.38.0","2.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adacgh2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adacgh2/README.html