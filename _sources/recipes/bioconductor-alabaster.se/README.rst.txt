:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.se'
.. highlight: bash

bioconductor-alabaster.se
=========================

.. conda:recipe:: bioconductor-alabaster.se
   :replaces_section_title:
   :noindex:

   Load and Save SummarizedExperiments from File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.se.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.se <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.se>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.se/meta.yaml>`_

   Save SummarizedExperiments into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.se

   |downloads_bioconductor-alabaster.se| |docker_bioconductor-alabaster.se|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.matrix: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.ranges: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-alabaster.se

   and update with::

      mamba update bioconductor-alabaster.se

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.se

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.se:<tag>

   (see `bioconductor-alabaster.se/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.se| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.se.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.se
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.se| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.se/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.se
.. _`bioconductor-alabaster.se/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.se?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.se";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.se/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.se/README.html