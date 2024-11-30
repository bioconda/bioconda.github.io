:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqe'
.. highlight: bash

fastqe
======

.. conda:recipe:: fastqe
   :replaces_section_title:
   :noindex:

   A emoji based bioinformatics command line tool.

   :homepage: https://github.com/lonsbio/fastqe
   :license: BSD / BSD-3-Clause
   :recipe: /`fastqe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe/meta.yaml>`_

   The program reads one or more input FASTQ files.
   For each file it computes the minimum\, maximum and mean FASTQ quality score at each position across all reads in a file.

   For some reason\, it then represents these as emoji.


.. conda:package:: fastqe

   |downloads_fastqe| |docker_fastqe|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.66``
   :depends pyemojify: 
   :depends python: ``>=3.7``
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

      mamba install fastqe

   and update with::

      mamba update fastqe

  To create a new environment, run::

      mamba create --name myenvname fastqe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastqe:<tag>

   (see `fastqe/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqe| image:: https://img.shields.io/conda/dn/bioconda/fastqe.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqe
   :alt:   (downloads)
.. |docker_fastqe| image:: https://quay.io/repository/biocontainers/fastqe/status
   :target: https://quay.io/repository/biocontainers/fastqe
.. _`fastqe/tags`: https://quay.io/repository/biocontainers/fastqe?tab=tags


.. raw:: html

    <script>
        var package = "fastqe";
        var versions = ["0.3.3","0.3.1","0.2.7","0.2.6","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqe/README.html