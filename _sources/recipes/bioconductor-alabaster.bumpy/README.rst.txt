:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.bumpy'
.. highlight: bash

bioconductor-alabaster.bumpy
============================

.. conda:recipe:: bioconductor-alabaster.bumpy
   :replaces_section_title:
   :noindex:

   Save and Load BumpyMatrices to\/from file

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.bumpy.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.bumpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.bumpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.bumpy/meta.yaml>`_

   Save BumpyMatrix objects into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.bumpy

   |downloads_bioconductor-alabaster.bumpy| |docker_bioconductor-alabaster.bumpy|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.6.0,<1.7.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-bumpymatrix: ``>=1.14.0,<1.15.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-alabaster.bumpy

   and update with::

      mamba update bioconductor-alabaster.bumpy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.bumpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.bumpy:<tag>

   (see `bioconductor-alabaster.bumpy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.bumpy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.bumpy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.bumpy
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.bumpy| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.bumpy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.bumpy
.. _`bioconductor-alabaster.bumpy/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.bumpy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.bumpy";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.bumpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.bumpy/README.html