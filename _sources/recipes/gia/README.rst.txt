:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gia'
.. highlight: bash

gia
===

.. conda:recipe:: gia
   :replaces_section_title:
   :noindex:

   Genomic Interval Arithmetic \(gia\)

   :homepage: https://github.com/noamteyssier/gia
   :license: MIT
   :recipe: /`gia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gia/meta.yaml>`_

   


.. conda:package:: gia

   |downloads_gia| |docker_gia|

   :versions:
      
      

      ``0.2.23-0``,  ``0.2-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.8.0,<9.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.3.1,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gia

   and update with::

      mamba update gia

  To create a new environment, run::

      mamba create --name myenvname gia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gia:<tag>

   (see `gia/tags`_ for valid values for ``<tag>``)


.. |downloads_gia| image:: https://img.shields.io/conda/dn/bioconda/gia.svg?style=flat
   :target: https://anaconda.org/bioconda/gia
   :alt:   (downloads)
.. |docker_gia| image:: https://quay.io/repository/biocontainers/gia/status
   :target: https://quay.io/repository/biocontainers/gia
.. _`gia/tags`: https://quay.io/repository/biocontainers/gia?tab=tags


.. raw:: html

    <script>
        var package = "gia";
        var versions = ["0.2.23","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gia/README.html