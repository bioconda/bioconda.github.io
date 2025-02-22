:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esme_openmpi_'
.. highlight: bash

esme_openmpi_
=============

.. conda:recipe:: esme
   :replaces_section_title:
   :noindex:

   Earth System Modelling Environment \(ESME\) \- A bundle for scientific computing packages for climate modelling with MPI support.

   :homepage: https://github.com/j34ni/bioconda-recipes
   :license: BSD / BSD-3-Clause
   :recipe: /`esme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esme/meta.yaml>`_

   ESME \(Earth System Modelling Environment\) is a package designed to facilitate the installation and management of various scientific computing libraries with support for multiple MPI implementations \(namely MPIch\, OpenMPI\, MVAPIch and ParaStationMPI\). This bundle currently includes\:
   \- PnetCDF\: Version 1.14.0
   \- HDF5\: Version 1.14.5
   \- netCDF\_C\: Version 4.9.2
   \- netCDF\_Fortran\: Version 4.6.1
   \- ParallelIO\: Version 2.6.2 
   \- ESMF\: Version 8.8.0
   \- OSU\_Micro\_Benchmarks\: Version 7.5



.. conda:package:: esme_esmf__

   |downloads_esme_esmf__| |docker_esme_esmf__|

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

      mamba install esme_esmf__

   and update with::

      mamba update esme_esmf__

  To create a new environment, run::

      mamba create --name myenvname esme_esmf__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_esmf__:<tag>

   (see `esme_esmf__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_esmf__| image:: https://img.shields.io/conda/dn/bioconda/esme_esmf__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_esmf__
   :alt:   (downloads)
.. |docker_esme_esmf__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_esmf__/tags`: https://quay.io/repository/biocontainers/esme_esmf__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_hdf5__

   |downloads_esme_hdf5__| |docker_esme_hdf5__|

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

      mamba install esme_hdf5__

   and update with::

      mamba update esme_hdf5__

  To create a new environment, run::

      mamba create --name myenvname esme_hdf5__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_hdf5__:<tag>

   (see `esme_hdf5__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_hdf5__| image:: https://img.shields.io/conda/dn/bioconda/esme_hdf5__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_hdf5__
   :alt:   (downloads)
.. |docker_esme_hdf5__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_hdf5__/tags`: https://quay.io/repository/biocontainers/esme_hdf5__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_netcdf-c__

   |downloads_esme_netcdf-c__| |docker_esme_netcdf-c__|

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

      mamba install esme_netcdf-c__

   and update with::

      mamba update esme_netcdf-c__

  To create a new environment, run::

      mamba create --name myenvname esme_netcdf-c__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_netcdf-c__:<tag>

   (see `esme_netcdf-c__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_netcdf-c__| image:: https://img.shields.io/conda/dn/bioconda/esme_netcdf-c__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_netcdf-c__
   :alt:   (downloads)
.. |docker_esme_netcdf-c__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_netcdf-c__/tags`: https://quay.io/repository/biocontainers/esme_netcdf-c__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_netcdf-fortran__

   |downloads_esme_netcdf-fortran__| |docker_esme_netcdf-fortran__|

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

      mamba install esme_netcdf-fortran__

   and update with::

      mamba update esme_netcdf-fortran__

  To create a new environment, run::

      mamba create --name myenvname esme_netcdf-fortran__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_netcdf-fortran__:<tag>

   (see `esme_netcdf-fortran__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_netcdf-fortran__| image:: https://img.shields.io/conda/dn/bioconda/esme_netcdf-fortran__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_netcdf-fortran__
   :alt:   (downloads)
.. |docker_esme_netcdf-fortran__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_netcdf-fortran__/tags`: https://quay.io/repository/biocontainers/esme_netcdf-fortran__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_omb__

   |downloads_esme_omb__| |docker_esme_omb__|

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

      mamba install esme_omb__

   and update with::

      mamba update esme_omb__

  To create a new environment, run::

      mamba create --name myenvname esme_omb__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_omb__:<tag>

   (see `esme_omb__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_omb__| image:: https://img.shields.io/conda/dn/bioconda/esme_omb__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_omb__
   :alt:   (downloads)
.. |docker_esme_omb__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_omb__/tags`: https://quay.io/repository/biocontainers/esme_omb__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_openmpi_

   |downloads_esme_openmpi_| |docker_esme_openmpi_|

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

      mamba install esme_openmpi_

   and update with::

      mamba update esme_openmpi_

  To create a new environment, run::

      mamba create --name myenvname esme_openmpi_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_openmpi_:<tag>

   (see `esme_openmpi_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_openmpi_| image:: https://img.shields.io/conda/dn/bioconda/esme_openmpi_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_openmpi_
   :alt:   (downloads)
.. |docker_esme_openmpi_| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_openmpi_/tags`: https://quay.io/repository/biocontainers/esme_openmpi_?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_pio__

   |downloads_esme_pio__| |docker_esme_pio__|

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

      mamba install esme_pio__

   and update with::

      mamba update esme_pio__

  To create a new environment, run::

      mamba create --name myenvname esme_pio__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_pio__:<tag>

   (see `esme_pio__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_pio__| image:: https://img.shields.io/conda/dn/bioconda/esme_pio__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_pio__
   :alt:   (downloads)
.. |docker_esme_pio__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_pio__/tags`: https://quay.io/repository/biocontainers/esme_pio__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>


.. conda:package:: esme_pnetcdf__

   |downloads_esme_pnetcdf__| |docker_esme_pnetcdf__|

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

      mamba install esme_pnetcdf__

   and update with::

      mamba update esme_pnetcdf__

  To create a new environment, run::

      mamba create --name myenvname esme_pnetcdf__

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_pnetcdf__:<tag>

   (see `esme_pnetcdf__/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_pnetcdf__| image:: https://img.shields.io/conda/dn/bioconda/esme_pnetcdf__.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_pnetcdf__
   :alt:   (downloads)
.. |docker_esme_pnetcdf__| image:: https://quay.io/repository/biocontainers/esme_openmpi_/status
   :target: https://quay.io/repository/biocontainers/esme_openmpi_
.. _`esme_pnetcdf__/tags`: https://quay.io/repository/biocontainers/esme_pnetcdf__?tab=tags


.. raw:: html

    <script>
        var package = "esme_openmpi_";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esme_openmpi_/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esme_openmpi_/README.html