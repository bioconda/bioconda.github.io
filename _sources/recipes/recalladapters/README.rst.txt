:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recalladapters'
.. highlight: bash

recalladapters
==============

.. conda:recipe:: recalladapters
   :replaces_section_title:
   :noindex:

   recalladapters \- A tool to recall adapters for PacBio data

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`recalladapters <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recalladapters>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recalladapters/meta.yaml>`_

   


.. conda:package:: recalladapters

   |downloads_recalladapters| |docker_recalladapters|

   :versions:
      
      

      ``9.0.0-1``,  ``9.0.0-0``,  ``7.1.0-0``

      

   
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

      mamba install recalladapters

   and update with::

      mamba update recalladapters

  To create a new environment, run::

      mamba create --name myenvname recalladapters

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recalladapters:<tag>

   (see `recalladapters/tags`_ for valid values for ``<tag>``)


.. |downloads_recalladapters| image:: https://img.shields.io/conda/dn/bioconda/recalladapters.svg?style=flat
   :target: https://anaconda.org/bioconda/recalladapters
   :alt:   (downloads)
.. |docker_recalladapters| image:: https://quay.io/repository/biocontainers/recalladapters/status
   :target: https://quay.io/repository/biocontainers/recalladapters
.. _`recalladapters/tags`: https://quay.io/repository/biocontainers/recalladapters?tab=tags


.. raw:: html

    <script>
        var package = "recalladapters";
        var versions = ["9.0.0","9.0.0","7.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recalladapters/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recalladapters/README.html