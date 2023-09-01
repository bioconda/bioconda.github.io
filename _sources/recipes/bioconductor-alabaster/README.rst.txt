:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster'
.. highlight: bash

bioconductor-alabaster
======================

.. conda:recipe:: bioconductor-alabaster
   :replaces_section_title:
   :noindex:

   Umbrella for the Alabaster Framework

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster/meta.yaml>`_

   Umbrella for the alabaster suite\, providing a single\-line import for all alabaster.\* packages. Installing this package ensures that all known alabaster.\* packages are also installed\, avoiding problems with missing packages when a staging method or loading function is dynamically requested. Obviously\, this comes at the cost of needing to install more packages\, so advanced users and application developers may prefer to install the required alabaster.\* packages individually.


.. conda:package:: bioconductor-alabaster

   |downloads_bioconductor-alabaster| |docker_bioconductor-alabaster|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.bumpy: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.mae: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.matrix: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.ranges: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.sce: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.se: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.spatial: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.string: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.vcf: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-alabaster

   and update with::

      mamba update bioconductor-alabaster

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster:<tag>

   (see `bioconductor-alabaster/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster
   :alt:   (downloads)
.. |docker_bioconductor-alabaster| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster
.. _`bioconductor-alabaster/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster/README.html