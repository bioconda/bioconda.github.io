:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamslice'
.. highlight: bash

bamslice
========

.. conda:recipe:: bamslice
   :replaces_section_title:
   :noindex:

   Extract byte ranges from BAM files and convert to interleaved FASTQ format for parallel processing

   :homepage: https://github.com/nebiolabs/bamslice
   :documentation: https://docs.rs/bamslice
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`bamslice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamslice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamslice/meta.yaml>`_
   :links: biotools: :biotools:`bamslice`

   bamslice extracts specific byte ranges from BAM files and converts them to
   interleaved FASTQ format. Designed for parallel processing across compute nodes
   without requiring pre\-indexing. It auto\-aligns to BGZF block boundaries and
   guarantees no duplicate reads when using contiguous byte ranges.



.. conda:package:: bamslice

   |downloads_bamslice| |docker_bamslice|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.17.0,<9.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.6.0,<4.0a0``
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

      mamba install bamslice

   and update with::

      mamba update bamslice

  To create a new environment, run::

      mamba create --name myenvname bamslice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamslice:<tag>

   (see `bamslice/tags`_ for valid values for ``<tag>``)


.. |downloads_bamslice| image:: https://img.shields.io/conda/dn/bioconda/bamslice.svg?style=flat
   :target: https://anaconda.org/bioconda/bamslice
   :alt:   (downloads)
.. |docker_bamslice| image:: https://quay.io/repository/biocontainers/bamslice/status
   :target: https://quay.io/repository/biocontainers/bamslice
.. _`bamslice/tags`: https://quay.io/repository/biocontainers/bamslice?tab=tags


.. raw:: html

    <script>
        var package = "bamslice";
        var versions = ["0.1.6","0.1.5","0.1.4","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamslice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamslice/README.html