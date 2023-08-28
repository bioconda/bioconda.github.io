:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-pair'
.. highlight: bash

fastq-pair
==========

.. conda:recipe:: fastq-pair
   :replaces_section_title:
   :noindex:

   fastq\-pair\: efficient synchronization of paired\-end fastq files

   :homepage: https://github.com/linsalrob/fastq-pair
   :license: MIT
   :recipe: /`fastq-pair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-pair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-pair/meta.yaml>`_
   :links: doi: :doi:`10.1101/552885`

   


.. conda:package:: fastq-pair

   |downloads_fastq-pair| |docker_fastq-pair|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fastq-pair

   and update with::

      mamba update fastq-pair

  To create a new environment, run::

      mamba create --name myenvname fastq-pair

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-pair:<tag>

   (see `fastq-pair/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-pair| image:: https://img.shields.io/conda/dn/bioconda/fastq-pair.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-pair
   :alt:   (downloads)
.. |docker_fastq-pair| image:: https://quay.io/repository/biocontainers/fastq-pair/status
   :target: https://quay.io/repository/biocontainers/fastq-pair
.. _`fastq-pair/tags`: https://quay.io/repository/biocontainers/fastq-pair?tab=tags


.. raw:: html

    <script>
        var package = "fastq-pair";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-pair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-pair/README.html