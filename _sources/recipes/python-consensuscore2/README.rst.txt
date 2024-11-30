:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-consensuscore2'
.. highlight: bash

python-consensuscore2
=====================

.. conda:recipe:: python-consensuscore2
   :replaces_section_title:
   :noindex:

   PacBio Arrow Consensus library for Sequel data

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`python-consensuscore2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore2/meta.yaml>`_

   


.. conda:package:: python-consensuscore2

   |downloads_python-consensuscore2| |docker_python-consensuscore2|

   :versions:
      
      

      ``3.4.1-0``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``

      

   
   :depends numpy: ``>=1.16.2``
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install python-consensuscore2

   and update with::

      mamba update python-consensuscore2

  To create a new environment, run::

      mamba create --name myenvname python-consensuscore2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-consensuscore2:<tag>

   (see `python-consensuscore2/tags`_ for valid values for ``<tag>``)


.. |downloads_python-consensuscore2| image:: https://img.shields.io/conda/dn/bioconda/python-consensuscore2.svg?style=flat
   :target: https://anaconda.org/bioconda/python-consensuscore2
   :alt:   (downloads)
.. |docker_python-consensuscore2| image:: https://quay.io/repository/biocontainers/python-consensuscore2/status
   :target: https://quay.io/repository/biocontainers/python-consensuscore2
.. _`python-consensuscore2/tags`: https://quay.io/repository/biocontainers/python-consensuscore2?tab=tags


.. raw:: html

    <script>
        var package = "python-consensuscore2";
        var versions = ["3.4.1","3.1.0","3.1.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-consensuscore2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-consensuscore2/README.html