:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrzip'
.. highlight: bash

lrzip
=====

.. conda:recipe:: lrzip
   :replaces_section_title:
   :noindex:

   Long Range ZIP or Lzma RZIP. This is a compression program optimised for large files. The larger the file and the more memory you have\, the better the compression advantage this will provide\, especially once the files are larger than 100MB. The advantage can be chosen to be either size \(much smaller than bzip2\) or speed \(much faster than bzip2\).

   :homepage: https://github.com/ckolivas/lrzip
   :license: GPLv2
   :recipe: /`lrzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrzip/meta.yaml>`_

   


.. conda:package:: lrzip

   |downloads_lrzip| |docker_lrzip|

   :versions:
      
      

      ``0.651-0``,  ``0.621-7``,  ``0.621-6``,  ``0.621-5``,  ``0.621-4``,  ``0.621-3``,  ``0.621-2``,  ``0.621-1``,  ``0.621-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends lz4-c: ``>=1.9.3,<1.10.0a0``
   :depends lzo: ``>=2.10,<3.0a0``
   :depends zlib: 
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

      mamba install lrzip

   and update with::

      mamba update lrzip

  To create a new environment, run::

      mamba create --name myenvname lrzip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lrzip:<tag>

   (see `lrzip/tags`_ for valid values for ``<tag>``)


.. |downloads_lrzip| image:: https://img.shields.io/conda/dn/bioconda/lrzip.svg?style=flat
   :target: https://anaconda.org/bioconda/lrzip
   :alt:   (downloads)
.. |docker_lrzip| image:: https://quay.io/repository/biocontainers/lrzip/status
   :target: https://quay.io/repository/biocontainers/lrzip
.. _`lrzip/tags`: https://quay.io/repository/biocontainers/lrzip?tab=tags


.. raw:: html

    <script>
        var package = "lrzip";
        var versions = ["0.651","0.621","0.621","0.621","0.621"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrzip/README.html