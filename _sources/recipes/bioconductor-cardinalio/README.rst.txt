:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardinalio'
.. highlight: bash

bioconductor-cardinalio
=======================

.. conda:recipe:: bioconductor-cardinalio
   :replaces_section_title:
   :noindex:

   Read and write mass spectrometry imaging files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CardinalIO.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-cardinalio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinalio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinalio/meta.yaml>`_

   Fast and efficient reading and writing of mass spectrometry imaging data files. Supports imzML and Analyze 7.5 formats. Provides ontologies for mass spectrometry imaging.


.. conda:package:: bioconductor-cardinalio

   |downloads_bioconductor-cardinalio| |docker_bioconductor-cardinalio|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-matter: ``>=2.8.0,<2.9.0``
   :depends bioconductor-matter: ``>=2.8.0,<2.9.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ontologyindex: 
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

      mamba install bioconductor-cardinalio

   and update with::

      mamba update bioconductor-cardinalio

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cardinalio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cardinalio:<tag>

   (see `bioconductor-cardinalio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cardinalio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardinalio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cardinalio
   :alt:   (downloads)
.. |docker_bioconductor-cardinalio| image:: https://quay.io/repository/biocontainers/bioconductor-cardinalio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardinalio
.. _`bioconductor-cardinalio/tags`: https://quay.io/repository/biocontainers/bioconductor-cardinalio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cardinalio";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardinalio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardinalio/README.html