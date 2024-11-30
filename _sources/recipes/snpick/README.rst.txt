:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpick'
.. highlight: bash

snpick
======

.. conda:recipe:: snpick
   :replaces_section_title:
   :noindex:

   A fast and memory\-efficient tool for SNP extraction from genomic alignments.

   :homepage: https://github.com/PathoGenOmics-Lab/snpick
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snpick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpick/meta.yaml>`_

   snpick is a Rust\-based tool designed for extracting SNPs efficiently from large genomic alignments\, with minimal RAM usage and high performance. It outputs variable sites in alignment files and provides VCF generation.



.. conda:package:: snpick

   |downloads_snpick| |docker_snpick|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.4.0,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: ``>=1.2.13,<2.0a0``
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

      mamba install snpick

   and update with::

      mamba update snpick

  To create a new environment, run::

      mamba create --name myenvname snpick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpick:<tag>

   (see `snpick/tags`_ for valid values for ``<tag>``)


.. |downloads_snpick| image:: https://img.shields.io/conda/dn/bioconda/snpick.svg?style=flat
   :target: https://anaconda.org/bioconda/snpick
   :alt:   (downloads)
.. |docker_snpick| image:: https://quay.io/repository/biocontainers/snpick/status
   :target: https://quay.io/repository/biocontainers/snpick
.. _`snpick/tags`: https://quay.io/repository/biocontainers/snpick?tab=tags


.. raw:: html

    <script>
        var package = "snpick";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpick/README.html