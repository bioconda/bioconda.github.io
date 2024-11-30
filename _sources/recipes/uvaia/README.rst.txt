:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uvaia'
.. highlight: bash

uvaia
=====

.. conda:recipe:: uvaia
   :replaces_section_title:
   :noindex:

   Reference\-based alignment and sequence database search

   :homepage: https://github.com/quadram-institute-bioscience/uvaia
   :license: GPLv3
   :recipe: /`uvaia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uvaia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uvaia/meta.yaml>`_
   :links: biotools: :biotools:`uvaia`

   


.. conda:package:: uvaia

   |downloads_uvaia| |docker_uvaia|

   :versions:
      
      

      ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends sysroot_linux-64: ``2.17.*``
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

      mamba install uvaia

   and update with::

      mamba update uvaia

  To create a new environment, run::

      mamba create --name myenvname uvaia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uvaia:<tag>

   (see `uvaia/tags`_ for valid values for ``<tag>``)


.. |downloads_uvaia| image:: https://img.shields.io/conda/dn/bioconda/uvaia.svg?style=flat
   :target: https://anaconda.org/bioconda/uvaia
   :alt:   (downloads)
.. |docker_uvaia| image:: https://quay.io/repository/biocontainers/uvaia/status
   :target: https://quay.io/repository/biocontainers/uvaia
.. _`uvaia/tags`: https://quay.io/repository/biocontainers/uvaia?tab=tags


.. raw:: html

    <script>
        var package = "uvaia";
        var versions = ["2.0.1","2.0.1","2.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uvaia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uvaia/README.html