:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bxtools'
.. highlight: bash

bxtools
=======

.. conda:recipe:: bxtools
   :replaces_section_title:
   :noindex:

   Tools for analyzing 10X Genomics data

   :homepage: https://github.com/walaj/bxtools
   :license: GPLv3
   :recipe: /`bxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bxtools/meta.yaml>`_

   


.. conda:package:: bxtools

   |downloads_bxtools| |docker_bxtools|

   :versions:
      
      

      ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0-1``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install bxtools

   and update with::

      mamba update bxtools

  To create a new environment, run::

      mamba create --name myenvname bxtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bxtools:<tag>

   (see `bxtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bxtools| image:: https://img.shields.io/conda/dn/bioconda/bxtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bxtools
   :alt:   (downloads)
.. |docker_bxtools| image:: https://quay.io/repository/biocontainers/bxtools/status
   :target: https://quay.io/repository/biocontainers/bxtools
.. _`bxtools/tags`: https://quay.io/repository/biocontainers/bxtools?tab=tags


.. raw:: html

    <script>
        var package = "bxtools";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bxtools/README.html