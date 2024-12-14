:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-filter'
.. highlight: bash

fastq-filter
============

.. conda:recipe:: fastq-filter
   :replaces_section_title:
   :noindex:

   A fast FASTQ filter program.

   :homepage: https://github.com/LUMC/fastq-filter
   :license: MIT / MIT
   :recipe: /`fastq-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-filter/meta.yaml>`_

   


.. conda:package:: fastq-filter

   |downloads_fastq-filter| |docker_fastq-filter|

   :versions:
      
      

      ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends dnaio: ``>=0.6.0``
   :depends dnaio: ``>=1.2.2,<2.0a0``
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends xopen: ``>=1.2.1``
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

      mamba install fastq-filter

   and update with::

      mamba update fastq-filter

  To create a new environment, run::

      mamba create --name myenvname fastq-filter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-filter:<tag>

   (see `fastq-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-filter| image:: https://img.shields.io/conda/dn/bioconda/fastq-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-filter
   :alt:   (downloads)
.. |docker_fastq-filter| image:: https://quay.io/repository/biocontainers/fastq-filter/status
   :target: https://quay.io/repository/biocontainers/fastq-filter
.. _`fastq-filter/tags`: https://quay.io/repository/biocontainers/fastq-filter?tab=tags


.. raw:: html

    <script>
        var package = "fastq-filter";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-filter/README.html