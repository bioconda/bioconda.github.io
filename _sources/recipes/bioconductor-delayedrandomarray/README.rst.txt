:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedrandomarray'
.. highlight: bash

bioconductor-delayedrandomarray
===============================

.. conda:recipe:: bioconductor-delayedrandomarray
   :replaces_section_title:
   :noindex:

   Delayed Arrays of Random Values

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DelayedRandomArray.html
   :license: GPL-3
   :recipe: /`bioconductor-delayedrandomarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedrandomarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedrandomarray/meta.yaml>`_

   Implements a DelayedArray of random values where the realization of the sampled values is delayed until they are needed. Reproducible sampling within any subarray is achieved by chunking where each chunk is initialized with a different random seed and stream. The usual distributions in the stats package are supported\, along with scalar\, vector and arrays for the parameters.


.. conda:package:: bioconductor-delayedrandomarray

   |downloads_bioconductor-delayedrandomarray| |docker_bioconductor-delayedrandomarray|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-rcpp: 
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

      mamba install bioconductor-delayedrandomarray

   and update with::

      mamba update bioconductor-delayedrandomarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-delayedrandomarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayedrandomarray:<tag>

   (see `bioconductor-delayedrandomarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayedrandomarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedrandomarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedrandomarray
   :alt:   (downloads)
.. |docker_bioconductor-delayedrandomarray| image:: https://quay.io/repository/biocontainers/bioconductor-delayedrandomarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedrandomarray
.. _`bioconductor-delayedrandomarray/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedrandomarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayedrandomarray";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedrandomarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedrandomarray/README.html