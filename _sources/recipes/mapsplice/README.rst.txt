:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapsplice'
.. highlight: bash

mapsplice
=========

.. conda:recipe:: mapsplice
   :replaces_section_title:
   :noindex:

   MapSplice is a software for mapping RNA\-seq data to reference genome for splice junction discovery that depends only on reference genome\, and not on any further annotations.

   :homepage: http://www.netlab.uky.edu/p/bioinfo/MapSplice2
   :license: Custom
   :recipe: /`mapsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsplice/meta.yaml>`_
   :links: biotools: :biotools:`mapsplice`

   


.. conda:package:: mapsplice

   |downloads_mapsplice| |docker_mapsplice|

   :versions:
      
      

      ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends ncurses: ``>=6.1,<6.2.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install mapsplice

   and update with::

      mamba update mapsplice

  To create a new environment, run::

      mamba create --name myenvname mapsplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapsplice:<tag>

   (see `mapsplice/tags`_ for valid values for ``<tag>``)


.. |downloads_mapsplice| image:: https://img.shields.io/conda/dn/bioconda/mapsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/mapsplice
   :alt:   (downloads)
.. |docker_mapsplice| image:: https://quay.io/repository/biocontainers/mapsplice/status
   :target: https://quay.io/repository/biocontainers/mapsplice
.. _`mapsplice/tags`: https://quay.io/repository/biocontainers/mapsplice?tab=tags


.. raw:: html

    <script>
        var package = "mapsplice";
        var versions = ["2.2.1","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapsplice/README.html