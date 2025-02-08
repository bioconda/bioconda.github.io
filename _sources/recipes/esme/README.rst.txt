:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esme'
.. highlight: bash

esme
====

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



.. conda:package:: esme

   |downloads_esme| |docker_esme|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends cmake: 
   :depends esmf_mpich: 
   :depends gcc_linux-64: ``13.*``
   :depends gfortran_linux-64: ``13.*``
   :depends gxx_linux-64: ``13.*``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libgfortran-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends make: 
   :depends mpich: ``>=4.1.2``
   :depends omb_mpich: 
   :depends perl: 
   :depends perl-xml-libxml: 
   :depends python: ``3.8.*``
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

      mamba install esme

   and update with::

      mamba update esme

  To create a new environment, run::

      mamba create --name myenvname esme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme:<tag>

   (see `esme/tags`_ for valid values for ``<tag>``)


.. |downloads_esme| image:: https://img.shields.io/conda/dn/bioconda/esme.svg?style=flat
   :target: https://anaconda.org/bioconda/esme
   :alt:   (downloads)
.. |docker_esme| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`esme/tags`: https://quay.io/repository/biocontainers/esme?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>


.. conda:package:: esmf_

   |downloads_esmf_| |docker_esmf_|

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

      mamba install esmf_

   and update with::

      mamba update esmf_

  To create a new environment, run::

      mamba create --name myenvname esmf_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esmf_:<tag>

   (see `esmf_/tags`_ for valid values for ``<tag>``)


.. |downloads_esmf_| image:: https://img.shields.io/conda/dn/bioconda/esmf_.svg?style=flat
   :target: https://anaconda.org/bioconda/esmf_
   :alt:   (downloads)
.. |docker_esmf_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`esmf_/tags`: https://quay.io/repository/biocontainers/esmf_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>


.. conda:package:: hdf5_

   |downloads_hdf5_| |docker_hdf5_|

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

      mamba install hdf5_

   and update with::

      mamba update hdf5_

  To create a new environment, run::

      mamba create --name myenvname hdf5_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hdf5_:<tag>

   (see `hdf5_/tags`_ for valid values for ``<tag>``)


.. |downloads_hdf5_| image:: https://img.shields.io/conda/dn/bioconda/hdf5_.svg?style=flat
   :target: https://anaconda.org/bioconda/hdf5_
   :alt:   (downloads)
.. |docker_hdf5_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`hdf5_/tags`: https://quay.io/repository/biocontainers/hdf5_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>


.. conda:package:: netcdf-c_

   |downloads_netcdf-c_| |docker_netcdf-c_|

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

      mamba install netcdf-c_

   and update with::

      mamba update netcdf-c_

  To create a new environment, run::

      mamba create --name myenvname netcdf-c_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/netcdf-c_:<tag>

   (see `netcdf-c_/tags`_ for valid values for ``<tag>``)


.. |downloads_netcdf-c_| image:: https://img.shields.io/conda/dn/bioconda/netcdf-c_.svg?style=flat
   :target: https://anaconda.org/bioconda/netcdf-c_
   :alt:   (downloads)
.. |docker_netcdf-c_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`netcdf-c_/tags`: https://quay.io/repository/biocontainers/netcdf-c_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>


.. conda:package:: netcdf-fortran_

   |downloads_netcdf-fortran_| |docker_netcdf-fortran_|

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

      mamba install netcdf-fortran_

   and update with::

      mamba update netcdf-fortran_

  To create a new environment, run::

      mamba create --name myenvname netcdf-fortran_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/netcdf-fortran_:<tag>

   (see `netcdf-fortran_/tags`_ for valid values for ``<tag>``)


.. |downloads_netcdf-fortran_| image:: https://img.shields.io/conda/dn/bioconda/netcdf-fortran_.svg?style=flat
   :target: https://anaconda.org/bioconda/netcdf-fortran_
   :alt:   (downloads)
.. |docker_netcdf-fortran_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`netcdf-fortran_/tags`: https://quay.io/repository/biocontainers/netcdf-fortran_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>


.. conda:package:: omb_

   |downloads_omb_| |docker_omb_|

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

      mamba install omb_

   and update with::

      mamba update omb_

  To create a new environment, run::

      mamba create --name myenvname omb_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/omb_:<tag>

   (see `omb_/tags`_ for valid values for ``<tag>``)


.. |downloads_omb_| image:: https://img.shields.io/conda/dn/bioconda/omb_.svg?style=flat
   :target: https://anaconda.org/bioconda/omb_
   :alt:   (downloads)
.. |docker_omb_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`omb_/tags`: https://quay.io/repository/biocontainers/omb_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>


.. conda:package:: pio_

   |downloads_pio_| |docker_pio_|

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

      mamba install pio_

   and update with::

      mamba update pio_

  To create a new environment, run::

      mamba create --name myenvname pio_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pio_:<tag>

   (see `pio_/tags`_ for valid values for ``<tag>``)


.. |downloads_pio_| image:: https://img.shields.io/conda/dn/bioconda/pio_.svg?style=flat
   :target: https://anaconda.org/bioconda/pio_
   :alt:   (downloads)
.. |docker_pio_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`pio_/tags`: https://quay.io/repository/biocontainers/pio_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>


.. conda:package:: pnetcdf_

   |downloads_pnetcdf_| |docker_pnetcdf_|

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

      mamba install pnetcdf_

   and update with::

      mamba update pnetcdf_

  To create a new environment, run::

      mamba create --name myenvname pnetcdf_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pnetcdf_:<tag>

   (see `pnetcdf_/tags`_ for valid values for ``<tag>``)


.. |downloads_pnetcdf_| image:: https://img.shields.io/conda/dn/bioconda/pnetcdf_.svg?style=flat
   :target: https://anaconda.org/bioconda/pnetcdf_
   :alt:   (downloads)
.. |docker_pnetcdf_| image:: https://quay.io/repository/biocontainers/esme/status
   :target: https://quay.io/repository/biocontainers/esme
.. _`pnetcdf_/tags`: https://quay.io/repository/biocontainers/pnetcdf_?tab=tags


.. raw:: html

    <script>
        var package = "esme";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esme/README.html