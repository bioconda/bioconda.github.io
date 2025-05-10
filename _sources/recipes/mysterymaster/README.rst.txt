:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mysterymaster'
.. highlight: bash

mysterymaster
=============

.. conda:recipe:: mysterymaster
   :replaces_section_title:
   :noindex:

   Graphical Oxford Nanopore read demultiplexer

   :homepage: https://bitbucket.org/NPC239/mysterymaster/src/main/
   :license: GPL
   :recipe: /`mysterymaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mysterymaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mysterymaster/meta.yaml>`_

   


.. conda:package:: mysterymaster

   |downloads_mysterymaster| |docker_mysterymaster|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.4-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install mysterymaster

   and update with::

      mamba update mysterymaster

  To create a new environment, run::

      mamba create --name myenvname mysterymaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mysterymaster:<tag>

   (see `mysterymaster/tags`_ for valid values for ``<tag>``)


.. |downloads_mysterymaster| image:: https://img.shields.io/conda/dn/bioconda/mysterymaster.svg?style=flat
   :target: https://anaconda.org/bioconda/mysterymaster
   :alt:   (downloads)
.. |docker_mysterymaster| image:: https://quay.io/repository/biocontainers/mysterymaster/status
   :target: https://quay.io/repository/biocontainers/mysterymaster
.. _`mysterymaster/tags`: https://quay.io/repository/biocontainers/mysterymaster?tab=tags


.. raw:: html

    <script>
        var package = "mysterymaster";
        var versions = ["0.0.8","0.0.7","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mysterymaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mysterymaster/README.html