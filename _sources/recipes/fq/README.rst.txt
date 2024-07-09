:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fq'
.. highlight: bash

fq
==

.. conda:recipe:: fq
   :replaces_section_title:
   :noindex:

   fq is a library to generate and validate FASTQ file pairs.

   :homepage: https://github.com/stjude-rust-labs/fq
   :license: MIT
   :recipe: /`fq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fq/meta.yaml>`_

   fq provides subcommands for filtering\, generating\, subsampling\, and validating FASTQ files.



.. conda:package:: fq

   |downloads_fq| |docker_fq|

   :versions:
      
      

      ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.1-0``

      

   
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

      mamba install fq

   and update with::

      mamba update fq

  To create a new environment, run::

      mamba create --name myenvname fq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fq:<tag>

   (see `fq/tags`_ for valid values for ``<tag>``)


.. |downloads_fq| image:: https://img.shields.io/conda/dn/bioconda/fq.svg?style=flat
   :target: https://anaconda.org/bioconda/fq
   :alt:   (downloads)
.. |docker_fq| image:: https://quay.io/repository/biocontainers/fq/status
   :target: https://quay.io/repository/biocontainers/fq
.. _`fq/tags`: https://quay.io/repository/biocontainers/fq?tab=tags


.. raw:: html

    <script>
        var package = "fq";
        var versions = ["0.12.0","0.11.0","0.11.0","0.10.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fq/README.html