:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amulety'
.. highlight: bash

amulety
=======

.. conda:recipe:: amulety
   :replaces_section_title:
   :noindex:

   Python package to create embeddings of BCR amino acid sequences.

   :homepage: https://github.com/immcantation/amulety
   :license: GPL-3.0-only
   :recipe: /`amulety <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amulety>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amulety/meta.yaml>`_

   


.. conda:package:: amulety

   |downloads_amulety| |docker_amulety|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``

      

   
   :depends antiberty: 
   :depends numpy: 
   :depends pandas: 
   :depends pre-commit: 
   :depends protobuf: 
   :depends pytest: ``>=7.0.0``
   :depends pytest-workflow: ``>=1.6.0``
   :depends python: ``>=3.8,<4.0``
   :depends pytorch: 
   :depends rjieba: 
   :depends transformers: 
   :depends typer: 
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

      mamba install amulety

   and update with::

      mamba update amulety

  To create a new environment, run::

      mamba create --name myenvname amulety

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amulety:<tag>

   (see `amulety/tags`_ for valid values for ``<tag>``)


.. |downloads_amulety| image:: https://img.shields.io/conda/dn/bioconda/amulety.svg?style=flat
   :target: https://anaconda.org/bioconda/amulety
   :alt:   (downloads)
.. |docker_amulety| image:: https://quay.io/repository/biocontainers/amulety/status
   :target: https://quay.io/repository/biocontainers/amulety
.. _`amulety/tags`: https://quay.io/repository/biocontainers/amulety?tab=tags


.. raw:: html

    <script>
        var package = "amulety";
        var versions = ["1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amulety/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amulety/README.html