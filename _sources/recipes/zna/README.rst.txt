:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zna'
.. highlight: bash

zna
===

.. conda:recipe:: zna
   :replaces_section_title:
   :noindex:

   High\-performance binary format for compressed nucleic acid sequences

   :homepage: https://github.com/mkiyer/zna
   :documentation: https://github.com/mkiyer/zna/blob/main/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`zna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zna/meta.yaml>`_

   ZNA \(Compressed Z\-Nucleic N\-Acid A\) is a specialized binary format for 
   storing DNA\/RNA sequences with exceptional compression and I\/O speed.

   Features\:
   \- 135 MB\/s roundtrip throughput \(9.5x faster than Python baseline\)
   \- 2.8\+ GB\/s encoding\/decoding for long reads
   \- 3.7\-4.0x compression ratio with Zstd
   \- C\+\+ acceleration with pure Python fallback
   \- Block\-based architecture for memory efficiency
   \- Supports single\-end\, paired\-end\, and interleaved reads
   \- Supports strand\-specific protocols



.. conda:package:: zna

   |downloads_zna| |docker_zna|

   :versions:
      
      

      

      

   
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

      mamba install zna

   and update with::

      mamba update zna

  To create a new environment, run::

      mamba create --name myenvname zna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zna:<tag>

   (see `zna/tags`_ for valid values for ``<tag>``)


.. |downloads_zna| image:: https://img.shields.io/conda/dn/bioconda/zna.svg?style=flat
   :target: https://anaconda.org/bioconda/zna
   :alt:   (downloads)
.. |docker_zna| image:: https://quay.io/repository/biocontainers/zna/status
   :target: https://quay.io/repository/biocontainers/zna
.. _`zna/tags`: https://quay.io/repository/biocontainers/zna?tab=tags


.. raw:: html

    <script>
        var package = "zna";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zna/README.html