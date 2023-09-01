:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq'
.. highlight: bash

fastq
=====

.. conda:recipe:: fastq
   :replaces_section_title:
   :noindex:

   A simple FASTQ toolbox for small to medium size projects without dependencies.

   :homepage: https://github.com/not-a-feature/fastq
   :license: GPL / GPL-3.0-or-later
   :recipe: /`fastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq/meta.yaml>`_

   FASTQ files are text\-based files for storing nucleotide sequences and its corresponding quality scores. Reading such files is not particularly difficult\, yet most off the shelf packages are overloaded with strange dependencies. fastq offers an alternative to this and brings many useful functions without relying on third party packages.



.. conda:package:: fastq

   |downloads_fastq| |docker_fastq|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``

      

   
   :depends minifasta: ``>=2.1``
   :depends python: ``>=3.7``
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

      mamba install fastq

   and update with::

      mamba update fastq

  To create a new environment, run::

      mamba create --name myenvname fastq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq:<tag>

   (see `fastq/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq| image:: https://img.shields.io/conda/dn/bioconda/fastq.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq
   :alt:   (downloads)
.. |docker_fastq| image:: https://quay.io/repository/biocontainers/fastq/status
   :target: https://quay.io/repository/biocontainers/fastq
.. _`fastq/tags`: https://quay.io/repository/biocontainers/fastq?tab=tags


.. raw:: html

    <script>
        var package = "fastq";
        var versions = ["2.0.2","2.0.1","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq/README.html