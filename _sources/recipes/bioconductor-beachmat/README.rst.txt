:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beachmat'
.. highlight: bash

bioconductor-beachmat
=====================

.. conda:recipe:: bioconductor-beachmat
   :replaces_section_title:
   :noindex:

   Compiling Bioconductor to Handle Each Matrix Type

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/beachmat.html
   :license: GPL-3
   :recipe: /`bioconductor-beachmat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat/meta.yaml>`_
   :links: biotools: :biotools:`beachmat`

   Provides a consistent C\+\+ class interface for reading from a variety of commonly used matrix types. Ordinary matrices and several sparse\/dense Matrix classes are directly supported\, along with a subset of the delayed operations implemented in the DelayedArray package. All other matrix\-like objects are supported by calling back into R.


.. conda:package:: bioconductor-beachmat

   |downloads_bioconductor-beachmat| |docker_bioconductor-beachmat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.10.0-2</code>,  <code>2.10.0-1</code>,  </span></summary>
      

      ``2.22.0-1``,  ``2.22.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.4-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0``
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-beachmat

   and update with::

      mamba update bioconductor-beachmat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beachmat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beachmat:<tag>

   (see `bioconductor-beachmat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beachmat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beachmat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beachmat
   :alt:   (downloads)
.. |docker_bioconductor-beachmat| image:: https://quay.io/repository/biocontainers/bioconductor-beachmat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beachmat
.. _`bioconductor-beachmat/tags`: https://quay.io/repository/biocontainers/bioconductor-beachmat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beachmat";
        var versions = ["2.22.0","2.22.0","2.18.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beachmat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beachmat/README.html