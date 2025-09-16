:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamrescue'
.. highlight: bash

bamrescue
=========

.. conda:recipe:: bamrescue
   :replaces_section_title:
   :noindex:

   Utility to check BAM files for corruption and repair by skipping corrupted BGZF blocks.

   :homepage: https://github.com/Arkanosis/bamrescue
   :license: ISC
   :recipe: /`bamrescue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamrescue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamrescue/meta.yaml>`_

   bamrescue is a command\-line tool that inspects Binary Alignment\/Map \(BAM\) files for corruption.
   It leverages the BGZF structure \(concatenated gzip blocks\) to skip over corrupted sections using CRC32 checksums\,
   rescuing as much valid data as possible.



.. conda:package:: bamrescue

   |downloads_bamrescue| |docker_bamrescue|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bamrescue

   and update with::

      mamba update bamrescue

  To create a new environment, run::

      mamba create --name myenvname bamrescue

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamrescue:<tag>

   (see `bamrescue/tags`_ for valid values for ``<tag>``)


.. |downloads_bamrescue| image:: https://img.shields.io/conda/dn/bioconda/bamrescue.svg?style=flat
   :target: https://anaconda.org/bioconda/bamrescue
   :alt:   (downloads)
.. |docker_bamrescue| image:: https://quay.io/repository/biocontainers/bamrescue/status
   :target: https://quay.io/repository/biocontainers/bamrescue
.. _`bamrescue/tags`: https://quay.io/repository/biocontainers/bamrescue?tab=tags


.. raw:: html

    <script>
        var package = "bamrescue";
        var versions = ["0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamrescue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamrescue/README.html