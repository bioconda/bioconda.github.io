:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muset'
.. highlight: bash

muset
=====

.. conda:recipe:: muset
   :replaces_section_title:
   :noindex:

   A pipeline for building an abundance unitig matrix from FASTA\/FASTQ files

   :homepage: https://github.com/CamilaDuitama/muset
   :license: GPL-3.0-or-later
   :recipe: /`muset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muset/meta.yaml>`_

   MUSET is a software for generating an abundance unitig matrix from a collection of input samples \(in FASTA\/Q format\).


.. conda:package:: muset

   |downloads_muset| |docker_muset|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends ggcat: ``>=1.1.0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install muset

   and update with::

      mamba update muset

  To create a new environment, run::

      mamba create --name myenvname muset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/muset:<tag>

   (see `muset/tags`_ for valid values for ``<tag>``)


.. |downloads_muset| image:: https://img.shields.io/conda/dn/bioconda/muset.svg?style=flat
   :target: https://anaconda.org/bioconda/muset
   :alt:   (downloads)
.. |docker_muset| image:: https://quay.io/repository/biocontainers/muset/status
   :target: https://quay.io/repository/biocontainers/muset
.. _`muset/tags`: https://quay.io/repository/biocontainers/muset?tab=tags


.. raw:: html

    <script>
        var package = "muset";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muset/README.html