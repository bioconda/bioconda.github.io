:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-count'
.. highlight: bash

fastq-count
===========

.. conda:recipe:: fastq-count
   :replaces_section_title:
   :noindex:

   Simple fastq read and base counter for paired data.

   :homepage: https://github.com/sndrtj/fastq-count
   :license: MIT
   :recipe: /`fastq-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-count/meta.yaml>`_

   


.. conda:package:: fastq-count

   |downloads_fastq-count| |docker_fastq-count|

   :versions:
      
      

      ``0.1.0-6``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
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

      mamba install fastq-count

   and update with::

      mamba update fastq-count

  To create a new environment, run::

      mamba create --name myenvname fastq-count

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-count:<tag>

   (see `fastq-count/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-count| image:: https://img.shields.io/conda/dn/bioconda/fastq-count.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-count
   :alt:   (downloads)
.. |docker_fastq-count| image:: https://quay.io/repository/biocontainers/fastq-count/status
   :target: https://quay.io/repository/biocontainers/fastq-count
.. _`fastq-count/tags`: https://quay.io/repository/biocontainers/fastq-count?tab=tags


.. raw:: html

    <script>
        var package = "fastq-count";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-count/README.html