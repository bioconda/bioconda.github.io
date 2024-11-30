:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libssw'
.. highlight: bash

libssw
======

.. conda:recipe:: libssw
   :replaces_section_title:
   :noindex:

   An SIMD Smith\-Waterman C\/C\+\+\/Python\/Java Library for Use in Genomic Applications

   :homepage: https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library
   :license: MIT
   :recipe: /`libssw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libssw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libssw/meta.yaml>`_

   


.. conda:package:: libssw

   |downloads_libssw| |docker_libssw|

   :versions:
      
      

      ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends openjdk: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
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

      mamba install libssw

   and update with::

      mamba update libssw

  To create a new environment, run::

      mamba create --name myenvname libssw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libssw:<tag>

   (see `libssw/tags`_ for valid values for ``<tag>``)


.. |downloads_libssw| image:: https://img.shields.io/conda/dn/bioconda/libssw.svg?style=flat
   :target: https://anaconda.org/bioconda/libssw
   :alt:   (downloads)
.. |docker_libssw| image:: https://quay.io/repository/biocontainers/libssw/status
   :target: https://quay.io/repository/biocontainers/libssw
.. _`libssw/tags`: https://quay.io/repository/biocontainers/libssw?tab=tags


.. raw:: html

    <script>
        var package = "libssw";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libssw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libssw/README.html