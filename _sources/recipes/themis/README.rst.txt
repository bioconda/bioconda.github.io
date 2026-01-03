:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'themis'
.. highlight: bash

themis
======

.. conda:recipe:: themis
   :replaces_section_title:
   :noindex:

   Themis\: metagenomic profiler

   :homepage: https://github.com/xujialupaoli/Themis
   :license: GPL-3.0-or-later
   :recipe: /`themis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/themis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/themis/meta.yaml>`_

   


.. conda:package:: themis

   |downloads_themis| |docker_themis|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coreutils: 
   :depends curl: 
   :depends diffutils: 
   :depends fastp: 
   :depends genome_updater: ``>=0.6.4``
   :depends genome_updater: ``>=0.7.0,<0.8.0a0``
   :depends grep: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends multitax: ``>=1.3.1``
   :depends multitax: ``>=1.3.2,<2.0a0``
   :depends pandas: ``>=1.2.0``
   :depends python: ``>=3.14,<3.15.0a0``
   :depends python_abi: ``3.14.* *_cp314``
   :depends raptor: ``3.*``
   :depends raptor: ``>=3.0.1,<4.0a0``
   :depends seqan3: ``>=3.3.0,<4.0a0``
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

      mamba install themis

   and update with::

      mamba update themis

  To create a new environment, run::

      mamba create --name myenvname themis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/themis:<tag>

   (see `themis/tags`_ for valid values for ``<tag>``)


.. |downloads_themis| image:: https://img.shields.io/conda/dn/bioconda/themis.svg?style=flat
   :target: https://anaconda.org/bioconda/themis
   :alt:   (downloads)
.. |docker_themis| image:: https://quay.io/repository/biocontainers/themis/status
   :target: https://quay.io/repository/biocontainers/themis
.. _`themis/tags`: https://quay.io/repository/biocontainers/themis?tab=tags


.. raw:: html

    <script>
        var package = "themis";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/themis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/themis/README.html