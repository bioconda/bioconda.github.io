:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_mpi'
.. highlight: bash

gromacs_mpi
===========

.. conda:recipe:: gromacs_mpi/2021
   :replaces_section_title:
   :noindex:

   GROMACS is a versatile package to perform molecular dynamics.

   :homepage: http://www.gromacs.org/
   :license: LGPL-2.1-or-later
   :recipe: /`gromacs_mpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mpi>`_/`2021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mpi/2021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mpi/2021/meta.yaml>`_
   :links: biotools: :biotools:`gromacs`, doi: :doi:`10.5281/zenodo.2564764`, doi: :doi:`10.5281/zenodo.2564761`, doi: :doi:`10.1016/j.softx.2015.06.001`, rrid: :rrid:`SCR_014565`, usegalaxy-eu: :usegalaxy-eu:`gmx_sim`

   


.. conda:package:: gromacs_mpi

   |downloads_gromacs_mpi| |docker_gromacs_mpi|

   :versions:
      
      

      ``2021.1-0``,  ``2021-1``,  ``2021-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fftw: ``>=3.3.9,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libhwloc: ``2.*``
   :depends libhwloc: ``>=2.4.1,<2.4.2.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends mpich: ``>=3.4.1,<4.0a0``
   :depends ocl-icd: ``>=2.3.0,<3.0a0``
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

      mamba install gromacs_mpi

   and update with::

      mamba update gromacs_mpi

  To create a new environment, run::

      mamba create --name myenvname gromacs_mpi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gromacs_mpi:<tag>

   (see `gromacs_mpi/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacs_mpi| image:: https://img.shields.io/conda/dn/bioconda/gromacs_mpi.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_mpi
   :alt:   (downloads)
.. |docker_gromacs_mpi| image:: https://quay.io/repository/biocontainers/gromacs_mpi/status
   :target: https://quay.io/repository/biocontainers/gromacs_mpi
.. _`gromacs_mpi/tags`: https://quay.io/repository/biocontainers/gromacs_mpi?tab=tags


.. raw:: html

    <script>
        var package = "gromacs_mpi";
        var versions = ["2021.1","2021","2021"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_mpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_mpi/README.html