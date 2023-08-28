:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chihaya'
.. highlight: bash

bioconductor-chihaya
====================

.. conda:recipe:: bioconductor-chihaya
   :replaces_section_title:
   :noindex:

   Save Delayed Operations to a HDF5 File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/chihaya.html
   :license: GPL-3
   :recipe: /`bioconductor-chihaya <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chihaya>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chihaya/meta.yaml>`_

   Saves the delayed operations of a DelayedArray to a HDF5 file. This enables efficient recovery of the DelayedArray\'s contents in other languages and analysis frameworks.


.. conda:package:: bioconductor-chihaya

   |downloads_bioconductor-chihaya| |docker_bioconductor-chihaya|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rhdf5lib: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
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

      mamba install bioconductor-chihaya

   and update with::

      mamba update bioconductor-chihaya

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chihaya

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chihaya:<tag>

   (see `bioconductor-chihaya/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chihaya| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chihaya.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chihaya
   :alt:   (downloads)
.. |docker_bioconductor-chihaya| image:: https://quay.io/repository/biocontainers/bioconductor-chihaya/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chihaya
.. _`bioconductor-chihaya/tags`: https://quay.io/repository/biocontainers/bioconductor-chihaya?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chihaya";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chihaya/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chihaya/README.html