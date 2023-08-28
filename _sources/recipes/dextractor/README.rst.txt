:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dextractor'
.. highlight: bash

dextractor
==========

.. conda:recipe:: dextractor
   :replaces_section_title:
   :noindex:

   Bax File Decoder and Data Compressor

   :homepage: https://github.com/thegenemyers/DEXTRACTOR
   :license: Custom
   :recipe: /`dextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dextractor/meta.yaml>`_

   


.. conda:package:: dextractor

   |downloads_dextractor| |docker_dextractor|

   :versions:
      
      

      ``1.0p2-7``,  ``1.0p2-6``,  ``1.0p2-5``,  ``1.0p2-4``,  ``1.0p2-3``,  ``1.0p2-2``,  ``1.0p2-1``,  ``1.0p2-0``,  ``1.0p1-0``

      

   
   :depends hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install dextractor

   and update with::

      mamba update dextractor

  To create a new environment, run::

      mamba create --name myenvname dextractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dextractor:<tag>

   (see `dextractor/tags`_ for valid values for ``<tag>``)


.. |downloads_dextractor| image:: https://img.shields.io/conda/dn/bioconda/dextractor.svg?style=flat
   :target: https://anaconda.org/bioconda/dextractor
   :alt:   (downloads)
.. |docker_dextractor| image:: https://quay.io/repository/biocontainers/dextractor/status
   :target: https://quay.io/repository/biocontainers/dextractor
.. _`dextractor/tags`: https://quay.io/repository/biocontainers/dextractor?tab=tags


.. raw:: html

    <script>
        var package = "dextractor";
        var versions = ["1.0p2","1.0p2","1.0p2","1.0p2","1.0p2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dextractor/README.html